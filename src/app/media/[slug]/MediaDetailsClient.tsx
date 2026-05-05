'use client';

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getMediaItemBySlug } from '@/data/mediaData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function MediaDetailsClient({ params }: PageProps) {
  const { slug } = use(params);
  const item = getMediaItemBySlug(slug);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImage]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  if (!item) {
    notFound();
  }

  const media = item as NonNullable<typeof item>;
  const gallery = media.gallery ?? [media.image];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <header className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${media.image})` }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,13,83,0.55) 0%, rgba(14,13,83,0.85) 100%)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 relative z-10 pt-40 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-white font-semibold text-sm uppercase tracking-wide mb-5">
              {media.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading leading-tight max-w-4xl">
              {media.title}
            </h1>
            <p className="text-lg text-gray-200 mb-2">{media.date}</p>
            {media.caption && (
              <p className="text-xl md:text-2xl text-white/95 font-semibold max-w-3xl mt-4">
                {media.caption}
              </p>
            )}
          </motion.div>
        </div>
      </header>

      {/* Highlights Strip */}
      {media.highlights && media.highlights.length > 0 && (
        <section className="bg-[#F8F8F8] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {media.highlights.map((highlight, idx) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="bg-white border border-gray-200 p-5 shadow-sm flex items-start gap-3"
                >
                  <span className="text-green-600 mt-0.5">✅</span>
                  <span className="text-gray-800 leading-snug">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">
                The Story
              </h2>
              <div className="space-y-5 text-gray-700">
                {(media.body ?? [media.description]).map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </article>

          <aside className="lg:col-span-4">
            <div className="bg-gray-50 text-secondary p-6 shadow-sm border border-gray-200 sticky top-28">
              <h3 className="text-xl font-bold mb-4">At a Glance</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Category:</strong> {media.category}
                </li>
                <li>
                  <strong>Date:</strong> {media.date}
                </li>
                {media.estate && (
                  <li>
                    <strong>Estate:</strong> {media.estate}
                  </li>
                )}
                {media.location && (
                  <li>
                    <strong>Location:</strong> {media.location}
                  </li>
                )}
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/properties"
                  className="w-full inline-block px-6 py-3 bg-primary text-white font-semibold text-center hover:opacity-90 transition rounded"
                >
                  Browse Active Estates
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-block px-6 py-3 bg-white border border-secondary text-secondary font-semibold text-center hover:bg-gray-100 transition rounded"
                >
                  Speak to Our Team
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 1 && (
        <section className="py-16 bg-[#F8F8F8]">
          <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-secondary mb-8 font-heading"
            >
              Allocation Gallery
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {gallery.map((src, idx) => (
                <motion.button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(src)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  className="relative aspect-[4/3] bg-gray-200 overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`${media.title} — image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold bg-black/60 px-3 py-1 rounded">
                      Click to expand
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0E0D53' }}>
        <div className="max-w-5xl mx-auto px-8 sm:px-16 lg:px-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading"
          >
            This Could Be You Next.
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the growing community of EliteHub clients building wealth through
            verified, transparent real estate. Browse our active estates today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="btn-red-wipe inline-block px-8 py-4 font-semibold text-lg"
            >
              View Available Estates
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-secondary font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book an Inspection
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Expanded view"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
