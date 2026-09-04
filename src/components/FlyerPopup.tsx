'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const FLYERS = [
  { src: '/ELITE MASTERCLASS.jpeg', alt: 'PWAN Elite Masterclass' },
] as const;

const AUTO_SLIDE_MS = 4500;

export default function FlyerPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % FLYERS.length);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isOpen || FLYERS.length <= 1) return;
    const timer = setInterval(goToNext, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, [isOpen, goToNext]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Promotional flyers"
    >
      <div
        className="relative w-full max-w-[min(100%,22rem)] sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-gray-800 shadow-lg transition hover:bg-gray-100"
          aria-label="Close promotional popup"
        >
          ×
        </button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="overflow-hidden rounded-xl bg-white shadow-2xl"
        >
          <motion.div
            className="relative aspect-[3/4] w-full"
            custom={direction}
            initial={false}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={FLYERS[currentIndex].src}
                  alt={FLYERS[currentIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {FLYERS.length > 1 && (
            <motion.div
              className="flex items-center justify-center gap-2 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {FLYERS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? 'w-6 bg-green-700'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Show flyer ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : undefined}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
