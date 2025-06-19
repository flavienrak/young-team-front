import React from 'react';
import Image from 'next/image';

interface website {
  title: string;
  imageSrc: string;
  description: string;
  // reverse: boolean;
}

export default function WebsiteExemple({
  title,
  imageSrc,
  description,
}: // reverse,
website) {
  return (
    // reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
    <div className="flex flex-col items-center bg- backdrop-blur-xl sm:flex-row sm:justify-evenly gap-12">
      <Image
        src={imageSrc}
        alt={description}
        width={500}
        height={280}
        className="w-full max-w-96 object-cover"
      ></Image>
      <div className="flex flex-col gap-10 w-full justify-center items-center sm:w-1/2">
        <h2 className="text-4xl text-white">{title}</h2>
        <button className="bg-orange-200 w-3xs h-20 rounded-4xl text-black text-2xl cursor-pointer">
          Aller
        </button>
      </div>
    </div>
  );
}
