import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, GraduationCap, ChevronRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function Header({ onOpenAdmissions }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
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
      {/* Floating Liquid Glass Navigation Bar Container */}
      <header className="fixed top-0 inset-x-0 z-50 px-2.5 sm:px-4 md:px-6 pt-2.5 sm:pt-4 transition-all duration-500 pointer-events-none w-full box-border">
        <div
          className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 px-3 sm:px-5 py-2 sm:py-2.5 ${
            scrolled ? 'liquid-glass-navbar-scrolled' : 'liquid-glass-navbar'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 w-full">
            
            {/* Compact Flex Branding Container: [LOGO] + Name */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 sm:gap-3 group text-left min-w-0 shrink"
            >
              {/* Official School Logo Frame */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/95 p-0.5 shadow-md border border-purple-200/90 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                <img
                  src={logoImg}
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain rounded-lg sm:rounded-xl"
                />
              </div>

              {/* Exact School Branding Layout with PRE-PRIMARY SCHOOL on a Single Line */}
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-extrabold text-[11px] sm:text-xs md:text-sm tracking-tight font-display text-slate-900 leading-tight group-hover:text-[#7B2CBF] transition-colors whitespace-nowrap truncate">
                  GALAXY NEXT GEN
                </span>
                <span className="font-extrabold text-[9px] sm:text-[10px] md:text-[11px] tracking-wider text-[#7B2CBF] uppercase whitespace-nowrap leading-none mt-0.5">
                  PRE-PRIMARY SCHOOL
                </span>
              </div>
            </a>

            {/* Full Desktop Navigation Links (Visible on xl screens 1280px+) */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:text-[#7B2CBF] hover:bg-purple-100/60 rounded-full transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons & Mobile Hamburger Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Phone Button (Full text on md+, Icon on small) */}
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-800 bg-amber-400/20 border border-amber-300/80 hover:bg-amber-400/35 rounded-full transition-all shadow-xs group shrink-0"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-3 h-3 fill-slate-950" />
                </div>
                <span className="whitespace-nowrap hidden md:inline">{SCHOOL_INFO.phone}</span>
              </a>

              {/* Mobile Phone Icon Button */}
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex sm:hidden p-2 rounded-full bg-amber-400 text-slate-950 shadow-xs active:scale-95 transition-transform shrink-0"
                aria-label="Call School"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
              </a>

              {/* Always Visible Responsive Enquire Now Button */}
              <button
                onClick={onOpenAdmissions}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-extrabold text-white bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] hover:opacity-95 rounded-full shadow-md shadow-purple-900/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Enquire Now</span>
              </button>

              {/* Drawer Menu Button (Visible on screens below xl <1280px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex xl:hidden p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-purple-100/80 text-slate-800 hover:bg-purple-200/80 border border-purple-200/80 transition-colors shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Responsive Liquid Glass Drawer Menu (< 1280px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 top-[74px] sm:top-[82px] z-40 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-2xl xl:hidden max-h-[82vh] overflow-y-auto p-4 sm:p-5"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-purple-100/70 rounded-2xl transition-colors border-b border-slate-100/70"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                </a>
              ))}

              <div className="pt-4 mt-1 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>

                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="w-full py-2.5 px-5 rounded-2xl bg-amber-100 border border-amber-300 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call {SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
