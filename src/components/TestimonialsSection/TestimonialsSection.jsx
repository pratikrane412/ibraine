import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Meera Rai",
    role: "Manager - Aditya Birla Capital",
    quote: "A digital marketing agency with par excellence! Kudos to this proactive team of professionals who come with innovative, out of the box solutions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    color: "bg-indigo-600"
  },
  {
    name: "Pradeep Singhvi",
    role: "Founder - Houseome",
    quote: "Our traffic and lead quality have significantly increased. Their efforts contributed to a 40% increase in our sales. Great team to work with.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    color: "bg-amber-500",
    featured: true // This card will be slightly taller/offset
  },
  {
    name: "Aman Chowdary",
    role: "Founder - Luxulo",
    quote: "5-star service... Best digital marketing company to handle your brand. Great people who guide you at every step and deliver exceptional services!!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    color: "bg-emerald-500"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-24 lg:py-40 px-6 bg-[#fafafa] overflow-hidden selection:bg-indigo-100">
      {/* --- ELITE BACKGROUND DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[40%] bg-amber-50/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-6"
          >
            <Sparkles size={14} /> Client Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-lora text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.1] tracking-tight"
          >
            Trusted by <span className="italic text-indigo-600">30k+</span> world class <br />
            companies & design teams
          </motion.h2>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              // Adds a vertical offset to the middle card for an editorial look
              className={`relative group ${item.featured ? 'lg:mt-12' : ''}`}
            >
              <div className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                
                {/* Large Background Quote Icon */}
                <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-100 -z-10 group-hover:text-indigo-50 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-lora text-lg md:text-xl text-slate-700 leading-relaxed mb-10 italic">
                  "{item.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${item.color} rounded-full border-2 border-white shadow-sm`} />
                  </div>
                  
                  <div className="text-left font-jakarta">
                    <h4 className="text-slate-900 font-bold text-sm tracking-tight">
                      {item.name.toUpperCase()}
                    </h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM DECORATIVE CTA --- */}
       

      </div>
    </section>
  );
};

export default TestimonialsSection;