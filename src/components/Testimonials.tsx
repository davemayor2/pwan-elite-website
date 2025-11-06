'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';

type Testimonial = {
  title: string;
  body: string;
  author: string;
  location: string;
};

const STARS = (
  <div className="flex items-center gap-1 text-[#FFB400]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.037a1 1 0 00-1.176 0l-2.803 2.037c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const testimonials: Testimonial[] = [
  {
    title: '“I finally own my first land!”',
    body:
      'Buying land used to feel complicated until I met PWAN ELITE. Their team guided me patiently, explained everything clearly, and helped me secure my first plot in Ibeju-Lekki without stress. I\'m now planning my second purchase!',
    author: 'Chioma E.',
    location: 'Lagos',
  },
  {
    title: '“Honest and reliable company.”',
    body:
      'PWAN ELITE delivers exactly what they promise. The land was genuine, documents were handled smoothly, and the team was professional from start to finish. I recommend them to anyone who values peace of mind.',
    author: 'Mr. Adewale O.',
    location: 'Ibadan',
  },
  {
    title: '“Transparent process from day one.”',
    body:
      'From enquiry to allocation, the communication was clear and timely. I always knew the next step and felt very confident about my investment with PWAN ELITE.',
    author: 'Amaka N.',
    location: 'Abuja',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header row */}
        <AnimateOnScroll direction="fade">
          <div className="md:flex md:items-start md:justify-between md:gap-12 mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary">
                What Our <span className="text-primary">Clients Say</span>
              </h2>
            </div>
            <p className="max-w-2xl text-[#555]">
              At PWAN ELITE, our greatest achievement is seeing our clients&apos; dreams come true. Every story reminds us why
              we do what we do — making land ownership simple, transparent, and rewarding.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <AnimateOnScroll key={idx} direction="up" delay={idx * 0.1}>
              <article className="testimonial-card relative bg-[#F5F6FA] border border-gray-200 p-6 shadow-sm overflow-hidden">
              {/* animated perimeter lines using SVG stroke-dashoffset */}
              <svg className="absolute inset-0 w-full h-full testimonial-border pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="2" y="2" width="96" height="96" rx="0" ry="0" />
                <rect className="second" x="2" y="2" width="96" height="96" rx="0" ry="0" />
              </svg>

              <div className="flex items-center gap-3 text-secondary font-heading font-semibold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary">
                  <path d="M7 7h10v10H7z" />
                </svg>
                <h3 className="text-secondary">{t.title}</h3>
              </div>

              <div className="mt-3">{STARS}</div>

              <p className="mt-3 text-gray-700 leading-relaxed">{t.body}</p>

              <div className="mt-4 font-heading font-semibold text-primary">— {t.author}, {t.location}</div>
            </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}


