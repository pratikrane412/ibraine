import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPhone, FiMail, FiCheck } from 'react-icons/fi';

const ContactSection = () => {
  const services = [
    "Performance Marketing",
    "SEM Experts",
    "SEO Services",
    "Social Media Marketing",
    "Website Design",
    "UX/UI Design",
    "GTM Integration",
    "CRO Optimization",
    "Content Writing",
    "Graphic Design",
    "Video Production"
  ];

  // Animation variants for Staggered Load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white relative overflow-hidden" style={{ fontFamily: "'Lora', serif" }}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10 hidden lg:block" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 relative z-10">

        {/* ════ LEFT: THE FORM ════ */}
        <div className="lg:col-span-7 p-8 md:p-14 lg:p-20 bg-white border-r border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Project Brief.
            </h2>
          </motion.div>

          <motion.form 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {/* 6 Text Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { label: 'Full Name*', type: 'text', placeholder: 'John Doe' },
                { label: 'Email Address*', type: 'email', placeholder: 'john@example.com' },
                { label: 'Phone Number*', type: 'tel', placeholder: '+91 00000 00000' },
                { label: 'Subject*', type: 'text', placeholder: 'Inquiry Type' },
                { label: 'Company Name', type: 'text', placeholder: 'Optional' },
                { label: 'Website Link', type: 'url', placeholder: 'www.example.com' },
              ].map((field, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group relative pt-4">
                  <label 
                    style={{ fontFamily: "'Lora', serif" }} 
                    className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#2c66f6] transition-colors duration-300"
                  >
                    {field.label}
                  </label>
                  <input 
                    type={field.type} 
                    style={{ fontFamily: "'Lora', serif" }} 
                    className="w-full bg-transparent border-b border-slate-200 pb-2 pt-3 outline-none focus:border-[#2c66f6] transition-all duration-300 text-[15px] md:text-[16px] text-slate-800 placeholder:text-slate-300 placeholder:font-light" 
                    placeholder={field.placeholder} 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2c66f6] group-focus-within:w-full transition-all duration-500 ease-out" />
                </motion.div>
              ))}
            </div>

            {/* Checkboxes Section */}
            <motion.div variants={itemVariants} className="space-y-5 pt-4">
              <label 
                style={{ fontFamily: "'Lora', serif" }} 
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 block mb-2"
              >
                Services Required
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                {services.map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group w-fit">
                    <div className="relative flex items-center justify-center w-4 h-4 border border-slate-300 rounded-[4px] group-hover:border-[#ffb400] transition-colors overflow-hidden bg-white shrink-0">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="absolute inset-0 bg-[#ffb400] scale-0 peer-checked:scale-100 transition-transform origin-center duration-200 ease-out" />
                      <FiCheck className="absolute text-white scale-0 peer-checked:scale-100 transition-transform duration-200 delay-75" size={12} strokeWidth={3} />
                    </div>
                    <span 
                      style={{ fontFamily: "'Lora', serif" }} 
                      className="text-slate-500 text-[14px] md:text-[15px] font-medium group-hover:text-slate-900 transition-colors select-none"
                    >
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Textarea */}
            <motion.div variants={itemVariants} className="group relative pt-4">
              <label 
                style={{ fontFamily: "'Lora', serif" }} 
                className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#2c66f6] transition-colors duration-300"
              >
                Requirements
              </label>
              <textarea 
                rows="2" 
                style={{ fontFamily: "'Lora', serif" }} 
                className="w-full bg-transparent border-b border-slate-200 pb-2 pt-3 outline-none focus:border-[#2c66f6] transition-all duration-300 text-[15px] md:text-[16px] text-slate-800 placeholder:text-slate-300 placeholder:font-light resize-none mt-2" 
                placeholder="Share a brief of your requirements..."
              />
              <div className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#2c66f6] group-focus-within:w-full transition-all duration-500 ease-out" />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-5 group mt-8 cursor-pointer border-none bg-transparent"
            >
              <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#ffb400] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[#ffb400]/30">
                <FiArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <span 
                style={{ fontFamily: "'Lora', serif" }} 
                className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-900 group-hover:text-[#ffb400] transition-colors"
              >
                Send Inquiry
              </span>
            </motion.button>

          </motion.form>
        </div>


        {/* ════ RIGHT: TECHNICAL INFO ════ */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#fafafa] lg:bg-transparent h-full">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 md:p-14 lg:p-20 space-y-16"
          >
            {/* Headquarters */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#2c66f6]" />
                <p style={{ fontFamily: "'Lora', serif" }} className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Headquarters</p>
              </div>
              <h3 style={{ fontFamily: "'Lora', serif" }} className="text-xl md:text-2xl lg:text-[28px] leading-[1.4] text-slate-800 font-medium">
                Office No. 2, Chandra Niwas CHS, <br />
                Off Old Police Lane, Andheri East, <br />
                Mumbai – 400069
              </h3>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#2c66f6]" />
                <p style={{ fontFamily: "'Lora', serif" }} className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Direct Contact</p>
              </div>
              <div className="space-y-6">
                <a href="tel:9321111753" style={{ fontFamily: "'Lora', serif" }} className="flex items-center gap-5 text-xl md:text-2xl text-slate-800 font-medium group hover:text-[#ffb400] transition-colors w-fit">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#ffb400] group-hover:shadow-md transition-all">
                    <FiPhone size={18} className="text-[#2c66f6] group-hover:text-[#ffb400] transition-colors" />
                  </div>
                  +91 9321111753
                </a>
                <a href="mailto:info@ibraine.com" style={{ fontFamily: "'Lora', serif" }} className="flex items-center gap-5 text-xl md:text-2xl text-slate-800 font-medium group hover:text-[#ffb400] transition-colors w-fit">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#ffb400] group-hover:shadow-md transition-all">
                    <FiMail size={18} className="text-[#2c66f6] group-hover:text-[#ffb400] transition-colors" />
                  </div>
                  info@ibraine.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Ecosystem */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-slate-200 p-8 md:p-14 lg:p-20 mt-auto bg-[#fafafa]"
          >
            <p style={{ fontFamily: "'Lora', serif" }} className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8">Follow Ecosystem</p>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  style={{ fontFamily: "'Lora', serif" }} 
                  className="text-[13px] font-bold text-slate-700 hover:text-[#ffb400] transition-colors uppercase tracking-[0.2em] relative group"
                >
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffb400] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;