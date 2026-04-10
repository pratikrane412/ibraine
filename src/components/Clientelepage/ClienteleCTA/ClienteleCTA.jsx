import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ClienteleCTA = () => {
  return (
    <section className="relative w-full bg-[#0a356e] py-20 md:py-24 overflow-hidden">
      
      {/* Decorative Blur Circle (Matching the right side of your image) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Label Animation */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#fdb813] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6"
        >
          Get In Touch
        </motion.p>

        {/* Heading Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Need a Custom Plan? <br className="hidden md:block" />
          Send us a message for help.
        </motion.h2>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fdb813] hover:bg-[#e5a610] text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 group hover:-translate-y-1 active:scale-95"
          >
            <span className="text-sm md:text-base">Contact us</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ClienteleCTA;