import React from 'react';
import { motion } from 'framer-motion';

const SEOHero = () => (
    <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        {/* Floating shapes from your screenshot */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-40 left-[10%] w-4 h-4 bg-teal-300 rounded-full blur-[1px] opacity-60" />
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-40 right-[15%] w-3 h-3 bg-blue-400 rounded-full blur-[1px] opacity-40" />

        <div className="max-w-5xl mx-auto relative z-10">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#0072BC] font-bold text-[10px] uppercase tracking-[0.5em] mb-8 block">Search Engine Optimization</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-step-h1 mb-10 text-slate-900 tracking-tight">
                Rise Above Your Competitors with <br />
                <span className="marker-line italic">The Best SEO Agency</span> in Mumbai.
            </motion.h1>
            <p className="max-w-2xl mx-auto text-slate-500 text-[15px] md:text-[17px] leading-relaxed mb-12 italic font-medium">
                Choose iBraine to enhance your site's reputation and get found on search engines above your competitors.
                We engineer game-changing impact through result-oriented SEO services.
            </p>
            <button className="bg-[#F58220] text-white px-10 py-4 rounded-md font-bold text-[12px] uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-black transition-all">
                Get in touch with us now
            </button>

            {/* Main Hero Image Asset */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="mt-20">
                <img
                    src="https://ibraine.com/media/2023/07/SEO-Agency-Hero-Image--1536x823.webp"
                    className="w-full h-auto max-w-6xl mx-auto drop-shadow-2xl"
                    alt="SEO Dashboard"
                />
            </motion.div>
        </div>
    </section>
);
export default SEOHero;