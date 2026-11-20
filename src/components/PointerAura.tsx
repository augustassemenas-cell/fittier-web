import React, { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';

export const PointerAura: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);

  const smoothX = useSpring(rawX, { stiffness: 160, damping: 24, mass: 0.5 });
  const smoothY = useSpring(rawY, { stiffness: 160, damping: 24, mass: 0.5 });

  const background = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(124, 108, 240, 0.11), rgba(247, 213, 74, 0.03) 40%, transparent 72%)`;

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return;

    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const handleLeave = () => {
      rawX.set(-500);
      rawY.set(-500);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
    />
  );
};
