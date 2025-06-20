'use client';

import React from 'react';
import Logo from '../utils/Logo';

import { Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> */}
        {/* <div className="col-span-1 md:col-span-2"> */}
        <div className="flex justify-center flex-col items-center gap-6">
          <Logo href={'/home'} />
          <p className="text-gray-200 mb-4 max-w-md">
            Votre source d'information sur les dernières tendances
            technologiques, le développement web et l'innovation numérique.
          </p>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex justify-center items-center gap-2">
            <Copyright />
            <p>2024 Net Kids. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
