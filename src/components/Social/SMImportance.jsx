import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckSquare, FiHeart, FiShare2, FiShield, FiTrendingUp } from 'react-icons/fi';

const SMImportance = () => {
    const whyFeatures = [
        {
            title: "Dedicated Account Management",
            desc: "An experienced social media architect dedicated to building your brand's unique digital voice."
        },
        {
            title: "Visual Identity & Custom Design",
            desc: "Elite graphic design and motion aesthetics that turn passive scrollers into paying customers."
        },
        {
            title: "Algorithmic Consistency",
            desc: "Daily posts from Monday to Sunday, meticulously optimized for peak engagement and feed priority."
        },
        {
            title: "In-depth Competitive Research",
            desc: "We analyze industry behavior and competitor gaps to engineer content with high viral potential."
        },
        {
            title: "Strategic Hashtag Ecosystems",
            desc: "Tailored hashtag and SEO strategies to exponentially increase post discovery across global search feeds."
        },
        {
            title: "Community Trust & Engagement",
            desc: "24/7 monitoring and interaction to foster unshakeable trust and handle inquiries in real-time."
        }
    ];

    return (
        <section className="py-24 md:py-44 px-6 lg:px-24 bg-[#fafafa]/50 relative overflow-hidden font-lora">

            {/* ════ BACKGROUND DECOR (Lively Element) ════ */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#F58220]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 text-[8vw] font-black text-slate-900/[0.02] uppercase select-none tracking-tighter italic">Importance</div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start relative z-10">

                {/* ════ LEFT SIDE: THE VISUAL WITH FLOATING BADGES ════ */}
                <div className="lg:col-span-5 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] overflow-hidden border-[10px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] relative z-10 aspect-[4/5] lg:aspect-square"
                    >
                        {/* Provided Image 2 */}
                        <img
                            src="https://ibraine.com/media/2023/09/why-is-social-media-important.jpg"
                            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                            alt="Strategy Meeting"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0072BC]/20 to-transparent" />
                    </motion.div>

                    {/* Floating Interaction Icons (Lively Touch) */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 p-5 bg-white rounded-3xl shadow-xl text-pink-500 z-20 border border-slate-50"
                    >
                        <FiHeart fill="currentColor" size={24} />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 -left-6 p-5 bg-white rounded-3xl shadow-xl text-[#0072BC] z-20 border border-slate-50"
                    >
                        <FiShare2 size={24} />
                    </motion.div>

                    {/* Trusted Badge */}
                    <div className="absolute -bottom-6 right-10 bg-[#0c0d12] text-white px-6 py-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-white/10">
                        <FiShield className="text-[#F58220]" />
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest leading-none">Security & <br /> Confidentiality</span>
                    </div>
                </div>

                {/* ════ RIGHT SIDE: DENSE EXPERTISE CONTENT ════ */}
                <div className="lg:col-span-7 pt-6">
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <FiTrendingUp className="text-[#F58220]" size={16} />
                            <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-slate-400">Brand Expansion Pillars</span>
                        </div>

                        <h2 className="text-[34px] md:text-[54px] leading-[1.1] mb-10 tracking-tight font-medium text-slate-900">
                            Why social media is <span className="italic text-[#0072BC]">crucial</span> <br /> for your business growth.
                        </h2>

                        <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 italic opacity-80 max-w-2xl">
                            Social media presents a massive opportunity for businesses to create unshakeable brand awareness. It plays the most decisive role in the modern consumer’s journey—turning discovery into trust.
                        </p>

                        {/* Checklist Grid - Dense content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {whyFeatures.map((f, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 8 }}
                                    key={i}
                                    className="flex items-start gap-4 group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#0072BC] group-hover:bg-[#0072BC] group-hover:text-white transition-all duration-500 shadow-sm">
                                        <FiCheckSquare size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-[15px] uppercase tracking-wider mb-2 leading-none">{f.title}</h4>
                                        <p className="text-[13px] text-slate-400 leading-relaxed italic font-medium">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action Line */}
                        <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
                            <p className="text-[11px] font-sans font-extrabold text-[#0072BC] uppercase tracking-widest">Global Reach // Targeted Precision</p>
                            <button className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-slate-800 border-b-2 border-slate-200 pb-2 hover:border-[#F58220] transition-all">
                                Request Strategy Brief →
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SMImportance;