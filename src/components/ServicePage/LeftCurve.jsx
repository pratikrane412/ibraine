import React from 'react';
import { motion } from 'framer-motion';

export default function LeftCurve({ top = "-100px", className = "" }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{ top }}
      className={`curve pointer-events-none absolute left-[10%] w-[900px] h-[480px] border-[3.5px] border-[#102c63]/30 rounded-[50%] -z-0 ${className}`}
      animate={{
        translateX: ['-5%', '5%', '-5%'],
        rotate: [6, 12, 6],
        opacity: [0.35, 0.65, 0.35]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}