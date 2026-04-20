import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPhone, FiMail, FiCheck } from 'react-icons/fi';

const ContactSection = () => {
  const services = [
    "Search Engine Optimization",
    "Performance Marketing",
    "Social Media Marketing",
    "Google Analytics",
    "Web Design & Development",
    "Affiliate marketing",
    "Ecommerce Marketing"
  ];

  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">

        {/* ════ LEFT: THE FORM (Height Reduced) ════ */}
        <div className="lg:col-span-7 p-6 md:p-12 lg:p-16 border-r border-slate-100">
          <div className="mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f59e0b] mb-3">Step 01</p>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-950" style={{ fontFamily: "'Lora', serif" }}>Project Brief</h2>
          </div>

          <form className="space-y-8">
            
            {/* 6 Text Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Full Name*</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="John Doe" />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Email Address*</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="john@example.com" />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Phone Number*</label>
                <input type="tel" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="+91 00000 00000" />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Subject*</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="Inquiry Type" />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Company Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="Optional" />
              </div>
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Website Link</label>
                <input type="url" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="www.example.com" />
              </div>
            </div>

            {/* Checkboxes Section */}
            <div className="space-y-3 pt-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block">Services Required</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                {services.map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group w-fit">
                    <div className="relative flex items-center justify-center w-4 h-4 border-2 border-slate-300 rounded-[3px] group-hover:border-[#2c66f6] transition-colors overflow-hidden bg-white">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="absolute inset-0 bg-[#2c66f6] scale-0 peer-checked:scale-100 transition-transform origin-center duration-200"></div>
                      <FiCheck className="absolute text-white scale-0 peer-checked:scale-100 transition-transform duration-200 delay-75" size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 font-sans text-sm md:text-[15px] group-hover:text-slate-950 transition-colors select-none">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="group space-y-2 pt-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Requirements</label>
              <textarea rows="2" className="w-full bg-transparent border-b-2 border-slate-200 py-1.5 outline-none focus:border-slate-900 transition-colors text-lg md:text-xl font-serif text-slate-900 placeholder:text-slate-300 resize-none" placeholder="Share a brief of your requirements..."></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-5 group mt-6 cursor-pointer border-none bg-transparent"
            >
              <div className="w-14 h-14 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#2c66f6] transition-all duration-300 shadow-xl shadow-slate-200">
                <FiArrowUpRight size={22} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-950 group-hover:text-[#2c66f6] transition-colors">Send Inquiry</span>
            </motion.button>
          </form>
        </div>

        {/* ════ RIGHT: TECHNICAL INFO (Vertically Centered to remove blank gap) ════ */}
        <div className="lg:col-span-5 flex flex-col justify-center bg-[#fafafa] h-full">
          
          <div className="w-full">
            {/* Top Info block */}
            <div className="p-6 md:p-12 lg:p-20 space-y-16">
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2c66f6]">Headquarters</p>
                <h3 className="text-2xl md:text-3xl font-serif leading-[1.1] text-slate-950" style={{ fontFamily: "'Lora', serif" }}>
                  Office No. 2, Chandra Niwas CHS, <br />
                  Off Old Police Lane, Andheri East, <br />
                  Mumbai – 400069
                </h3>
              </div>

              <div className="space-y-8">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2c66f6]">Direct Contact</p>
                <div className="space-y-6">
                  <a href="tel:9321111753
 " className="flex items-center gap-4 text-2xl md:text-3xl font-serif text-slate-900 group hover:text-[#2c66f6] transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                    <FiPhone size={20} className="text-[#2c66f6]" /> +91 9321111753
                  </a>
                  <a href="mailto:info@ibraine.com" className="flex items-center gap-4 text-2xl md:text-3xl font-serif text-slate-900 group hover:text-[#2c66f6] transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                    <FiMail size={20} className="text-[#2c66f6]" /> info@ibraine.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Ecosystem (Restored Original Design) */}
            <div className="border-t border-slate-200 p-6 md:p-12 lg:p-20">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-8">Follow Ecosystem</p>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="text-sm font-extrabold text-slate-700 hover:text-[#2c66f6] transition-colors uppercase tracking-[0.2em]">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;