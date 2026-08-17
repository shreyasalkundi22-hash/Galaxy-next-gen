import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import GalaxyCanvas from './components/GalaxyCanvas';
import CustomCursor from './components/CustomCursor';
import GalaxyScrollbar from './components/GalaxyScrollbar';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurWorld from './components/OurWorld';
import Programs from './components/Programs';
import Extracurricular from './components/Extracurricular';
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MobileStickyCall from './components/MobileStickyCall';
import AdmissionsModal from './components/AdmissionsModal';

export default function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenAdmissions = () => {
    setAdmissionsModalOpen(true);
  };

  const handleCloseAdmissions = () => {
    setAdmissionsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#4F46E5] selection:text-white relative overflow-x-hidden">
      {/* Interactive Galaxy Canvas Background */}
      <GalaxyCanvas />

      {/* Custom Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Custom Planet Orbit Interactive Scrollbar */}
      <GalaxyScrollbar />

      {/* Top Orbit Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Cinematic Preloader */}
      <Preloader />

      {/* Floating Liquid-Glass Navigation Bar */}
      <Header onOpenAdmissions={handleOpenAdmissions} />

      <main className="relative z-10">
        {/* Full Viewport Cinematic Hero */}
        <Hero onOpenAdmissions={handleOpenAdmissions} />

        {/* Hero -> About Masked Transition & Editorial Section */}
        <AboutUs />

        {/* "Our World" Interactive Visual Panels */}
        <OurWorld onOpenAdmissions={handleOpenAdmissions} />

        {/* Programs Bento Grid Showcase */}
        <Programs onOpenAdmissions={handleOpenAdmissions} />

        {/* Co-Curricular Enrichment & Marquee Typography */}
        <Extracurricular onOpenAdmissions={handleOpenAdmissions} />

        {/* Campus Facilities Visual Gallery */}
        <Facilities />

        {/* Educators Showcase */}
        <Faculty />

        {/* Editorial Masonry Gallery & Lightbox */}
        <Gallery />

        {/* Parent Reviews Slider */}
        <Testimonials />

        {/* High-Conversion Admission Enquiry Form */}
        <Admissions />

        {/* Location & Map Section */}
        <ContactUs onOpenAdmissions={handleOpenAdmissions} />
      </main>

      {/* Unforgettable Display Footer */}
      <Footer onOpenAdmissions={handleOpenAdmissions} />

      {/* Mobile Sticky Quick Contact */}
      <MobileStickyCall onOpenAdmissions={handleOpenAdmissions} />

      {/* Admissions Modal */}
      <AdmissionsModal isOpen={admissionsModalOpen} onClose={handleCloseAdmissions} />
    </div>
  );
}
