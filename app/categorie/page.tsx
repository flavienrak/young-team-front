import React from 'react';
import CategorieComponent from '@/components/categorie/CategorieComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catégorie',
  description: 'Catégorie Page',
};

export default function CategoriePage() {
  return (
    <div className="w-full">
      <CategorieComponent />
    </div>
  );
}
