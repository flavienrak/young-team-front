import React from 'react';
import Image from 'next/image';

import { Card, CardContent } from '../ui/card';
import Link from 'next/link';

interface website {
  title: string;
  src: string;
  href: string;
  reverse?: boolean;
}

export default function WebsiteExemple({ title, src, href, reverse }: website) {
  return (
    <Card>
      <CardContent
        className={`flex flex-col items-center bg- backdrop-blur-xl sm:flex-row sm:justify-evenly gap-12 ${
          reverse ? 'sm:flex-row-reverse' : ''
        }`}
      >
        <Image
          src={src}
          alt={''}
          width={500}
          height={280}
          className="rounded-md"
        />
        <div className="flex flex-col gap-10 w-full justify-center items-center sm:w-1/2">
          <h2 className="text-6xl text-[var(--secondary-color)]">{title}</h2>
          <Link
            href={href}
            className="flex justify-center items-center bg-orange-200 w-3xs h-20 rounded-4xl text-black text-2xl cursor-pointer"
          >
            Voir
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
