import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [orbitPos, setOrbitPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [hoverType, setHoverType] = useState(null); // 'button' | 'image' | 'gallery' | 'nav' | 'program' | null
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [trails, setTrails] = useState([]);

  const posRef = useRef({ x: -100, y: -100 });
  const orbitRef = useRef({ x: -100, y: -100 });
  const velocityRef = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let lastTime = performance.now();
    let lastX = -100;
    let lastY = -100;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      posRef.current = { x: clientX, y: clientY };
      setPosition({ x: clientX, y: clientY });

      // Velocity calculation
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;
      velocityRef.current = Math.min(speed, 5);

      lastTime = now;
      lastX = clientX;
      lastY = clientY;

      // Spawn star dust trail if velocity is high
      if (speed > 0.4 && Math.random() < 0.4) {
        const p = {
          id: Math.random(),
          x: clientX + (Math.random() - 0.5) * 8,
          y: clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * 3 + 2,
          color: ['#F59E0B', '#4F46E5', '#EC4899', '#06B6D4'][Math.floor(Math.random() * 4)]
        };
        setTrails((prev) => [...prev.slice(-10), p]);
      }

      // Check hover element type & custom text label
      const cursorTarget = e.target.closest('[data-cursor]');
      const buttonTarget = e.target.closest('button, .btn, a[href^="tel:"], [role="button"]');
      const imgTarget = e.target.closest('img, .img-hover');
      const navTarget = e.target.closest('nav a, header a');
      const galleryTarget = e.target.closest('#gallery [data-cursor], .gallery-item');
      const programTarget = e.target.closest('#programs [data-cursor], .program-card');

      if (cursorTarget) {
        const attrText = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(attrText);

        if (galleryTarget || attrText === 'EXPLORE') setHoverType('gallery');
        else if (programTarget || attrText === 'PROGRAM') setHoverType('program');
        else if (attrText === 'VIEW') setHoverType('image');
        else setHoverType('button');
      } else if (buttonTarget) {
        setCursorText('EXPLORE');
        setHoverType('button');
      } else if (navTarget) {
        setCursorText('NAVIGATE');
        setHoverType('nav');
      } else if (imgTarget) {
        setCursorText('VIEW');
        setHoverType('image');
      } else {
        setCursorText('');
        setHoverType(null);
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      const newRipple = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => setIsClicking(false), 350);
    };

    // Smooth Lerp Loop for Physics Lag
    const loop = () => {
      const targetX = posRef.current.x;
      const targetY = posRef.current.y;

      // Orbit lags behind planet
      orbitRef.current.x += (targetX - orbitRef.current.x) * 0.12;
      orbitRef.current.y += (targetY - orbitRef.current.y) * 0.12;

      setOrbitPos({ x: orbitRef.current.x, y: orbitRef.current.y });
      animFrameRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  const isHovered = !!hoverType;

  return (
    <>
      {/* Click Ripple Effect */}
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          initial={{ scale: 0.2, opacity: 0.9 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: r.x - 20,
            top: r.y - 20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid #F59E0B',
            boxShadow: '0 0 16px rgba(245, 158, 11, 0.8)',
            pointerEvents: 'none',
            zIndex: 9996
          }}
        />
      ))}

      {/* Star Dust Trail Particles */}
      {trails.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: t.y + 10 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: t.x - t.size / 2,
            top: t.y - t.size / 2,
            width: t.size,
            height: t.size,
            backgroundColor: t.color,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9997,
            boxShadow: `0 0 8px ${t.color}`
          }}
        />
      ))}

      {/* Outer Rotating Orbit Ring + Star (Lagging Behind for Depth) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        animate={{
          x: orbitPos.x - (isHovered ? 40 : 16),
          y: orbitPos.y - (isHovered ? 40 : 16),
          width: isHovered ? 80 : 32,
          height: isHovered ? 80 : 32,
          scale: isClicking ? 0.85 : 1
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 240 }}
      >
        {/* Orbit Ring */}
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 ${
            isHovered
              ? 'border-amber-400/80 bg-[#1E1B4B]/90 backdrop-blur-md shadow-2xl ring-2 ring-amber-400/30'
              : 'border-indigo-400/50 bg-indigo-950/20 backdrop-blur-xs'
          } relative flex items-center justify-center`}
        >
          {/* Rotating Celestial Star on Orbit Path */}
          <div className="absolute inset-0 animate-orbit pointer-events-none">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-md shadow-amber-400/80" />
          </div>

          {/* Contextual Text Label */}
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white text-[10px] font-black tracking-widest uppercase text-center px-1 font-display"
            >
              {cursorText || 'EXPLORE'}
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Tiny Central Planet Sphere */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - (isHovered ? 0 : 5),
          y: position.y - (isHovered ? 0 : 5),
          scale: isHovered ? 0 : isClicking ? 0.7 : 1
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
      >
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#4F46E5] to-[#EC4899] shadow-lg shadow-amber-400/60 border border-white" />
      </motion.div>
    </>
  );
}
