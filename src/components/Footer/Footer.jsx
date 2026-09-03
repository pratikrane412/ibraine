import React from "react";
import { ArrowUpRight, Globe, Mail, Phone, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  // Bottom action links configuration
  const bottomLinks = [
    { icon: Globe, href: "https://www.ibraine.com", label: "Website" },
    { icon: Mail, href: "mailto:info@ibraine.com", label: "Email" },
    { icon: Phone, href: "tel:+919321111753", label: "Phone" }
  ];

  // Routing configs
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  // Expanded Services Categorized
  const marketingSolutions = [
    { name: "Performance Marketing", desc: "ROI focused data-driven strategies", path: "/services/performance-marketing" },
    { name: "SEM Experts", desc: "Search, Display, Shopping, Native", path: "/services/sem-experts" },
    { name: "SEO Services", desc: "Rank organic in SERP", path: "/services/seo-services" },
    { name: "Social Media", desc: "Building viral communities", path: "/services/social-media-marketing" },
  ];

  const websiteSolutions = [
    { name: "Website Design", desc: "Clean builds that establish trust", path: "/services/website-design" },
    { name: "UX/UI Design", desc: "Digital user experiences", path: "/services/ui-ux-design" },
    { name: "GTM Integration", desc: "Marketing tag deployment", path: "/services/gtm-integration" },
    { name: "CRO Optimization", desc: "Highest level of conversions", path: "/services/cro-optimization" },
  ];

  const creativeSolutions = [
    { name: "Content Writing", desc: "Improve conversions with copy", path: "/services/content-writing" },
    { name: "Graphic Design", desc: "Establish distinct style", path: "/services/graphic-design" },
    { name: "Video Production", desc: "Visual storytelling for products", path: "/services/video-production" },
  ];

  const partnerLogos = [
    { name: "Google Partner", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Meta Business Partner", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Shopify Partner", src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Trustpilot", src: "https://upload.wikimedia.org/wikipedia/commons/2/22/Trustpilot_logo.svg" },
  ];

  // Reusable Animated Title Underline
  const AnimatedTitle = ({ title }) => (
    <div className="relative inline-block mb-6">
      <h4 className="text-[11px] font-bold tracking-[0.25em] text-[#F58220] uppercase font-sans">
        {title}
      </h4>
      <div className="relative w-12 h-[2px] bg-slate-200 mt-2 overflow-hidden rounded-full">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#0072BC] to-transparent"
        />
      </div>
    </div>
  );

  return (
    <footer className="relative bg-[#FAFAFA] text-slate-800 px-6 pt-16 pb-2 overflow-hidden border-t border-slate-200/80 selection:bg-[#F58220] selection:text-white">

      {/* iBraine Brand Ambient Glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#0072BC]/8 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#F58220]/8 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP HERO & NEWSLETTER ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-slate-200/80">
          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] text-slate-900" style={{ fontFamily: "'Lora', serif" }}>
              Let’s build your <span className="text-[#0072BC] italic">digital growth.</span>
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2 max-w-xl font-sans">
              We help brands scale with performance-driven marketing and data-backed strategies.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="relative flex items-center w-full max-w-md rounded-full overflow-hidden border border-slate-300 bg-white shadow-sm focus-within:border-[#0072BC] focus-within:ring-2 focus-within:ring-[#0072BC]/20 transition-all p-1.5">
              <input
                type="email"
                placeholder="Enter your email to subscribe"
                className="flex-1 px-5 py-2 text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400 font-sans"
              />
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#0072BC] to-[#29ABE2] hover:scale-105 transition-transform shrink-0 shadow-md">
                <ArrowUpRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* SERVICES & CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-8">

          {/* MARKETING SOLUTIONS */}
          <div className="lg:col-span-3">
            <AnimatedTitle title="Marketing Solutions" />
            <ul className="space-y-4 font-sans">
              {marketingSolutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="group block">
                    <span className="text-sm font-medium text-slate-800 group-hover:text-[#0072BC] transition-colors block">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WEBSITE SOLUTIONS */}
          <div className="lg:col-span-3">
            <AnimatedTitle title="Website Solutions" />
            <ul className="space-y-4 font-sans">
              {websiteSolutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="group block">
                    <span className="text-sm font-medium text-slate-800 group-hover:text-[#0072BC] transition-colors block">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CREATIVE SOLUTIONS & QUICK LINKS */}
          <div className="lg:col-span-3">
            <AnimatedTitle title="Creative Solutions" />
            <ul className="space-y-4 font-sans mb-8">
              {creativeSolutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="group block">
                    <span className="text-sm font-medium text-slate-800 group-hover:text-[#0072BC] transition-colors block">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Links Horizontal Strip */}
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Company Links</span>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {companyLinks.map((item) => (
                  <Link key={item.name} to={item.path} className="text-slate-600 hover:text-[#0072BC] transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ELEVATED BRAND & LOCATION CARD */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0072BC]/10 to-transparent rounded-tr-2xl pointer-events-none" />
              
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="iBraine Digital Marketing" 
                  className="h-9 w-auto object-contain" 
                />
              </div>

              {/* 15+ Years Experience Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 mb-5">
                <Award size={14} className="text-[#F58220]" />
                <span className="text-xs font-semibold text-slate-800">
                  15+ Years Experience
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-3.5 text-xs text-slate-600 font-sans">
                <a href="mailto:info@ibraine.com" className="flex items-center gap-2.5 hover:text-[#0072BC] transition-colors">
                  <Mail size={15} className="text-[#0072BC] shrink-0" />
                  <span className="truncate">info@ibraine.com</span>
                </a>

                <a href="tel:+919321111753" className="flex items-center gap-2.5 hover:text-[#0072BC] transition-colors">
                  <Phone size={15} className="text-[#0072BC] shrink-0" />
                  <span>+91 93211 11753</span>
                </a>

                <div className="flex items-start gap-2.5 leading-relaxed pt-1">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-[#0072BC]" />
                  <span>
                    Office No. 2, Chandra Niwas CHS, Off Old Police Lane Andheri East, Mumbai – 400069.
                    <span className="text-slate-400 block mt-1 text-[11px]">2 mins walk from Andheri Station and Metro</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* PARTNER BRANDS STRIP */}
        <div className="border-t border-slate-200/80 py-4 mb-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted Partnerships & Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerLogos.map((partner, index) => (
              <img 
                key={index} 
                src={partner.src} 
                alt={partner.name} 
                className="h-6 md:h-7 w-auto object-contain max-w-[120px]" 
              />
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-200 pt-5 flex flex-col md:flex-row justify-between items-center gap-6 font-sans">

          <div className="flex gap-4 order-2 md:order-1">
            {bottomLinks.map((link, i) => (
              <motion.a
                href={link.href}
                key={i}
                target={link.label === "Website" ? "_blank" : "_self"}
                rel="noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,114,188,0.1)", borderColor: "#0072BC" }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 cursor-pointer transition-colors shadow-sm"
              >
                <link.icon size={18} className="text-[#0072BC]" />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right order-1 md:order-2">
            <p className="text-slate-500 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-1.5 font-medium">
              © {year} iBraine Digital. All rights reserved.
            </p>
            <p className="text-[#0072BC] text-[9px] uppercase tracking-widest font-semibold">
              Crafted for High Performance
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;