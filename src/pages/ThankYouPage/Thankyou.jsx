import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle, MailCheck, Clock, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Agar aage routing karni ho

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-[#FDFBF7] overflow-hidden flex items-center justify-center py-16 px-6 lg:px-12">
      
      {/* ════ IMPORT FONTS ════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* ════ BACKGROUND DECORATIONS (Floating Dots from Screenshot) ════ */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-12 h-12 rounded-full bg-[#83A997] opacity-80 hidden md:block" 
      />
      <motion.div 
        animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-28 w-6 h-6 rounded-full bg-[#FCE29F] opacity-80 hidden md:block" 
      />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 relative z-10">
        
        {/* ════ LEFT SIDE: TEXT & CTA ════ */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif-custom text-[45px] md:text-[65px] lg:text-[75px] leading-[1.1] text-[#1A1A1A] mb-4">
              Thank You. <br />
              We Have Received <br />
              {/* Yellow Highlight Effect */}
              <span className="relative inline-block">
                <span className="relative z-10">Your Details.</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="absolute bottom-2 md:bottom-4 left-0 h-4 md:h-6 bg-[#FDBA21] -z-10 rounded-sm"
                />
              </span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="font-sans-custom text-[#4A4A4A] text-lg md:text-xl leading-relaxed max-w-lg mt-6 mb-10">
              Your submission has been successfully securely recorded. Our performance experts are currently reviewing your request and will get back to you with a strategic plan shortly.
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <button 
              onClick={() => navigate('/')} // Back to home route
              className="group flex items-center gap-3 bg-[#FDBA21] text-[#1A1A1A] font-sans-custom font-bold text-base md:text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Home size={22} className="group-hover:scale-110 transition-transform" />
              Back to Home
            </button>
          </motion.div>

          {/* Bottom Trust Text */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <p className="font-sans-custom text-[#888888] text-sm mt-8 border-t border-gray-200 pt-4">
              Secure Data Transfer | 100% Confidentiality Maintained
            </p>
          </motion.div>

        </div>

        {/* ════ RIGHT SIDE: FLOATING UI CARDS ════ */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            className="absolute z-10 w-[90%] sm:w-[400px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 border border-gray-50 flex flex-col items-center text-center"
          >
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
              className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle size={40} className="text-green-500" />
            </motion.div>
            <h3 className="font-sans-custom font-bold text-2xl text-[#1A1A1A] mb-2">Request Verified</h3>
            <p className="font-sans-custom text-gray-500 text-sm">Our team has been notified and is preparing your personalized roadmap.</p>
          </motion.div>

          {/* Floating Card 1 (Top Left) */}
          <motion.div 
            animate={{ y: [-15, 5, -15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 -left-4 md:-left-12 top-10 md:top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-4"
          >
            <div className="bg-blue-50 p-3 rounded-lg"><Clock className="text-blue-500" size={24} /></div>
            <div>
              <p className="font-sans-custom text-xs text-gray-400 font-semibold uppercase tracking-wider">Response Time</p>
              <p className="font-sans-custom font-bold text-[#1A1A1A]">Under 24 Hours</p>
            </div>
          </motion.div>

          {/* Floating Card 2 (Bottom Right) */}
          <motion.div 
            animate={{ y: [10, -15, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 -right-4 md:-right-8 bottom-10 md:bottom-20 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-4"
          >
            <div className="bg-purple-50 p-3 rounded-lg"><MailCheck className="text-purple-500" size={24} /></div>
            <div>
              <p className="font-sans-custom text-xs text-gray-400 font-semibold uppercase tracking-wider">Next Step</p>
              <p className="font-sans-custom font-bold text-[#1A1A1A]">Check your Email</p>
            </div>
          </motion.div>

           {/* Subtle background blob for depth */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FDBA21]/10 rounded-full blur-3xl -z-10" />
        </div>

      </div>
    </section>
  );
};

export default ThankYouPage;