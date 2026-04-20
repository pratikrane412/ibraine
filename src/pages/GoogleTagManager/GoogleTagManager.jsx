import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Headphones } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

/* ─── All images use Unsplash (always reliable, no CORS) ─── */
const IMG = {
    blobY: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cellipse cx='100' cy='100' rx='80' ry='60' fill='%23FDB813' opacity='0.4'/%3E%3C/svg%3E`,
    blobB: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cellipse cx='100' cy='100' rx='70' ry='90' fill='%2338bdf8' opacity='0.3'/%3E%3C/svg%3E`,

    // Hero right — person at laptop with analytics on screen
    heroDash: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    // Hero floating card 1 — coding / script feel
    heroC1: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=600&auto=format&fit=crop&q=80",
    // Hero floating card 2 — charts / data
    heroC2: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=80",
    // Hero floating card 3 — finance / ROI numbers
    heroROI: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&auto=format&fit=crop&q=80",

    // Section 3 — analytics desk
    s3a: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    s3b: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",

    // Section 4 — data screens
    s4a: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&auto=format&fit=crop&q=80",
    s4b: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80",

    // Section 5 FAQ images
    faq1: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=700&q=80",
    faq2: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&auto=format&fit=crop&q=80",
    faq3: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80",

    // Video banner BG
    vidBg: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1600&auto=format&fit=crop&q=80",

    // Avatars
    av1: "https://i.pravatar.cc/150?img=47",
    av2: "https://i.pravatar.cc/150?img=12",
    av3: "https://i.pravatar.cc/150?img=32",
};

// Brand logos via Clearbit (highly reliable public CDN)
const LOGOS = [
    { src: "https://cdn.simpleicons.org/google", name: "Google" },
    { src: "https://cdn.simpleicons.org/meta", name: "Meta" },
    { src: "https://cdn.simpleicons.org/shopify", name: "Shopify" },
    { src: "https://cdn.simpleicons.org/hubspot", name: "HubSpot" },
    { src: "https://cdn.simpleicons.org/salesforce", name: "Salesforce" },
    { src: "https://cdn.simpleicons.org/mailchimp", name: "Mailchimp" },
    { src: "https://cdn.simpleicons.org/stripe", name: "Stripe" },
    { src: "https://cdn.simpleicons.org/zendesk", name: "Zendesk" },
];

const GTMIntegration = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        { title: "GTM setup & container deployment", content: "We implement and configure your GTM container across your website, ensuring seamless tracking without repeated code changes." },
        { title: "Tag and trigger configuration", content: "We set up and manage tags for analytics, ad platforms, and third-party tools — with precise triggers to ensure accurate firing." },
        { title: "DataLayer architecture & event tracking", content: "We build structured dataLayer implementations to track key user actions like clicks, form submissions, scroll depth, and ecommerce events." },
        { title: "Testing, debugging & QA", content: "We rigorously test every tag using advanced debugging tools to eliminate errors, duplicates, and misfires before going live." }
    ];

    return (
        <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">

            {/* ════ 1. HERO — soft blue-white background ════ */}
            <section className="relative bg-[#eef4fb] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">

                <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
                    src={IMG.blobY} className="absolute top-32 left-[5%] w-20 hidden lg:block" alt="" />
                <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
                    src={IMG.blobB} className="absolute bottom-20 left-[45%] w-14 hidden lg:block" alt="" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

                    {/* LEFT */}
                    <div className="lg:w-1/2">
                        <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
                            className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                            Precision Tracking{' '}
                            <span className="relative inline-block z-10">
                                Systems Built
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#FDB813]/60 -z-10 rounded-sm" />
                            </span>{' '}
                            for Smarter Marketing Decisions
                        </motion.h1>

                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                            className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                            Data is only powerful when it’s accurate, structured, and actionable.
                            We design advanced Google Tag Manager setups that give you full control over tracking, eliminate data inconsistencies, and turn every user interaction into meaningful insight.                        </motion.p>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                           <a href="/contact">
                            <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                                Talk to our GTM Expert Now
                            </button></a>
                            
                        </motion.div>

                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}
                            className="text-gray-500 text-[15px]">
                            Get your tags deployed, tested, and live — without touching your website code.
                        </motion.p>
                    </div>

                    {/* RIGHT IMAGE CLUSTER */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">

                        <img src={IMG.heroDash}
                            className="absolute right-0 top-0 w-[85%] h-[62%] object-cover z-10 rounded-2xl shadow-xl"
                            alt="Analytics Dashboard" />

                        <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                            src={IMG.heroC1}
                            className="absolute left-[-8%] top-[18%] w-[55%] h-[36%] object-cover z-20 shadow-2xl rounded-xl border-4 border-white"
                            alt="Tag Config" />

                        <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                            src={IMG.heroC2}
                            className="absolute left-[8%] bottom-[6%] w-[42%] h-[30%] object-cover z-30 shadow-2xl rounded-xl border-4 border-white"
                            alt="Data Chart" />

                        <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }}
                            src={IMG.heroROI}
                            className="absolute right-[-2%] bottom-[3%] w-[38%] h-[28%] object-cover z-20 rounded-xl shadow-2xl border-4 border-white"
                            alt="ROI Stats" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Trusted by Brands That Rely on Clean, Actionable Data</h2>
                    <p className="text-gray-500 mb-12 text-lg">From growing startups to performance-driven businesses, we’ve helped brands build reliable tracking systems that power smarter marketing decisions and measurable growth.</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {LOGOS.map((logo, i) => (
                            <img key={i} src={logo.src} alt={logo.name}
                                className="w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform"
                                onError={e => { e.target.style.display = 'none'; }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 3. UNIFIED TAG MANAGEMENT ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] w-full">
                        <img src={IMG.s3a}
                            className="absolute bottom-0 left-0 w-[80%] h-[62%] object-cover rounded-2xl shadow-xl z-10"
                            alt="Analytics Work" />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src={IMG.s3b}
                            className="absolute top-0 right-0 w-[62%] h-[52%] object-cover z-20 rounded-2xl shadow-2xl border-4 border-white"
                            alt="Tag Setup" />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                            Take Control of Your Tracking Without Technical Bottlenecks
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
                            Modern marketing moves fast — your tracking setup should too.
                            Relying on developers for every tag or pixel slows you down and increases the risk of data gaps.
                        </p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            We build flexible, scalable GTM systems that allow your marketing team to:                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Deploy and manage tags independently", "Track user behavior with precision", "Adapt quickly to campaign changes"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/contact">
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">
                            Get a free GTM audit now
                        </button></a>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. ACTIONABLE DATA ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                            From Raw Data to Clear Marketing Intelligence
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            We go beyond basic tag implementation — we create a complete tracking ecosystem.                        </p>

                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            As a Google Tag Manager-focused agency in Mumbai, we structure your dataLayer, configure advanced tracking, and integrate your entire marketing stack — ensuring every interaction is captured cleanly and consistently. </p>
                        <ul className="space-y-4 mb-10">
                            {["Accurate Conversion Tracking", "Deeper User Behaviour Insights", "Improved Campaign Optimization", "Reduced Data Discrepancies", "Future-Ready Tracking Infrastructure"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/contact">
                        <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">
                            Talk to our GTM Expert Now
                        </button></a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
                        <img src={IMG.s4a}
                            className="absolute top-0 right-0 w-[90%] h-[68%] object-cover z-10 rounded-2xl shadow-xl"
                            alt="Data Screens" />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }}
                            src={IMG.s4b}
                            className="absolute bottom-10 left-[-5%] w-[55%] h-[36%] object-cover z-20 shadow-2xl rounded-xl border-4 border-white"
                            alt="Stats" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. FAQ / ACCORDION ════ */}
            <section className="py-24 px-6 bg-[#eef4fb]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[600px] w-full">
                        <img src={IMG.faq1}
                            className="absolute top-0 left-0 w-[68%] h-[48%] object-cover z-10 rounded-2xl shadow-xl"
                            alt="GTM Setup" />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src={IMG.faq2}
                            className="absolute top-[22%] right-[-5%] w-[58%] h-[40%] object-cover z-20 rounded-2xl shadow-2xl border-4 border-white"
                            alt="Trigger Config" />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }}
                            src={IMG.faq3}
                            className="absolute bottom-0 left-[8%] w-[65%] h-[30%] object-cover z-30 shadow-2xl rounded-2xl border-4 border-white"
                            alt="Code" />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">
                            Built for Brands That Depend on Data Accuracy
                        </h2>
                        <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">
                            Whether you're scaling paid campaigns or optimizing funnels, your decisions depend on reliable data.
                            We ensure your tracking foundation is strong, consistent, and built to support long-term growth.                        </p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#FDB813]' : 'text-black'}`}>
                                            {faq.title}
                                        </span>
                                        {openFaq === index
                                            ? <ChevronUp className="text-[#FDB813]" />
                                            : <ChevronDown className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-500 text-[15px]">
                                                {faq.content}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ════ 6. STATS ════ */}
            <section className="py-24 px-6 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="font-lora text-4xl lg:text-5xl mb-6">
                        A Systematic Approach to Tracking That Scales with You
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-gray-300 text-lg">
                        We start with a detailed audit, identify tracking gaps, and build a clean, structured GTM setup that evolves with your marketing needs.                    </motion.p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-teal-600/50">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">200+</h3>
                        <p className="text-gray-300 text-lg">GTM Containers successfully deployed!</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">99.8%</h3>
                        <p className="text-gray-300 text-lg">Tag Firing Accuracy across all clients</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">50+</h3>
                        <p className="text-gray-300 text-lg">Integrations: GA4, Meta, LinkedIn & more!</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
           

            {/* ════ 8. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                            Testimonials That Make Us <span className="italic text-[#FDB813]">Blush</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hear from brands that transformed their analytics and gained complete confidence in their tracking systems.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Nair", role: "GrowthStack — Head of Marketing", img: IMG.av1,
                                text: "Before their GTM setup, our conversion data was a mess. Now we have accurate GA4 events, Meta Pixel firing correctly, and real-time reports we can actually trust. Incredible work!"
                            },
                            {
                                name: "Karan Mehta", role: "Shopify Store Owner", img: IMG.av2,
                                text: "They migrated our entire UA setup to GA4 via GTM with zero data loss and even added enhanced ecommerce tracking. Our ROAS improved by 40% in the first month because we could finally see the full funnel."
                            },
                            {
                                name: "Divya Sharma", role: "FinTech Startup — Growth Lead", img: IMG.av3,
                                text: "The dataLayer architecture they built for us is rock solid. Custom events for every step of our onboarding funnel, LinkedIn Insight Tag, and Hotjar — all configured flawlessly. Our paid campaigns have never been more efficient."
                            }
                        ].map((review, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }}
                                className="bg-[#eef4fb] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <img src={review.img} alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-[#FDB813] shadow-md" />
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1a162d] leading-tight">{review.name}</h4>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{review.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-[16px] leading-relaxed italic">"{review.text}"</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200/50">
                                    <div className="flex text-[#FDB813] gap-1 text-sm">
                                        {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 9. MINI CTA ════ */}
            <section className="py-20 px-6 bg-slate-50 text-center border-t border-gray-200">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="max-w-4xl mx-auto">
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">
                        Unlock the full power of your data with Ibraine's GTM experts
                    </h2>
                    <p className="text-gray-600 text-lg mb-10">
                        Partner with Ibraine, the GTM integration specialists, to finally get clean, accurate, and actionable data. Our tailored tag management strategies will give your marketing team the insights they need to scale with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Call Now</button> */}
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

                {/* Puzzle decoration */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-80 hidden md:block">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 text-blue-400">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-blue-400 rounded-full opacity-70 hidden lg:block" />
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* LEFT */}
                    <div className="space-y-8">
                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 shadow-sm">
                            <Headphones size={24} />
                        </div>
                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Experienced <br />
                            <span className="relative inline-block z-10">
                                GTM Integration
                                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FDB813]/50 -z-10 rounded-sm" />
                            </span> <br />
                            Specialists
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to take control of your tracking and analytics? Our GTM specialists are here to help you build a reliable, scalable tag infrastructure. Fill out the form and let's start building your data foundation.
                        </p>
                        <div className="pt-4">
                            {/* <p className="text-[#ffb400] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p> */}
                            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                                <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                                <a href="tel:+919892854892" className="hover:underline">
                                    +91 9892 854 892
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
                            <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                                <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                                <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
                            <form className="space-y-6">
                                <input type="text" placeholder="Your name"
                                    className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm" />
                                <input type="email" placeholder="Your email"
                                    className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm" />
                                <input type="tel" placeholder="Your phone"
                                    className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm" />
                                <textarea placeholder="Message..." rows="5"
                                    className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm resize-none" />
                                <button className="w-full sm:w-auto border-2 border-[#FDB813] text-[#FDB813] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FDB813] hover:text-black transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Build Your <span className="text-[#1a162d] font-black">Data Foundation!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default GTMIntegration;