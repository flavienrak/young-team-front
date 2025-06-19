'use client';

import React from 'react';
import Image from 'next/image';
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
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { loginService } from '@/services/auth.service';
import { UserType } from '@/types/User.type';
import { LockKeyhole, Mail } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email requis').email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
  remember: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm({ type }: { type: UserType }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showForgot, setShowForgot] = React.useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const parseRes = loginSchema.safeParse(data);

    if (parseRes.success) {
      // API CALL
      setIsLoading(true);
      const res = await loginService({
        type,
        email: parseRes.data.email,
        password: parseRes.data.password,
        remember: parseRes.data.remember,
      });

      if (res.user) {
        toast.success('Connexion réussie!', {
          description: 'Accès à la plateforme',
        });

        window.location.href = '/home';
      } else if (res.userNotFound) {
        form.setError('email', {
          type: 'manual',
          message: 'Adresse email inconnu',
        });
        setIsLoading(false);
      } else if (res.incorrectPassword) {
        form.setError('password', {
          type: 'manual',
          message: 'Mot de passe incorrect',
        });
        setShowForgot(true);
        setIsLoading(false);
      }
    }
  };

  const connectWithGoogle = async () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/api/google`, '_self');
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
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
                          className="h-12 ps-16 bg-white text-black border-white placeholder:text-black/10"
                          placeholder="xyz@domain.com"
                          autoFocus
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
                    <FormLabel
                      htmlFor="password"
                      className="text-base text-white"
                    >
                      Mot de passe
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          autoComplete="off"
                          className="h-12 ps-16 bg-white text-black border-white placeholder:text-black/10"
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
              <FormField
                name="remember"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 text-[var(--text-primary-color)]">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="remember-me"
                        className="border-black data-[state=checked]:text-black data-[state=checked]:bg-white data-[state=checked]:border-white cursor-pointer"
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="remember-me"
                      className="font-normal text-sm text-black"
                    >
                      Se souvenir de moi
                    </FormLabel>
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
              <span>Se connecter</span>
            </button>
          </div>
        </form>
      </Form>

      <div className="flex flex-col gap-8">
        {showForgot && (
          <Link
            href="/auth/reset"
            className="text-white text-center hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        )}

        <p className="text-center">Ou</p>

        <button
          onClick={connectWithGoogle}
          className="h-12 flex justify-center items-center gap-2 text-black border bg-white rounded-md cursor-pointer shadow-xl"
        >
          <Image src="/google.png" width={25} height={25} alt="Google" />
          <span>Continuer avec Google</span>
        </button>

        <Link
          href="/auth/register"
          className="text-white text-center hover:underline"
        >
          Créer un compte ?
        </Link>
      </div>
    </div>
  );
}
