import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Linkedin, Instagram, PinIcon as Pinterest } from 'lucide-react';

const SocialFollow = () => {
  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={24} />, color: "text-blue-600", href: "#" },
    { name: "Twitter", icon: <Twitter size={24} />, color: "text-sky-500", href: "#" },
    { name: "YouTube", icon: <Youtube size={24} />, color: "text-red-600", href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, color: "text-blue-700", href: "#" },
    { name: "Pinterest", icon: <Pinterest size={24} />, color: "text-rose-600", href: "#" },
    { name: "Instagram", icon: <Instagram size={24} />, color: "text-pink-600", href: "#" },
  ];

  return (
    <section className="w-full py-20 bg-[#f4f7ff] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* ════ HEADING ════ */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="relative inline-block text-[#0a2647] mr-2">
            Follow
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#fdb813] rounded-full"></div>
          </span> 
          us on social media
        </motion.h2>

        {/* ════ SOCIAL CARDS GRID ════ */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {socialLinks.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              className="bg-white group w-28 h-28 md:w-32 md:h-32 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transition-shadow hover:shadow-xl"
            >
              {/* Icon Container */}
              <div className={`${platform.color} transition-transform duration-300 group-hover:scale-110`}>
                {platform.icon}
              </div>
              
              {/* Platform Name */}
              <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-900 transition-colors">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialFollow;