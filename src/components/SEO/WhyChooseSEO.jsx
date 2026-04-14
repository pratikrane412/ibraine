import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const WhyChooseSEO = () => (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Visual side with provided Puzzle image */}
            <div className="relative flex justify-center order-2 lg:order-1">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <img src="https://brandwitty.com/media/2023/07/SEO-Agency-Services-Image-600x595.webp" className="w-full max-w-md h-auto" alt="Strategy" />
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0072BC]/5 blur-[100px] -z-10" />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-4 block italic">Why Choose Us</span>
                <h2 className="text-step-h2 mb-8 leading-tight">
                    Our aim is for your brand <br /> to <span className="italic text-[#0072BC]">succeed online.</span>
                </h2>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 italic font-medium">
                    We rely on our experience and innovative thinking to ensure we deliver the best possible results.
                    We constantly monitor the <span className="text-[#F58220] font-bold">Google algorithm</span> and refine
                    accounts to ensure they always receive premium visibility.
                </p>

                <div className="space-y-4">
                    {["Conversion-Focused Optimization", "Transparent ROI Reporting", "Algorithmic Strategy Sprints"].map((t, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#0072BC]/10 flex items-center justify-center text-[#0072BC]"><FiCheck size={12} /></div>
                            <span className="text-sm font-bold text-slate-800">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
export default WhyChooseSEO;