import React from 'react';

import LoginComponent from '@/components/auth/login/LoginComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login Page',
};

export default function LoginPage() {
  return (
    <div className="w-full">
      <LoginComponent />
    </div>
  );
}
