'use client';

import { motion } from 'framer-motion';

export interface QuickFacts {
  price: string;
  location: string;
  titleType: string;
  plotSize: string;
  propertyType: string;
  paymentPlan: string;
  brochureUrl?: string;
}

interface PropertyDetailsProps {
  description: string[];
  videoId?: string;
  facts: QuickFacts;
  showQuickFacts?: boolean; // when false, hide the sidebar facts panel
}

export default function PropertyDetails({ description, videoId, facts, showQuickFacts = true }: PropertyDetailsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">Property Overview</h2>
          <div className="space-y-5 text-gray-700">
            {description.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>

          {videoId && (
            <div className="mt-8 w-full">
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="PWAN ELITE Property Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0 absolute inset-0"
                ></iframe>
              </div>
            </div>
          )}
        </motion.article>

        {/* Right - Quick facts */}
        {showQuickFacts && (
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-gray-50 text-secondary p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>Price:</strong> {facts.price}</li>
                <li><strong>Location:</strong> {facts.location}</li>
                <li><strong>Title:</strong> {facts.titleType}</li>
                <li><strong>Plot Size:</strong> {facts.plotSize}</li>
                <li><strong>Type:</strong> {facts.propertyType}</li>
                <li><strong>Payment Plan:</strong> {facts.paymentPlan}</li>
              </ul>
              {facts.brochureUrl && (
                <a href={facts.brochureUrl} className="mt-6 inline-block px-6 py-3 bg-primary text-white font-semibold">
                  Download Brochure
                </a>
              )}
            </div>
          </motion.aside>
        )}
      </div>
    </section>
  );
}


