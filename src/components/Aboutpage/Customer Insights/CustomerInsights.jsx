import React from 'react';
import { motion } from 'framer-motion';
import { Database, User, Users, Lightbulb, FileText, Search } from 'lucide-react';

const cards = [
  {
    title: "Comprehensive and Data-Driven Strategies",
    desc: "We offer data-backed marketing plans for maximum ROI and measurable results.",
    icon: <Database className="w-10 h-10 text-[#ffb400]" />
  },
  {
    title: "Customized Solutions for Every Client",
    desc: "Tailored marketing strategies that match each client's unique goals and audience.",
    icon: <User className="w-10 h-10 text-[#ffb400]" />
  },
  {
    title: "Team of Expert Specialists",
    desc: "Our skilled professionals excel in various digital marketing disciplines.",
    icon: <Users className="w-10 h-10 text-[#ffb400]" />
  },
  {
    title: "Continuous Innovation and Adaptability",
    desc: "We stay ahead by embracing the latest trends and technologies in digital marketing.",
    icon: <Lightbulb className="w-10 h-10 text-[#ffb400]" />
  },
  {
    title: "Transparent Reporting and Accountability",
    desc: "Regular, detailed reports and open communication ensure complete transparency.",
    icon: <FileText className="w-10 h-10 text-[#ffb400]" />
  },
  {
    title: "Strong Focus on ROI and Business Growth",
    desc: "Our primary goal is to drive tangible results and foster business growth.",
    icon: <Search className="w-10 h-10 text-[#ffb400]" />
  }
];

const CustomerInsights = () => {
  return (
    <section className="py-24 px-6 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section (Centered like your image) --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-[50px] font-serif text-[#1a1a1a] leading-tight mb-8 max-w-4xl mx-auto">
            We focus on understanding customer insights <br />
            to make every campaign successful
          </h2>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
            At our data-driven <span className="text-[#ffb400] font-bold">digital company in Mumbai</span>, 
            we pride ourselves on delivering tailored services that make a real impact on your business. 
            Our team works tirelessly leveraging cutting-edge tools to maximize your ROI.
          </p>
        </div>

        {/* --- 3D Animated Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 30px 60px rgba(0,0,0,0.08)" 
              }}
              className="bg-white p-12 rounded-[3rem] border border-gray-50 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="mb-8"
              >
                {card.icon}
              </motion.div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-5 leading-snug group-hover:text-[#ffb400] transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed px-2">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerInsights;