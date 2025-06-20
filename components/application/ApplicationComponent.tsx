'use client';

import React from 'react';
import Footer from '../landing/Footer';
import Image from 'next/image';
import Link from 'next/link';
import CategorieCard from '../categorie/CategorieCard';

export default function ApplicationComponent() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="z-20 w-full flex justify-center bg-white sticky top-0 shadow">
          <div className="max-w-7xl w-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-3xl py-3">
              <Image src="/mini-logo.png" alt="Logo" width={40} height={40} />
              <span className="font-bold text-[var(--primary-color)]">Net</span>
              <span className="font-bold text-[var(--secondary-color)]">
                Kids
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="#what"
                className="hover:text-[var(--secondary-color)] cursor-pointer"
              >
                Numérique
              </a>
              |
              <a
                href="#guide"
                className="hover:text-[var(--secondary-color)] cursor-pointer"
              >
                Guide
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl py-12">
            <div className="min-h-[80vh] relative flex justify-center bg-[url(/moodle.png)] bg-no-repeat bg-center bg-cover rounded-4xl">
              <div className="absolute -bottom-1/4 w-4/5 flex justify-center items-center flex-col p-12 gap-12 bg-white text-[var(--secondary-color)] rounded-4xl shadow-xl">
                <h1 className="font-medium text-8xl">Moodle</h1>
                <p className="text-3xl text-black">
                  Plateforme d'apprentissage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full h-full">
          <div className="h-40"></div>

          <div id="what" className="flex-1 flex justify-center flex-col gap-20">
            <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
              C'est quoi ?
            </h2>
            <p className="text-4xl text-center">
              Moodle est LMS (Learning Management System).
            </p>
            <div className="flex justify-center items-center">
              <p className="text-2xl max-w-4xl text-center">
                Il permet aux éléves et enseignants de travailler ensemble,même
                à distance.Utilsié:écoles,universités,entreprises
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center py-20">
            <Image
              src="/moodle/moodle-logo.png"
              width={336}
              height={236}
              alt="thirdImage"
            />
          </div>

          <div className="h-40"></div>

          <div id="guide" className="flex-1 flex justify-center flex-col">
            <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
              Guide d'utilisation
            </h2>

            <div className="py-20 flex justify-center">
              <div className="w-full grid grid-cols-2 gap-12 p-20">
                <CategorieCard id="01" title="Crée ton compte" />
                <CategorieCard id="02" title="Rejoins un cours avec un code" />
                <br />
                <CategorieCard
                  id="03"
                  title="Télécharge les ressource (PDF,vidéos.ect.)"
                />
                <CategorieCard id="04" title="Rends tes devoirs en ligne" />
                <CategorieCard
                  id="05"
                  title="Consultes les notes,forums et commentaires"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
              Avantages et Limites
            </h2>

            <div className="w-full flex-1 flex justify-center gap-20 py-20">
              <div className="flex-1 flex flex-col items-center gap-10">
                <p className="bg-green-600 w-max py-8 px-16 rounded-full text-4xl text-white">
                  **Avantages**
                </p>
                <ul className="text-2xl leading-12">
                  <li>• Accessible partout</li>
                  <li>• Organisation des cours centralisée</li>
                  <li>• Encourage l'autonomie</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center gap-10">
                <p className="bg-red-400 w-max py-8 px-16 rounded-full text-4xl text-white">
                  **Inconvénients**
                </p>
                <ul className="text-2xl leading-12">
                  <li>• Moins interactif sans webcam ou visio</li>
                  <li>• Peut être difficile pour les débutants</li>
                  <li>• Dépend d'internet</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
              **Importance**
            </h2>

            <div className="flex-1 flex justify-center items-center min-h-[80vh]">
              <ul className="text-4xl text-center">
                <li>Accès à distance.</li>
              </ul>
            </div>
          </div>

          <div className="h-24 flex flex-col items-center justify-center gap-8 text-3xl">
            <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
              **Lien**
            </h2>
            <div className="py-20">
              <a
                href="https://moodle.org"
                className="text-[var(--secondary-color)] hover:underline"
              >
                https://moodle.org
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-40"></div>

      <Footer />
    </div>
  );
}
