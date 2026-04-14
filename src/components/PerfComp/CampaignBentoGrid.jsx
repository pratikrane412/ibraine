import React from 'react';
import { motion } from 'framer-motion';

const CampaignBentoGrid = () => (
    <section className="py-32 px-6 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <h2 className="text-[32px] md:text-[54px] leading-[1.1] tracking-tight max-w-xl font-medium">
                    Types of campaigns we <br /> <span className="italic text-[#0072BC]">run for growth.</span>
                </h2>
                <p className="text-slate-400 text-sm max-w-xs italic leading-relaxed">
                    Data-driven insights to target and engage your audience effectively across every touchpoint.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Ecommerce Conversions", "Lead Generation", "App Install Plans", "Brand Awareness"].map((title, i) => (
                    <motion.div key={i} whileHover={{ y: -8 }} className="p-10 rounded-[2.5rem] bg-[#FAFAFA] border border-slate-100 hover:bg-white hover:shadow-xl transition-all h-52 flex flex-col justify-between">
                        <span className="text-[10px] font-black text-[#F58220] tracking-[0.5em] italic opacity-40 uppercase">0{i + 1}</span>
                        <h4 className="font-bold text-[13px] uppercase tracking-[0.2em] leading-snug text-slate-800">{title}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default CampaignBentoGrid;