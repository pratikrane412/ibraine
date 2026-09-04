import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientCurve({ reverse = false, top = "-120px", className = "" }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{ top }}
      className={`curve pointer-events-none absolute left-1/2 -translate-x-1/2 w-[1100px] h-[500px] border-[3px] border-[#102c63]/30 rounded-[50%] -z-0 ${className}`}
      animate={{
        translateX: reverse ? ['-52%', '-48%', '-52%'] : ['-48%', '-52%', '-48%'],
        rotate: reverse ? [-12, -8, -12] : [8, 12, 8],
        opacity: [0.35, 0.65, 0.35]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}