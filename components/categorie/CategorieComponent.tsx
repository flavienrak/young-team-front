import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CategorieCard from './CategorieCard';
import WebsiteExample from './WebsiteExample';
import Footer from '../landing/Footer';

export default function CategorieComponent() {
  return (
    <div className="">
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
              Education
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
              <p className="text-6xl text-black text-justify">• Informer</p>
              <p className="text-6xl text-black text-justify">• Enseigner</p>
              <p className="text-6xl text-black text-justify">• Guider</p>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-5xl w-full mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 py-6">
        <CategorieCard
          id="01"
          title="Comprendre Ie numerique"
          content="Le numérique, c'est tout ce qui est lié aux technologies modernes : ordinateurs, téléphones, réseaux… Il permet de créer, de stocker et de partager des informations rapidement."
        ></CategorieCard>
        <br />
        <CategorieCard
          id="02"
          title="Apprendre avec Ie digigtaI"
          content="Aujourd'hui, tu peux apprendre depuis chez toi grâce à des sites, des applis et des vidéos. Le numérique rend l'éducation plus accessible et plus interactive."
        ></CategorieCard>
        <br />
        <CategorieCard
          id="03"
          title="Internet, Ia grande etoiIe"
          content="Internet connecte des millions de personnes dans le monde. Il permet de chercher des infos, d'échanger et de découvrir de nouvelles choses chaque jour."
        ></CategorieCard>
        <br />
        <CategorieCard
          id="04"
          title="OutiIs numeriques"
          content="ablettes, smartphones, ordinateurs… ce sont des outils puissants. On les utilise pour travailler, s'informer, jouer ou même dessiner."
        ></CategorieCard>
        <br />
        <CategorieCard
          id="05"
          title="Le monde numerique c est aussi jouer"
          content="Les jeux vidéo, les applications éducatives ou les quiz interactifs sont une façon amusante de découvrir le numérique tout en s'amusant."
        ></CategorieCard>
        <br />
        <CategorieCard
          id="06"
          title="Proteger ses données"
          content="Dans le monde numérique, il faut faire attention à sa vie privée. Un bon mot de passe, c'est déjà une protection. Ne partage jamais tes infos personnelles à n'importe qui."
        ></CategorieCard>
      </section>

      <div id="exemple" className="flex flex-col gap-20">
        <h2 className="z-10 w-full text-center text-6xl p-8 bg-[var(--primary-color)] sticky top-0">
          Exemples d'application éducatif
        </h2>

        <section className="max-w-5xl w-full h-max mx-auto px-3 py-6 flex flex-col gap-10">
          <WebsiteExample
            title="Moodle"
            imageSrc="/moodle.png"
            description="Moodle's interface"
          />
          <WebsiteExample
            title="Scratch"
            imageSrc="/scratch.png"
            description="Scratch"
            reverse={true}
          />
        </section>
        <div className="h-14"></div>
      </div>

      <Footer />
    </div>
  );
}
