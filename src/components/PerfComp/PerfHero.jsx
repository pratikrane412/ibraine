import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiPlay, FiTarget, FiZap } from 'react-icons/fi';

const PerfHero = () => {
    const { scrollY } = useScroll();
    const orbY = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 text-center overflow-hidden">

            {/* ════ LIVELY BACKGROUND SYSTEM ════ */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Parallax Mesh Orbs */}
                <motion.div
                    style={{ y: orbY }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-[#0072BC]/5 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ y: orbY }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[70%] bg-[#F58220]/5 rounded-full blur-[100px]"
                />

                {/* Image 1: Floating Technical Asset */}
                <motion.img
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    src="https://ibraine.com/media/2023/07/SEO-Agency-Shape-1-1-300x296.webp"
                    className="absolute top-24 right-[8%] w-44 opacity-20 hidden lg:block grayscale blur-[0.5px]"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Glass Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-10">
                        <FiTarget className="text-[#0072BC]" size={12} />
                        <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.4em] text-slate-400">
                            Mumbai's Data Powerhouse
                        </span>
                        <div className="w-1 h-1 bg-[#F58220] rounded-full animate-pulse" />
                    </div>

                    {/* Editorial Massive Heading */}
                    <h1 className="text-[44px] md:text-[76px] lg:text-[94px] leading-[0.95] text-slate-900 mb-10 font-medium tracking-tighter">
                        The <span className="relative inline-block italic">
                            Result-Oriented
                            {/* Animated SVG Scribble Underline */}
                            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FFED4E]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    d="M0 5 Q 25 0 50 5 T 100 5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span> <br />
                        Performance Agency.
                    </h1>

                    {/* Dense Professional Subtext */}
                    <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg lg:text-xl leading-relaxed mb-12 italic opacity-80">
                        We transform ambitious business visions into high-performance digital empires. iBraine combines surgical data testing with creative mastery to fuel exponential growth.
                    </p>

                    {/* Action Suite */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0072BC] text-white px-10 py-5 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(0,114,188,0.3)] hover:bg-[#F58220] transition-all duration-500 flex items-center gap-3"
                        >
                            Optimize Growth <FiZap />
                        </motion.button>

                        <button className="flex items-center gap-3 px-10 py-5 rounded-full border border-slate-100 bg-white/50 backdrop-blur-md font-sans font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all text-slate-600 group">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0072BC] group-hover:scale-110 transition-transform">
                                <FiPlay fill="currentColor" size={12} />
                            </div>
                            Watch Methodology
                        </button>
                    </div>

                    {/* Scientific Footer Line */}
                    <div className="mt-20 flex justify-center items-center gap-4 opacity-30">
                        <div className="h-px w-10 bg-slate-400" />
                        <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em]">100% Data Backed Strategies</span>
                        <div className="h-px w-10 bg-slate-400" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PerfHero;