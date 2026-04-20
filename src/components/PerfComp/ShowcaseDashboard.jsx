import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMousePointer, FiActivity } from 'react-icons/fi';

const ShowcaseDashboard = () => {
    const { scrollYProgress } = useScroll();

    // Parallax movement for side creatives
    const leftY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rightY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section className="px-6 py-20 lg:py-32 max-w-7xl mx-auto relative z-10 overflow-hidden">

            {/* ════ SECTION HEADER ════ */}
            <div className="text-center mb-16 relative z-10">
                
                <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight italic">
                    Visualizing <span className="text-[#0072BC]">Performance</span> in Real-time.
                </h2>
            </div>

            {/* ════ LAYERED COMPOSITION ════ */}
            <div className="bg-[#FFFDF6] rounded-[3rem] md:rounded-[5rem] p-8 md:p-24 border border-yellow-50 relative overflow-visible shadow-sm">

                {/* Background "Technical" Decor */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT POSTER (Image 6) */}
                    <motion.div
                        style={{ y: leftY }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 hidden lg:block"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-white rotate-[-6deg] hover:rotate-0 transition-all duration-700">
                            <img
                                src="https://ibraine.com/media/2023/08/ad-creatives-557x650.jpg"
                                className="w-full grayscale-[20%] hover:grayscale-0 transition-all"
                                alt="Creative Asset 1"
                            />
                        </div>
                    </motion.div>

                    {/* CENTERPIECE (Image 2) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 relative z-20"
                    >
                        {/* Browser-style frame */}
                        <div className="bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white overflow-hidden relative group">
                            <div className="h-6 bg-slate-50 flex items-center gap-1.5 px-4 border-b border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <img
                                src="https://ibraine.com/media/2023/08/Mails-Hero-Image-2-300x233.webp"
                                className="w-full transform group-hover:scale-105 transition-transform duration-1000"
                                alt="Main Dashboard"
                            />
                        </div>

                        {/* Floating Performance Tag */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 z-30 min-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <FiActivity className="text-emerald-500" />
                                <span className="text-[9px] font-sans font-black text-slate-400 uppercase tracking-widest">Live ROAS</span>
                            </div>
                            <p className="text-4xl font-black text-slate-900 leading-none tracking-tighter">8.24x</p>
                            <div className="mt-4 h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '85%' }}
                                    className="h-full bg-[#0072BC]"
                                />
                            </div>
                        </motion.div>

                        {/* Interactive UI Element: Floating Cursor */}
                        <motion.div
                            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                            transition={{ repeat: Infinity, duration: 8 }}
                            className="absolute top-20 left-10 text-[#F58220] drop-shadow-lg z-30 hidden md:block"
                        >
                            <FiMousePointer fill="currentColor" size={32} />
                            <div className="bg-[#F58220] text-white text-[9px] font-sans font-bold px-2 py-1 rounded ml-6 -mt-2">Optimization Active</div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT POSTER (Image 7) */}
                    <motion.div
                        style={{ y: rightY }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 hidden lg:block"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-white rotate-[6deg] hover:rotate-0 transition-all duration-700">
                            <img
                                src="https://ibraine.com/media/2023/08/adcreatives1-557x650.jpg"
                                className="w-full grayscale-[20%] hover:grayscale-0 transition-all"
                                alt="Creative Asset 2"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Subtle "Data Feed" Line Decor */}
            <div className="mt-16 flex justify-between items-center px-10 opacity-20">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Channel: Meta Ads</span>
                <div className="h-px flex-grow mx-10 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Channel: Google Search</span>
            </div>
        </section>
    );
};

export default ShowcaseDashboard;