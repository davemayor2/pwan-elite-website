import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-50 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 font-heading">
              Meet Our <span className="text-primary">Elite Team</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Behind every successful transaction is a passionate team of professionals driven by excellence and service. 
              At PWAN ELITE, our people are our greatest asset — combining real estate expertise with a genuine desire 
              to see every client succeed.
            </p>
            
            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 font-semibold text-lg hover:bg-red-700 transition-colors mb-12">
              Contact Our Team Today
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Hero SVG Image */}
      <section className="w-full">
        <Image
          src="/OUR TEAM HERO.svg"
          alt="Our Team Hero"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </section>

      
      {/* Our Elite Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading">
              Our <span className="text-primary">Elite</span> Team
            </h2>
          </div>

          {/* Managing Director - Featured Card */}
          <div className="flex justify-center mb-12">
            <div className="bg-white text-center">
              {/* Picture Frame with Red Border */}
              <div className="relative w-[400px] h-[500px] mx-auto mb-6 border-4 border-primary">
                <Image
                  src="/emeka.jpg"
                  alt="Emeka Justine"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Name and Title */}
              <h3 className="font-bold text-secondary mb-2 text-2xl font-heading">Emeka Justine</h3>
              <p className="text-primary text-lg font-semibold">Managing Director, PWAN Elite</p>
            </div>
          </div>

          {/* Other Team Members - 3 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Team Members */}
            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/korede1.png"
                  alt="Korede Tiamiyu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Korede Tiamiyu</h3>
              <p className="text-primary text-sm font-semibold">Head of Operations, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/pius.png"
                  alt="Pius Dabel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Pius Dabel</h3>
              <p className="text-primary text-sm font-semibold">Head of Accounts, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/1.png"
                  alt="Joshua Ihaza"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Joshua Ihaza</h3>
              <p className="text-primary text-sm font-semibold">Head Of Administration, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/tochukwu1.png"
                  alt="Isaiah Stanley"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Isaiah Stanley</h3>
              <p className="text-primary text-sm font-semibold">Head of Media, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/favour.png"
                  alt="Leo Favour"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Leo Favour</h3>
              <p className="text-primary text-sm font-semibold">Head Of Customer Service, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/david.png"
                  alt="Ola-John David"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Ola-John David</h3>
              <p className="text-primary text-sm font-semibold">Head Of IT, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/waleGraphic1.png"
                  alt="Ayodele Olawale"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Ayodele Olawale</h3>
              <p className="text-primary text-sm font-semibold">Head Of Presentation Designs, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/yinka1.png"
                  alt="Olayinka Ikuomola"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Olayinka Ikuomola</h3>
              <p className="text-primary text-sm font-semibold">Accounts Assistant, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/naomi1.png"
                  alt="Eze Ijeoma"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Eze Ijeoma</h3>
              <p className="text-primary text-sm font-semibold">Content Strategist, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/chisom1.png"
                  alt="Chisom Ogoke"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Chisom Ogoke</h3>
              <p className="text-primary text-sm font-semibold">Operations Surveyor, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/amara1.png"
                  alt="Amarachi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Amarachi</h3>
              <p className="text-primary text-sm font-semibold">Administrative Officer, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentees Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading">
              Our <span className="text-primary">Mentees</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/iheanacho.png"
                  alt="Iheanacho Okoro"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Iheanacho Okoro</h3>
              <p className="text-primary text-sm font-semibold">Mentee, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/Mama.png"
                  alt="Kalu Udodirim"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Kalu Udodirim</h3>
              <p className="text-primary text-sm font-semibold">Mentee, Lagos</p>
            </div>

            <div className="bg-white text-center">
              <div className="relative w-[280px] h-[350px] mx-auto mb-4 border-2 border-gray-200">
                <Image
                  src="/Joshua.jpg"
                  alt="Joshua Godwin"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-secondary mb-1 text-lg font-heading">Joshua Godwin</h3>
              <p className="text-primary text-sm font-semibold">Mentee, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: '#FFE5E5' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">
              Want to Work with Our Experts?
            </h2>
            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 font-semibold text-lg hover:bg-red-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
