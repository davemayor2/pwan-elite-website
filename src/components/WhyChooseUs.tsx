'use client';

import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

// Lightweight inline icons (no extra deps)
const ShieldCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CreditCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="0"/>
    <path d="M2 9h20M6 14h5"/>
  </svg>
);

const Award = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="8" r="5"/>
    <path d="M8 14l-2 7 6-3 6 3-2-7"/>
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <AnimateOnScroll direction="fade">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-secondary">
              Why Choose <span className="text-primary">PWAN Elite</span>
            </h2>
            <p className="mt-3 mx-auto max-w-[700px] text-[#555]">
              We don&apos;t just sell land — we help people build futures. PWAN ELITE stands for trust, quality,
              and empowerment, creating lasting value through properties that appreciate and transform lives.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ gridAutoRows: '1fr' }}>
          {/* Card 1 */}
          <AnimateOnScroll direction="left" delay={0.1} className="lg:row-start-1 lg:col-start-1 h-full">
            <div className="bg-white shadow-md border border-gray-200 p-6 flex flex-col h-full">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-secondary text-white">
                <ShieldCheck className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-bold text-black">Genuine and Verified Properties</h3>
            </div>
            <p className="mt-3 text-gray-600">
              Every property we offer is thoroughly verified with proper documentation and clear title. You can invest
              confidently, knowing you&apos;re getting genuine land — free from encumbrances or hidden issues.
            </p>
            </div>
          </AnimateOnScroll>

          {/* Image 1 */}
          <AnimateOnScroll direction="right" delay={0.2} className="lg:row-start-1 lg:col-start-2 h-full">
            <div className="relative bg-gray-200 h-[180px] md:h-[200px] lg:h-full border border-gray-200 shadow-md">
              <Image
                src="/pexels-davidmcbee-1546168.jpg"
                alt="Client 1"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* Image 2 - tall, spans two rows */}
          <AnimateOnScroll direction="up" delay={0.3} className="lg:row-start-1 lg:row-span-2 lg:col-start-3 h-full">
            <div className="relative bg-gray-200 h-[180px] md:h-[220px] lg:h-full w-full border border-gray-200 shadow-md">
              <Image
                src="/david-vives-TZdh8NdfIfs-unsplash.jpg"
                alt="Client 2"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* Card 2 */}
          <AnimateOnScroll direction="right" delay={0.4} className="lg:row-start-1 lg:col-start-4 h-full">
            <div className="bg-white shadow-md border border-gray-200 p-6 flex flex-col h-full">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-secondary text-white">
                <Eye className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-bold text-black">Transparent Process</h3>
            </div>
            <p className="mt-3 text-gray-600">
              No surprises, no hidden charges. From the moment you inquire until allocation, you’re fully informed and
              guided every step of the way — with honesty and clarity.
            </p>
            </div>
          </AnimateOnScroll>

          {/* Purple Wide Box */}
          <AnimateOnScroll direction="left" delay={0.5} className="lg:col-span-2 md:col-span-2 lg:row-start-2 lg:col-start-1 h-full">
            <div className="bg-gradient-to-tr from-[#2B2E83] to-[#3C43A4] text-white p-6 purple-rings shadow-md border border-[#2B2E83] flex flex-col h-full">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-white/10">
                <CreditCard className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-bold">Flexible Payment Plans</h3>
            </div>
            <p className="mt-3 opacity-95">
              We understand that great opportunities should be within reach for everyone. That’s why we offer flexible
              and convenient payment options that allow you to own land without financial pressure.
            </p>
            </div>
          </AnimateOnScroll>

          {/* Card 4 */}
          <AnimateOnScroll direction="right" delay={0.6} className="lg:row-start-2 lg:col-start-4 lg:col-span-1 h-full">
            <div className="bg-white shadow-md border border-gray-200 p-6 flex flex-col h-full">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-secondary text-white">
                <Award className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-bold text-black">Proven Track Record</h3>
            </div>
            <p className="mt-3 text-gray-600">
              Hundreds of satisfied clients have achieved their real estate goals through PWAN ELITE — and you can be
              the next success story.
            </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}


