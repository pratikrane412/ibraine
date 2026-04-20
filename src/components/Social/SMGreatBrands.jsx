import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiBarChart2 } from 'react-icons/fi';

const SMGreatBrands = () => {
    const pillars = [
        {
            title: "Audience Engineering",
            desc: "We research through social platforms to find where your direct engagement happens most."
        },
        {
            title: "Paid Social Growth",
            desc: "Blended organic and paid social advertising strategies that drive substantial revenue."
        },
        {
            title: "Algorithmic Refinement",
            desc: "Continuous data analysis to optimize ad spend and ensure continuous improvement."
        }
    ];

    return (
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#fafafa]/50 relative overflow-hidden font-lora">

            {/* ════ BACKGROUND LIVELY DECOR ════ */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0072BC]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-10 w-2 h-2 bg-[#F58220] rounded-full animate-ping opacity-30" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

                {/* ════ LEFT SIDE: DENSE EDITORIAL CONTENT ════ */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-px bg-[#F58220]" />
                            <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-slate-400">Social Pipeline</span>
                        </div>

                        <h2 className="text-[36px] md:text-[54px] leading-[1.1] mb-8 tracking-tighter font-medium text-slate-900">
                            Great brands are build through <span className="italic text-[#0072BC]">social dominance.</span>
                        </h2>

                        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-12 italic opacity-80">
                            Social Media Marketing is highly effective in generating sales and strengthening branding. We blend Organic Content with Paid Advertising to drive substantial revenue for our global partners.
                        </p>

                        {/* Staggered Pillars List */}
                        <div className="space-y-10 mb-12">
                            {pillars.map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-6 h-6 rounded-md bg-[#0072BC]/10 flex items-center justify-center text-[#0072BC] group-hover:bg-[#F58220] group-hover:text-white transition-all duration-500">
                                            {i === 0 ? <FiTarget size={12} /> : i === 1 ? <FiBarChart2 size={12} /> : <FiZap size={12} />}
                                        </div>
                                        <h4 className="font-bold text-slate-800 text-[14px] uppercase tracking-widest">{item.title}</h4>
                                    </div>
                                    <p className="text-[13px] text-slate-400 leading-relaxed pl-10 border-l border-slate-100 group-hover:border-[#0072BC] transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-sans font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#F58220] transition-all shadow-xl active:scale-95">
                            Discover Strategy
                        </button>
                    </motion.div>
                </div>

                {/* ════ RIGHT SIDE: VISUAL REPLICA (Screenshot 2) ════ */}
                <div className="lg:col-span-7 flex justify-center relative order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative max-w-lg"
                    >
                        {/* Provided Image 3 (Megaphone Image) */}
                        <div className="rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] relative z-10">
                            <img src="https://ibraine.com/media/2023/09/leverage-social-media-6-1-e1694546240101-768x866.png" className="w-full h-auto" alt="Social Growth" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0072BC]/20 to-transparent" />
                        </div>

                        {/* THE EXACT ANIMATED CHART CARD (Screenshot 2 Replica) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-[-20px] -right-4 md:-right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl w-[300px] border border-slate-50 z-20"
                        >
                            <p className="text-[10px] font-sans font-black text-slate-400 uppercase tracking-widest mb-3">Live Account Reach</p>
                            <div className="text-4xl font-black text-slate-900 mb-6 tracking-tighter leading-none">11,756</div>

                            <div className="flex items-end gap-1.5 h-20 mb-4">
                                {[40, 60, 45, 95, 65, 80, 50].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-[#F58220]' : 'bg-[#0072BC]'}`}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-between text-[8px] font-sans font-extrabold text-slate-300 uppercase tracking-widest">
                                <span>Day</span><span>Week</span><span className="text-[#0072BC]">Month</span><span>Year</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Aesthetic Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0072BC]/5 blur-[100px] rounded-full -z-10" />
                </div>
            </div>
        </section>
    );
};

export default SMGreatBrands;