'use client';

import React from 'react';
import PrimaryButton from '../utils/PrimaryButton';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { codeVerificationService } from '@/services/mail.service';
import { toast } from 'sonner';
import { verifyTokenService } from '@/services/token.service';

const otpSchema = z.object({
  otp: z.string().length(6, 'Le code OTP doit contenir 6 chiffres'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

export default function MailComponent() {
  const params = useParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  React.useEffect(() => {
    let isMounted = true;

    (async () => {
      const res = await verifyTokenService(params.token as string);

      if (isMounted) {
        if (!res.decoded) {
          router.push('/');
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [params.token]);

  const onSubmit = async (data: OtpFormValues) => {
    const parseRes = otpSchema.safeParse(data);

    if (parseRes.success) {
      // API CALL
      if (isNaN(Number(parseRes.data.otp))) {
        form.setError('otp', {
          type: 'manual',
          message: 'Code OTP invalide',
        });
      } else if (params.token) {
        setIsLoading(true);
        const res = await codeVerificationService({
          token: params.token as string,
          code: Number(parseRes.data.otp),
        });

        if (res.valid) {
          toast.success('Email vérifié avec succès', {
            description: 'Accès au plateforme',
          });
          window.location.href = '/home';
        } else {
          form.setError('otp', {
            type: 'manual',
            message: 'Code invalide',
          });
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl text-white font-semibold text-center">
            Code de validation
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-8"
            >
              <p className="max-w-sm text-center text-lg">
                Entrer le code à 6 chiffres que nous avons envoyé par e-mail.
              </p>

              <FormField
                name="otp"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot
                            index={0}
                            className="h-12 w-12 text-lg data-[active=true]:ring-white"
                          />
                          <InputOTPSlot
                            index={1}
                            className="h-12 w-12 text-lg data-[active=true]:ring-white"
                          />
                          <InputOTPSlot
                            index={2}
                            className="h-12 w-12 text-lg data-[active=true]:ring-white"
                          />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot
                            index={3}
                            className="h-12 w-12 text-lg data-[active=true]:ring-white"
                          />
                          <InputOTPSlot
                            index={4}
                            className="h-12 w-12 text-lg data-[active=true]:ring-white"
                          />
                          <InputOTPSlot
                            index={5}
                            className="h-12 w-12 text-lg data-[active=true]:ring-white"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="text-center">
                      {form.formState.errors.otp?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className="h-12 w-full flex justify-center items-center gap-2 rounded-lg text-base bg-[var(--secondary-color)] text-white shadow-xl cursor-pointer"
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
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
