import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiHeart, FiMessageCircle, FiZap, FiActivity } from 'react-icons/fi';

const SMGrowthCTA = () => {
    const { scrollYProgress } = useScroll();

    // Subtle parallax that adds "liveliness" without being huge
    const visualY = useTransform(scrollYProgress, [0.8, 1], [0, -50]);

    return (
        <section className="relative w-full py-20 lg:py-28 bg-[#fafafa] overflow-hidden font-lora">

            {/* ════ LIVELY UI TEXTURE ════ */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0072BC]/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* ════ LEFT SIDE: TECHNICAL EDITORIAL ════ */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-1.5 bg-[#F58220] rounded-full animate-pulse" />
                                <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-slate-400">Growth Optimization Active</span>
                            </div>

                            <h2 className="text-[32px] md:text-[48px] leading-[1.1] text-slate-900 font-medium mb-8 tracking-tight">
                                Transform your digital <br />
                                <span className="italic text-[#0072BC] relative">
                                    ecosystem.
                                    <div className="absolute -bottom-1 left-0 w-full h-3 bg-[#FFED4E]/30 -z-10" />
                                </span>
                            </h2>

                            <p className="text-slate-500 text-sm md:text-base leading-relaxed italic max-w-md mb-10 opacity-80">
                                We bridge the gap between brand vision and algorithmic execution. Join Mumbai's elite social powerhouse and turn your presence into a revenue engine.
                            </p>

                            {/* Technical Stats Overlay (Lively Content) */}
                            <div className="flex gap-10 border-l border-slate-200 pl-8 mb-12">
                                <div>
                                    <div className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                        <FiActivity className="text-emerald-500" size={16} /> 340%
                                    </div>
                                    <p className="text-[9px] font-sans font-bold uppercase text-slate-400 tracking-widest mt-1">Avg Engagement</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                        <FiZap className="text-[#F58220]" size={16} /> 12M+
                                    </div>
                                    <p className="text-[9px] font-sans font-bold uppercase text-slate-400 tracking-widest mt-1">Monthly Reach</p>
                                </div>
                            </div>

                            {/* 21ST CENTURY MAGNETIC BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#0c0d12] text-white px-8 py-4 rounded-xl font-sans font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#F58220] transition-all duration-300 flex items-center gap-4 group"
                            >
                                Contact our Consultants <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* ════ RIGHT SIDE: LAYERED UI MOCKUP ════ */}
                    <div className="lg:col-span-6 relative flex justify-center lg:justify-end">

                        <motion.div
                            style={{ y: visualY }}
                            className="relative w-full max-w-[380px] z-10"
                        >
                            {/* THE PHONE FRAME: CLEAN & MODERN */}
                            <div className="relative aspect-[9/16] rounded-[3.5rem] overflow-hidden border-[8px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800"
                                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                                    alt="Growth Visual"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0072BC]/20 to-transparent pointer-events-none" />
                            </div>

                            {/* FLOATING UI WIDGETS (The "Lively" Developer Touch) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-6 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                                    <FiHeart fill="currentColor" />
                                </div>
                                <span className="text-[11px] font-sans font-black text-slate-800 tracking-tighter">+1,240</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[40%] -right-8 bg-[#F58220] p-4 rounded-2xl shadow-xl text-white z-20"
                            >
                                <FiMessageCircle size={22} fill="currentColor" />
                            </motion.div>

                            {/* Floating "Technical" Badge */}
                            <div className="absolute bottom-10 -left-12 bg-[#0c0d12] text-white p-5 rounded-2xl shadow-2xl border border-white/10 z-20">
                                <p className="text-[8px] font-sans font-black uppercase tracking-[0.3em] opacity-60 mb-1">Conversion Status</p>
                                <p className="text-sm font-bold text-[#F58220]">Optimal Speed</p>
                            </div>
                        </motion.div>

                        {/* Visual Glow Base */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0072BC]/5 blur-[80px] -z-10" />
                    </div>

                </div>
            </div>

            {/* Subtle "Data Feed" Line at bottom to fill whitespace elegantly */}
            <div className="mt-20 flex justify-between items-center px-10 opacity-20 hidden md:flex">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.5em]">Module: Audience Acceleration</span>
                <div className="h-px flex-grow mx-10 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.5em]">Mumbai • Global</span>
            </div>
        </section>
    );
};

export default SMGrowthCTA;