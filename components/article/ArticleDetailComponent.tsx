'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../utils/Logo';
import TextEditor from '../utils/TextEditor';

import { User, Share2, ArrowUp, Copyright } from 'lucide-react';
import { toast } from 'sonner';
import { useParams, useRouter } from 'next/navigation';
import { ArticleInterface } from '@/interfaces/article.interface';
import { gettArticleService } from '@/services/article.service';
import { backendUri } from '@/providers/User.provider';
import { formatDate } from '@/lib/function';
import Link from 'next/link';

export default function ArticleDetailComponent() {
  const { id } = useParams();
  const router = useRouter();

  const [article, setArticle] = React.useState<ArticleInterface | null>(null);
  const [articles, setArticles] = React.useState<ArticleInterface[]>([]);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [readingProgress, setReadingProgress] = React.useState(0);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      setShowScrollTop(window.scrollY > 400);

      // Calculate reading progress
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled_progress = (window.scrollY / windowHeight) * 100;
      setReadingProgress(scrolled_progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (!isNaN(Number(id))) {
      (async () => {
        const res = await gettArticleService(Number(id));

        if (res.article) {
          setArticle(res.article);
          setArticles(res.articles);
        } else {
          router.push('/home');
        }
      })();
    } else {
      router.push('/home');
    }
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = async () => {
    const { origin } = window.location;
    const link = `${origin}/article/${id}`;

    await navigator.clipboard.writeText(link);
    toast.success('Lien copié avec succès');
  };

  if (article)
    return (
      <div className="min-h-screen bg-white">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
          <div
            className="h-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-md shadow-sm'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Logo />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Share2 className="w-5 h-5 text-[var(--secondary-color)]" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-16 pb-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="px-3 py-1 text-xl bg-blue-500/20 rounded-full font-medium border border-blue-400/30">
                  {article.secteur}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {article.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {article.sections.map((item) => (
              <article key={`article-${item.id}`} className="lg:col-span-8">
                <TextEditor readOnly content={item.content} />
                <div className="p-4">
                  {item.files.length > 0 && (
                    <Image
                      src={`${backendUri}/uploads/files/user-${item.userId}/${item.files[0].src}`}
                      alt="Image"
                      width={200}
                      height={200}
                      className="rounded-xl w-full"
                    />
                  )}
                </div>
              </article>
            ))}

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    {article.user.files.length > 0 ? (
                      <Image
                        src={
                          article.user.files[0].src.startsWith('http')
                            ? article.user.files[0].src
                            : `${backendUri}/uploads/files/user-${article.userId}/${article.user.files[0].src}`
                        }
                        alt="Profil Image"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {article.user.name}
                      </h3>
                      <p className="text-gray-600">{article.user.profession}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {article.user.bio}
                  </p>
                </div>

                {/* Related Articles */}
                {articles.length > 1 && (
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Articles Similaires
                    </h3>
                    <div className="space-y-4">
                      {articles.map(
                        (item, index) =>
                          item.id !== article.id && (
                            <Link
                              href={`/article/${item.id}`}
                              key={index}
                              className="group cursor-pointer"
                            >
                              <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                  <Image
                                    src={`${backendUri}/uploads/files/user-${item.userId}/${item.files[0].src}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                    width={500}
                                    height={500}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-2xl font-medium transition-colors line-clamp-2 group-hover:text-[var(--secondary-color)]">
                                    {item.title}
                                  </h4>
                                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                                    <span>{formatDate(item.updatedAt)}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 z-30"
          >
            <ArrowUp className="w-6 h-6 mx-auto" />
          </button>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> */}
            {/* <div className="col-span-1 md:col-span-2"> */}
            <div className="flex justify-center flex-col items-center gap-6">
              <Logo href={'/home'} />
              <p className="text-gray-200 mb-4 max-w-md">
                Votre source d'information sur les dernières tendances
                technologiques, le développement web et l'innovation numérique.
              </p>
              {/* </div> */}
              {/* <div> */}
              {/* <h4 className="font-semibold mb-4">Navigation</h4> */}
              {/* <div className="space-y-2 text-gray-400">
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Articles
                  </a>
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Catégories
                  </a>
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    À propos
                  </a>
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div> */}
              {/* </div> */}
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <div className="flex justify-center items-center gap-2">
                <Copyright />
                <p>2024 Net Kids. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}
