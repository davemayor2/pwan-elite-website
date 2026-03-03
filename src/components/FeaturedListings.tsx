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
      'Located in Achalla Ibusa, Asaba. Currently selling for 15m. It is also located in a buy and build environment, with houses already in site on the property, and along a major road.',
    priceLabel: '100% ALLOCATION',
    tag: 'PHASE 2',
    slug: 'aku-ruo-uno',
  },
  {
    title: 'Lavender Farm City Asaba',
    description:
      'Located in Asaba, Delta State. Strategically close to academic and health institutions. Great for land banking and immediate development.',
    priceLabel: 'STARTING AT ₦1.5M',
    tag: 'SELLING FAST',
    slug: 'lavender-farm-city-asaba',
  },
  {
    title: 'Kole-Ayo',
    description:
      'Located at Anobi London Road, Irangushi, Epe, Kole Ayo Estate comes with a Freehold title and immediate allocation.',
    priceLabel: 'FROM ₦3M',
    tag: 'INSTANT ALLOCATION',
    slug: 'kole-ayo-estate',
  },
  {
    title: 'Lavender Garden Estate',
    description:
      'Premium residential land development in Obomkpa, Issele-Uku, Asaba. Each plot comes with Registered Survey & Deed of Assignment. Strategically located near NYSC Orientation Camp, Federal Medical Centre, and College of Nursing.',
    priceLabel: '₦1,500,000',
    tag: 'NEW ESTATE',
    slug: 'lavender-garden-estate',
  },
  {
    title: 'Haven Residence',
    description:
      'Premium residential apartments and terraces in Shelter Afrique Extension, Uyo. Experience modern architecture designed for comfort and urban elegance. Available units from 1 Bedroom Mezzanine to 4 Bedroom Maisonette.',
    priceLabel: 'FROM ₦62M',
    tag: 'NOW SELLING',
    slug: 'haven-residence',
  },
  {
    title: 'Lavender Park Estate',
    description:
      'Build your future in a prime destination in Asaba. Located in Obulu Okiti with Registered Survey & Deed of Assignment. Instant allocation with initial deposit of ₦1,000,000. Near Federal Housing Estate and Asaba International Airport.',
    priceLabel: '₦3,000,000',
    tag: 'INSTANT ALLOCATION',
    slug: 'lavender-park-estate',
  },
];

export default function FeaturedListings() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const handleCardClick = (idx: number) => {
    if (!isMobile) return;
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4 lg:flex lg:items-stretch">
          {PROPERTIES.map((p, idx) => {
            const isExpanded = isMobile ? expandedIdx === idx : false;
            return (
              <AnimateOnScroll 
                key={p.title} 
                direction={idx % 2 === 0 ? 'left' : 'right'} 
                delay={idx * 0.1}
                className="min-w-0 lg:min-w-[200px]"
                style={{ flex: activeIdx === idx ? ('6 1 0%' as string) : ('1 1 0%' as string), transition: 'flex 0.3s ease-in-out' }}
              >
                <div
                 className={`group relative h-[580px] overflow-hidden bg-black cursor-pointer transition-all duration-300 ease-in-out ${
                  isExpanded ? '-translate-y-1' : ''
                }`}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <Image
                  src={PROPERTY_DETAILS[p.slug]?.heroImage ?? '/pexels-davidmcbee-1546168.jpg'}
                  alt={p.title}
                  fill
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 tracking-wide">
                  {p.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white font-medium">
                  <h3 className="text-lg md:text-xl mb-1">{p.title}</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobile
                        ? isExpanded
                          ? 'max-h-48 opacity-100'
                          : 'max-h-0 opacity-0'
                        : 'md:group-hover:max-h-48 md:group-hover:opacity-100 max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-sm text-gray-200 mb-2">{p.description}</div>
                    <div className="text-sm text-gray-100 mb-3">{p.priceLabel}</div>
                  </div>
                  <Link
                    href={`/properties/${p.slug}`}
                    className={`inline-block px-4 py-2 text-sm tracking-wide transition-all duration-300 ease-in-out md:group-hover:-translate-y-0.5 ${
                      (!isMobile && activeIdx === idx) || (isMobile && isExpanded)
                        ? 'bg-[#E3000F] text-white'
                        : 'bg-transparent border border-[#E3000F] text-white'
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


