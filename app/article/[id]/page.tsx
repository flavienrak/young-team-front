import React from 'react';
import ArticleDetailComponent from '@/components/article/ArticleDetailComponent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article',
  description: 'Article Page',
};

export default function ArticleDetailPage() {
  return (
    <div className="w-full">
      <ArticleDetailComponent />
    </div>
  );
}
