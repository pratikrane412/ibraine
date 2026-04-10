import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, TrendingUp, Search, Megaphone,
  Monitor, Laptop, Settings, PenTool,
  Palette, Video, Globe, BarChart4, Network, ArrowUpRight
} from 'lucide-react';

const SERVICES_DATA = {
  marketing: {
    title: "Marketing Solutions",
    items: [
      { name: "Performance Marketing", slug: "performance-marketing", icon: <TrendingUp size={16} /> },
      { name: "SEO Services", slug: "seo-services", icon: <Search size={16} /> },
      { name: "Social Media", slug: "social-media-marketing", icon: <Megaphone size={16} /> },
      { name: "Google Analytics", slug: "google-analytics", icon: <BarChart4 size={16} /> },
      { name: "Affiliate Marketing", slug: "affiliate-marketing", icon: <Network size={16} /> },
    ]
  },
  website: {
    title: "Web Solutions",
    items: [
      { name: "Website Design", slug: "website-design", icon: <Monitor size={16} /> },
      { name: "UX/UI Design", slug: "ui-ux", icon: <Laptop size={16} /> },
      { name: "GTM Integration", slug: "gtm-integration", icon: <Settings size={16} /> },
      { name: "CRO Optimization", slug: "cro", icon: <TrendingUp size={16} /> },
    ]
  },
  creative: {
    title: "Creative Solutions",
    items: [
      { name: "Content Writing", slug: "content-writing", icon: <PenTool size={16} /> },
      { name: "Graphic Design", slug: "graphic-design", icon: <Palette size={16} /> },
      { name: "Video Production", slug: "reels-videos-photos", icon: <Video size={16} /> },
    ]
  }
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const QuoteButton = ({ className = "" }) => (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`relative group overflow-hidden bg-[#0f172a] text-white px-7 py-3 rounded-full font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg transition-all ${className}`}
    >
      <span className="relative z-10">Request a quote</span>
      <ArrowUpRight size={17} strokeWidth={2.5} className="relative z-10 text-indigo-400" />
      <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );

  return (
    <header className="sticky top-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-100 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20 md:h-24">

          {/* LOGO */}
          <Link to="/home" className="flex-shrink-0 z-[1001]">
            <img src="/images/logo.png" alt="iBraine" className="h-12 md:h-13 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-[14px] font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{item}</Link>
            ))}
            <div className="relative py-8" onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu(null)}>
              <button className={`flex items-center gap-1.5 text-[14px] font-bold ${activeMenu === 'services' ? 'text-indigo-600' : 'text-slate-600'}`}>
                Services <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {activeMenu === 'services' && (
                  <motion.div initial={{ opacity: 0, y: 15, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 15, x: '-50%' }} className="absolute top-[85px] left-1/2 w-[900px] bg-white shadow-2xl rounded-[2rem] p-8 border border-slate-100 grid grid-cols-3 gap-10">
                    {Object.entries(SERVICES_DATA).map(([key, section]) => (
                      <div key={key}>
                        <h4 className="font-lora text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-4">{section.title}</h4>
                        {section.items.map((item) => (
                          <Link key={item.slug} to={`/services/${item.slug}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 font-lora text-[15px] font-semibold text-slate-800 hover:text-indigo-600 transition-all">
                            <div className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg text-slate-400 group-hover:text-indigo-600">{item.icon}</div>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {['Clientele', 'Case Studies', 'Contact'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[14px] font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{item}</Link>
            ))}
            <QuoteButton />
          </div>

          {/* MOBILE TOGGLE (Larger for touch) */}
          <button
            className="lg:hidden z-[1001] p-2 text-slate-900 bg-slate-50 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU - Fixed Logic */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-white lg:hidden flex flex-col h-screen"
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto pt-28 px-8 pb-10">
              <div className="flex flex-col space-y-6">

                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-lora font-bold text-slate-900 border-b border-slate-50 pb-2">Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-lora font-bold text-slate-900 border-b border-slate-50 pb-2">About</Link>

                {/* Services Accordion */}
                <div className="border-b border-slate-50 pb-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-4xl font-lora font-bold text-slate-900"
                  >
                    Services <ChevronDown size={30} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-6 mt-6 ml-2"
                      >
                        {Object.entries(SERVICES_DATA).map(([key, section]) => (
                          <div key={key}>
                            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-3">{section.title}</p>
                            <div className="grid grid-cols-1 gap-3">
                              {section.items.map((item) => (
                                <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-slate-700 font-jakarta font-semibold text-lg">
                                  <span className="p-2 bg-slate-50 rounded-lg text-indigo-600">{item.icon}</span>
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/clientele" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-lora font-bold text-slate-900 border-b border-slate-50 pb-2">Clientele</Link>
                <Link to="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-lora font-bold text-slate-900 border-b border-slate-50 pb-2">Case Studies</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-lora font-bold text-slate-900 border-b border-slate-50 pb-2">Contact</Link>

                {/* Large CTA for Mobile */}
                <div className="pt-4">
                  <QuoteButton className="w-full py-5 text-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;