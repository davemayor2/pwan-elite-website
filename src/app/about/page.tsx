import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/maximillian-conacher-sPpe2D7VbpM-unsplash.jpg)'
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Foreground Image - Hand holding house */}
        <div className="absolute right-20 bottom-0 z-10 hidden lg:block">
          <Image
            src="/About Us Hero.png"
            alt="Hand holding house model"
            width={700}
            height={900}
            className="object-contain"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center min-h-screen">
            {/* Left Column - Text Content */}
            <AnimateOnScroll direction="left">
              <div className="text-white py-16">
                {/* Eyebrow Tag */}
                <div className="glass-red inline-flex items-center gap-3 mb-6 px-4 py-2">
                <Image
                  src="/Home Page Icon.svg"
                  alt="Home icon"
                  width={20}
                  height={20}
                  className="text-white"
                />
                <span className="text-white text-sm font-medium tracking-wide uppercase">
                  Exposing Clients To A Goldmine
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Building Wealth Through Real Estate Ownership
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Secure your future with premium land investments from Nigeria's trusted real estate network.
              </p>
                <Link href="/properties" className="btn-primary px-8 py-4 text-lg font-semibold">
                  Discover Available Estates
                </Link>
              </div>
            </AnimateOnScroll>
            
            {/* Right Column - Space for foreground image */}
            <AnimateOnScroll direction="right" delay={0.2}>
              <div className="hidden lg:block"></div>
            </AnimateOnScroll>
          </div>
        </div>
        
        
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <AnimateOnScroll direction="fade">
            <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/About Us heading Svg.svg" alt="About heading mark" width={40} height={20} />
              <h2 className="text-3xl font-bold text-secondary font-heading">Who We Are</h2>
            </div>
              <h3 className="text-4xl font-bold text-secondary font-heading">Empowering You Through Real Estate</h3>
            </div>
          </AnimateOnScroll>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Side - Image */}
            <AnimateOnScroll direction="left" delay={0.2}>
              <div className="relative h-96 lg:h-[300px]">
              <Image
                src="/pexels-davidmcbee-1546168.jpg"
                alt="PWAN Elite Team"
                fill
                className="object-cover"
              />
              </div>
            </AnimateOnScroll>

            {/* Right Side - Company Profile */}
            <AnimateOnScroll direction="right" delay={0.3}>
              <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  PWAN Elite Realtors & Investment Ltd is a Real Estate Network Marketing Company established in 2021 and registered with the Corporate Affairs Commission as PWAN Elite Realtors & Investment Ltd. We are proudly licensed by the Lagos State Real Estate Regulatory Authority (LASRERA) and fully committed to delivering secure, accessible, and high-value land investment opportunities across Nigeria.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are developers of prosperity. PWAN Elite has grown into a premium, value-driven real estate brand known for trust, transparency, and timely delivery. Our projects are carefully curated for high returns on investment, with flexible, investor-friendly payment structures designed to accommodate every income level.
                </p>
              </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Bottom Content - Full Width */}
          <AnimateOnScroll direction="fade" delay={0.4}>
            <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Since inception, we have helped over 2000+ Nigerians both home and in diaspora acquire residential and commercial properties across Anambra, Lagos, Delta, Asaba and Aba. We specialize in residential and commercial land investment in prime, fast-developing areas including Lagos, Epe, Asaba, Owerri, Imo, and Aba — every estate is carefully selected for its growth potential, infrastructure promise, and clear documentation.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              PWAN Elite is the proud owner of Urban Legacy Estate in Lagos, Elite City Estate and Elite Haven in Asaba, and Elite Empire Estate in Owerri, among many others — each one a symbol of our commitment to smart investment and modern living.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Our success is driven by a dynamic team of passionate real estate and creative professionals who prioritize prompt service delivery, honest communication, client satisfaction, and strong after-sales support. We ensure investors enjoy seamless inspections, verified documentation, and stress-free allocation processes.
            </p>
            
            <p className="text-gray-700 leading-relaxed font-semibold">
              At PWAN Elite, we don't just sell land — we build futures, create wealth, and open doors to generational prosperity.
            </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-16" style={{ backgroundColor: '#DAE0FF' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <AnimateOnScroll direction="fade">
            <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-white px-6 py-3 font-semibold mb-4">
              Learn What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading">
              Turning Dreams into Deeds
            </h2>
            </div>
          </AnimateOnScroll>

          {/* Three Column Layout */}
          <AnimateOnScroll direction="fade" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Mission</h3>
              <p className="text-secondary leading-relaxed">
                To discover affordable, fast-developing lands and make them accessible to customers while also providing guidance on how to acquire land and build a home.
              </p>
            </div>

            {/* Our Vision */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Vision</h3>
              <p className="text-secondary leading-relaxed">
                To make home ownership a reality and become Africa's most reliable real estate company by making property ownership easy, affordable, and rewarding for everyone.
              </p>
            </div>

            {/* Our Core Values */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Core Values</h3>
              <div className="text-secondary leading-relaxed space-y-1">
                <div><strong>A</strong> - Accountability</div>
                <div><strong>R</strong> - Responsibility</div>
                <div><strong>I</strong> - Integrity</div>
                <div><strong>S</strong> - Service</div>
                <div><strong>E</strong> - Excellence</div>
              </div>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading">
              What We Do
            </h2>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {/* Service 1: Land Sales */}
            <div className="bg-white shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 lg:h-64">
                  <Image
                    src="/maximillian-conacher-sPpe2D7VbpM-unsplash.jpg"
                    alt="Land Sales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                    Land Sales (Residential & Commercial)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We offer genuine and strategically located plots for both residential and commercial purposes. Every property is thoroughly verified to ensure long-term value and peace of mind for our clients.
                  </p>
                  <Link href="/contact" className="group inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Contact Us
                    <svg className="contact-arrow w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2: Estate Layout, Construction & Development */}
            <div className="bg-white shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 lg:h-64">
                  <Image
                    src="/krzysztof-hepner-978RAXoXnH4-unsplash.jpg"
                    alt="Estate Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                    Estate Layout, Construction & Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our team works with trusted developers to design, develop, and manage modern estates that meet global standards. We create thriving communities with proper infrastructure and amenities.
                  </p>
                  <Link href="/contact" className="group inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Contact Us
                    <svg className="contact-arrow w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3: Documentation Assistance */}
            <div className="bg-white shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 lg:h-64">
                  <Image
                    src="/pexels-fauxels-3184465.jpg"
                    alt="Documentation Assistance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                    Documentation Assistance (Survey, Deed & Allocation)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We simplify the land documentation process from surveys to deed preparation and allocation. Every document is properly handled and legally recognized for complete ownership confidence.
                  </p>
                  <Link href="/contact" className="group inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Contact Us
                    <svg className="contact-arrow w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4: Flexible Payment Plans */}
            <div className="bg-white shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 lg:h-64">
                  <Image
                    src="/pexels-davidmcbee-1546168.jpg"
                    alt="Payment Plans"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                    Flexible Payment Plans (Outright & Installment)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We believe land ownership should be achievable for everyone. Our flexible payment options include outright purchase or convenient installments to make your investment comfortable.
                  </p>
                  <Link href="/contact" className="group inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Contact Us
                    <svg className="contact-arrow w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 5: Real Estate Investment Education */}
            <div className="bg-white shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 lg:h-64">
                  <Image
                    src="/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg"
                    alt="Investment Education"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                    Real Estate Investment Education & Support
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Knowledge is power in real estate. We provide continuous education, mentorship, and guidance on property value, titles, and smart investment strategies for long-term wealth building.
                  </p>
                  <Link href="/contact" className="group inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Contact Us
                    <svg className="contact-arrow w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 6: Real Estate Investment Consultancy */}
            <div className="bg-white shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="relative h-48 lg:h-64">
                  <Image
                    src="/david-vives-TZdh8NdfIfs-unsplash.jpg"
                    alt="Investment Consultancy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                    Real Estate Investment Consultancy
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our experienced consultants guide you in making informed and profitable property decisions. We analyze locations, market trends, and investment returns to help you choose the right property.
                  </p>
                  <Link href="/contact" className="group inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Contact Us
                    <svg className="contact-arrow w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
