'use client';

import React from 'react';
import Image from 'next/image';

import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function HomeComponent() {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen flex justify-center">
        <div className="w-full max-w-7xl flex flex-col gap-12 py-12">
          <div className="w-full h-[25rem] flex justify-center items-center bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-4xl">
            <h1 className="text-6xl text-white">Bienvenue Flavien</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-6xl">Vos articles :</h2>
              <Link
                href="/article"
                className="h-12 w-40 flex justify-center items-center gap-2 rounded-lg text-base bg-[var(--secondary-color)] text-white shadow-xl cursor-pointer hover:opacity-80"
              >
                <Plus />
                <span>Ajouter</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-12">
              <article className="relative w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
                <Image
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={200}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Paris
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  City of love
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
