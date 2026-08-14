import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, GraduationCap, Heart, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Footer({ onOpenAdmissions }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      {/* Top Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-amber-400 via-[#7B2CBF] to-pink-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-md border border-amber-300 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold font-display tracking-tight text-white leading-tight">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-xs text-amber-300 italic">"{SCHOOL_INFO.tagline}"</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6 max-w-md">
              A joyful beginning for curious minds, creative hearts and confident futures. Located on Sulla Road, Hubli, Karnataka.
            </p>

            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{SCHOOL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-amber-300 transition-colors font-bold text-white">
                  {SCHOOL_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-6">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1 font-medium flex items-center gap-1.5"
                >
                  <span className="text-amber-400/60">•</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Admissions CTA & Back to Top */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-4">
                Admissions Open
              </h4>
              <p className="text-xs text-slate-300 mb-4">
                Enrollments open for Playgroup, Nursery, LKG, UKG and Evening Tuitions.
              </p>
              <button
                onClick={onOpenAdmissions}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Enquire Now</span>
              </button>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 border border-slate-700">
                  <ArrowUp className="w-3.5 h-3.5" />
                </div>
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© {SCHOOL_INFO.year} {SCHOOL_INFO.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for early childhood education in Hubli, Karnataka</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
