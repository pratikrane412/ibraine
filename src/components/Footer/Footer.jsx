import React from "react";
import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] text-white px-6 pt-24 pb-12 overflow-hidden font-sans">

      {/* Premium Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#1872BA]/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#FB8C32]/20 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
              Let’s build your <br />
              <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
                digital growth.
              </span>
            </h3>

            <p className="text-white/60 text-base leading-relaxed mb-7 max-w-sm">
              We help brands scale with performance-driven marketing and data-backed strategies.
            </p>

            {/* Newsletter */}
            <div className="relative flex items-center rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <input
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-base bg-transparent outline-none placeholder:text-white/40"
              />
              <button className="px-5 py-3 bg-gradient-to-r from-[#FB8C32] to-[#1872BA] hover:scale-105 transition">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm tracking-widest text-white/40 uppercase mb-6">
              Links
            </h4>

            <ul className="space-y-4 text-base">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Case Studies",
                "Contact",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-white/70 hover:text-white transition-all duration-300 cursor-pointer relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#FB8C32] to-[#1872BA] group-hover:w-full transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm tracking-widest text-white/40 uppercase mb-6">
              Services
            </h4>

            <ul className="space-y-4 text-base">
              {[
                "Performance Marketing",
                "SEO Services",
                "Social Media",
                "Influencer Marketing",
                "Web Development",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-white/70 hover:text-white transition-all duration-300 cursor-pointer relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#FB8C32] to-[#1872BA] group-hover:w-full transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm tracking-widest text-white/40 uppercase mb-6">
              Contact
            </h4>

            <div className="space-y-5 text-base text-white/70">

              <div className="flex items-center gap-3 hover:text-white transition">
                <Mail size={18} />
                hello@ibraine.com
              </div>

              <div className="flex items-center gap-3 hover:text-white transition">
                <Phone size={18} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3 hover:text-white transition">
                <Globe size={18} />
                www.ibraine.com
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social */}
          <div className="flex gap-4">
            {[Globe, Mail, Phone].map((Icon, i) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-[#FB8C32] hover:to-[#1872BA] transition cursor-pointer"
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm text-center">
            © {year} iBraine. Crafted with precision.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;