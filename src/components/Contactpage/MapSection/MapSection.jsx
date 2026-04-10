import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  // iBraine Andheri East, Mumbai Location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.954605988299!2d72.84650637502747!3d19.11072995092044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c919018e6907%3A0xc3f8e6c79a1f26a1!2siBraine%20-%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1715860000000!5m2!1sen!2sin";

  return (
    <section className="w-full h-[500px] lg:h-[650px] relative overflow-hidden bg-gray-100">
      
      {/* ════ THE FULL WIDTH MAP ════ */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="iBraine Location"
          className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-pointer"
        ></iframe>

        {/* ════ FLOATING INFO CARD (Matches Screenshot 1) ════ */}
        <div className="absolute bottom-12 left-6 md:left-24 z-20">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 max-w-[280px] md:max-w-[340px]"
          >
            <h4 className="text-[#fdb813] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">
              VISIT OUR OFFICE
            </h4>
            <p className="text-gray-900 font-bold text-sm md:text-lg leading-relaxed">
              Chandra Niwas CHS, Off Old Police <br className="hidden md:block" />
              Lane, Andheri East, Mumbai
            </p>
          </motion.div>
        </div>

        {/* Optional: Dark gradient overlay at bottom for smoothness */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
      </motion.div>
    </section>
  );
};

export default MapSection;