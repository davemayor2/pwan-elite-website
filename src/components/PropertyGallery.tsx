'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const active = images[activeIndex] ?? images[0];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Left: Main image */}
          <div className="relative lg:col-span-8 w-full aspect-[16/10] bg-gray-100">
            {active && (
              <Image
                src={active}
                alt="Property"
                fill
                className="object-cover"
                onClick={() => setIsLightboxOpen(true)}
                priority
              />
            )}
          </div>

          {/* Right: Thumbnails grid */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-4">
            {images.slice(0, 3).map((img, idx) => (
              <button
                key={img + idx}
                onClick={() => setActiveIndex(idx)}
                className="relative w-full aspect-square bg-gray-100 focus:outline-none"
                aria-label={`Show image ${idx + 1}`}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-[90vw] max-w-5xl aspect-[16/10]">
            <Image src={active} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}





