import React from 'react';
import { motion } from 'framer-motion';

export default function Illustration({ src, alt = "Visual Graphic", className = "" }) {
  return (
    <motion.div
      className={`illustration relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.015 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain relative z-10"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      {/* Structural SVG fallback layer */}
      <div className="absolute inset-0 border-2 border-[#102c63]/10 rounded-2xl -z-10 pointer-events-none" />
    </motion.div>
  );
}