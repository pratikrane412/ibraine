import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiTrendingUp, FiLayers, FiDatabase } from 'react-icons/fi';

const cases = [
  {
    id: 1,
    title: 'Transforming Interior Design with Houseome',
    metric: '+142% Leads',
    cat: 'UI/UX & Branding',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800',
    span: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 2,
    title: 'Crafting Success for Alphonso Mangoes',
    metric: '8.2x ROAS',
    cat: 'Performance Marketing',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800',
    span: 'lg:col-span-1 lg:row-span-2'
  },
  {
    id: 3,
    title: "Claro Clinic's Journey to Success",
    metric: '3k+ Appointments',
    cat: 'Local SEO Dominance',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 4,
    title: 'Footwear Brand Global Expansion',
    metric: '450k+ Reach',
    cat: 'International Growth',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 5,
    title: 'FC Goa Missed Call Campaign',
    metric: '12M Impressions',
    cat: 'Viral Sprints',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800',
    span: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 6,
    title: 'Toyota Service Carnival SMS Marketing',
    metric: '18% CTR Increase',
    cat: 'Direct Response',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800',
    span: 'lg:col-span-1 lg:row-span-1'
  },
];

const CaseStudiesGrid = () => {
  return (
    <section className="w-full bg-[#fdfdfd] py-24 md:py-32 px-6 relative overflow-hidden font-lora">

      {/* ════ SECTION DECOR ════ */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none hidden xl:block">
        <span className="text-[20vw] font-black italic uppercase tracking-tighter">Results</span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Header: Technical Index Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <FiDatabase className="text-[#0052e6]" />
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-slate-400">Archival Data Index // v1.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-slate-900 leading-none">
              Proven <span className="italic text-[#0052e6]">Impact.</span>
            </h2>
          </div>
          <div className="pb-2 hidden md:block">
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-300">
              Showing 1—06 / Total 170+ Cases
            </p>
          </div>
        </div>

        {/* ════ THE BENTO MASONRY GRID ════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {cases.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ rotateX: 2, rotateY: -2, y: -8 }}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-2xl ${item.span}`}
            >
              {/* Background Image Layer */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
              />

              {/* Dynamic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-70" />
              <div className="absolute inset-0 bg-[#0052e6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

              {/* TOP DATA LAYER */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="text-[9px] font-sans font-black uppercase tracking-widest text-white">
                    {item.cat}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ffed4e] flex items-center justify-center text-black shadow-xl scale-0 group-hover:scale-100 transition-transform duration-500">
                  <FiArrowUpRight size={20} />
                </div>
              </div>

              {/* BOTTOM DATA LAYER */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                {/* Floating Metric Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 mb-4 bg-[#ffed4e] px-4 py-2 rounded-2xl shadow-xl"
                >
                  <FiTrendingUp size={14} className="text-black" />
                  <span className="text-xs font-sans font-black text-black uppercase tracking-widest">{item.metric}</span>
                </motion.div>

                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ════ EDITORIAL CTA ════ */}
        <div className="mt-32 flex flex-col items-center">
          <p className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-slate-300 mb-8">
            Ready to map your growth?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0c0d12] text-white px-12 py-5 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.4em] shadow-2xl hover:bg-[#ffed4e] hover:text-black transition-all flex items-center gap-4 group"
          >
            Launch Discovery Session
            <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

      </div>

      {/* Font imports for safety */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default CaseStudiesGrid;