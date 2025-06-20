'use client';

import React from 'react';
import TextEditor from '../utils/TextEditor';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Textarea } from '../ui/textarea';
import { Image as ImageIcon, Plus, Upload } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { secteur } from '@/lib/secteur';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { createArticleService } from '@/services/article.service';

const formSchema = z.object({
  title: z.string().trim().min(3, 'Titre requis'),
  description: z.string().trim().min(3, 'Description requise'),
  secteur: z.string().trim().min(1, "Secteur d'activité requis"),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddArticle() {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);
  const [sectionContent, setSectionContent] = React.useState('<p></p>');
  const [sectionFile, setSectionFile] = React.useState<File | null>(null);
  const [sections, setSections] = React.useState<
    { content: string; file: File | null }[]
  >([]);
  const [file, setFile] = React.useState<File | null>(null);
  const [sectionError, setSectionError] = React.useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      secteur: '',
    },
  });

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleChangeSectionFile = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setSectionFile(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleAddSection = () => {
    setSections((prev) => [
      ...prev,
      { content: sectionContent, file: sectionFile },
    ]);
    setSectionContent('<p></p>');
    setSectionFile(null);
  };

  const onSubmit = async (data: FormValues) => {
    const parseRes = formSchema.safeParse(data);

    if (parseRes.success) {
      if (sections.length === 0) {
        setSectionError('Au moins 1 section requise');
      } else {
        const formData = new FormData();
        formData.append('title', parseRes.data.title);
        formData.append('description', parseRes.data.description);
        formData.append('secteur', parseRes.data.secteur);
        if (file) {
          formData.append('bgImage', file);
        }
        sections.forEach((section, index) => {
          formData.append(`sections[${index}][content]`, section.content);

          if (section.file) {
            formData.append(`sections[${index}][file]`, section.file);
          }
        });

        const res = await createArticleService(formData);

        if (res.article) {
          toast.success('Article crée avec succès');
          router.push(`/article/${res.article.id}`);
        }
        setIsLoading(true);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-screen flex justify-center">
        <div className="w-full max-w-7xl py-12 flex flex-col gap-12">
          <h1 className="text-6xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] p-8 rounded-xl text-white">
            Ajouter un article :
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-6"
            >
              <div className="flex gap-12">
                <div className="flex-1 flex flex-col gap-4">
                  <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="title"
                          className="text-xl text-black"
                        >
                          Titre
                        </FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            <Input
                              id="title"
                              {...field}
                              autoComplete="off"
                              className="h-12 bg-white text-black placeholder:text-black/50 border"
                              placeholder="Titre de l'article..."
                              autoFocus
                              required
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs">
                          {form.formState.errors.title?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="description"
                          className="text-xl text-black"
                        >
                          Description
                        </FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            <Textarea
                              id="description"
                              {...field}
                              autoComplete="off"
                              className="min-h-52 bg-white text-black placeholder:text-black/50 border"
                              placeholder="Description de l'article..."
                              required
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs">
                          {form.formState.errors.description?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <FormField
                    name="secteur"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="secteur"
                          className="text-xl font-medium text-black"
                        >
                          Secteur
                        </FormLabel>

                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger
                              className={
                                'relative w-full !h-12 !text-[var(--text-primary-color)] [&_svg]:!text-[var(--text-primary-color)] border-[var(--text-primary-color)]/10 data-[state=open]:border-[var(--r-primary-color)] data-[state=open]:ring-2 data-[state=open]:ring-[var(--r-primary-color)]/20 bg-white'
                              }
                            >
                              <SelectValue
                                placeholder="Choisir le secteur d'activité"
                                className="placeholder:text-black/10"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {secteur.map((item) => (
                                  <SelectItem
                                    key={`secteur-${item.id}`}
                                    value={item.value}
                                    className={`h-8 ${
                                      field.value === item.value
                                        ? '!text-[var(--secondary-color)] [&_svg]:!text-[var(--secnodary-color)] !bg-accent'
                                        : '!text-[var(--text-primary-color)] hover:!text-[var(--r-primary-color)] !bg-transparent hover:!bg-accent'
                                    }`}
                                  >
                                    {item.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>

                        <FormMessage className="text-xs">
                          {form.formState.errors.secteur?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl">Image</h2>
                    <label
                      onDrop={handleDrop}
                      onDragOver={(event) => event.preventDefault()}
                      htmlFor="file"
                      className="flex flex-col items-center gap-4 h-52 border-2 border-dashed border-black/10 rounded-xl p-8 text-center text-black/50 hover:border-[var(--u-primary-color)] transition-colors duration-300 cursor-pointer group"
                    >
                      <Upload className="w-12 h-12 transition-colors duration-300 cursor-pointer" />
                      {file ? (
                        <p className="font-medium tracking-tighter">
                          {file.name}
                        </p>
                      ) : (
                        <p>
                          Déposez une image ici ou cliquez pour sélectionner{' '}
                          <br />
                        </p>
                      )}
                      <input
                        id="file"
                        type="file"
                        className="hidden"
                        accept=".png,.jpg,.jpeg,.webp,.svg"
                        onChange={handleChangeFile}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-xl text-black">Sections</p>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="sectionFile"
                      className="h-10 px-4 flex justify-center items-center cursor-pointer rounded-full bg-[var(--primary-color)] text-white"
                    >
                      {sectionFile ? sectionFile.name : <ImageIcon />}
                      <input
                        id="sectionFile"
                        type="file"
                        hidden
                        className="cursor-pointer"
                        accept=".png,.jpg,.jpeg,.webp,.svg"
                        onChange={handleChangeSectionFile}
                      />
                    </label>
                    <p
                      onClick={handleAddSection}
                      className="flex items-center gap-2 py-2 px-6 rounded-md bg-[var(--primary-color)] text-white cursor-pointer hover:opacity-80"
                    >
                      <Plus />
                      <span>Ajouter</span>
                    </p>
                  </div>
                </div>
                <TextEditor
                  content={sectionContent}
                  onChange={(value) => setSectionContent(value)}
                  className="border border-black/10 rounded-sm"
                />
                <FormMessage className="text-xs">{sectionError}</FormMessage>
              </div>

              <div className="grid grid-cols-2 gap-12">
                {sections.length > 0 &&
                  sections.map((item, index) => (
                    <Card key={`section-${index}`}>
                      <CardContent className="line-clamp-1 text-ellipsis">
                        <TextEditor readOnly content={item.content} />
                        {item.file && (
                          <Image
                            src={URL.createObjectURL(item.file)}
                            alt="Image"
                            width={200}
                            height={200}
                            className="rounded-md w-full"
                          />
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="h-12 w-1/2 flex justify-center items-center gap-2 rounded-lg text-base bg-[var(--secondary-color)] text-white shadow-xl cursor-pointer"
                >
                  {isLoading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-5 h-5 animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  <span>Valider</span>
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
