'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';

export default function Join() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center">
      <h2 className="w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
        Nous rejoindre ?
      </h2>
      <div className="flex justify-center">
        <div className="max-w-7xl flex-1 flex flex-col justify-center items-center gap-20 p-12">
          <h2 className="text-7xl text-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
            Organisation
            <br />
            ou
            <br /> Particulier ?
          </h2>
          <p className="text-xl max-w-xl text-center">
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
    </div>
  );
}
