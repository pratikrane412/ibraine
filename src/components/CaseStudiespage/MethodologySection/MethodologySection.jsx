import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ════ LEFT SIDE: TEXT CONTENT ════ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Methodology <br /> and Approach
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10">
            we combine research, creativity, and industry insights to design strategies tailored to your goals. Uncover the step-by-step journey from idea to execution that ensures our campaigns deliver tangible results.
          </p>

          <div className="flex">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-3.5 border-2 border-[#fdb813] text-[#fdb813] font-bold rounded-md hover:bg-[#fdb813] hover:text-white transition-all duration-300"
            >
              Book Your Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* ════ RIGHT SIDE: STYLED IMAGE ════ */}
        <div className="relative flex justify-center items-center">
          
          {/* Decorative Spark Icon (Green) */}
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-10 left-0 z-20 text-[#ccff00]"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 3v3M18.36 5.64l-2.12 2.12M21 12h-3M18.36 18.36l-2.12-2.12M12 21v-3M5.64 18.36l2.12-2.12M3 12h3M5.64 5.64l2.12 2.12" />
            </svg>
          </motion.div>

          {/* Background Blob Shape */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="absolute w-[90%] h-[90%] bg-gray-100 -z-10"
             style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          ></motion.div>

          {/* Main Image with Mask */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[500px] aspect-square overflow-hidden flex items-end justify-center"
            style={{ borderRadius: "50% 50% 40% 40% / 60% 60% 30% 30%" }}
          >
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
               alt="Digital Strategist" 
               className="w-full h-full object-cover"
             />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MethodologySection;