'use client';

import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AboutBrief() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Eyebrow */}
        <AnimateOnScroll direction="fade">
          <div className="text-center mb-4 flex items-center justify-center gap-3">
          <Image src="/About Us heading Svg.svg" alt="About heading mark" width={65} height={33} />
          <span className="inline-block text-secondary font-heading font-semibold tracking-wide">About Us</span>
          </div>
        </AnimateOnScroll>

        {/* Main Title */}
        <AnimateOnScroll direction="fade" delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-secondary text-center leading-tight mb-6">
          Empowering Your Success
          <br className="hidden md:block" />
          <span className="block">with Land Expertise</span>
          </h2>
        </AnimateOnScroll>

        {/* Intro */}
        <AnimateOnScroll direction="fade" delay={0.2}>
          <p className="max-w-5xl mx-auto text-center text-gray-700 font-body mb-10">
          PWAN Elite Realtors & Investment Ltd is a Real Estate Network Marketing Company established in 2021 and registered with the Corporate Affairs Commission as PWAN Elite Realtors & Investment Ltd. We are proudly licensed by the Lagos State Real Estate Regulatory Authority (LASRERA) and fully committed to delivering secure, accessible, and high-value land investment opportunities across Nigeria.
          </p>
        </AnimateOnScroll>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-0 items-stretch">
          {/* Left Image */}
          <AnimateOnScroll direction="left" delay={0.3}>
            <div className="relative min-h-[280px] md:min-h-[360px] lg:min-h-0 lg:row-span-2 lg:h-full bg-gray-200">
              <Image
              src="/shot1.jpeg"
              alt="PWAN Elite Clients"
              fill
              className="object-cover"
              priority
            />
            </div>
          </AnimateOnScroll>

          {/* Mission + Vision Cards */}
          <div className="flex flex-col gap-6 self-stretch">
            {/* Mission */}
            <AnimateOnScroll direction="right" delay={0.3}>
              <div className="bg-secondary/10 border border-secondary/20 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/Our Mission.svg" alt="Mission" width={24} height={24} />
                <h3 className="text-secondary font-heading font-semibold text-lg">Our Mission</h3>
              </div>
              <p className="text-gray-800 font-body">
                To discover affordable, fast-developing lands and make them accessible to customers while also providing guidance on how to acquire land and build a home
              </p>
              </div>
            </AnimateOnScroll>

            {/* Vision */}
            <AnimateOnScroll direction="right" delay={0.4}>
              <div className="bg-secondary/10 border border-secondary/20 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/Our Vision.svg" alt="Vision" width={24} height={24} />
                <h3 className="text-secondary font-heading font-semibold text-lg">Our Vision</h3>
              </div>
              <p className="text-gray-800 font-body">
                To make home ownership a reality and become Africa's most reliable real estate company by making property ownership easy, affordable, and rewarding for everyone.
              </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll direction="fade" delay={0.5}>
          <div className="mt-10 text-center">
            <a href="/about" className="btn-dark-wipe inline-block">
            Learn More About Us
          </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


