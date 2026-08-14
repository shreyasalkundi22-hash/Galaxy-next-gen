import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import ParentStories from './components/ParentStories';
import Events from './components/Events';
import Admissions from './components/Admissions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MobileStickyCall from './components/MobileStickyCall';
import AdmissionsModal from './components/AdmissionsModal';

export default function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);

  const handleOpenAdmissions = () => {
    setAdmissionsModalOpen(true);
  };

  const handleCloseAdmissions = () => {
    setAdmissionsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 font-sans selection:bg-[#7B2CBF] selection:text-white">
      {/* Opening Loader */}
      <Preloader />

      {/* Main Liquid Glass Navbar */}
      <Header onOpenAdmissions={handleOpenAdmissions} />

      <main>
        {/* Hero Section (Preserved starting layout) */}
        <Hero onOpenAdmissions={handleOpenAdmissions} />

        {/* About Galaxy Next Gen Section */}
        <AboutUs />

        {/* Programs Bento Grid Section */}
        <Programs onOpenAdmissions={handleOpenAdmissions} />

        {/* Learning Facilities Section (Coming Soon) */}
        <Facilities onOpenAdmissions={handleOpenAdmissions} />

        {/* Campus Gallery Section */}
        <Gallery />

        {/* Community Feedback & Updates */}
        <ParentStories onOpenAdmissions={handleOpenAdmissions} />
        <Events />

        {/* High-Conversion Admission Enquiry Form */}
        <Admissions />

        {/* Contact & Map Location Section */}
        <ContactUs onOpenAdmissions={handleOpenAdmissions} />
      </main>

      {/* Footer */}
      <Footer onOpenAdmissions={handleOpenAdmissions} />

      {/* Mobile Floating Action Bar */}
      <MobileStickyCall onOpenAdmissions={handleOpenAdmissions} />

      {/* Reusable Admissions Modal */}
      <AdmissionsModal isOpen={admissionsModalOpen} onClose={handleCloseAdmissions} />
    </div>
  );
}
