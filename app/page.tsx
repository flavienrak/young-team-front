import LandingComponent from '@/components/landing/LandingComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing',
  description: 'Landing Page',
};

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen">
      <LandingComponent />
    </div>
  );
}
