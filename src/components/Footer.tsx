'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-secondary relative overflow-hidden min-h-[500px]">

      <div className="max-w-7xl mx-auto px-4 py-13 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/PWANlogo.png"
                alt="PWAN Elite Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering your success with land expertise. PWAN Elite is your trusted partner in real estate investment and property development across Nigeria.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="bg-white border border-secondary w-8 h-8 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="bg-white border border-secondary w-8 h-8 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <span className="text-xs font-bold">t</span>
              </a>
              <a href="#" className="bg-white border border-secondary w-8 h-8 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
              <a href="#" className="bg-white border border-secondary w-8 h-8 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <span className="text-xs font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Land Listings
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Real Estate Advisory</li>
              <li className="text-sm opacity-90">Digital Marketing</li>
              <li className="text-sm opacity-90">Property Development</li>
              <li className="text-sm opacity-90">Design & Strategy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="text-sm opacity-90">
                <strong>Email:</strong><br />
                pwanelites@gmail.com
              </div>
              <div className="text-sm opacity-90">
                <strong>Phone:</strong><br />
                08177500018<br />
                08030646564
              </div>
              <div className="text-sm opacity-90">
                <strong>Address:</strong><br />
                25 David Adokunle Street<br />
                Lily Estate, Amuwo-Odofin
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} PWAN Elite. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large PWAN ELITE SVG Background */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] opacity-50 pointer-events-none">
        <Image
          src="/PWANELITE FOOTER BIG TEXT.svg"
          alt="PWAN ELITE"
          fill
          className="object-cover"
        />
      </div>
    </footer>
  );
}
