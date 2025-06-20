import React from 'react';
import MailComponent from '@/components/auth/mail/MailComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mail Validation',
  description: 'Mail Validation Page',
};

export default function MailPage() {
  return (
    <div className="w-full">
      <MailComponent />
    </div>
  );
}
