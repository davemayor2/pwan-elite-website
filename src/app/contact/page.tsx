'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contact Hero Section */}
      <section className="bg-secondary text-white py-24 pt-60">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for personalized real estate advisory and property inquiries
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-primary text-white px-6 py-2 absolute -left-10 top-59 transform -rotate-90 origin-top-left z-10">
                <span className="text-sm font-semibold">FEEL FREE TO CONTACT US</span>
              </div>
              <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm border border-gray-200">
                <input type="hidden" name="access_key" value="58280fc8-b4a5-4717-88ed-db34dac3833a" />
                
                <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" disabled selected>Select subject</option>
                      <option value="Property Inquiry">Property Inquiry</option>
                      <option value="Book Inspection">Book Inspection</option>
                      <option value="Payment / Allocation">Payment / Allocation</option>
                      <option value="Partnership / Referral">Partnership / Referral</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-red-to-black w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our team of real estate experts is ready to help you find the perfect property 
                  investment opportunity. Contact us today for personalized advisory services and 
                  to learn more about our available properties.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-300 w-14 h-14 flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email</h3>
                    <p className="text-gray-700">pwanelites@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-300 w-14 h-14 flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Phone</h3>
                    <p className="text-gray-700">08177500018</p>
                    <p className="text-gray-700">08030646564</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-300 w-14 h-14 flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Address</h3>
                    <p className="text-gray-700">
                      25 David Adokunle Street<br />
                      Lily Estate, Amuwo-Odofin<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-secondary mb-3">Office Hours</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
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

