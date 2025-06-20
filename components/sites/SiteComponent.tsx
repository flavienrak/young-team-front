import React from 'react';
import Image from 'next/image';
import CategorieSite from '../../public/Categories de sites.svg';
import MacBook from '../../public/macbook.png';
import moodle from '../../public/moodle.png';
import scratch from '../../public/scratch.png';

export default function SiteComponent() {
  return (
    <div className="h-screen bg-[var(--primary-color)]">
      <div className="flex items-center max-w-5xl mx-auto h-20 shadow-2xl">
        <h1 className="text-4xl text-white">Net Kid</h1>
      </div>
      <div className="flex flex-col max-w-5xl mx-auto">
        <div className="flex justify-center items-center">
          <Image
            src={CategorieSite}
            alt="Title for sites' categories"
            className="w-96 h-20"
          ></Image>
        </div>
        <div className="flex">
          <div className="w-80 flex flex-col gap-6 border-2 border-slate-800 rounded-2xl p-3">
            <h2 className="text-orange-500 text-2xl">Education</h2>
            <div className="flex flex-col items-center gap-8">
              <Image
                src={MacBook}
                alt="A Mac Book"
                className="w-32 h-32 object-cover"
              ></Image>
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <Image
                    src={moodle}
                    alt="Interface of Moodle"
                    className="rounded-full w-8 h-8 object-cover"
                  ></Image>
                  <span className="text-2xl">Moodle</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={scratch}
                    alt="scratch"
                    className="rounded-full w-8 h-8 object-cover"
                  ></Image>
                  <span className="text-2xl">Scratch</span>
                </div>
              </div>
              <button className="rounded-2xl flex justify-center items-center px-18 py-3 bg-orange-500">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col max-w-7xl w-full items-center gap-6 py-3 bg-[var(--primary-color)]">
          <h1 className="text-4xl text-white">Net Kid</h1>
          <p className="w-full text-center text-white text-lg">
            © 2025 NomDuProjet. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
