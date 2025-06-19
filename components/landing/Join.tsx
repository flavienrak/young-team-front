'use client';

import Link from 'next/link';
import React from 'react';

export default function Join() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]">
      <div className="max-w-7xl flex flex-col justify-center items-center gap-12 p-12">
        <h2 className="text-5xl">Organisation ou Particulier ?</h2>
        <p className="text-xl">
          Vous pouvez partager vos avis ou connaissances au sein de notre
          application. Participons ensemble à l'épanouissement de nos jeunes.
        </p>
        <Link
          href="/auth/login"
          className="w-max flex justify-center items-center bg-white shadow px-8 h-12 text-xl text-[var(--secondary-color)] border animate-bounce rounded-full cursor-pointer"
        >
          Rejoindre la communauté
        </Link>
      </div>
    </div>
  );
}
