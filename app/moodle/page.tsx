'use client';
import { AlignCenter, X } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

export default function MoodlePage() {
  const [showMenu, setShowMenu] = useState(true);
  const menu = useRef('');

  function toggleMenu() {
    setShowMenu((prevValue) => !prevValue);
    menu.current.classList.toggle('hidden');
  }
  return (
    <div className="w-full min-h-100vh font-[Roboto]">
      <div className="max-w-7xl h-full mx-auto">
        <header className="relative h-15 px-2 bg-[#2DA7DF] flex justify-between items-center text-white text-[1rem]">
          <div>Net Kids</div>
          <div className="sm:hidden" onClick={toggleMenu}>
            {showMenu ? <AlignCenter /> : <X />}
          </div>
          <nav
            ref={menu}
            className="hidden h-[calc(100vh-60px)] absolute top-15 right-0 sm:sticky sm:flex sm:h-full"
          >
            <ul className="h-full flex flex-col gap-8 px-2.5 sm:flex-row sm:justify-center sm:items-center">
              <li>
                <a href="#">Presentation</a>
              </li>
              <li>
                <a href="#">Guide</a>
              </li>
              <li>
                <a href="#">Avantages&&limites</a>
              </li>
              <li>
                <a href="#">Inconvenients</a>
              </li>
              <li>
                <a href="#">Importance</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="w-full h-[calc(100vh-60px)]">
          <div className="text">
            <h1 className="font-medium text-[4.1rem]">Moodle</h1>
            <p className="text-[2rem]">Plateforme d'apprentissage</p>
          </div>
        </div>

        <div className="flex items-center mx-10 flex-col sm:flex-row">
          <div className="flex-1 flex justify-center flex-col">
            <h2>C'est quoi Moodle?</h2>
            <p>Moodle est LMS(Learning Management System).</p>
            <p>
              Il permet aux éléves et enseignants de travailler ensemble,même à
              distance.Utilsié:écoles,universités,entreprises
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/moodle/moodleSecondImage.png"
              width={316}
              height={233}
              alt="secondImage"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 items-center sm:flex-row">
          <div className="flex-1 flex justify-center">
            <Image
              src="/moodle/Home___Moodle_org-removebg-preview 1.png"
              width={336}
              height={236}
              alt="thirdImage"
            />
          </div>
          <div className="flex-1 flex justify-center flex-col">
            <h2>GUIDE D'UTILISATION</h2>
            <p>Voici comment utiliser Moodle</p>
            <ul>
              <li>Crée ton compte</li>
              <li>Rejoins un cours avec un code</li>
              <li>Télécharge les ressource(PDF,vidéos.ect.)</li>
              <li>Rends tes devoirs en ligne</li>
              <li>Consultes les notes,forums et commentaires</li>
            </ul>
          </div>
        </div>

        <div className="px-8 flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex-1 flex justify-center flex-col">
            <h2>AVANTAGES & LIMITES</h2>
            <div>
              <p>**Avantages**</p>
              <ul>
                <li>Accessible partout</li>
                <li>Organisation des cours centralisée</li>
                <li>Encourage l'autonomie</li>
              </ul>
            </div>
            <div>
              <p>**Inconvénients</p>
              <ul>
                <li>Moins interactif sans webcam ou visio</li>
                <li>Peut être difficile pour les débutants</li>
                <li>Dépend d'internet</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/moodle/fourthImage.png"
              width={430}
              height={362}
              alt="fourthImageMoodle"
            />
          </div>
        </div>

        <div className="flex flex-col mx-8 gap-4 items-center sm:flex-row">
          <div className="flex-1 flex justify-center">
            <Image
              src="/moodle/finalImageMoodle.png"
              width={360}
              height={250}
              alt="logoMoodle"
            />
          </div>
          <div className="flex-1 flex justify-center flex-col">
            <h2>Pourquoi Moodle est-il important?</h2>
            <ul>
              <li>Il facilite l'accès à l'éducation,même à distance.</li>
              <li>
                Moodle est utilisé par des millions d'élèves dans le monde
                entier pour continuer à apprendre même en cas de fermeture de
                calsses.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-24 flex flex-col items-center justify-center">
          <p>Appliquer maintenant</p>
          <a href="https://moodle.og">https://moodle.org</a>
        </div>
      </div>
      <footer className="px-4 bg-[#2DA7DF] text-white h-25 flex">
        <div className="text-[2rem]">Net kid</div>
        <p className="font-[Poppins] flex-1  flex justify-around text-[1rem] self-center justify-self-center">
          © 2025 Net Kids.Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
