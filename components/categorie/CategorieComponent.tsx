import React from 'react';
import Image from 'next/image';
import categorieImage1 from '../../public/categorieImage1.png';
import moodle from '../../public/moodle.png';
import scratch from '../../public/scratch.png';
import child from '../../public/child.png';
import CategorieCard from './CategorieCard';
import WebsiteExample from './WebsiteExample';

export default function CategorieComponent() {
  return (
    <div className="bg-[var(--primary-color)]">
      <section className="max-w-7xl w-full h-40 mx-auto flex items-center px-3 bg-[var(--primary-color)]">
        <div className="max-w-48 h-20 flex justify-center items-center text-white font-medium text-3xl/[5.7rem]">
          Net Kids
        </div>
      </section>
      <section className="max-max-w-7xl w-full mx-auto px-3 py-6 flex items-center justify-around flex-col-reverse gap-8 sm:flex-row">
        <Image
          src={child}
          alt="A child"
          className="w-3xs lg:w-96 aspect-[392/482] object-cover"
        ></Image>
        <h1 className="text-5xl md:text-6xl xl:text-7xl">Education</h1>
      </section>
      <section className="max-w-7xl w-full  mx-auto flex flex-col items-center gap-6 px-3 py-6 md:flex-row md:items-center md:justify-center">
        <p className="md:max-w-80 w-full h-max text-base text-slate-200 text-justify">
          Un site éducatif a pour objectif d'informer, d'enseigner et de guider
          les utilisateurs dans leur apprentissage. Il peut s'adresser aux
          élèves, étudiants, enseignants ou à toute personne curieuse
          d'apprendre. Ce type de site propose souvent des cours, des quiz, des
          vidéos explicatives, des fiches de révision, ou des outils interactifs
          pour rendre l'apprentissage plus ludique et accessible.
        </p>
        <Image
          src={categorieImage1}
          alt="Kids with their laptop"
          className="w-full max-w-xl h-96 object-cover"
        />
      </section>
      <section className="max-w-5xl w-full mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 py-6">
        <CategorieCard
          id="01"
          title="Comprendre Ie numerique"
          content="Le numérique, c'est tout ce qui est lié aux technologies modernes : ordinateurs, téléphones, réseaux… Il permet de créer, de stocker et de partager des informations rapidement."
        ></CategorieCard>
        <CategorieCard
          id="02"
          title="Apprendre avec Ie digigtaI"
          content="Aujourd'hui, tu peux apprendre depuis chez toi grâce à des sites, des applis et des vidéos. Le numérique rend l'éducation plus accessible et plus interactive."
        ></CategorieCard>
        <CategorieCard
          id="03"
          title="Internet, Ia grande etoiIe"
          content="Internet connecte des millions de personnes dans le monde. Il permet de chercher des infos, d'échanger et de découvrir de nouvelles choses chaque jour."
        ></CategorieCard>
        <CategorieCard
          id="04"
          title="OutiIs numeriques"
          content="ablettes, smartphones, ordinateurs… ce sont des outils puissants. On les utilise pour travailler, s'informer, jouer ou même dessiner."
        ></CategorieCard>
        <CategorieCard
          id="05"
          title="Le monde numerique c est aussi jouer"
          content="Les jeux vidéo, les applications éducatives ou les quiz interactifs sont une façon amusante de découvrir le numérique tout en s'amusant."
        ></CategorieCard>
        <CategorieCard
          id="06"
          title="Proteger ses données"
          content="Dans le monde numérique, il faut faire attention à sa vie privée. Un bon mot de passe, c'est déjà une protection. Ne partage jamais tes infos personnelles à n'importe qui."
        ></CategorieCard>
      </section>
      <section className="max-w-5xl w-full h-max mx-auto px-3 py-6 flex flex-col gap-10">
        <WebsiteExample
          title="Moodle"
          imageSrc={moodle.src}
          description="Moodle's interface"
          // reverse={false}
        ></WebsiteExample>
        <WebsiteExample
          title="Scratch"
          imageSrc={scratch.src}
          description="Scratch"
          // reverse={true}
        ></WebsiteExample>
      </section>
      <section className="max-w-7xl h-40 mx-auto flex flex-col items-center gap-4 px-3 py-6 bg-[var(--primary-color)]">
        <h1 className="max-w-48 h-20 text-left self-start text-white font-medium text-3xl/[5.7rem]">
          Net Kids
        </h1>
        <p className="w-full text-center text-white text-lg">
          © 2025 NomDuProjet. Tous droits réservés.
        </p>
      </section>
    </div>
  );
}
