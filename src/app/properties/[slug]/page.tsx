'use client';

import { notFound } from 'next/navigation';
import { useState, useEffect, use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPropertyBySlug } from '@/data/propertyData';
import PropertyDetails from '@/components/PropertyDetails';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PropertyDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const property = getPropertyBySlug(slug);
  if (!property) {
    notFound();
    return null;
  }

  const data = property;

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isLightboxOpen]);

  const handleScrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        ></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(14,13,83,0.85), rgba(14,13,83,0.6))' }}></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 relative z-10 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">{data.title}</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-2">{data.location}</p>
            {data.tagline && <p className="text-gray-200 max-w-2xl mb-6">{data.tagline}</p>}
            <button onClick={handleScrollToInquiry} className="px-8 py-4 bg-primary text-white font-semibold">
              Book an Inspection
            </button>
          </motion.div>
        </div>
      </header>

      {/* Flyer + Quick Facts side-by-side */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Single flyer image */}
            <div 
              className="relative lg:col-span-8 w-full aspect-[16/10] bg-gray-100 flex items-center justify-center cursor-pointer group hover:opacity-90 transition-opacity"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image src={data.images[0]} alt="Estate Flyer" fill className="object-contain" priority />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded">
                  Click to expand
                </span>
              </div>
            </div>

            {/* Right: Quick facts panel */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 text-secondary p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Price:</strong> {data.price}</li>
                  <li><strong>Location:</strong> {data.location}</li>
                  <li><strong>Title:</strong> {data.titleType}</li>
                  <li><strong>Plot Size:</strong> {data.plotSize}</li>
                  <li><strong>Type:</strong> {data.propertyType}</li>
                  <li><strong>Payment Plan:</strong> {data.paymentPlan}</li>
                </ul>
                <div className="mt-6 space-y-3">
                  {data.subscriptionFormUrl && (
                    <a 
                      href={data.subscriptionFormUrl} 
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block px-6 py-3 bg-primary text-white font-semibold text-center hover:opacity-90 transition rounded"
                    >
                      📄 Download Subscription Form
                    </a>
                  )}
                  {data.brochureUrl && (
                    <a 
                      href={data.brochureUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block px-6 py-3 bg-secondary text-white font-semibold text-center hover:opacity-90 transition rounded"
                    >
                      📋 Download Brochure
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details - description/video only */}
      <PropertyDetails
        description={data.description}
        videoId={data.videoId}
        facts={{
          price: data.price,
          location: data.location,
          titleType: data.titleType,
          plotSize: data.plotSize,
          propertyType: data.propertyType,
          paymentPlan: data.paymentPlan,
          brochureUrl: data.brochureUrl,
        }}
        showQuickFacts={false}
      />

      {/* Features & Amenities */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-8 font-heading"
          >
            Estate Features
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.amenities.map((amenity) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="bg-white border border-gray-200 p-5 shadow-sm flex items-center gap-3"
              >
                <span className="text-green-600">✅</span>
                <span className="text-gray-800">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      {data.mapEmbedUrl && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">Find Us Here</h2>
            <div className="w-full h-[420px]">
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#0E0D53' }}>
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Interested in This Property?</h2>
          <p className="text-lg text-gray-200 mb-8">Book a free inspection or speak with our sales team today.</p>
          <button onClick={handleScrollToInquiry} className="px-8 py-4 bg-primary text-white font-semibold">
            Book Inspection
          </button>
        </div>
      </section>

      {/* Inquiry / Contact */}
      <section id="inquiry" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-24">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-secondary mb-8 font-heading"
          >
            Schedule an Inspection
          </motion.h3>
          <div className="bg-white border border-gray-200 shadow-sm p-8">
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="hidden" name="access_key" value="58280fc8-b4a5-4717-88ed-db34dac3833a" />
              <input type="hidden" name="form_type" value="Book Inspection" />
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input type="text" id="name" name="name" placeholder="Full Name" required disabled={isSubmitting} className="w-full bg-gray-50 px-4 py-4 text-gray-900 outline-none border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input type="tel" id="phone" name="phone" placeholder="Phone" required disabled={isSubmitting} className="w-full bg-gray-50 px-4 py-4 text-gray-900 outline-none border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" />
              </div>
              <div>
                <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-1">
                  Property of Interest *
                </label>
                <input type="text" id="property" name="property" defaultValue={data.title} required disabled={isSubmitting} className="w-full bg-gray-50 px-4 py-4 text-gray-900 outline-none border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input type="date" id="date" name="date" disabled={isSubmitting} className="w-full bg-gray-50 px-4 py-4 text-gray-900 outline-none border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-semibold py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span>Submit</span>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    'Book Inspection'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={data.images[0]}
              alt="Estate Flyer - Expanded View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}


