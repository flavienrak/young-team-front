import { AlignJustify } from 'lucide-react';
import React from 'react';

export default function HeaderComponent() {
  const links = [
    {
      url: '#',
      key: '',
      link: 'link1',
    },
    {
      url: '##',
      key: '',
      link: 'link2',
    },
    {
      url: '###',
      key: '',
      link: 'link3',
    },
    {
      url: '####',
      key: '',
      link: 'link4',
    },
  ];

  return (
    <header className="relative w-full h-20 flex justify-between items-center px-2.5">
      <div>
        <p className="text-2xl">Logo</p>
      </div>
      <div className="sm:hidden">
        <AlignJustify />
      </div>
      <nav className="absolute top-20 right-0 px-2.5 sm:static">
        <ul className="flex flex-col gap-5 justify-around sm:flex-row">
          {links.map((items) => (
            <li key={items.key}>
              <a href={items.url} className="text-lg">
                {items.link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
