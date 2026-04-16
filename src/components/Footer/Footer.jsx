import React from "react";
import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] text-white px-6 pt-24 pb-12 overflow-hidden selection:bg-[#F58220] selection:text-white">

      {/* Premium Glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#0072BC]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#F58220]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* BRAND (4 Columns) */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <h3 className="font-serif text-3xl md:text-4xl font-medium leading-[1.1] mb-6" style={{ fontFamily: "'Lora', serif" }}>
              Let’s build your <br />
              <span className="text-[#0072BC] italic">digital growth.</span>
            </h3>
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-sans">
              We help brands scale with performance-driven marketing and data-backed strategies.
            </p>

            {/* Newsletter Fixed */}
            <div className="relative flex items-center w-full max-w-sm rounded-full overflow-hidden border border-white/10 bg-white/5 focus-within:border-[#0072BC] transition-all p-1">
              <input
                placeholder="Enter your email"
                className="flex-1 px-5 py-2.5 text-sm bg-transparent outline-none placeholder:text-white/30 font-sans"
              />
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#0072BC] to-[#29ABE2] hover:scale-105 transition-transform shrink-0">
                <ArrowUpRight size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* LINKS (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-8 font-sans">
              Company
            </h4>
            <ul className="space-y-4 text-[15px] font-sans">
              {["About Us", "Careers", "Blog", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-8 font-sans">
              Solutions
            </h4>
            <ul className="space-y-4 text-[15px] font-sans">
              {["Performance Marketing", "SEO Services", "Social Media", "Influencer Marketing", "Web Development"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-8 font-sans">
              Inquiries
            </h4>
            <div className="space-y-5 text-[15px] text-white/60 font-sans">
              <a href="mailto:info@ibraine.com" className="flex items-center gap-3 hover:text-[#0072BC] transition-colors">
                <Mail size={16} /> info@ibraine.com
              </a>
              <a href="tel:+91 98928 54892" className="flex items-center gap-3 hover:text-[#0072BC] transition-colors">
                <Phone size={16} /> +91 98928 54892
              </a>
              <div className="flex items-center gap-3">
                <Globe size={16} /> Office No. 2, Chandra Niwas CHS, Off Old Police Lane
Andheri East, Mumbai – 400069
2 mins walk from Andheri Station and Metro Station
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER SECTION */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 font-sans">

          {/* Social Icons */}
          <div className="flex gap-4 order-2 md:order-1">
            {[Globe, Mail, Phone].map((Icon, i) => (
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,114,188,0.2)" }}
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 cursor-pointer transition-colors"
              >
                <Icon size={18} className="text-white/60" />
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right order-1 md:order-2">
            <p className="text-white/20 text-[11px] uppercase tracking-[0.2em] mb-1">
              © {year} iBraine Digital. All rights reserved.
            </p>
            <p className="text-white/10 text-[9px] uppercase tracking-widest">
              Crafted for High Performance
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;