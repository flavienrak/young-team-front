'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import youngPeople from '../../public/jeune.png';
import internetIcon from '../../public/Internet_.svg';
import laptop from '../../public/laptop.png';
import student from '../../public/student.png';
import numericIcon from '../../public/Numerique_.svg';
import bookIcon from '../../public/Book.svg';
import screenIcon from '../../public/screen.svg';
import basketIcon from '../../public/Union.svg';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function LandingComponent() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center flex-col h-screen">
        <div className="max-w-7xl w-full border-b border-[var(--secondary-color)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-3xl py-3">
              <Image src="/mini-logo.png" alt="Logo" width={40} height={40} />
              <span className="font-bold text-[var(--primary-color)]">Net</span>
              <span className="font-bold text-[var(--secondary-color)]">
                Kids
              </span>
            </div>
            <div className="flex items-center gap-4">
              <p className="hover:text-[var(--secondary-color)] cursor-pointer">
                C'est quoi ?
              </p>
              |
              <p className="hover:text-[var(--secondary-color)] cursor-pointer">
                Details
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex justify-center">
          <div className="max-w-7xl flex justify-center items-center flex-col gap-16">
            <h1 className="max-w-4xl text-center text-8xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
              Découvrons le monde du numérique ensemble
            </h1>
            <div className="h-16 px-16 flex justify-center items-center text-2xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-color)] text-white shadow-xl animate-bounce rounded-full cursor-pointer">
              Allons-y
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-center text-4xl p-4 bg-[var(--primary-color)]">
            Le numérique c'est quoi ?
          </h2>
          {/* <div className="grid grid-cols-2 gap-8 py-8">
            <Card className="flex flex-col gap-8">
              <CardHeader>
                <div className="flex flex-col gap-8">
                  <CardTitle className="text-4xl">Applications</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </div>
                <CardAction>Découvrir</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div> */}
        </div>
      </div>

      <div className="h-screen">
        <Image
          src={youngPeople}
          alt="A young people"
          className="h-full w-full object-cover"
        ></Image>
      </div>

      <div className="flex flex-col items-center py-6">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col gap-4 py-6 h-max">
            <Image
              src={internetIcon}
              alt="Internet"
              className="w-xs h-8 mx-auto sm:mx-0"
            ></Image>
            <div className="flex flex-col-reverse justify-center sm:items-center sm:flex-row">
              <p className="text-5xl/[4.5rem] text-center sm:text-left sm:w-1/2">
                "C'est comme une grande bibliothèque géante où on peut tout
                trouver : des vidéos, des chansons, des images et même poser des
                questions comme à un super prof !"
              </p>
              <Image
                src={laptop}
                alt="A laptop"
                className="w-full sm:w-1/2"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-20  py-6 h-max">
            <Image
              src={numericIcon}
              alt="Icon of numeric"
              className="w-96 h-10 mx-auto sm:mr-4 sm:ml-auto"
            ></Image>
            <div className="flex flex-col-reverse items-center gap-20 lg:gap-10 md:gap-6 sm:items-center sm:flex-row-reverse">
              <p className="text-5xl/[4.5rem] text-center sm:text-left sm:w-1/2">
                "Le monde numérique, c'est tout ce qu'on fait avec les écrans !
                Les téléphones, les tablettes, les ordinateurs... on les utilise
                pour jouer, apprendre ou discuter."
              </p>
              <Image
                src={student}
                alt="Some student in their classroom"
                className="w-full max-w-sm sm:w-1/2"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen">
        <Image
          src={youngPeople}
          alt="A young people"
          className="h-full w-full object-cover"
        ></Image>
      </div>

      <div className="h-screen flex justify-center flex-col gap-6 mx-auto">
        <div className="flex gap-4">
          <div className="bg-[var(--primary-color)] flex justify-center items-center rounded-full cursor-pointer h-16 w-16">
            <Image
              src={bookIcon}
              alt="An book's icon"
              className="w-12 h-12"
            ></Image>
          </div>
          <h2 className="text-4xl text-black">Education</h2>
        </div>
        <div className="flex gap-4">
          <div className="bg-[var(--primary-color)] flex justify-center items-center rounded-full cursor-pointer h-16 w-16">
            <Image
              src={screenIcon}
              alt="An book's icon"
              className="w-8 h-8"
            ></Image>
          </div>
          <h2 className="text-4xl text-black">Divertissement</h2>
        </div>
        <div className="flex gap-4">
          <div className="bg-[var(--primary-color)] flex justify-center items-center rounded-full cursor-pointer h-16 w-16">
            <Image
              src={basketIcon}
              alt="An book's icon"
              className="w-10 h-10"
            ></Image>
          </div>
          <h2 className="text-4xl text-black">Education</h2>
        </div>
        <button className="px-8 py-5 bg-[var(--primary-color)] text-2xl text-white rounded-2xl cursor-pointer">
          Explore plus!!
        </button>
      </div>

      <div className="flex flex-col items-center gap-6 py-3 bg-[var(--primary-color)]">
        <h1 className="text-4xl text-white">Net Kid</h1>
        <p className="w-full text-center text-white text-lg">
          © 2025 NomDuProjet. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
