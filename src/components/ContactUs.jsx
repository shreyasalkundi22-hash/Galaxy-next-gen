import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, GraduationCap, Clock, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function ContactUs({ onOpenAdmissions }) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 border border-amber-300 shadow-xs"
          >
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>Campus Location & Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight uppercase"
          >
            VISIT GALAXY NEXT GEN
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            Visit our campus on Sulla Road, Hubli or call us directly for campus tours and admission guidance.
          </motion.p>
        </div>

        {/* Info & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Main Contact Detail Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white p-1 border border-purple-200 shadow-sm flex items-center justify-center shrink-0">
                  <img src={logoImg} alt={SCHOOL_INFO.name} className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 leading-tight">
                    {SCHOOL_INFO.name}
                  </h3>
                  <p className="text-xs text-amber-600 font-bold italic">{SCHOOL_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <MapPin className="w-5 h-5 text-[#7B2CBF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Address:</strong>
                    <span>{SCHOOL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5 fill-amber-500" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Phone Hotline:</strong>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="font-extrabold text-[#7B2CBF] text-base hover:underline">
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">School Hours:</strong>
                    <span>Monday - Saturday: 8:30 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] text-white shadow-xl flex items-center justify-between">
              <div>
                <h4 className="text-base font-extrabold font-display">Schedule a Campus Visit</h4>
                <p className="text-xs text-purple-200 font-medium">Experience our classrooms & facilities live</p>
              </div>
              <button
                onClick={onOpenAdmissions}
                className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Enquire Now
              </button>
            </div>

          </div>

          {/* Right Visual Map Frame */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative">
              <iframe
                title="Galaxy Next Gen Pre School Map Location"
                src="https://maps.google.com/maps?q=Sulla+Road,+Hubli,+Karnataka,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen=""
                loading="lazy"
              />
              
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Sulla Road, Hubli</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
