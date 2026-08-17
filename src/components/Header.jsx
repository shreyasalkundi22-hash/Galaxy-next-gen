import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function Header({ onOpenAdmissions }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Our World', href: '#our-world' },
    { name: 'Programs', href: '#programs' },
    { name: 'Activities', href: '#activities' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Liquid Glass Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-500 pointer-events-none w-full box-border">
        <div
          className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 px-4 sm:px-6 py-2.5 sm:py-3 ${
            scrolled ? 'liquid-glass-navbar-scrolled' : 'liquid-glass-navbar'
          }`}
        >
          <div className="flex items-center justify-between gap-3 w-full">
            
            {/* Logo Container */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group text-left shrink-0"
              data-cursor="GALAXY"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-md border border-purple-200/90 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                <img
                  src={logoImg}
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xs sm:text-sm tracking-tight font-display text-slate-900 leading-tight group-hover:text-[#7B2CBF] transition-colors whitespace-nowrap">
                  GALAXY NEXT GEN
                </span>
                <span className="font-extrabold text-[10px] sm:text-[11px] tracking-wider text-[#7B2CBF] uppercase whitespace-nowrap leading-none mt-0.5">
                  PRE-PRIMARY SCHOOL
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-cursor="NAVIGATE"
                  className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#7B2CBF] hover:bg-purple-100/60 rounded-full transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-800 bg-amber-400/20 border border-amber-300/80 hover:bg-amber-400/35 rounded-full transition-all shadow-xs shrink-0"
                data-cursor="CALL"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 shrink-0">
                  <Phone className="w-3 h-3 fill-slate-950" />
                </div>
                <span className="whitespace-nowrap hidden md:inline">{SCHOOL_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenAdmissions}
                data-cursor="ENQUIRE"
                className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] hover:opacity-95 rounded-full shadow-md shadow-purple-900/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>Enquire Now</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex xl:hidden p-2 rounded-2xl bg-purple-100/80 text-slate-800 hover:bg-purple-200/80 border border-purple-200/80 transition-colors shrink-0 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Galaxy Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0D1B2A]/95 backdrop-blur-3xl text-white flex flex-col justify-between p-6 sm:p-10 xl:hidden overflow-y-auto"
          >
            {/* Background Mesh Glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

            <div className="pt-20">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-6">
                Explore Universe
              </span>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1 }}
                    className="text-2xl sm:text-4xl font-extrabold font-display hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-6 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Begin Admission Enquiry</span>
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full py-3 px-6 rounded-2xl bg-slate-800 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
