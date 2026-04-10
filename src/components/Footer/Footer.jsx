import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#030712] text-white pt-24 pb-12 overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background Decor - Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- TOP SECTION: NEWSLETTER & BRAND --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5">
            <h3 className="font-lora text-4xl md:text-5xl font-medium leading-tight mb-6">
              Let’s build the <br /> 
              <span className="italic text-indigo-400">future of your brand.</span>
            </h3>
            <p className="font-jakarta text-slate-400 text-lg max-w-md mb-8">
              A full-spectrum digital powerhouse engineering success through neural marketing.
            </p>
            
            {/* Newsletter Input */}
            <div className="relative max-w-md group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 font-jakarta text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors flex items-center justify-center">
                <ArrowUpRight size={20} />
              </button>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-4 font-bold ml-2">
              Join 5k+ readers for weekly digital strategy tips.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1 border-r border-white/10 h-full mx-auto" />

          {/* Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-jakarta text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Core Services</h4>
              <ul className="space-y-4">
                {["Performance Marketing", "SEO Optimization", "Social Media Strategy", "UI/UX Design"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-jakarta text-[15px] font-medium text-slate-300 hover:text-indigo-400 transition-colors flex items-center group">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-jakarta text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Quick Navigation</h4>
              <ul className="space-y-4">
                {["Case Studies", "Our Blog", "About iBraine", "Job Application"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-jakarta text-[15px] font-medium text-slate-300 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: BIG LOGO WATERMARK --- */}
        {/* <div className="border-t border-white/5 pt-12 mb-12 overflow-hidden">
           <h2 className="text-[18vw] font-black text-white/[0.02] leading-none tracking-tighter select-none font-jakarta pointer-events-none">
             iBraine
           </h2>
        </div> */}

        {/* --- BOTTOM SECTION: LEGAL & SOCIAL --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          
          {/* Socials */}
          <div className="flex items-center gap-6">
            {[
              { icon: <Facebook size={20} />, link: "#" },
              { icon: <Instagram size={20} />, link: "#" },
              { icon: <Linkedin size={20} />, link: "#" },
              { icon: <Youtube size={20} />, link: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-indigo-600"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-slate-500 text-xs text-center md:text-right">
              © {currentYear} iBraine Digital. Proudly created in India. <br className="md:hidden" />
              All Right Reserved, All Wrong Reversed.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;