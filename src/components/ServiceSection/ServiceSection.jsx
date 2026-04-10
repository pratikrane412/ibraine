import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import { 
  Globe, 
  Smartphone, 
  Search, 
  TrendingUp, 
  Share2, 
  BarChart, 
  Palette 
} from 'lucide-react';

const services = [
  {
    title: "Website Design",
    description: "Creative, responsive, user-focused websites built for performance, branding, and growth.",
    // A sleek, modern laptop showing a high-end UI/UX layout
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#435375]",
    icon: Globe
  },
  {
    title: "App Development",
    description: "Custom mobile apps designed for performance, scalability, and seamless user experience.",
    // Professional smartphone mockup with a clean app interface
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#2d2d2d]",
    icon: Smartphone
  },
  {
    title: "Search Engine Optimization",
    description: "Build brand trust and increase engagement across all search engines and platforms.",
    // Abstract digital search/magnifying glass with data overlays
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#8a755f]",
    icon: Search
  },
  {
    title: "Performance Marketing",
    description: "Boost rankings, drive organic traffic, and grow visibility with smart, data-driven SEO.",
    // Futuristic data analytics showing upward growth curves
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#4a418a]",
    icon: TrendingUp
  },
  {
    title: "Social Media Marketing",
    description: "Engage audiences, build brand presence, and grow business across social platforms.",
    // Minimalist shot of social notifications and digital interaction
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#1a2029]",
    icon: Share2
  },
  {
    title: "Web Analytics",
    description: "Track performance, analyze user behavior, and optimize your website for maximum growth.",
    // Dark-themed professional dashboard with complex charts
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#0f172a]",
    icon: BarChart
  },
  {
    title: "Creative Designing",
    description: "Eye-catching visuals, compelling graphics, and designs that elevate your brand identity.",
    // Abstract colorful geometry and digital design elements
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#fcb680]",
    icon: Palette
  }
];

const ServiceSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // --- AUTOMATIC SCROLL LOGIC ---
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          // If at end, loop back
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 4000); // Scroll every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const manualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="bg-[#030712] py-16 md:py-32 px-4 md:px-16 overflow-hidden relative min-h-screen selection:bg-[#FB8930] selection:text-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#FB8930]" />
              <span className="text-zinc-500 text-[10px] md:text-[12px] tracking-[0.3em] font-bold uppercase font-jakarta">Services to grow your business</span>
            </div>
            <h2 className="font-lora text-5xl md:text-7xl lg:text-[100px] font-medium text-white leading-[1] tracking-tight">
              Digital design <br />
              <span className="italic text-indigo-400">solutions</span>
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={() => manualScroll('left')}
              className="w-12 h-12 md:w-16 md:h-16 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => manualScroll('right')}
              className="w-12 h-12 md:w-16 md:h-16 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- CARDS SLIDER --- */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 no-scrollbar snap-x snap-mandatory pb-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`snap-start shrink-0 w-[85vw] md:w-[420px] h-[520px] md:h-[580px] ${service.bgColor} rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col relative overflow-hidden group shadow-2xl border border-white/5`}
            >
              {/* Card Content */}
              <div className="relative z-10 font-lora">
                <h3 className="text-white text-[32px] md:text-[44px] font-medium mb-4 leading-[1.1] tracking-tight">
                  {service.title}
                </h3>
                <p className="font-jakarta text-white/80 text-sm md:text-base leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute bottom-10 right-10 z-20">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white group-hover:bg-[#FB8930] group-hover:text-black group-hover:border-[#FB8930] transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={24} md:size={28} />
                </div>
              </div>

              {/* Floating Image Decoration */}
              <div className="absolute -bottom-4 left-0 w-full h-[55%] px-6 md:px-10 pointer-events-none">
                <div className="w-full h-full rounded-t-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:scale-[1.02]">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Shine Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;