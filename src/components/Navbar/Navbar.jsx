import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, TrendingUp, Search, BarChart3, Users, Layout, Monitor, Code, MousePointerClick, PenTool, Palette, Video } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import { useNavigate } from "react-router-dom";

// ✅ Extracted mobile menu items array (Same as ServicesDropdown) for cleaner rendering
const mobileServices = [
  { name: "Performance Marketing", slug: "performance-marketing", icon: <TrendingUp size={18} /> },
  { name: "SEM Experts", slug: "sem-experts", icon: <Search size={18} /> },
  { name: "SEO Services", slug: "seo-services", icon: <BarChart3 size={18} /> },
  { name: "Social Media", slug: "social-media-marketing", icon: <Users size={18} /> },
  { name: "Website Design", slug: "website-design", icon: <Layout size={18} /> },
  { name: "UX/UI Design", slug: "ui-ux", icon: <Monitor size={18} /> },
  { name: "GTM Integration", slug: "gtm-integration", icon: <Code size={18} /> },
  { name: "CRO Optimization", slug: "cro", icon: <MousePointerClick size={18} /> },
  { name: "Content Writing", slug: "content-writing", icon: <PenTool size={18} /> },
  { name: "Graphic Design", slug: "graphic-design", icon: <Palette size={18} /> },
  { name: "Video Production", slug: "reels-videos-photos", icon: <Video size={18} /> },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  // BRAND BUTTON (Orange Outlined as per reference)
  const QuoteButton = ({ className = "" }) => (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => {
        navigate("/contact");
        setIsMobileMenuOpen(false); // Close menu on click
      }}
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
        
        /* Disable scroll on body when mobile menu is open */
        body.menu-open { overflow: hidden; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20 md:h-22">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 z-[1001]" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/images/logo.png" alt="iBraine" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* ===================== DESKTOP MENU ===================== */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="text-[15px] font-bold text-slate-800 hover:text-[#ffb400] transition-colors">
                {item.label}
              </Link>
            ))}

            {/* SERVICES WITH DESKTOP DROPDOWN */}
            <div
              className="relative py-8"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 text-[15px] font-bold ${activeMenu === 'services' ? 'text-[#ffb400]' : 'text-slate-800'}`}>
                Services
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

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            className="lg:hidden z-[1001] p-2 text-slate-900 focus:outline-none"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (!isMobileMenuOpen) {
                document.body.classList.add("menu-open");
              } else {
                document.body.classList.remove("menu-open");
              }
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* ===================== MOBILE MENU DRAWER ===================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-white lg:hidden flex flex-col h-screen overflow-y-auto pt-24 px-6 pb-10 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                onClick={() => { setIsMobileMenuOpen(false); document.body.classList.remove("menu-open"); }}
                className="text-[28px] font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => { setIsMobileMenuOpen(false); document.body.classList.remove("menu-open"); }}
                className="text-[28px] font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                About
              </Link>

              {/* 🔥 MOBILE SERVICES ACCORDION 🔥 */}
              <div className="border-b border-slate-100 pb-4">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  // 👇 Yahan outline-none, focus:outline-none aur border-none add kiya hai taaki wo box na aaye
                  className={`flex items-center justify-between w-full text-[28px] font-bold transition-colors outline-none focus:outline-none border-none bg-transparent ${mobileServicesOpen ? "text-[#ffb400]" : "text-slate-900"}`}
                >
                  <span>Services</span>
                  <ChevronDown size={28} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#ffb400]' : 'text-slate-400'}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-2 mt-4 ml-4 border-l-2 border-[#fff4d6] pl-4">
                        {mobileServices.map((service, index) => (
                          <Link
                            key={index}
                            to={`/services/${service.slug}`}
                            onClick={() => { setIsMobileMenuOpen(false); document.body.classList.remove("menu-open"); }}
                            className="flex items-center gap-3 py-3 text-[16px] font-semibold text-slate-600 hover:text-[#ffb400] transition-colors outline-none focus:outline-none"
                          >
                            <span className="text-[#ffb400]/80">{service.icon}</span>
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/clientele"
                onClick={() => { setIsMobileMenuOpen(false); document.body.classList.remove("menu-open"); }}
                className="text-[28px] font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                Clientele
              </Link>

              <Link
                to="/blog"
                onClick={() => { setIsMobileMenuOpen(false); document.body.classList.remove("menu-open"); }}
                className="text-[28px] font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={() => { setIsMobileMenuOpen(false); document.body.classList.remove("menu-open"); }}
                className="text-[28px] font-bold text-slate-900 mb-4"
              >
                Contact
              </Link>

              <QuoteButton className="w-full py-4 text-lg mt-4 shadow-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;