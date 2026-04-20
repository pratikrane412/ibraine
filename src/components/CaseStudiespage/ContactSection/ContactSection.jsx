import React from 'react';
import { Headphones, Puzzle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-poppins">
      
      {/* --- DECORATIVE ELEMENTS --- */}
      
      {/* Blue Puzzle Piece (Top Right) */}
      <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block animate-floating">
        <div className="w-24 h-24 lg:w-32 lg:h-32 text-blue-500">
           <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z"/>
           </svg>
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-4 left-[45%] w-6 h-6 bg-blue-500 rounded-full opacity-80 hidden lg:block"></div>
      <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 reveal-active">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="space-y-8 reveal-item">
          {/* Icon */}
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 shadow-sm">
            <Headphones size={24} />
          </div>

          <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
            Let's Talk with <br />
            Experienced <br />
            <span className="text-marker">Digital Marketing</span> <br />
            Consultant
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
            Ready to take your online presence to the next level? Our team of experts is here to help! Fill out the form, and let's start the journey towards achieving your digital goals.
          </p>

          <div className="pt-4">
             <p className="text-[#ffb400] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p>
             <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
               <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span> 
               +91 9321111753
             </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="relative reveal-item delay-1">
          
          {/* "Fill the form" Arrow Decoration */}
          <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
             <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
             <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
             </svg>
          </div>

          <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm"
              />
              <input 
                type="tel" 
                placeholder="Your phone" 
                className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm"
              />
              <textarea 
                placeholder="Message..." 
                rows="5"
                className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm resize-none"
              ></textarea>

              <button className="w-full sm:w-auto border-2 border-brand-yellow text-brand-yellow px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-yellow hover:text-white transition-all duration-300">
                Send Message
              </button>
            </form>

            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
               Let's Boost Your <span className="text-[#1a162d] font-black">Online Success!</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;