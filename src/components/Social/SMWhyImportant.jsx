import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

const SMWhyImportant = () => (
    <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-square">
                <img src="https://ibraine.com/media/2023/09/why-is-social-media-important.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="pt-10">
                <h2 className="text-4xl md:text-6xl leading-[1] mb-10 tracking-tight">Why social media is <br /> <span className="italic text-[#0072BC]">important</span> for business?</h2>
                <div className="space-y-8">
                    {[
                        { t: "Dedicated Resource", d: "Experienced managers for your business." },
                        { t: "Customised Design", d: "Visual storytelling for products." },
                        { t: "Daily Growth", d: "Optimization for peak engagement 24/7." }
                    ].map((f, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                            <FiCheckSquare className="text-[#0072BC] mt-1 group-hover:text-[#F58220] transition-colors" size={22} />
                            <div>
                                <h4 className="font-bold text-slate-900 text-xl leading-none mb-2">{f.t}</h4>
                                <p className="text-slate-400 text-sm italic font-medium">{f.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
export default SMWhyImportant;