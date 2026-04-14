import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBarChart } from 'react-icons/fi';

const AnalyticsReporting = () => {
    return (
        <section className="relative py-24 md:py-40 px-6 bg-white overflow-hidden font-lora">

            {/* ════ BACKGROUND WAVY DECOR (Matches Screenshot) ════ */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 100 Q 400 300 100 600" stroke="#f1f1f1" strokeWidth="2" />
                    <path d="M900 200 Q 600 500 900 800" stroke="#f1f1f1" strokeWidth="2" />
                    <path d="M500 -100 Q 800 400 300 1100" stroke="#f1f1f1" strokeWidth="2" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">

                {/* ════ LEFT SIDE: CONTENT ════ */}
                <div className="lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[38px] md:text-[54px] font-medium text-slate-900 leading-tight mb-8">
                            Reporting & analytics
                        </h2>

                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                            Relax while we manage your account seamlessly. As a <strong className="text-slate-800 font-bold tracking-tight">top performance marketing company in Mumbai</strong>,
                            we handle content, targeting, and provide insightful analytics and reports. Elevate your brand with stress-free marketing that delivers measurable success.
                        </p>

                        <button className="border-2 border-[#ffb400] text-[#ffb400] px-8 py-3.5 rounded-md font-bold text-sm hover:bg-[#ffb400] hover:text-white transition-all duration-300">
                            Get in touch with us now
                        </button>
                    </motion.div>
                </div>

                {/* ════ RIGHT SIDE: FLOATING DATA CARDS ════ */}
                <div className="lg:col-span-6 relative h-[400px] md:h-[500px]">

                    {/* Card 1: Revenue Line Chart (Top Left) */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 md:left-10 bg-white p-6 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-50 w-64 z-20"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-bold text-slate-800">Revenue <span className="text-emerald-500 ml-1">(+50%) ↗</span></span>
                        </div>
                        {/* Custom SVG Line Chart */}
                        <svg className="w-full h-16" viewBox="0 0 200 60">
                            <path d="M0 50 Q 50 40 80 55 T 150 20 T 200 10" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                            <path d="M0 50 Q 50 40 80 55 T 150 20 T 200 10 V 60 H 0 Z" fill="url(#grad1)" opacity="0.1" />
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    {/* Card 2: Monthly Revenue Bar Chart (Bottom Right) */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-10 right-0 md:right-10 bg-white p-8 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-50 w-[300px] md:w-[350px] z-10"
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-white">
                                <FiBarChart size={16} />
                            </div>
                            <span className="text-sm font-bold text-slate-800">Monthly Revenue</span>
                        </div>

                        <div className="flex items-end justify-between gap-3 h-32">
                            {[30, 70, 40, 95, 60, 85, 45].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col gap-2 h-full justify-end">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        className={`w-full rounded-sm ${i === 3 || i === 5 ? 'bg-slate-500' : 'bg-slate-200'}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Subtle Glow behind cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0072BC]/5 blur-[80px] -z-10 rounded-full" />
                </div>

            </div>
        </section>
    );
};

export default AnalyticsReporting;