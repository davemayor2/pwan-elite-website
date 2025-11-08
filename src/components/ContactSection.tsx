'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]" style={{ gridAutoRows: '1fr' }}>
        {/* Left image area */}
        <AnimateOnScroll direction="left" className="lg:col-span-5 h-full">
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-full w-full">
          <Image
            src="/david-vives-TZdh8NdfIfs-unsplash.jpg"
            alt="Clients on site"
            fill
            className="object-cover"
            priority
          />
          {/* Red vertical ribbon with rotated text */}
          <div className="absolute lg:inset-y-0 lg:right-0 bg-primary flex items-center justify-center lg:w-[240px] px-6 py-3 sm:px-8 sm:py-4 lg:px-0 lg:py-0">
            <div className="flex lg:flex-col lg:items-center lg:justify-center gap-2 lg:gap-0">
              <span className="text-white/90 uppercase tracking-[0.25em] text-xs lg:text-sm font-heading">
                Here to Serve
              </span>
              <span className="text-white font-heading font-semibold text-lg sm:text-xl lg:text-4xl leading-none lg:-rotate-90 lg:mt-6 whitespace-nowrap">
                Feel Free to Contact Us
              </span>
            </div>
          </div>
          </div>
        </AnimateOnScroll>

        {/* Right form side */}
        <AnimateOnScroll direction="right" className="lg:col-span-7 h-full">
          <div className="bg-secondary py-12 px-6 lg:px-10 flex items-center justify-center h-full">
          {/* Framed contact card */}
          <div className="relative z-10 w-full max-w-[820px] border-[20px] border-[#3E4095] lg:-ml-6 xl:-ml-8">
            <div className="bg-[#2B2E83] p-6 md:p-8 text-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="58280fc8-b4a5-4717-88ed-db34dac3833a" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white text-black px-4 py-4 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white text-black px-4 py-4 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white text-black px-4 py-4 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div>
                  <select
                    name="subject"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white text-black px-4 py-4 outline-none disabled:opacity-20 disabled:cursor-not-allowed"
                  >
                    <option value="" disabled selected>Select subject</option>
                    <option value="Property Inquiry">Property Inquiry</option>
                    <option value="Book Inspection">Book Inspection</option>
                    <option value="Payment / Allocation">Payment / Allocation</option>
                    <option value="Partnership / Referral">Partnership / Referral</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white text-black px-4 py-4 h-40 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-4 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>Submit</span>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


