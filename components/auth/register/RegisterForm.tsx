'use client';

import React from 'react';
import Link from 'next/link';

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
import { registerService } from '@/services/auth.service';
import { secteur } from '@/lib/secteur';
import { Building, LockKeyhole, Mail, SquareUser } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserType } from '@/types/User.type';

const formSchema = z.object({
  name: z.string().trim().min(3, 'Nom requis'),
  secteur: z.string().trim().optional(),
  email: z.string().trim().min(1, 'Email requis').email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterForm({ type }: { type: UserType }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showForgot, setShowForgot] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      secteur: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const parseRes = formSchema.safeParse(data);

    if (parseRes.success) {
      // API CALL
      setIsLoading(true);
      const res = await registerService({
        type,
        name: parseRes.data.name,
        secteur: parseRes.data.secteur,
        email: parseRes.data.email,
        password: parseRes.data.password,
      });

      if (res.user) {
        toast.success('Inscription réussie!', {
          description: "Validation de l'email en attente",
        });

        window.location.href = '/home';
      } else if (res.userAlreadyExist) {
        form.setError('email', {
          type: 'manual',
          message: 'Adresse email déjà enregistré',
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name" className="text-base text-white">
                      {type === 'person' ? 'Nom' : "Nom de l'organisation"}
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          id="name"
                          {...field}
                          autoComplete="off"
                          className="h-12 ps-16 bg-white text-black border-white placeholder:text-black/10"
                          placeholder={
                            type === 'person'
                              ? 'Vote nom'
                              : 'Nom de votre orgranisation'
                          }
                          autoFocus
                          required
                        />
                        <i className="absolute left-4 border-r pe-3 text-black">
                          <SquareUser size={20} />
                        </i>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs">
                      {form.formState.errors.name?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              {type === 'organization' && (
                <FormField
                  name="secteur"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="secteur"
                        className="text-base font-medium text-white"
                      >
                        Domaine
                      </FormLabel>

                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className={
                              'relative w-full !h-12 py-3 ps-16 pe-3 !text-[var(--text-primary-color)] [&_svg]:!text-[var(--text-primary-color)] border-[var(--text-primary-color)]/10 data-[state=open]:border-[var(--r-primary-color)] data-[state=open]:ring-2 data-[state=open]:ring-[var(--r-primary-color)]/20 bg-white'
                            }
                          >
                            <SelectValue
                              placeholder="Choisir le secteur d'activité"
                              className="placeholder:text-black/10"
                            />
                            <i className="absolute left-4 border-r pe-3 text-black">
                              <Building />
                            </i>
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
              )}

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email" className="text-base text-white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          id="email"
                          {...field}
                          autoComplete="off"
                          className="h-12 ps-16 bg-white text-black border-white placeholder:text-black/10 focus-visible:ring-white"
                          placeholder="xyz@domain.com"
                          required
                        />
                        <i className="absolute left-4 border-r pe-3 text-black">
                          <Mail size={20} />
                        </i>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs">
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password" className="text-base">
                      Mot de passe
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          autoComplete="off"
                          className="h-12 ps-16 bg-white text-black border-white placeholder:text-black/10 focus-visible:ring-white"
                          placeholder="*******************"
                          required
                        />
                        <i className="absolute left-4 border-r pe-3 text-black">
                          <LockKeyhole size={20} />
                        </i>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs">
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <button
              type="submit"
              className="h-12 flex justify-center items-center gap-2 rounded-lg text-base bg-[var(--secondary-color)] text-white shadow-xl cursor-pointer"
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
              <span>S'inscrire</span>
            </button>
          </div>
        </form>
      </Form>
      <Link
        href="/auth/login"
        className="text-white text-center hover:underline"
      >
        Se connecter ?
      </Link>

      {showForgot && (
        <p className="text-center text-sm text-[var(--u-primary-color)] hover:underline">
          Mot de passe oublié ?
        </p>
      )}
    </div>
  );
}
