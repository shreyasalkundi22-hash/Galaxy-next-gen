import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, GraduationCap, Clock, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function ContactUs({ onOpenAdmissions }) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Campus Location</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            Get In Touch With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            Visit our school campus on Sulla Road, Hubli, Karnataka or call us directly for admission guidance.
          </motion.p>
        </div>

        {/* Info & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Main Contact Detail Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white p-1 border border-purple-200 shadow-sm flex items-center justify-center">
                  <img src={logoImg} alt={SCHOOL_INFO.name} className="w-full h-full object-contain rounded-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 leading-tight">
                    {SCHOOL_INFO.name}
                  </h3>
                  <span className="text-xs font-semibold text-purple-700">Hubli, Karnataka</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-[#7B2CBF] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Address</span>
                    <p className="text-sm font-semibold text-slate-800">
                      Sulla Road, Hubli, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Phone Number</span>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="text-lg font-black text-slate-900 hover:text-[#7B2CBF]">
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Now, Admission Enquiry, Get Directions */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="py-3 px-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs text-center shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={onOpenAdmissions}
                  className="py-3 px-3 rounded-2xl bg-[#161E54] hover:bg-[#7B2CBF] text-white font-extrabold text-xs text-center shadow-xs flex items-center justify-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Enquiry</span>
                </button>

                <a
                  href={SCHOOL_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs text-center shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-purple-600" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Visit Callout */}
            <div className="p-6 rounded-3xl bg-purple-900 text-white shadow-lg flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-amber-400 text-slate-950 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-display">Visit Our Campus</h4>
                <p className="text-xs text-purple-200 font-normal">
                  Parents are welcome to visit our Sulla Road campus for direct guided admissions walkthroughs.
                </p>
              </div>
            </div>

          </div>

          {/* Right Map Preview Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative min-h-[380px]">
            <iframe
              title="Galaxy Next Gen Pre School Location Sulla Road Hubli"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30797.712711097864!2d75.120000!3d15.360000!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d72111111111%3A0x1111111111111111!2sSulla%20Rd%2C%20Hubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7B2CBF]" />
              <span>Sulla Road, Hubli, Karnataka</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
