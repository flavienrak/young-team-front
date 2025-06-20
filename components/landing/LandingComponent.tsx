'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Join from './Join';
import Footer from './Footer';

import { ArrowDown, ChevronRight } from 'lucide-react';
import { secteur } from '@/lib/secteur';

export default function LandingComponent() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center flex-col h-screen">
        <div className="z-20 w-full flex justify-center bg-white sticky top-0 shadow">
          <div className="max-w-7xl w-full flex items-center justify-between">
            <div className="flex items-center gap-2 text-3xl py-3">
              <Image src="/mini-logo.png" alt="Logo" width={40} height={40} />
              <span className="font-bold text-[var(--primary-color)]">Net</span>
              <span className="font-bold text-[var(--secondary-color)]">
                Kids
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#what"
                className="hover:text-[var(--secondary-color)] cursor-pointer"
              >
                Numérique
              </a>
              |
              <a
                href="#internet"
                className="hover:text-[var(--secondary-color)] cursor-pointer"
              >
                Internet
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex justify-center">
          <div className="max-w-7xl flex justify-center items-center flex-col gap-16">
            <h1 className="z-10 max-w-4xl text-center text-8xl text-black">
              Découvrons le monde{' '}
              <span className="text-[var(--secondary-color)]">
                {' '}
                du numérique
              </span>{' '}
              ensemble
            </h1>
            <a
              href="#what"
              className="z-10 h-16 px-16 flex justify-center items-center gap-2 text-2xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-color)] text-white shadow-xl animate-bounce rounded-full cursor-pointer"
            >
              <span>Allons-y</span> <ArrowDown />
            </a>
          </div>
        </div>
      </div>

      <div id="what" className="relative flex justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
            Le numérique c'est quoi ?
          </h2>
          <div className="w-full flex justify-center">
            <div className="max-w-7xl flex items-center gap-8 py-8">
              <p className="text-5xl/[4.5rem] text-center sm:text-left sm:w-1/2">
                "C'est comme une grande bibliothèque géante"
              </p>
              <Image
                src="/jeune.png"
                alt="A young people"
                width={800}
                height={400}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <div id="internet" className="flex flex-col items-center">
        <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
          Internet
        </h2>
        <div className="max-w-7xl w-full">
          <div className="flex flex-col gap-4 py-6 h-max">
            <div className="flex flex-col-reverse justify-center sm:items-center sm:flex-row">
              <Image
                src="/mignone.jpg"
                alt="A laptop"
                width={800}
                height={400}
              />
              <p className="text-5xl/[4.5rem] text-center sm:text-left sm:w-1/2">
                "Des jeux, vidéos, des chansons, des images !"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
          En gros
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-8 pt-12">
          <Image
            src="/ia.png"
            alt="Some student in their classroom"
            width={400}
            height={400}
          />
          <Image
            src="/subway.jpg"
            alt="Some student in their classroom"
            width={200}
            height={400}
          />
          <Image
            src="/tiktok.jpg"
            alt="Some student in their classroom"
            width={400}
            height={400}
          />
        </div>
        <p className="text-5xl leading-14 text-center pb-20">
          "C'est tout ce qu'on fait avec les écrans !"
        </p>
      </div>

      <div className="flex justify-center flex-col gap-6">
        <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
          Catégories des applications
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full grid grid-cols-3 gap-12 p-20">
            {secteur.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-center items-center flex-col gap-4 p-12">
                  <div className="flex justify-center flex-col items-center">
                    <div
                      className={`flex justify-center items-center p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{ background: item.bg }}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      {item.label}
                    </h3>
                  </div>
                  <button className="text-[var(--primary-color)] flex items-center group-hover:text-primary-600 transition-colors hover:underline cursor-pointer">
                    Découvrir
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Join />
      <Footer />
    </div>
  );
}
