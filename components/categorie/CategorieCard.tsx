import React from 'react';

interface categorieCard {
  id: string;
  title: string;
  content: string;
}
export default function CategorieCard({ id, title, content }: categorieCard) {
  return (
    <div className="w-full flex flex-col p-6 bg-white rounded-sm md:w-3xs">
      <div className="flex items-center gap-8">
        <span className="w-20 h-20 min-w-20 min-h-20 flex justify-center items-center text-4xl text-white bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full">
          {id}
        </span>
        <h2 className="text-2xl font-medium text-justify w-full whitespace-nowrap">
          {title}
        </h2>
      </div>

      {/* <div className="flex flex-col gap-3 w-full">
        <hr className="w-full h-0 border border-[#5a5ac1]" />
        <p className="text-sm text-justify text-[#666666] w-full">{content}</p>
      </div> */}
    </div>
  );
}
