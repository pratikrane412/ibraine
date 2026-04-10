import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* ════ LEFT SIDE: CONTACT FORM ════ */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100"
        >
          <span className="text-[#fdb813] font-bold text-xs tracking-widest uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Send us a message
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your name *" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#fdb813] transition-all text-sm font-medium" />
              <input type="email" placeholder="Your email *" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#fdb813] transition-all text-sm font-medium" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="tel" placeholder="Your phone *" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#fdb813] transition-all text-sm font-medium" />
              <input type="text" placeholder="Company Website" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#fdb813] transition-all text-sm font-medium" />
            </div>
            <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#fdb813] transition-all text-sm font-medium text-gray-500 appearance-none">
                <option>Monthly Budget</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000+</option>
            </select>
            <textarea placeholder="Your Message" rows="5" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#fdb813] transition-all text-sm font-medium resize-none"></textarea>
            
            <button className="w-full bg-[#0a2647] hover:bg-[#144272] text-white font-bold py-5 rounded-xl shadow-lg transition-all active:scale-[0.98] uppercase tracking-widest text-sm flex items-center justify-center gap-3">
              SEND MESSAGE
              <Send size={16} />
            </button>
          </form>
        </motion.div>

        {/* ════ RIGHT SIDE: CONTACT DETAILS ════ */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          <div>
            <span className="text-[#fdb813] font-bold text-xs tracking-widest uppercase mb-4 block">
                FIND US
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our contact details
            </h2>
          </div>

          {/* Address Card */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex items-start gap-6 group hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin size={28} />
             </div>
             <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Our Address</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Office No. 2, Chandra Niwas CHS, Off Old Police Lane, Andheri East, Mumbai – 400069
                </p>
             </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex items-start gap-6 group hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Phone size={28} />
             </div>
             <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Contact Info</h4>
                <p className="text-gray-400 text-xs mb-3 font-semibold uppercase tracking-wider">Reach out via WhatsApp, Call or Message:</p>
                <div className="space-y-1">
                    <a href="tel:+919892854892" className="block text-gray-900 font-bold hover:text-[#fdb813] transition-colors">+91 9892 854 892</a>
                    <a href="tel:+919619032791" className="block text-gray-900 font-bold hover:text-[#fdb813] transition-colors">+91 9619 032 791</a>
                    <a href="tel:+919819494162" className="block text-gray-900 font-bold hover:text-[#fdb813] transition-colors">+91 9819 494 162</a>
                </div>
             </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex items-start gap-6 group hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Mail size={28} />
             </div>
             <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Reach us via Email</h4>
                <p className="text-gray-400 text-xs mb-3 font-semibold uppercase tracking-wider">We eagerly await your thoughts.</p>
                <div className="space-y-1">
                    <a href="mailto:info@ibraine.com" className="block text-gray-900 font-bold hover:text-[#fdb813] transition-colors">info@ibraine.com</a>
                    <a href="mailto:ibraine@gmail.com" className="block text-gray-900 font-bold hover:text-[#fdb813] transition-colors">ibraine@gmail.com</a>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;