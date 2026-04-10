import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, FileText, Share2, BarChart3, ArrowRight } from 'lucide-react';

const growthPoints = [
  {
    title: "Clear Objectives and Goals",
    desc: "Whether it's increasing brand awareness, driving website traffic, generating leads, or boosting sales, having clear goals will guide your strategy and help you measure success.",
    icon: <Target size={24} />,
    color: "bg-rose-50 text-rose-500",
    border: "border-rose-100"
  },
  {
    title: "Audience Understanding",
    desc: "Thoroughly understand your target audience's preferences, behaviors, demographics, and pain points to ensure your marketing message resonates perfectly.",
    icon: <Users size={24} />,
    color: "bg-orange-50 text-orange-500",
    border: "border-orange-100"
  },
  {
    title: "Compelling and Relevant Content",
    desc: "Create high-quality, engaging, and relevant content that addresses your audience's challenges and interests while maintaining your brand voice.",
    icon: <FileText size={24} />,
    color: "bg-emerald-50 text-emerald-500",
    border: "border-emerald-100"
  },
  {
    title: "Multi-Channel Strategy",
    desc: "Develop a multi-channel approach that leverages various digital platforms such as social media, email marketing, SEO, and influencer partnerships.",
    icon: <Share2 size={24} />,
    color: "bg-fuchsia-50 text-fuchsia-500",
    border: "border-fuchsia-100"
  },
  {
    title: "Data-Driven Analysis and Optimization",
    desc: "Monitor performance using key indicators (KPIs) such as click-through rates and conversion rates. Use data insights to identify what's working.",
    icon: <BarChart3 size={24} />,
    color: "bg-amber-50 text-amber-500",
    border: "border-amber-100"
  }
];

const GrowthElements = () => {
  return (
    <section className="bg-white py-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* ════ LEFT CONTENT: TEXT & CTA ════ */}
        <div className="lg:sticky lg:top-32">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What do you need to <br /> grow your business <br /> fast?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mb-10"
          >
            To create a successful digital marketing campaign, a well-coordinated effort and strategic execution are essential. Here are five important elements we consider to turn your digital campaign into a success story.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#fdb813] text-[#fdb813] font-bold rounded-md hover:bg-[#fdb813] hover:text-white transition-all duration-300 group"
          >
            Get in touch with us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* ════ RIGHT CONTENT: CARDS ════ */}
        <div className="space-y-6">
          {growthPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border ${point.border} shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col gap-4`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${point.color} shadow-sm`}>
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed pl-1">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrowthElements;