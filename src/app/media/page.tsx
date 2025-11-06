'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

type MediaItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  type: 'news' | 'event' | 'press' | 'video';
};

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: '1',
    title: 'PWAN ELITE Launches New Estate Development in Awka',
    date: 'December 15, 2024',
    category: 'News',
    image: '/maximillian-conacher-sPpe2D7VbpM-unsplash.jpg',
    description: 'Exciting announcement about our latest residential development featuring modern amenities and flexible payment plans.',
    type: 'news',
  },
  {
    id: '2',
    title: 'Quarterly Property Investment Seminar',
    date: 'November 28, 2024',
    category: 'Event',
    image: '/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
    description: 'Join us for an exclusive event featuring expert talks on real estate investment strategies.',
    type: 'event',
  },
  {
    id: '3',
    title: 'PWAN ELITE Wins Best Real Estate Company Award',
    date: 'November 10, 2024',
    category: 'Press',
    image: '/pexels-fauxels-3184465.jpg',
    description: 'Recognized for excellence in real estate development and customer satisfaction in Nigeria.',
    type: 'press',
  },
  {
    id: '4',
    title: 'Virtual Tour: Lavender Courts Estate',
    date: 'October 22, 2024',
    category: 'Video',
    image: '/pexels-davidmcbee-1546168.jpg',
    description: 'Take a virtual walkthrough of our premium estate with full infrastructure and security features.',
    type: 'video',
  },
  {
    id: '5',
    title: 'New Payment Plans Available for All Estates',
    date: 'October 5, 2024',
    category: 'News',
    image: '/david-vives-TZdh8NdfIfs-unsplash.jpg',
    description: 'Flexible installment options now available. Start your property investment journey with as little as 10% down payment.',
    type: 'news',
  },
  {
    id: '6',
    title: 'Groundbreaking Ceremony: Elite City Estate',
    date: 'September 18, 2024',
    category: 'Event',
    image: '/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg',
    description: 'Official launch of our newest commercial estate development in Asaba with state-of-the-art facilities.',
    type: 'event',
  },
];

const CATEGORIES = ['All', 'News', 'Event', 'Press', 'Video'];

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>(MEDIA_ITEMS);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredItems(MEDIA_ITEMS);
    } else {
      setFilteredItems(MEDIA_ITEMS.filter(item => item.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-19">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/maximillian-conacher-sPpe2D7VbpM-unsplash.jpg)'
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 relative z-10 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Stay Updated with PWAN ELITE
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore our latest news, events, and media highlights from the real estate industry.
            </p>
            <Link href="#media-grid" className="btn-red-wipe inline-block px-8 py-4 font-semibold text-lg">
              Explore Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Media Categories Filter */}
      <section className="py-12 bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-8 py-3 font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading">
              Featured Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most recent news and events
            </p>
          </div>

          {/* Featured Items - 2 column alternating layout */}
          <div className="space-y-24">
            {filteredItems.slice(0, 2).map((item, idx) => {
              const isOdd = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="group relative bg-white hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${
                    isOdd ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Text Content */}
                    <div className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center ${
                      isOdd ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-secondary text-white font-semibold text-sm uppercase tracking-wide">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.date}</p>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {item.description}
                      </p>
                      <Link
                        href="/contact"
                        className="btn-red-to-black inline-flex items-center justify-center px-8 py-4 font-semibold max-w-[200px]"
                      >
                        {item.type === 'video' ? 'Watch Video' : 'Read More'}
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={`relative min-h-[400px] lg:min-h-[500px] ${
                      isOdd ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="w-20 h-20 bg-primary flex items-center justify-center">
                            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section id="media-grid" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading">
              All Media
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-16 h-16 bg-primary flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-semibold uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3 font-heading leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                  <p className="text-gray-700 mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-outline-red-to-black inline-flex items-center justify-center px-6 py-3 font-semibold text-sm w-full"
                  >
                    {item.type === 'video' ? 'Watch Video' : 'Read More'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: '#0E0D53' }}>
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Stay informed on our latest estate updates, events, and opportunities.
          </p>
          <Link href="/contact" className="btn-dark-wipe inline-block px-8 py-4 font-semibold text-lg">
            Subscribe to Newsletter
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
