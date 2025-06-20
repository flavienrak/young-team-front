import React from 'react';

interface categorieCard {
  id: string;
  title: string;
  content: string;
}
export default function CategorieCard({ id, title, content }: categorieCard) {
  return (
    <div className="w-full flex flex-col p-6 bg-white rounded-sm md:w-3xs">
      <span className="text-black">{id}</span>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-lg font-medium text-justify w-full">{title}</h2>
        <hr className="w-full h-0 border border-[#5a5ac1]" />
        <p className="text-sm text-justify text-[#666666] w-full">{content}</p>
      </div>
    </div>
  );
}
