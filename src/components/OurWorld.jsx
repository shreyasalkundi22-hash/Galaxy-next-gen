import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Heart, ArrowUpRight } from 'lucide-react';

export default function OurWorld({ onOpenAdmissions }) {
  const panels = [
    {
      title: "PLAY",
      tagline: "Joyful Movement & Social Play",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop",
      bgGradient: "from-purple-900/80 to-slate-950/80",
      accentColor: "text-amber-300"
    },
    {
      title: "LEARN",
      tagline: "Foundational Literacy & Phonics",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      bgGradient: "from-blue-900/80 to-slate-950/80",
      accentColor: "text-sky-300"
    },
    {
      title: "CREATE",
      tagline: "Art, Music & Color Discovery",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1200&auto=format&fit=crop",
      bgGradient: "from-pink-900/80 to-slate-950/80",
      accentColor: "text-pink-300"
    },
    {
      title: "EXPLORE",
      tagline: "Sensory Toys & Science Curiosity",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop",
      bgGradient: "from-emerald-900/80 to-slate-950/80",
      accentColor: "text-emerald-300"
    }
  ];

  return (
    <section id="our-world" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 border border-amber-200"
          >
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Interactive Experiences</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight uppercase"
          >
            OUR WORLD
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto"
          >
            Step inside the core pillars of daily discovery at Galaxy Next Gen Pre School.
          </motion.p>
        </div>

        {/* 4 Large Interactive Visual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {panels.map((panel, idx) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={onOpenAdmissions}
              className="relative rounded-3xl overflow-hidden shadow-xl group h-[360px] sm:h-[420px] cursor-pointer border-4 border-white"
              data-cursor={panel.title}
            >
              <img
                src={panel.image}
                alt={panel.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${panel.bgGradient} opacity-75 group-hover:opacity-85 transition-opacity duration-300 p-8 flex flex-col justify-between`} />

              {/* Panel Top Badge */}
              <div className="relative z-10 flex items-center justify-between text-white">
                <span className={`text-xs font-extrabold uppercase tracking-widest ${panel.accentColor}`}>
                  0{idx + 1} • Galaxy Universe
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Panel Bottom Typography */}
              <div className="relative z-10 text-white">
                <h3 className="text-4xl sm:text-6xl font-black font-display tracking-tight drop-shadow-lg group-hover:translate-x-2 transition-transform duration-300">
                  {panel.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-200 font-medium font-sans">
                  {panel.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
