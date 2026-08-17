import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    // Smooth Lerp Loop
    const loop = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.25;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.25;
      setPosition({ x: currentRef.current.x, y: currentRef.current.y });
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);

    // Mouse events (Desktop / Laptop)
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Touch events (Mobile / Tablet)
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        targetRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        currentRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        setIsVisible(true);
        triggerTapAnimation();
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        targetRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        if (!isVisible) setIsVisible(true);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => setIsVisible(false), 1500);
    };

    // Tap / Click Feedback Animation
    const handleMouseDown = () => {
      triggerTapAnimation();
    };

    const triggerTapAnimation = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      initial={{ opacity: 0 }}
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        opacity: isVisible ? 1 : 0,
        scale: isClicking ? 1.6 : 1
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { type: 'spring', damping: 18, stiffness: 300 }
      }}
    >
      {/* Small Inner Glowing Celestial Planet Only */}
      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#4F46E5] to-[#EC4899] shadow-lg shadow-amber-400/70 border border-white" />
    </motion.div>
  );
}
