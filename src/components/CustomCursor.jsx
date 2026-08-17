import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let lastTrailTime = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText('');
      }

      // Add particle trail every 40ms
      const now = Date.now();
      if (now - lastTrailTime > 40) {
        lastTrailTime = now;
        const newParticle = {
          id: Math.random(),
          x: clientX,
          y: clientY,
          size: Math.random() * 6 + 4,
          color: ['#F59E0B', '#4F46E5', '#EC4899', '#06B6D4'][Math.floor(Math.random() * 4)]
        };
        setTrails((prev) => [...prev.slice(-12), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Particle Trail Sparkles */}
      {trails.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: t.y + 12 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: t.x,
            top: t.y,
            width: t.size,
            height: t.size,
            backgroundColor: t.color,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9997,
            boxShadow: `0 0 10px ${t.color}`
          }}
        />
      ))}

      {/* Small Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 rounded-full bg-[#4F46E5] pointer-events-none z-[9999] mix-blend-difference shadow-md"
        animate={{
          x: position.x - 7,
          y: position.y - 7,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.1 }}
      />

      {/* Outer Ring / Contextual Label Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-400/70 pointer-events-none z-[9998] flex items-center justify-center bg-[#1E1B4B]/90 text-white font-black text-[10px] tracking-widest uppercase backdrop-blur-md shadow-2xl"
        animate={{
          x: position.x - (isHovered ? 38 : 19),
          y: position.y - (isHovered ? 38 : 19),
          width: isHovered ? 76 : 38,
          height: isHovered ? 76 : 38,
          scale: isHovered ? 1.15 : 1,
          borderColor: isHovered ? '#F59E0B' : 'rgba(99, 102, 241, 0.5)'
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 220, mass: 0.15 }}
      >
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-1 text-center font-display"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
