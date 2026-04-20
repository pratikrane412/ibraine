import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiTrendingUp, FiZap } from 'react-icons/fi';

const SMSuccessStories = () => {
    const { scrollYProgress } = useScroll();

    // Smooth Parallax for the puzzle piece background
    const puzzleY = useTransform(scrollYProgress, [0, 1], [-50, 200]);

    const stories = [
        {
            t: "TripXOXO: Scalable Engagement Boost",
            i: "https://ibraine.com/media/2020/03/blog5-1-650x393.jpg",
            cat: "Travel & Leisure",
            metric: "+320% Reach",
            desc: "Transforming a static travel profile into a high-velocity community engine.",
            delay: 0.1,
            // Card 1 sits slightly lower
            containerClass: "lg:mt-32"
        },
        {
            t: "Luxulo: Elite Social Branding",
            i: "https://ibraine.com/media/2020/03/blog6-1-650x393.jpg",
            cat: "Luxury Retail",
            metric: "8.2x ROAS",
            desc: "Establishing India's premier fashion presence with premium visual aesthetics.",
            delay: 0.2,
            // Card 2 sits at the top
            containerClass: "lg:mt-0"
        },
        {
            t: "SaaS Ecosystems: Viral Lead Gen",
            i: "https://ibraine.com/media/2022/09/businessman-working-with-digital-finance-business-graph-perceptive-technology_31965-90360-650x289.jpg",
            cat: "B2B Tech",
            metric: "12k+ Leads",
            desc: "Leveraging algorithmic patterns to scale B2B authority and generate traffic.",
            delay: 0.3,
            // Card 3 sits in the middle
            containerClass: "lg:mt-16"
        }
    ];

    return (
        <section className="relative w-full py-24 md:py-12 bg-[#fdfdfd] overflow-hidden font-lora">

            {/* ════ 1. PRO BACKGROUND SYSTEM ════ */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                {/* Background Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-slate-900/[0.015] uppercase tracking-tighter italic">
                    Impact
                </div>

                {/* Parallax Asset - Bottom Right */}
                <motion.img
                    style={{ y: puzzleY, rotate: -20 }}
                    src="https://ibraine.com/media/2023/07/SEO-Agency-Shape-2-300x294.webp"
                    className="absolute bottom-[-10%] right-[-5%] w-72 md:w-[500px] opacity-20 hue-rotate-[200deg] brightness-125 grayscale-[0.5]"
                />

                {/* Technical Side Decor */}
                <div className="absolute top-1/3 left-10 hidden xl:flex flex-col items-center gap-6 opacity-20">
                    <div className="w-px h-40 bg-slate-400" />
                    <span className="rotate-90 whitespace-nowrap text-[9px] font-sans font-extrabold uppercase tracking-[1em] text-slate-500">
                        Case Archive // 2024
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ════ 2. EDITORIAL HEADER ════ */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-8">
                            <FiTrendingUp className="text-[#F58220]" size={14} />
                            <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-slate-400">Proven Results</span>
                        </div>
                        <h2 className="text-[42px] md:text-[72px] leading-[0.9] tracking-tighter text-slate-900 font-medium mb-8">
                            Social Media <br /> <span className="italic text-[#0072BC]">Success Stories.</span>
                        </h2>
                        <div className="w-12 h-1 bg-[#F58220] mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* ════ 3. STAGGERED MASONRY GRID ════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {stories.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: s.delay, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className={`flex flex-col group ${s.containerClass}`}
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border-4 border-white transition-all duration-700 group-hover:shadow-2xl">
                                <img
                                    src={s.i}
                                    alt={s.t}
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                                {/* Category Tag */}
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-sm">
                                    <span className="text-[9px] font-sans font-black uppercase tracking-widest text-[#0072BC]">{s.cat}</span>
                                </div>

                                {/* Metric Pulse (Lively UI) */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="bg-[#F58220] p-4 rounded-2xl shadow-xl text-white">
                                        <p className="text-[8px] font-sans font-bold uppercase tracking-widest opacity-70 mb-0.5">Impact</p>
                                        <p className="text-xl font-black leading-none tracking-tighter">{s.metric}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all">
                                        <FiArrowUpRight />
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="pt-8 px-4">
                                <h3 className="text-2xl font-bold leading-tight text-slate-800 mb-4 group-hover:text-[#0072BC] transition-colors">
                                    {s.t}
                                </h3>
                                <p className="text-[14px] text-slate-500 leading-relaxed italic opacity-80 line-clamp-2">
                                    {s.desc}
                                </p>
                                <div className="mt-8 h-px w-full bg-slate-100 relative overflow-hidden">
                                    <motion.div
                                        whileInView={{ x: ["-100%", "100%"] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#F58220] to-transparent opacity-20"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ════ 4. CTA BUTTON ════ */}
                <div className="mt-40 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-[#0c0d12] text-white rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.4em] shadow-2xl hover:bg-[#F58220] transition-all flex items-center gap-4 mx-auto group"
                    >
                        View all Case Studies
                        <FiZap className="text-[#FFED4E] group-hover:animate-pulse" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default SMSuccessStories;