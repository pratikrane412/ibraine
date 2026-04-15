import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────────── */
const CLIENT_DATA = [
  { name: "11 Plus Center", src: "/client/11 plus center Logo.png", bg: "#EAF4FF", accent: "#3b82f6" },
  { name: "AFC", src: "/client/AFC Logo.png", bg: "#FFF1F2", accent: "#f43f5e" },
  { name: "Artigenius", src: "/client/Artigenius Logo.png", bg: "#F0FDF4", accent: "#22c55e" },
  { name: "Billabong", src: "/client/billabong logo.jpg", bg: "#EFF6FF", accent: "#6366f1" },
  { name: "Bluehost", src: "/client/Bluehost Logo.png", bg: "#FFF7ED", accent: "#f97316" },
  { name: "Bragpacker", src: "/client/bragpacker logo.png", bg: "#FDF2F8", accent: "#ec4899" },
  { name: "Choupette", src: "/client/Choupette Logo.jpg", bg: "#ECFEFF", accent: "#06b6d4" },
  { name: "Cloud Dhobi", src: "/client/Cloud Dhobi Logo.jpg", bg: "#F0F9FF", accent: "#0ea5e9" },
  { name: "Dlok", src: "/client/Dlok Logo High Res.png", bg: "#F7FEE7", accent: "#84cc16" },
  { name: "Elevation Interior", src: "/client/Elevation Interior logo.png", bg: "#F0FDFA", accent: "#14b8a6" },
  { name: "Finzard", src: "/client/Finzard Logo.png", bg: "#FEF3C7", accent: "#f59e0b" },
  { name: "Garware", src: "/client/Garware Logo.png", bg: "#EEF2FF", accent: "#818cf8" },
  { name: "Great White", src: "/client/Great White Logo.png", bg: "#FCE7F3", accent: "#db2777" },
  { name: "Hamza", src: "/client/Hamza Logo 1 1.png", bg: "#E0F2FE", accent: "#0284c7" },
  { name: "Headphone Zone", src: "/client/Headphone Zone Logo.png", bg: "#FFF7ED", accent: "#ea580c" },
  { name: "House of Khichdi", src: "/client/House Of Khichdi Logo.jpeg", bg: "#E0F2F1", accent: "#0d9488" },
  { name: "HUL", src: "/client/HUL Logo.jpg", bg: "#F3E8FF", accent: "#9333ea" },
  { name: "Laumiere", src: "/client/Laumiere Logo.png", bg: "#FEF9C3", accent: "#ca8a04" },
  { name: "Live Pages", src: "/client/logo.png", bg: "#ECFCCB", accent: "#65a30d" },
  { name: "Lullabies", src: "/client/Lullabies Logo.png", bg: "#E0F7FA", accent: "#00acc1" },
  { name: "Livessentials", src: "/client/luvessentials logo.jpg", bg: "#F1F5F9", accent: "#64748b" },
  { name: "Magma", src: "/client/Magma Logo.png", bg: "#FDF2F8", accent: "#be185d" },
  { name: "Meditac", src: "/client/Meditac Kits Logo.png", bg: "#FFF1F2", accent: "#e11d48" },
  { name: "Meetime", src: "/client/meetime logo.jpg", bg: "#F0FDFA", accent: "#10b981" },
  { name: "Obesity Care", src: "/client/Obersity Care Logo.png", bg: "#EFF6FF", accent: "#4f46e5" },
  { name: "Papita", src: "/client/Papita Logo.jpg", bg: "#FFF7ED", accent: "#fb923c" },
  { name: "Portxray", src: "/client/Portxray logo.jpg", bg: "#F0F9FF", accent: "#38bdf8" },
  { name: "Rental Cars UAE", src: "/client/Rental Cars UAE logo.png", bg: "#F5F3FF", accent: "#7c3aed" },
  { name: "Shop CJ", src: "/client/SHOP-CJ-Logo.png", bg: "#FEF3C7", accent: "#d97706" },
  { name: "Sunnex", src: "/client/sunnex logo.jpg", bg: "#E0F2FE", accent: "#0369a1" },
  { name: "Thorny Affairs", src: "/client/Thorny Affairs Logo.png", bg: "#ECFEFF", accent: "#0891b2" },
  { name: "Treat Resort", src: "/client/Treat Resort logo.png", bg: "#F0FDF4", accent: "#16a34a" },
  { name: "Truck Suspension", src: "/client/Truck Suspension Logo.jpg", bg: "#FFF7ED", accent: "#c2410c" },
  { name: "Bottoms Love", src: "/client/Bottoms Love Logo.webp", bg: "#F0FDFA", accent: "#0f766e" },
  { name: "Emrik Cakes", src: "/client/Emrik Cakes Logo.webp", bg: "#FEF3C7", accent: "#b45309" },
  { name: "Futurz4x4", src: "/client/Futurz4x4 Logo.webp", bg: "#E0F2FE", accent: "#1d4ed8" }
];

const STATS = [
  { icon: Users, value: "36+", label: "Brands Served" },
  { icon: TrendingUp, value: "₹50Cr+", label: "Revenue Generated" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: Award, value: "10+", label: "Years of Excellence" }
];

/* ─── STAGGER VARIANTS ───────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

/* ══════════════════════════════════════════════════════════════
   1. HERO
══════════════════════════════════════════════════════════════ */
const ClienteleHero = () => (
  <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-24 bg-[#f8fafc]">

    {/* ── grid texture ── */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.12) 1px,transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

    {/* ── blurred orbs ── */}
    <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-blue-200/30 blur-[120px] pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-amber-200/30 blur-[120px] pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-100/20 blur-[140px] pointer-events-none" />

    <div className="relative z-10 max-w-5xl mx-auto space-y-8">

      {/* badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 text-amber-600 text-sm font-semibold shadow-sm"
      >
        <Trophy size={15} className="fill-amber-400 text-amber-400" />
        Our Clientele
      </motion.div>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-lora text-[44px] md:text-[68px] leading-[1.15] text-[#0f172a] font-normal"
      >
        We believe our greatest{' '}
        <span className="relative inline-block">
          <span className="relative z-10 text-[#1d4ed8]">reward</span>
          <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#FDB813] rounded-full" />
        </span>
        <br className="hidden md:block" />
        {' '}is our clients' trust &amp; satisfaction
      </motion.h1>

      {/* sub */}
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="font-lora text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
      >
        We are not your agency — we are your partner in growth.
      </motion.p>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>

    {/* ── stats strip ── */}
    <motion.div
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
      className="relative z-10 mt-16 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {STATS.map(({ icon: Icon, value, label }, i) => (
        <div key={i} className="bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl p-5 text-center shadow-sm">
          <Icon size={20} className="mx-auto mb-2 text-[#FDB813]" />
          <p className="font-lora text-2xl font-bold text-[#0f172a]">{value}</p>
          <p className="text-gray-500 text-xs mt-0.5 font-medium tracking-wide">{label}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   2. GRID
══════════════════════════════════════════════════════════════ */
const ClienteleGrid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FDB813] text-xs font-bold tracking-[0.35em] uppercase mb-3">Trusted By</p>
          <h2 className="font-lora text-4xl md:text-5xl text-[#0f172a] font-normal leading-tight">
            Brands that chose <span className="italic text-[#1d4ed8]">us</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
            From hyper-growth startups to household names — here are the brands we're proud to call partners.
          </p>
          {/* decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FDB813]" />
            <div className="w-2 h-2 rounded-full bg-[#FDB813]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FDB813]" />
          </div>
        </motion.div>

        {/* grid */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {CLIENT_DATA.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6, scale: 1.04 }}
              style={{
                backgroundColor: client.bg,
                boxShadow: hovered === index ? `0 12px 40px -8px ${client.accent}55` : '0 2px 8px rgba(0,0,0,0.06)'
              }}
              className="relative group h-32 md:h-36 flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer overflow-hidden transition-shadow duration-500"
            >
              {/* shimmer bar on top */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${client.accent}00, ${client.accent}, ${client.accent}00)` }}
              />

              {/* logo */}
              <img
                src={client.src}
                alt={client.name}
                className="max-w-[75%] max-h-[55%] object-contain filter grayscale group-hover:grayscale-0 opacity-55 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500"
              />

              {/* name tooltip */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm text-white text-[10px] font-medium py-1.5 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {client.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-12 font-medium"
        >
          …and many more brands across 15+ industries
        </motion.p>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   3. TESTIMONIAL STRIP
══════════════════════════════════════════════════════════════ */
const testimonials = [
  { quote: "Brandwitty didn't just run our ads — they rebuilt our entire growth engine.", name: "Aman Chowdary", role: "Founder, Luxulo" },
  { quote: "CPL dropped 80% in 6 weeks. These guys are the real deal.", name: "Salman Khan", role: "Business Head, RewardPort" },
  { quote: "Our online bookings tripled. I wouldn't trust anyone else with our budget.", name: "Rahul Pandey", role: "Founder, Synk Salon" }
];

const TestimonialStrip = () => (
  <section className="bg-[#f8fafc] py-20 px-6 border-y border-gray-100">
    <div className="max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center text-[#FDB813] text-xs font-bold tracking-[0.35em] uppercase mb-12"
      >
        Client Love
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-400 relative overflow-hidden"
          >
            {/* giant quote mark */}
            <div className="absolute -top-2 -left-1 text-[80px] leading-none text-[#FDB813]/15 font-serif select-none">"</div>
            <p className="text-gray-700 text-[15px] leading-relaxed italic mb-6 relative z-10">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[#0f172a] text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
            {/* star row */}
            <div className="flex gap-0.5 mt-4">
              {"★★★★★".split("").map((s, idx) => <span key={idx} className="text-[#FDB813] text-xs">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   4. CTA
══════════════════════════════════════════════════════════════ */
const ClienteleCTA = () => (
  <section className="relative w-full bg-[#0a1e3d] py-24 md:py-32 overflow-hidden">

    {/* decorative orbs */}
    <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

    {/* dot grid overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

    {/* diagonal accent line */}
    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" style={{ right: '20%' }} />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

      <motion.p
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="text-[#FDB813] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6"
      >
        Get In Touch
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }} viewport={{ once: true }}
        className="font-lora text-white text-4xl md:text-6xl leading-[1.2] font-normal mb-6"
      >
        Need a Custom Plan?<br className="hidden md:block" />
        {' '}
        <span className="relative inline-block">
          Let's build it together.
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#FDB813]/60 rounded-full" />
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }} viewport={{ once: true }}
        className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
      >
        Join 36+ brands who chose Brandwitty as their performance partner. Send us a message — we respond within 24 hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }} viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.a
          href="/contact"
          whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 bg-[#FDB813] hover:bg-[#e5a610] text-[#0a1e3d] font-bold px-9 py-4 rounded-xl shadow-[0_8px_32px_rgba(253,184,19,0.35)] transition-colors duration-200 group"
        >
          <span className="text-base">Contact Us Now</span>
          <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
        </motion.a>
        <motion.a
          href="/case-studies"
          whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-semibold px-9 py-4 rounded-xl transition-all duration-200"
        >
          View Case Studies
        </motion.a>
      </motion.div>

      {/* trust strip */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }} viewport={{ once: true }}
        className="mt-16 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm"
      >
        {["No lock-in contracts", "Results in 30 days", "Free audit included"].map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDB813]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   PAGE WRAPPER
══════════════════════════════════════════════════════════════ */
const ClientelePage = () => (
  <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">
    <ClienteleHero />
    <ClienteleGrid />
    <TestimonialStrip />
    <ClienteleCTA />
  </main>
);

export default ClientelePage;