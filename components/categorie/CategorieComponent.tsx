'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CategorieCard from './CategorieCard';
import WebsiteExample from './WebsiteExample';
import Footer from '../landing/Footer';

import { useParams, useRouter } from 'next/navigation';
import { categories } from '@/lib/categories';

export default function CategorieComponent() {
  const [categorie, setCategorie] = React.useState<{
    value: string;
    name: string;
    utilities: string[];
    importances: string[];
    exemples: {
      src: string;
      value: string;
      href: string;
    }[];
  } | null>(null);

  const params = useParams();
  const router = useRouter();

  React.useEffect(() => {
    if (params.value) {
      const actualCategorie = categories.find(
        (item) => item.value === params.value,
      );

      if (actualCategorie) {
        setCategorie(actualCategorie);
      } else {
        router.push('/');
      }
    }
  }, [params.value]);

  if (categorie)
    return (
      <div className="w-full">
        <div className="relative">
          <div className="z-20 w-full flex justify-center bg-white sticky top-0 shadow">
            <div className="max-w-7xl w-full flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-3xl py-3">
                <Image src="/mini-logo.png" alt="Logo" width={40} height={40} />
                <span className="font-bold text-[var(--primary-color)]">
                  Net
                </span>
                <span className="font-bold text-[var(--secondary-color)]">
                  Kids
                </span>
              </Link>
              <div className="flex items-center gap-4">
                <a
                  href="#use"
                  className="hover:text-[var(--secondary-color)] cursor-pointer"
                >
                  Utilité
                </a>
                |
                <a
                  href="#exemple"
                  className="hover:text-[var(--secondary-color)] cursor-pointer"
                >
                  Exemples
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 flex justify-center min-h-[80vh]">
            <div className="max-w-7xl flex justify-center items-center gap-12">
              <h1 className="z-10 flex-1 text-center text-8xl text-black">
                {categorie.name}
              </h1>
              <Image
                src="/learn.webp"
                alt="PNG"
                width={600}
                height={400}
                className="flex-1"
              />
            </div>
          </div>

          <section
            id="use"
            className="w-full flex items-center px-3 py-6 md:flex-row md:items-center md:justify-center"
          >
            <div className="max-w-7xl flex items-center gap-12">
              <Image
                src="/inform.png"
                alt="Kids with their laptop"
                className="flex-1"
                width={700}
                height={500}
              />
              <div className="flex-1 flex flex-col gap-8">
                {categorie.utilities.map((item, index) => (
                  <p
                    key={`utility-${index}`}
                    className="text-6xl text-black text-justify"
                  >
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="max-w-5xl w-full mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 py-6">
          {categorie.importances.map((item, index) => (
            <div key={`importance-${index}`}>
              <CategorieCard id={`0${index}`} title={item} />
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
        </section>

        <div id="exemple" className="flex flex-col gap-20">
          <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
            Exemples d'application éducatif
          </h2>

          <section className="max-w-5xl w-full h-max mx-auto px-3 py-6 flex flex-col gap-10">
            {categorie.exemples.map((item, index) => (
              <WebsiteExample
                key={`example-${index}`}
                title={item.value}
                src={item.src}
                reverse={index % 2 !== 0}
                href={item.href}
              />
            ))}
          </section>
          <div className="h-14"></div>
        </div>

        <Footer />
      </div>
    );
}
