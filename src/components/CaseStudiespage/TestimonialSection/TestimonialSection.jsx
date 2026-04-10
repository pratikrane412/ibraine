import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 font-sans">
      {/* ════ MAIN LIME CONTAINER ════ */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#adff2f] rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-xl"
      >
        
        {/* Header Text */}
        <div className="mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What they say about us?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#3b82f6] text-white px-4 py-1 text-sm md:text-base font-semibold rounded inline-block"
          >
            Our digital marketing agency is prepared to elevate your business to the next level.
          </motion.p>
        </div>

        {/* ════ TESTIMONIAL CARD ════ */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]"
        >
          
          {/* Left Side: FAQ Illustration Integration */}
          <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Subtle background circles for depth */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
            
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="https://img.freepik.com/free-vector/faq-concept-illustration_114360-5245.jpg" 
              alt="FAQ Illustration" 
              className="w-full h-auto max-w-[400px] relative z-10 drop-shadow-lg"
            />
          </div>

          {/* Right Side: Black Content Area */}
          <div className="md:w-1/2 bg-[#1a1a1a] text-white p-8 md:p-12 flex flex-col justify-center text-left relative">
            
            {/* Logo placeholder */}
            <div className="flex items-center gap-3 mb-8 opacity-90">
               <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-bold">DDP</span>
               </div>
               <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">
                  Accounting & <br /> Bookkeeping
               </p>
            </div>

            {/* Testimonial Text */}
            <blockquote className="relative">
              <span className="absolute -top-6 -left-4 text-6xl text-gray-700 opacity-30 select-none font-serif">“</span>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 relative z-10">
                “The team's expertise in targeting the right audience and crafting engaging content is evident in the results we’ve achieved. Their dedication and professionalism make them a trusted extension of our team.”
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="mt-auto">
              <h4 className="text-lime-400 font-bold text-lg">Mughda Parekh</h4>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mt-1">
                DDPAB Dubai — Head of Marketing
              </p>
            </div>

            {/* Decorative Stars */}
            <div className="absolute top-12 right-12 opacity-10">
               <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;