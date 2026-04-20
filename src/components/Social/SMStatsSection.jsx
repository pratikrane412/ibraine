import React from 'react';
import { motion } from 'framer-motion';

const SMStatsSection = () => (
    <section className="py-24 px-6 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl leading-[1.1] mb-8">Great brands are build through <span className="italic text-[#0072BC]">social marketing</span></h2>
                <p className="text-slate-500 italic mb-10">We blend Organic Content with Paid Advertising to drive substantial revenue.</p>
                <button className="border-2 border-[#F58220] text-[#F58220] px-8 py-3 rounded-md font-bold">Learn More</button>
            </motion.div>

            <div className="lg:col-span-7 flex justify-center relative order-1 lg:order-2">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative max-w-lg">
                    <img src="https://ibraine.com/media/2023/09/leverage-social-media-6-1-e1694546240101-768x866.png" className="w-full rounded-3xl" />
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl w-[280px]">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Accounts reached</p>
                        <div className="text-3xl font-black text-slate-900 mb-4">11,756</div>
                        <div className="flex items-end gap-1 h-20">
                            {[40, 60, 45, 90, 70, 100, 80].map((h, i) => (
                                <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-[#0072BC]' : 'bg-slate-100'}`} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
);
export default SMStatsSection;