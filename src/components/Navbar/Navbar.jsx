import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  // BRAND BUTTON (Orange Outlined as per reference)
  const QuoteButton = ({ className = "" }) => (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => navigate("/contact")}
      className={`border-2 border-[#ffb400] text-[#ffb400] px-6 py-2 rounded-md font-bold text-[14px] hover:bg-[#ffb400] hover:text-white transition-all duration-300 font-lora ${className}`}
    >
      Request a quote
    </motion.button>
  );

  return (
    <header className="sticky top-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-100 font-lora">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
        .font-lora { font-family: 'Lora', serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20 md:h-22">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 z-[1001]">
            <img src="/images/logo.png" alt="iBraine" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="text-[15px] font-bold text-slate-800 hover:text-[#ffb400] transition-colors">
                {item.label}
              </Link>
            ))}

            {/* SERVICES WITH DROPDOWN */}
            <div
              className="relative py-8"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 text-[15px] font-bold ${activeMenu === 'services' ? 'text-[#ffb400]' : 'text-slate-800'}`}>
                Services
                <span className="bg-[#fff4d6] text-[#ffb400] text-[9px] font-black px-1.5 py-0.5 rounded-sm ml-1 tracking-tighter"></span>
                <ChevronDown size={14} className={`ml-0.5 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-[80px] left-1/2 -translate-x-1/2"
                  >
                    <ServicesDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {['Clientele', 'Blog', 'Contact'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[15px] font-bold text-slate-800 hover:text-[#ffb400] transition-colors">{item}</Link>
            ))}

            <QuoteButton />
          </div>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden z-[1001] p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[1000] bg-white lg:hidden flex flex-col h-screen overflow-y-auto pt-24 px-8 pb-10"
          >
            <div className="flex flex-col space-y-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold">About</Link>

              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full text-3xl font-bold">
                  <span>Services <span className="bg-[#fff4d6] text-[#ffb400] text-[10px] px-2 py-0.5 rounded-sm"></span></span>
                  <ChevronDown size={28} className={mobileServicesOpen ? 'rotate-180' : ''} />
                </button>
                {/* ... mobile services items logic ... */}
              </div>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold">Contact</Link>
              <QuoteButton className="w-full py-4 text-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;