import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPhone, FiMail } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section className="w-full bg-white min-h-screen font-sans">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">

        {/* ════ LEFT: THE FORM (High Contrast Line Design) ════ */}
        <div className="lg:col-span-7 p-6 md:p-12 lg:p-20 border-r border-slate-100">
          <div className="mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f59e0b] mb-4">Step 01</p>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-950" style={{ fontFamily: "'Lora', serif" }}>Project Brief</h2>
          </div>

          <form className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="group space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-slate-900 transition-colors text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="Required" />
              </div>
              <div className="group space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-slate-900 transition-colors text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="Required" />
              </div>
              <div className="group space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Phone</label>
                <input type="tel" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-slate-900 transition-colors text-xl font-serif text-slate-900 placeholder:text-slate-300" placeholder="Optional" />
              </div>
              <div className="group space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Goal</label>
                <select className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-slate-900 transition-colors text-xl font-serif text-slate-900 cursor-pointer appearance-none">
                  <option>Performance Marketing</option>
                  <option>SEO Growth</option>
                  <option>Creative Strategy</option>
                </select>
              </div>
            </div>

            <div className="group space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block group-focus-within:text-[#2c66f6] transition-colors">Message</label>
              <textarea rows="2" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-slate-900 transition-colors text-xl font-serif text-slate-900 placeholder:text-slate-300 resize-none" placeholder="How can we help?"></textarea>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group mt-12 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#2c66f6] transition-all duration-300 shadow-xl shadow-slate-200">
                <FiArrowUpRight size={24} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-950 group-hover:text-[#2c66f6] transition-colors">Send Inquiry</span>
            </motion.button>
          </form>
        </div>

        {/* ════ RIGHT: TECHNICAL INFO ════ */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#fafafa]">

          <div className="p-6 md:p-12 lg:p-20 space-y-24">
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
                <a href="tel:+919892854892" className="flex items-center gap-4 text-2xl md:text-3xl font-serif text-slate-900 group hover:text-[#2c66f6] transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                  <FiPhone size={20} className="text-[#2c66f6]" /> +91 9892 854 892
                </a>
                <a href="mailto:info@ibraine.com" className="flex items-center gap-4 text-2xl md:text-3xl font-serif text-slate-900 group hover:text-[#2c66f6] transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                  <FiMail size={20} className="text-[#2c66f6]" /> info@ibraine.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Ecosystem (Solid Text) */}
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
    </section>
  );
};

export default ContactSection;