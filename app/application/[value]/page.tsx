import React from 'react';
import ApplicationComponent from '@/components/application/ApplicationComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application',
  description: 'Application Page',
};

export default function ApplicationPage() {
  return (
    <div className="w-full">
      <ApplicationComponent />
    </div>
  );
}
