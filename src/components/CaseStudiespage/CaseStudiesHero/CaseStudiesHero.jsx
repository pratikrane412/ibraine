import React from 'react';
import { motion } from 'framer-motion';

const CaseStudiesHero = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#2c66f6] flex items-center overflow-hidden font-sans">
      
      {/* 1. BACKGROUND DECORATIVE GRADIENTS */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[100%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] bg-blue-700/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT CONTENT SIDE --- */}
        <div className="text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-[72px] font-serif leading-[1.1] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Deep Dive into <br />
            Our Digital <br />
            Marketing <br />
            <span className="relative inline-block mt-2">
              Case Studies
              {/* Brand Yellow Marker Animation */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-[15px] bg-[#ffed4e] -z-10"
              ></motion.div>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 text-lg leading-relaxed max-w-lg mb-10 font-light"
          >
            Discover how our tailored approaches, data-driven insights, and creative solutions 
            have driven exceptional results for diverse clients across industries.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button className="bg-black text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-zinc-900 transition-all active:scale-95 shadow-2xl uppercase tracking-widest">
              Check out our case studies
            </button>
          </motion.div>
        </div>

        {/* --- RIGHT GRAPHIC SIDE: NEW IMAGE --- */}
        <div className="relative flex justify-center lg:justify-end items-end h-full">
          
          {/* Neon Sparkle Decor */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-0 left-10 text-[#ccff00] z-20"
          >
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className="absolute bottom-20 right-0 text-[#ccff00] z-20"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </motion.div>

          {/* THE IMAGE CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[500px] lg:max-w-[600px]"
          >
            {/* 
               IMAGE SOURCE: Replace this src with your local path 
               (e.g., src="/image/laptop-girl.png") 
            */}
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="/images/CASEs.png" 
              alt="Digital Marketing Professional" 
              className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
            />

            {/* Decorative accent behind girl */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudiesHero;