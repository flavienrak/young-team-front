import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ href = '/home' }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-3xl py-3">
      <Image src="/mini-logo.png" alt="Logo" width={40} height={40} />
      <span className="font-bold text-[var(--primary-color)]">Net</span>
      <span className="font-bold text-[var(--secondary-color)]">Kids</span>
    </Link>
  );
}
