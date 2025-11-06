'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

type Property = {
  name: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  titleDocument?: string;
  price: string;
  slug: string;
};

const PROPERTIES: Property[] = [
  {
    name: 'Lavender Courts',
    location: 'Ndukwenu, Awka, Anambra',
    type: 'Residential',
    description: 'A luxury estate in Awka offering affordability, security, and modern development.',
    tags: ['Title: C of O', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/lavenderCourts.jpeg',
    titleDocument: 'C of O',
    price: '5M - 10M',
    slug: 'lavender-courts',
  },
  {
    name: 'Aku Ruo Uno Phase 2',
    location: 'Achalla Ibusa, Asaba',
    type: 'Residential',
    description: 'Premium plots located minutes away from Asaba College of Education.',
    tags: ['Promo Price Available', 'Installment Option', 'Verified Documents'],
    image: '/akuRuo.png',
    titleDocument: 'Survey',
    price: '5M - 10M',
    slug: 'aku-ruo-uno',
  },
  {
    name: 'Lavender Farm City Asaba',
    location: 'Asaba, Delta State',
    type: 'Commercial',
    description: 'Strategically close to academic and health institutions. Great for land banking and immediate development.',
    tags: ['Flexible Payment Plan', 'Installment Option', 'Secure Investment'],
    image: '/FarmCity.jpeg',
    titleDocument: 'Deed of Assignment',
    price: '750K - 1.5M',
    slug: 'lavender-farm-city-asaba',
  },
  {
    name: 'Kole-Ayo Estate',
    location: 'Epe, Lagos State',
    type: 'Residential',
    description: 'Freehold land with immediate allocation and excellent ROI prospects within a thriving corridor.',
    tags: ['Title: C of O', 'Secure Environment', 'Verified Documents'],
    image: '/koleAyo.png',
    titleDocument: 'C of O',
    price: '5M - 10M',
    slug: 'kole-ayo-estate',
  },
  {
    name: 'Elite City Estate',
    location: 'Asaba, Delta State',
    type: 'Commercial',
    description: 'Prime location with modern infrastructure. Perfect for residential and commercial development.',
    tags: ['Flexible Payment Plan', 'Secure Investment', 'Verified Documents'],
    image: '/eliteCity.png',
    titleDocument: 'Governor\'s Consent',
    price: '5M - 10M',
    slug: 'elite-city-estate',
  },
  {
    name: 'Elite Haven',
    location: 'Asaba, Delta State',
    type: 'Residential',
    description: 'Tranquil living environment with excellent connectivity and growing community infrastructure.',
    tags: ['Installment Option', 'Secure Environment', 'Title: C of O'],
    image: '/eliteHaven.jpg',
    titleDocument: 'C of O',
    price: '1.5M - 3M',
    slug: 'elite-haven',
  },
  {
    name: 'Urban Legacy',
    location: 'LASU-Isheri, Lagos',
    type: 'Residential',
    description: 'Located at Ebute kekere way, Afolabi bus stop, Igando road Lagos. Urban Legacy This land is situated in a prime location within a built-up environment, boasting excellent accessibility to major roads and public transportation.',
    tags: ['Title: C of O', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/urbanLegacy.jpg',
    titleDocument: 'C of O',
    price: '10M - 15M',
    slug: 'urban-legacy',
  },
  {
    name: 'Eastview Estate',
    location: 'Delta',
    type: 'Residential',
    description: 'Located at Ebute kekere way, Afolabi bus stop, Igando road Lagos. Urban Legacy This land is situated in a prime location within a built-up environment, boasting excellent accessibility to major roads and public transportation.',
    tags: ['Title: C of O', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/eastView.png',
    titleDocument: 'C of O',
    price: '3M - 5M',
    slug: 'eastview-estate',
  },
  {
    name: 'Alaoma luxury Estate ',
    location: 'Ochicha, Obike , Ngor -Okpala, Owerri, Imo State.',
    type: 'Residential',
    description: 'Located in Ochicha, Obike , Ngor -Okpala. Alaoma Luxury is located in an area with great prospect on high return on investment.',
    tags: ['Title: Survey', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/alaomaLuxury.png',
    titleDocument: 'Survey',
    price: '1.5M - 3M',
    slug: 'alaoma-luxury-estate',
  },
  {
    name: 'Elite Empire',
    location: 'Avu, Owerri, Imo State',
    type: 'Residential',
    description: 'Elite Empire is strategically located in Avu-Oforola, a fast-growing area ideal for premium real estate investment. Surrounded by notable landmarks like Control Bus Stop, Avu Junction, Imo State Automobile Hub, and Deeper Life Camp Ground.',
    tags: ['Title: C of O', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/eliteEmpire.png',
    titleDocument: 'C of O',
    price: '5M - 10M',
    slug: 'elite-empire',
  },
  {
    name: 'Obi-Eze Estate',
    location: 'Umueze Ibusa, Asaba',
    type: 'Residential',
    description: 'Located in Umueze Ibusa, Asaba, Obieze 2 is selling for ₦10M in a fast-developing, buy-and-build area along a major road.',
    tags: ['Title: Freehold', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/obiEze.png',
    titleDocument: 'Freehold',
    price: '5M - 10M',
    slug: 'obi-eze-estate',
  },
  {
    name: 'Elite Casa',
    location: 'Idasa, Agbara, Lagos',
    type: 'Residential',
    description: 'Located in Idasa, Agbara, this estate comes with a Certificate of Occupancy (C of O) and sits in a high-demand, fast-growing area ideal for residential or commercial development.',
    tags: ['Title: C of O', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/eliteCasa.jpeg',
    titleDocument: 'C of O',
    price: '5M - 10M',
    slug: 'elite-casa',
  },
  {
    name: 'Elite Eastland Phase 2',
    location: 'Umuelu, Umuagwo, Owerri, Imo State',
    type: 'Residential',
    description: 'Elite Eastland Phase 2 is a prime estate located in Umuelu, Umuagwo, Owerri, along the Port Harcourt–Owerri Expressway.',
    tags: ['Title: ', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/eliteEastland2.jpeg',
    titleDocument: 'C of O',
    price: '5M - 10M',
    slug: 'elite-eastland-phase-2',
  },
  {
    name: 'Ugwumba Estate',
    location: 'Aba, Abia State',
    type: 'Residential',
    description: 'Elite Eastland Phase 2 is a prime estate located in Umuelu, Umuagwo, Owerri, along the Port Harcourt–Owerri Expressway.a',
    tags: ['Title: C of O', 'Flexible Payment Plan', 'Secure Environment'],
    image: '/ugwumbaEstate.jpeg',
    titleDocument: 'C of O',
    price: '5M - 10M',
    slug: 'ugwumba-estate',
  },
];

export default function PropertiesPage() {
  // Filter state
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedTitleDoc, setSelectedTitleDoc] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(PROPERTIES);

  // Available filter options
  const locations = ['All', 'Awka', 'Asaba', 'Lagos', 'Delta'];
  const titleDocuments = ['All', 'C of O', 'Deed of Assignment', 'Survey', 'Governor\'s Consent'];
  const priceRanges = ['All', '750K - 1.5M', '1.5M - 3M', '3M - 5M', '5M - 10M'];

  // Handle filter application
  const handleApplyFilters = () => {
    let filtered = [...PROPERTIES];

    // Filter by location
    if (selectedLocation && selectedLocation !== 'All') {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Filter by title document
    if (selectedTitleDoc && selectedTitleDoc !== 'All') {
      filtered = filtered.filter(property => 
        property.titleDocument?.toLowerCase() === selectedTitleDoc.toLowerCase()
      );
    }

    // Filter by price
    if (selectedPrice && selectedPrice !== 'All') {
      filtered = filtered.filter(property => 
        property.price === selectedPrice
      );
    }

    setFilteredProperties(filtered);
  };

  // Reset filters
  const handleResetFilters = () => {
    setSelectedLocation('');
    setSelectedTitleDoc('');
    setSelectedPrice('');
    setFilteredProperties(PROPERTIES);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
              Our Land Listings
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore our range of premium estates and investment opportunities across Nigeria — where value meets growth.
            </p>
            <Link href="#property-listings" className="btn-red-wipe inline-block px-8 py-4 font-semibold text-lg">
              Book Site Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section id="property-listings" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading">
              Featured Land & Estate Listings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each estate is thoughtfully developed and strategically located for accessibility, growth, and guaranteed returns.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-gray-100 p-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 font-medium text-gray-700 focus:border-primary focus:outline-none"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title Document Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title Document
                </label>
                <select
                  value={selectedTitleDoc}
                  onChange={(e) => setSelectedTitleDoc(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 font-medium text-gray-700 focus:border-primary focus:outline-none"
                >
                  {titleDocuments.map((doc) => (
                    <option key={doc} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 font-medium text-gray-700 focus:border-primary focus:outline-none"
                >
                  {priceRanges.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-end">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  &nbsp;
                </label>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleApplyFilters}
                    className="w-full px-6 py-3 bg-primary text-white font-semibold hover:bg-red-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                  {(selectedLocation || selectedTitleDoc || selectedPrice) && (
                    <button
                      onClick={handleResetFilters}
                      className="w-full px-6 py-3 bg-gray-600 text-white font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Property Listings */}
          <div className="space-y-5">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No properties found matching your criteria.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-3 bg-primary text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredProperties.map((property, idx) => {
                const isOdd = idx % 2 === 0;
              return (
                <div
                  key={property.name}
                  className="group relative bg-white hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${
                    isOdd ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Left Column - Content (or Right if odd) */}
                    <div className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center ${
                      isOdd ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
                        {property.name}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {property.description}
                      </p>
                      
                      {/* Location */}
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 font-medium">{property.location}</span>
                      </div>
                      
                      {/* Type */}
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-secondary text-white font-semibold text-sm uppercase tracking-wide">
                          {property.type}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {property.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={`/properties/${property.slug}`}
                          className="btn-red-to-black text-center transform hover:scale-105 duration-300"
                        >
                          View Details
                        </Link>
                        <Link
                          href="/contact"
                          className="btn-outline-red-to-black text-center transform hover:scale-105 duration-300"
                        >
                          Book Inspection
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Image (or Left if odd) */}
                    <div className={`relative w-full aspect-[5/7] ${
                      isOdd ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
              })
            )}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16" style={{ backgroundColor: '#0E0D53' }}>
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Own a Piece of PWAN ELITE?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our team help you find the perfect estate that fits your vision and budget.
          </p>
          <Link href="/contact" className="btn-dark-wipe inline-block px-8 py-4 font-semibold text-lg">
            Contact Our Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
