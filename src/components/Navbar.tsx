'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isAboutActive = () => {
    return pathname === '/about' || pathname === '/about/team';
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Bar - Contact & Social Media with Background Image */}
      <div className="relative text-white py-2 sm:py-2.5 lg:py-3 overflow-hidden text-xs sm:text-sm" style={{
        backgroundImage: 'url(/navbar-frame.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '46px'
      }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0 font-body h-full">
          {/* Left Section - Contact Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 z-10 relative flex-1">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>pwanelites@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>08177500018, 08030646564</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>25 David Adokunle Street, Lily Estate, Amuwo-Odofin</span>
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="hidden sm:flex items-center space-x-3 z-10 relative sm:ml-4">
            <a href="#" className="w-7 h-7 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
              <span className="text-xs font-bold">f</span>
            </a>
            <a href="#" className="w-7 h-7 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="w-7 h-7 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
              <span className="text-xs font-bold">in</span>
            </a>
            <a href="#" className="w-7 h-7 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/PWANlogo.png"
                alt="PWAN Elite Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 font-heading">
              <Link href="/" className={`font-medium text-lg transition-colors ${
                isActive('/') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
              }`}>
                Home
              </Link>
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  className={`font-medium text-lg transition-colors flex items-center ${
                    isAboutActive() ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  About Us
                  <svg className={`w-4 h-4 ml-1 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-200 z-50">
                    <Link href="/about" className={`block px-4 py-3 text-sm transition-colors ${
                      isActive('/about') ? 'text-primary font-bold bg-red-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}>
                      Who We Are
                    </Link>
                    <Link href="/about/team" className={`block px-4 py-3 text-sm transition-colors ${
                      isActive('/about/team') ? 'text-primary font-bold bg-red-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}>
                      Our Team
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/properties" className={`font-medium text-lg transition-colors ${
                isActive('/properties') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
              }`}>
                Our properties
              </Link>
              <Link href="/media" className={`font-medium text-lg transition-colors ${
                isActive('/media') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
              }`}>
                Media
              </Link>
              <Link href="/contact" className={`px-8 py-3 font-semibold text-lg btn-dark-wipe ${
                isActive('/contact') ? 'bg-primary text-white' : 'bg-primary text-white'
              }`}>
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden bg-primary text-white p-2.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 font-heading">
                <Link href="/" className={`block px-3 py-2 font-medium text-lg transition-colors ${
                  isActive('/') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                }`}>
                  Home
                </Link>
                
                {/* Mobile About Us Dropdown */}
                <div>
                  <button
                    className={`block w-full text-left px-3 py-2 font-medium text-lg transition-colors ${
                      isAboutActive() ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                    }`}
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  >
                    About Us
                  </button>
                  {isAboutDropdownOpen && (
                    <div className="pl-6 space-y-1">
                      <Link href="/about" className={`block px-3 py-2 text-sm transition-colors ${
                        isActive('/about') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                      }`}>
                        Who We Are
                      </Link>
                      <Link href="/about/team" className={`block px-3 py-2 text-sm transition-colors ${
                        isActive('/about/team') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                      }`}>
                        Our Team
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link href="/properties" className={`block px-3 py-2 font-medium text-lg transition-colors ${
                  isActive('/properties') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                }`}>
                  Our properties
                </Link>
                <Link href="/media" className={`block px-3 py-2 font-medium text-lg transition-colors ${
                  isActive('/media') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                }`}>
                  Media
                </Link>
                <Link href="/contact" className={`block px-3 py-2 font-semibold text-lg transition-colors ${
                  isActive('/contact') ? 'bg-primary text-white' : 'bg-primary text-white'
                }`}>
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}