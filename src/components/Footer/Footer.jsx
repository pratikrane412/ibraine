import React from "react";
import { ArrowUpRight, Globe, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ added

const Footer = () => {
  const year = new Date().getFullYear();

  // Bottom action links configuration
  const bottomLinks = [
    { icon: Globe, href: "https://www.ibraine.com", label: "Website" },
    { icon: Mail, href: "mailto:info@ibraine.com", label: "Email" },
    { icon: Phone, href: "tel:+919892854892", label: "Phone" }
  ];

  // ✅ Added routing configs
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Performance Marketing", path: "/services/performance-marketing" },
    { name: "SEO Services", path: "/services/seo-services" },
    { name: "Social Media", path: "/services/social-media-marketing" },
    { name: "Graphic Design", path: "/services/graphic-design" },
    { name: "Web Development", path: "/services/website-design" },
  ];

  return (
    <footer className="relative bg-[#030712] text-white px-6 pt-20 pb-10 overflow-hidden selection:bg-[#F58220] selection:text-white">

      {/* Premium Glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#0072BC]/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#F58220]/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-20">

          {/* BRAND */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <h3 className="font-serif text-3xl md:text-4xl font-medium leading-[1.2] mb-5" style={{ fontFamily: "'Lora', serif" }}>
              Let’s build your <br />
              <span className="text-[#0072BC] italic">digital growth.</span>
            </h3>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-sans">
              We help brands scale with performance-driven marketing and data-backed strategies.
            </p>

            {/* Newsletter */}
            <div className="relative flex items-center w-full max-w-sm rounded-full overflow-hidden border border-white/15 bg-white/5 focus-within:border-[#0072BC] transition-all p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-2.5 text-sm bg-transparent outline-none text-white placeholder:text-white/40 font-sans"
              />
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#0072BC] to-[#29ABE2] hover:scale-105 transition-transform shrink-0 shadow-lg">
                <ArrowUpRight size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.25em] text-white/40 uppercase mb-6 md:mb-8 font-sans">
              Company
            </h4>

            <ul className="space-y-4 text-[15px] font-sans">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.25em] text-white/40 uppercase mb-6 md:mb-8 font-sans">
              Solutions
            </h4>

            <ul className="space-y-4 text-[15px] font-sans">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.25em] text-white/40 uppercase mb-6 md:mb-8 font-sans">
              Inquiries
            </h4>

            <div className="space-y-5 text-[15px] text-white/70 font-sans">
              <a href="mailto:info@ibraine.com" className="flex items-center gap-3 hover:text-[#0072BC] transition-colors group">
                <Mail size={18} className="text-white/50 group-hover:text-[#0072BC]" />
                info@ibraine.com
              </a>

              <a href="tel:+919892854892" className="flex items-center gap-3 hover:text-[#0072BC] transition-colors group">
                <Phone size={18} className="text-white/50 group-hover:text-[#0072BC]" />
                +91 98928 54892
              </a>

              <div className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed">
                <MapPin size={18} className="shrink-0 mt-1 text-white/50" />
                <span>
                  Office No. 2, Chandra Niwas CHS, Off Old Police Lane Andheri East, Mumbai – 400069.
                  <span className="text-white/50 block mt-1">2 mins walk from Andheri Station and Metro Station</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-sans">

          <div className="flex gap-4 order-2 md:order-1">
            {bottomLinks.map((link, i) => (
              <motion.a
                href={link.href}
                key={i}
                target={link.label === "Website" ? "_blank" : "_self"}
                rel="noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,114,188,0.2)" }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 cursor-pointer transition-colors"
              >
                <link.icon size={18} className="text-white/80" />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right order-1 md:order-2">
            <p className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-1.5">
              © {year} iBraine Digital. All rights reserved.
            </p>
            <p className="text-[#0072BC]/80 text-[9px] uppercase tracking-widest font-medium">
              Crafted for High Performance
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;