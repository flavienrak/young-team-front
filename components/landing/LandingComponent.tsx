'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
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
          <div className="grid grid-cols-2 gap-8 py-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}
