import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiLayers } from 'react-icons/fi';

const SmartScalingBlock = () => {
    return (
        <section className="py-24 md:py-32 px-6 relative z-10 overflow-hidden">

            {/* ════ THE "SCALING ENGINE" CONTAINER ════ */}
            <div className="max-w-7xl mx-auto relative group">

                {/* Main Blue Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0072BC] rounded-[3rem] md:rounded-[5rem] min-h-[600px] flex flex-col lg:flex-row items-stretch overflow-hidden relative shadow-2xl shadow-blue-900/20"
                >
                    {/* 1. Background Technical Layer (Lively Element) */}
                    <div className="absolute inset-0 pointer-events-none opacity-10">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
                        <img
                            src="https://ibraine.com/media/2023/08/Mails-Marketing-Image-439x650.webp"
                            className="absolute right-0 top-0 w-full h-full object-cover grayscale brightness-200 mix-blend-overlay"
                            alt=""
                        />
                    </div>

                    {/* 2. Left Side: Editorial Content */}
                    <div className="w-full lg:w-1/2 p-10 md:p-24 flex flex-col justify-center relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#F58220]">
                                <FiZap size={20} />
                            </div>
                            <span className="text-[10px] font-sans font-black text-blue-200 uppercase tracking-[0.4em]">Efficiency Framework</span>
                        </div>

                        <h2 className="text-[36px] md:text-[60px] leading-[1] text-white font-medium mb-8 tracking-tighter">
                            Smart Scaling, <br />
                            <span className="italic opacity-60 italic">Bigger Profits.</span>
                        </h2>

                        <p className="text-blue-50 text-sm md:text-lg leading-relaxed opacity-80 mb-12 max-w-md italic font-medium">
                            Maximize Revenue without Overburdening Your Resources. We find innovative ways to scale while utilizing your existing business assets surgically.
                        </p>

                        <div className="flex items-center gap-6">
                            <div className="h-0.5 w-16 bg-[#F58220] rounded-full" />
                            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-blue-300">Scalable Infrastructure</p>
                        </div>
                    </div>

                    {/* 3. Right Side: The "Visual Engine" (Unique Design Part) */}
                    <div className="w-full lg:w-1/2 relative bg-black/10 backdrop-blur-sm border-l border-white/5 flex items-center justify-center p-12">

                        {/* The "Revenue Curve" Graph */}
                        <div className="relative w-full max-w-sm aspect-square flex items-end gap-3">
                            {[40, 60, 45, 90, 70, 85, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                    className="flex-1 bg-gradient-to-t from-white/5 to-[#F58220]/60 rounded-t-lg border-t border-x border-white/10 relative group/bar"
                                >
                                    {i === 6 && (
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0072BC] px-3 py-1.5 rounded-lg font-sans font-black text-[10px] shadow-xl whitespace-nowrap">
                                            MAX GROWTH
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Status Badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-12 right-12 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-500 rounded-2xl text-white shadow-lg shadow-emerald-500/20">
                                    <FiTrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-sans font-black text-blue-200 uppercase tracking-widest">Revenue Lift</p>
                                    <p className="text-2xl font-black text-white">+240%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Technical Label */}
                        <div className="absolute bottom-8 right-12 flex items-center gap-3 opacity-40">
                            <FiLayers className="text-white" size={14} />
                            <span className="text-[9px] font-sans font-bold text-white uppercase tracking-[0.4em]">Asset Integration Module</span>
                        </div>
                    </div>
                </motion.div>

                {/* Overlapping Shadow for depth */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F58220]/10 blur-[100px] -z-10 rounded-full" />
            </div>
        </section>
    );
};

export default SmartScalingBlock;