'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { PROPERTY_DETAILS } from '@/data/propertyData';

type Property = {
  title: string;
  description: string;
  priceLabel: string;
  tag: string;
  slug: string;
};

const PROPERTIES: Property[] = [
  {
    title: 'Lavender Courts',
    description:
      'Lavender Courts Awka – where luxury meets affordability in one of Anambra\'s most promising locations. Located at Ndiukwuenu, Awka.',
    priceLabel: 'SELLING AT ₦12M',
    tag: 'NEW ESTATE',
    slug: 'lavender-courts',
  },
  {
    title: 'Aku Ruo Uno',
    description:
      'Located in Achalla Ibusa, Asaba. Currently selling for 15m. Buy and build environment with houses already on site, along a major road.',
    priceLabel: '100% ALLOCATION',
    tag: 'PHASE 2',
    slug: 'aku-ruo-uno',
  },
  {
    title: 'Lavender Park',
    description:
      'Welcome to Lavender Park Estate, a prime residential land development located in Obulu Okiti, Asaba, Delta State. Build your future in a prime destination that combines strategic location, modern infrastructure, and excellent growth potential.',
    priceLabel: 'STARTING AT ₦1.5M',
    tag: 'SELLING FAST',
    slug: 'lavender-park-estate',
  },
];

export default function FeaturedListings() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const activeIdx = isMobile ? expandedIdx : hoveredIdx;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll direction="fade">
          <div className="md:flex md:items-end md:justify-between mb-8 gap-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary">Featured Land Listings</h2>
            <p className="text-gray-600 max-w-xl mt-3 md:mt-0 font-medium">
              Explore our top‑selling estates and prime plots carefully selected for value, accessibility, and guaranteed
              returns on investment.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0 lg:flex lg:items-stretch">
          {PROPERTIES.map((p, idx) => {
            const isActive = activeIdx === idx;
            return (
              <AnimateOnScroll
                key={p.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 0.1}
                className="min-w-0 lg:min-w-[100px]"
                style={{
                  flex: isActive ? ('2.5 1 0%' as string) : ('1 1 0%' as string),
                  transition: 'flex 0.45s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <div
                  className="relative h-[580px] overflow-hidden bg-black cursor-pointer"
                  onClick={() => isMobile && setExpandedIdx((prev) => (prev === idx ? null : idx))}
                  onMouseEnter={() => !isMobile && setHoveredIdx(idx)}
                  onMouseLeave={() => !isMobile && setHoveredIdx(null)}
                >
                  {/* Flyer image – object-contain when expanded to reveal full flyer */}
                  <Image
                    src={PROPERTY_DETAILS[p.slug]?.heroImage ?? '/pexels-davidmcbee-1546168.jpg'}
                    alt={p.title}
                    fill
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className={`transition-all duration-500 ease-in-out ${
                      isActive ? 'object-contain scale-100 opacity-100' : 'object-cover opacity-85 scale-105'
                    }`}
                  />

                  {/* Overlay – lighter when expanded so flyer is clearly visible */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      isActive
                        ? 'bg-gradient-to-t from-black/90 via-black/30 to-black/10'
                        : 'bg-gradient-to-t from-black/85 via-black/40 to-transparent'
                    }`}
                  />

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 tracking-wide z-10">
                    {p.tag}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white z-10">
                    <h3
                      className={`font-semibold mb-2 transition-all duration-300 ${
                        isActive ? 'text-xl' : 'text-lg'
                      }`}
                    >
                      {p.title}
                    </h3>

                    {/* Details revealed on expand */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-2'
                      }`}
                    >
                      <p className="text-sm text-gray-200 mb-2 leading-relaxed">{p.description}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-primary/80 text-white px-2 py-0.5 font-semibold tracking-wide">
                          {p.priceLabel}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/properties/${p.slug}`}
                      className={`inline-block px-4 py-2 text-sm tracking-wide font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'bg-transparent border border-white/60 text-white'
                      }`}
                    >
                      View Estate Details
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="text-center mt-8">
            <Link href="/properties" className="btn-dark-wipe inline-block px-6 py-3 font-semibold">
              View All Land Listings
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


