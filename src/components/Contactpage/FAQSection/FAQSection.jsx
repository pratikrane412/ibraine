import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiArrowUpRight } from 'react-icons/fi'; // Using Fi for stability

const faqData = [
  {
    q: "What services does your digital marketing agency provide?",
    a: "We provide a comprehensive ecosystem of digital growth services: Performance Marketing, SEO, Social Media Engineering, and High-Conversion UI/UX Design. We focus on mathematical ROI, not just traffic."
  },
  {
    q: "How do your strategies align with our business goals?",
    a: "We start with a technical audit of your business objectives. Every campaign is custom-mapped to your specific KPIs, ensuring that digital metrics translate directly into bottom-line revenue."
  },
  {
    q: "What is your agency's approach to reporting?",
    a: "Total transparency. We provide real-time dashboards and monthly editorial deep-dives. We focus on 'North Star' metrics—data that actually drives decision-making."
  },
  {
    q: "Do you have experience in our specific industry?",
    a: "With over a decade in the market, our expertise spans E-commerce, Real Estate, and Fintech. Our frameworks are industry-agnostic but execution-specific."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-slate-100 font-sans">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* ════ LEFT: EDITORIAL CONTEXT ════ */}
        <div className="lg:col-span-5 p-6 md:p-12 lg:p-20 lg:sticky lg:top-0 h-fit">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Knowledge Base v1.0</span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-medium text-slate-950 leading-[1] tracking-tighter font-serif mb-10"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Common <br />
            <span className="italic text-slate-400">Curiosities.</span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed italic mb-12 max-w-xs">
            Everything you need to know about our partnership dynamics and growth frameworks.
          </p>

          <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#2c66f6] group">
            Full Help Center <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* ════ RIGHT: TECHNICAL ACCORDION (Line-Based) ════ */}
        <div className="lg:col-span-7 border-l border-slate-100">
          <div className="divide-y divide-slate-100 border-b border-slate-100">
            {faqData.map((item, index) => (
              <div key={index} className="group overflow-hidden bg-white hover:bg-slate-50/50 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-8 md:p-12 text-left flex justify-between items-start gap-8"
                >
                  <div className="flex gap-6 md:gap-10">
                    <span className="text-[10px] font-mono font-bold text-slate-300 mt-1">0{index + 1}</span>
                    <span className={`text-xl md:text-2xl font-medium tracking-tight transition-colors font-serif
                      ${openIndex === index ? 'text-[#2c66f6]' : 'text-slate-900'}`}
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {item.q}
                    </span>
                  </div>
                  <div className={`mt-2 shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[#2c66f6]' : 'text-slate-300'}`}>
                    {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 md:px-12 pb-12 ml-12 md:ml-20 max-w-xl">
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed italic font-medium">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;