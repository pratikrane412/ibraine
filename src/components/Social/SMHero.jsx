import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiZap, FiActivity } from 'react-icons/fi';

const SMHero = () => {
    const { scrollY } = useScroll();
    // Parallax movement for background orbs
    const orbY = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-24 overflow-hidden bg-[#fdfdfd] font-lora">

            {/* ════ LIVELY BACKGROUND SYSTEM ════ */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div style={{ y: orbY }} className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-[#0072BC]/5 rounded-full blur-[120px]" />
                <motion.div style={{ y: orbY }} className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[70%] bg-[#F58220]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:15%_100%]" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

                {/* ════ LEFT SIDE: CONTENT ════ */}
                <div className="lg:col-span-7">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

                        {/* Elite Eyebrow */}
                        

                        <h1 className="text-[42px] md:text-[62px] lg:text-[76px] leading-[1] text-slate-900 mb-8 tracking-tighter font-medium">
                            We are a creative <br />
                            <span className="relative inline-block italic text-[#0072BC]">
                                social media
                                {/* Drawing Underline */}
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="absolute -bottom-2 left-0 w-full h-3 text-[#FFED4E]/60" viewBox="0 0 100 10" preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </motion.svg>
                            </span> <br />
                            marketing agency
                        </h1>

                        <p className="max-w-xl text-slate-500 text-sm md:text-base leading-relaxed mb-12 italic opacity-80">
                            Harnessing the algorithmic power of social platforms. iBraine doesn't just post content; we engineer viral tribes and sustainable revenue loops for Mumbai's most ambitious brands. Our focus is on the mathematics of engagement.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                            <button className="bg-[#0072BC] text-white px-10 py-4 rounded-full font-sans font-bold text-[10px] uppercase tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(0,114,188,0.3)] hover:bg-[#F58220] transition-all duration-500">Start Your Campaign</button>
                            <button className="flex items-center gap-3 text-slate-400 font-sans font-bold text-[10px] uppercase tracking-[0.3em] hover:text-[#0072BC] transition-colors">
                                View Case Studies <FiArrowRight />
                            </button>
                        </div>

                        {/* Hero Metric Row */}
                        <div className="flex items-center gap-12 border-t border-slate-100 pt-10">
                            <div>
                                <div className="text-2xl font-bold text-slate-900 flex items-center gap-2 tracking-tighter">
                                    <FiActivity className="text-emerald-500" size={18} /> 340%
                                </div>
                                <p className="text-[9px] font-sans font-black text-slate-300 uppercase tracking-widest mt-1">Avg Engagement Lift</p>
                            </div>
                            <div className="w-px h-8 bg-slate-100" />
                            <div>
                                <div className="text-2xl font-bold text-slate-900 flex items-center gap-2 tracking-tighter">
                                    <FiZap className="text-[#F58220]" size={18} /> 12M+
                                </div>
                                <p className="text-[9px] font-sans font-black text-slate-300 uppercase tracking-widest mt-1">Active Reach Engine</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ════ RIGHT SIDE: VISUAL ════ */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative w-full max-w-lg">
                        <img src="https://ibraine.com/media/2023/09/Great-brands-3.png" className="w-full h-auto relative z-10 drop-shadow-[0_50px_80px_rgba(0,0,0,0.12)]" alt="Social Media Engineering" />

                        {/* Floating Interaction Badge */}
                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-10 left-0 bg-white p-6 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-5 min-w-[260px] z-20"
                        >
                            <div className="w-12 h-12 bg-[#F58220] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100 font-black italic text-lg">!</div>
                            <div>
                                <h4 className="font-bold text-[17px] text-slate-900 leading-none mb-1">Hire Architects.</h4>
                                <p className="text-slate-400 text-[10px] font-sans font-bold uppercase tracking-widest">Free Strategy Audit</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SMHero;