import React from 'react';
import { Phone, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function MobileStickyCall({ onOpenAdmissions }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-xl border-t border-purple-100 shadow-2xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          className="py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call {SCHOOL_INFO.phone}</span>
        </a>

        <button
          onClick={onOpenAdmissions}
          className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#161E54] to-[#7B2CBF] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
}
