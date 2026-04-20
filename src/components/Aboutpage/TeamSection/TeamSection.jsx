import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Dribbble, Linkedin, Sparkles, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Zahid Shaikh',
    role: 'SEO Head',
    image: '/images/Zahid.webp',
    bio: 'Zahid is the visionary behind our agency, with a decade of experience in crafting innovative digital strategies that drive growth and engagement.'
  },
  { 
    name: 'Dashmeet', 
    role: 'Social Media Manager', 
    image: '/images/Dashmeet.png', 
    bio: 'With over 5 years of experience in digital landscapes, Dashmeet leads our social strategies with a focus on community and viral growth.' 
  },
  { 
    name: 'Ritesh Pandey', 
    role: 'Senior Developer', 
    image: '/images/ritesh.jpeg', 
    bio: 'Building scalable, high-performance digital solutions with modern technologies.' 
  },
  { 
    name: 'Rasika Karjavkar', 
    role: 'Content Writing Head', 
    image: '/images/Rasmikaa.png', 
    bio: 'A creative force behind trending content, Rasika specializes in high-engagement visual storytelling and platform-specific trends.' 
  },
  { 
    name: 'Avantika', 
    role: 'Senior Graphic Designer', 
    image: '/images/Avantikaa.png', 
    bio: 'Avantika brings brands to life through bold visual identities. Her designs are the bridge between strategy and aesthetics.' 
  },
  { 
    name: 'Pratik Rane', 
    role: 'App developer', 
    image: '/images/PrakitRane.png', 
    bio: 'Pratik focuses on building robust systems and seamless integrations that power our modern digital solutions.' 
  },
  { 
    name: 'Nishi More', 
    role: 'Senior Video Editor', 
    image: '/images/Nishi.png', 
    bio: 'Nishi excels at data-driven marketing, ensuring every campaign is optimized for maximum ROI and visibility.' 
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#030712] py-20 lg:py-32 px-4 md:px-10 overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* --- ELITE BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-[1400px] mx-auto relative z-10 bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
        
        {/* ════ HEADER ════ */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6 font-jakarta">
              <Sparkles size={14} /> The Architects
            </div>
            <h2 className="font-lora text-slate-900 text-[42px] md:text-[68px] font-medium leading-[1] tracking-tight">
              Faces behind <br /> our <span className="italic text-indigo-600">digital solutions</span>
            </h2>
          </motion.div>
          <p className="font-jakarta text-slate-500 text-base md:text-lg max-w-sm leading-relaxed">
            We bridge the gap between vision and reality through tailored creative ecosystems.
          </p>
        </div>

        {/* ════ INTERACTIVE CONTENT AREA ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: DYNAMIC INFO */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-lora text-slate-900 text-4xl md:text-6xl font-medium tracking-tight mb-3">
                    {teamMembers[activeIndex].name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-indigo-200" />
                    <p className="font-jakarta text-indigo-600 text-sm md:text-lg font-bold uppercase tracking-widest">
                      {teamMembers[activeIndex].role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-6 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400">
                   <Twitter className="cursor-pointer hover:text-indigo-600 transition-colors" size={18} />
                   <Dribbble className="cursor-pointer hover:text-indigo-600 transition-colors" size={18} />
                   <Linkedin className="cursor-pointer hover:text-indigo-600 transition-colors" size={18} />
                   <ArrowUpRight className="text-slate-200 ml-2" size={18} />
                </div>

                <p className="font-jakarta text-slate-500 text-base md:text-lg leading-relaxed max-w-md italic">
                   "{teamMembers[activeIndex].bio}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: RESPONSIVE ACCORDION GALLERY */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex h-[350px] md:h-[550px] gap-2 md:gap-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)} 
                animate={{
                  width: activeIndex === index ? '100%' : '60px',
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full cursor-pointer overflow-hidden rounded-2xl md:rounded-[2rem] border ${
                  activeIndex === index ? 'border-indigo-100 shadow-xl' : 'border-transparent'
                }`}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    activeIndex === index ? 'grayscale-0 scale-105' : 'grayscale brightness-50 md:brightness-75'
                  }`}
                />
                
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
                )}

                <AnimatePresence>
                  {activeIndex !== index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <p className="whitespace-nowrap -rotate-90 font-jakarta text-white font-black uppercase text-[9px] tracking-[0.4em] opacity-40">
                        {member.name.split(' ')[0]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;