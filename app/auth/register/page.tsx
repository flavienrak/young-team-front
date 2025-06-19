import React from 'react';
import RegisterComponent from '@/components/auth/register/RegisterComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register Page',
};

export default function RegisterPage() {
  return (
    <div className="w-full">
      <RegisterComponent />
    </div>
  );
}
