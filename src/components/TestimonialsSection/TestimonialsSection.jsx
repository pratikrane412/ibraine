import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, CheckCircle2, PhoneCall, ChevronDown, ChevronUp
} from 'lucide-react';
import { Headphones, Puzzle } from 'lucide-react';

const reviews = [
  { name: "Rashid Khan", role: "", initials: "RK", text: "One of the standout qualities of Ibraine is their exceptional team of professionals. They are not just experts in their respective fields but also great communicators who take the time to understand your business goals. This personalized approach is evident in every campaign they run." },
  { name: "Anil Singh Kunwar Singh Aswal", role: "", initials: "AS", text: "Im impressed with the kind of Digital marketing expertize iBraine has delivered. Their ability to scale budgets without killing efficiency is a genuine superpower. Every rupee we give them comes back multiplied. Truly world-class." },
  { name: "Rohit Patil", role: "", initials: "RP", text: "Our online bookings tripled in 90 days. The Google and Meta campaigns were laser-sharp — right audience, right creative, right moment. Cost per booking dropped by 58%. I wouldn't trust anyone else with our ad budget!" },
  { name: "Vikram Gargote", role: "", initials: "VG", text: "Switched agencies three times before finding this team. Within 45 days our D2C revenue jumped 2.4x. The level of strategic depth combined with flawless execution is genuinely rare in the market." },
  { name: "Junaid Makrani", role: "", initials: "JM", text: "From zero to 50,000 monthly active users in 4 months through performance marketing alone. Their Meta funnel architecture and retention retargeting is masterclass-level. ROI we never thought possible." },
  { name: "Ed Lopez", role: "", initials: "EL", text: "Our cost per purchase dropped 47% in the first month. The creative iterations they run are relentless and data-backed. Every campaign feels custom-built, not templated. Absolute game-changers for e-commerce." },
  { name: "Yash Lad", role: "", initials: "YL", text: "Real estate leads used to cost us ₹2,400 each. Now we're at ₹380 with 3x better quality. Their Google Search strategy combined with smart landing page testing made all the difference. Exceptional work." },
  { name: "Kinjal Gohil", role: "", initials: "KG", text: "We launched our D2C health brand with zero digital footprint. Within 90 days we had a 5x ROAS on Meta and a profitable Google Shopping account. The roadmap they built for us is worth its weight in gold." },
  { name: "Shraddha Somani", role: "", initials: "SS", text: "B2B lead generation through Meta was something we never believed in — until they proved us wrong. 300+ quality leads in 60 days with a CPL 60% below industry average. The results speak louder than any pitch." },
  { name: "Deepika Joshi", role: "", initials: "DJ", text: "From a struggling furniture brand to a recognised name — all in 6 months. Their full-funnel strategy blending awareness and conversion campaigns is the reason we're now expanding to 3 new cities. Can't recommend enough." },
];

const CARD_WIDTH = 340;
const GAP = 20;
const VISIBLE = 3;
const STEP = CARD_WIDTH + GAP;

// Triple the array: real cards sit in the middle clone (index 1)
// so both prev and next have buffer cards on either side
const LOOPED = [...reviews, ...reviews, ...reviews];
const OFFSET = reviews.length; // we start at the middle clone

const TestimonialsSection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [current, setCurrent] = useState(OFFSET); // start at middle clone
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef(null);
  const isJumping = useRef(false);

  const startAutoPlay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isJumping.current) {
        setCurrent(prev => prev + 1);
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(timerRef.current);
  }, []);

  // When current drifts into the first or third clone, snap silently back to middle
  useEffect(() => {
    if (isJumping.current) return;

    // Drifted past the end of the middle clone → snap to equivalent position in middle
    if (current >= OFFSET + reviews.length) {
      isJumping.current = true;
      setTimeout(() => {
        setAnimated(false);
        setCurrent(prev => prev - reviews.length);
        setTimeout(() => {
          setAnimated(true);
          isJumping.current = false;
        }, 50);
      }, 400); // wait for spring animation to finish
    }

    // Went before the start of the middle clone → snap forward
    if (current < OFFSET) {
      isJumping.current = true;
      setTimeout(() => {
        setAnimated(false);
        setCurrent(prev => prev + reviews.length);
        setTimeout(() => {
          setAnimated(true);
          isJumping.current = false;
        }, 50);
      }, 400);
    }
  }, [current]);

  const handleManual = (n) => {
    clearInterval(timerRef.current);
    setAnimated(true);
    setCurrent(n);
    // Resume after 5s pause
    setTimeout(() => startAutoPlay(), 5000);
  };

  const dotIndex = ((current - OFFSET) % reviews.length + reviews.length) % reviews.length;

  return (
    <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">
      {/* ════ 8. TESTIMONIALS ════ */}
      <section className="py-24 bg-white overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto px-6 mb-14">
          <h2 className="font-lora text-4xl lg:text-5xl font-normal text-[#1a162d] leading-tight mb-4">
            Testimonials That Make Us <em className="text-[#FDB813] not-italic font-lora italic">Blush</em>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hear from brands who stopped burning budgets and started breaking records — all through performance-first marketing.
          </p>
        </div>

        {/* Slider */}
        <div className="pl-12 overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: -current * STEP }}
            transition={animated
              ? { type: "spring", stiffness: 300, damping: 35 }
              : { duration: 0 }
            }
          >
            {LOOPED.map((r, i) => (
              <div
                key={i}
                style={{ flex: `0 0 ${CARD_WIDTH}px` }}
                className="bg-[#fcfaf2] rounded-[2rem] border border-[#ede8d4] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#FDB813] flex items-center justify-content-center text-white font-bold text-sm shrink-0 flex items-center justify-center">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-bold text-[#1a162d] text-base leading-tight">{r.name}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mt-0.5">{r.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed italic">"{r.text}"</p>
                </div>
                <div className="mt-5 pt-4 border-t border-black/5">
                  <span className="text-[#FDB813] tracking-widest text-sm">★★★★★</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10 px-6">
          <button
            onClick={() => handleManual(current - 1)}
            className="w-11 h-11 rounded-full border border-[#e8e2cc] bg-white flex items-center justify-center transition-all hover:bg-[#FDB813] hover:border-[#FDB813] group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-300 group-hover:stroke-white transition-colors">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManual(OFFSET + i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === dotIndex ? "w-6 bg-[#FDB813]" : "w-2 bg-[#e8e2cc]"}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleManual(current + 1)}
            className="w-11 h-11 rounded-full border border-[#e8e2cc] bg-white flex items-center justify-center transition-all hover:bg-[#FDB813] hover:border-[#FDB813] group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-300 group-hover:stroke-white transition-colors">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsSection;