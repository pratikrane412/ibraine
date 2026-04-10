import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqData = [
  {
    question: "What services does your digital marketing agency provide?",
    answer: "We offer a comprehensive range of digital marketing services including social media marketing, SEO, PPC advertising, content creation, email marketing, and more."
  },
  {
    question: "How do your digital marketing strategies align with our business goals?",
    answer: "We start with a deep dive into your business objectives. Every campaign is custom-built to hit your specific KPIs, whether it's lead generation, brand awareness, or direct sales."
  },
  {
    question: "What is your agency's approach to measuring and reporting on campaign performance?",
    answer: "We provide transparent, real-time dashboards and monthly deep-dive reports. We focus on 'North Star' metrics that actually impact your bottom line, not just vanity numbers."
  },
  {
    question: "Do you have experience working with businesses in our industry?",
    answer: "With over 10+ years in the market, we have worked across E-commerce, Real Estate, Tech, and Healthcare. Chances are, we already know what works for your niche."
  },
  {
    question: "How do you determine the budget and pricing for your digital marketing services?",
    answer: "Our pricing is modular and based on the scope of work. We offer custom plans to ensure you get the maximum ROI without paying for services you don't need."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default like the image

  return (
    <section className="bg-white py-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* ════ LEFT SIDE: TEXT CONTENT ════ */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#fdb813] font-bold text-xs tracking-[0.3em] uppercase mb-6 block"
          >
            FAQ
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a question <br /> in mind?
          </motion.h2>
          
          <div className="space-y-2 mb-10">
            <p className="text-gray-400 font-semibold text-lg">Confused?</p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Can't find your answers here? Send us a message.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#0a2647] hover:bg-[#144272] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg group"
          >
            Contact us
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* ════ RIGHT SIDE: ACCORDION ════ */}
        <div className="lg:col-span-7 space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border-2 rounded-xl overflow-hidden transition-all duration-300 
                ${openIndex === index ? 'border-[#0a2647] shadow-lg' : 'border-gray-100 hover:border-gray-200'}`}
            >
              {/* Question Trigger */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 bg-white"
              >
                <span className={`font-bold text-sm md:text-base lg:text-lg transition-colors
                  ${openIndex === index ? 'text-[#0a2647]' : 'text-gray-700'}`}>
                  {item.question}
                </span>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#0a2647]' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              {/* Answer Area */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-4 bg-blue-50/30">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;