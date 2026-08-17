import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target or parent has custom cursor attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#7B2CBF] pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.1 }}
      />

      {/* Outer Ring / Contextual Label Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-purple-500/60 pointer-events-none z-[9998] flex items-center justify-center bg-[#161E54]/90 text-white font-extrabold text-[10px] tracking-wider uppercase backdrop-blur-md shadow-lg"
        animate={{
          x: position.x - (isHovered ? 36 : 18),
          y: position.y - (isHovered ? 36 : 18),
          width: isHovered ? 72 : 36,
          height: isHovered ? 72 : 36,
          scale: isHovered ? 1.1 : 1,
          borderColor: isHovered ? '#F59E0B' : 'rgba(123, 44, 191, 0.4)'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
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
