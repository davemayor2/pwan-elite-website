import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollingServicesBar from '@/components/ScrollingServicesBar';
import AboutBrief from '@/components/AboutBrief';
import ImpactStats from '@/components/ImpactStats';
import FeaturedListings from '@/components/FeaturedListings';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScrollingServicesBar />
      <AnimateOnScroll direction="fade">
        <AboutBrief />
      </AnimateOnScroll>
      <AnimateOnScroll direction="fade">
        <ImpactStats />
      </AnimateOnScroll>
      <AnimateOnScroll direction="fade">
        <FeaturedListings />
      </AnimateOnScroll>
      <AnimateOnScroll direction="fade">
        <WhyChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll direction="fade">
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll direction="fade">
        <ContactSection />
      </AnimateOnScroll>
      <Footer />
    </div>
  );
}
