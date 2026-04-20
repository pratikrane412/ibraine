import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Headphones } from 'lucide-react';
import ContactSection from '../../components/ContactSection/ContactSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
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
const MAX = reviews.length - VISIBLE;

/* ─── All images use Unsplash (always reliable, no CORS) ─── */
const IMG = {
    blobY: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cellipse cx='100' cy='100' rx='80' ry='60' fill='%23FDB813' opacity='0.4'/%3E%3C/svg%3E`,
    blobB: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cellipse cx='100' cy='100' rx='70' ry='90' fill='%2338bdf8' opacity='0.3'/%3E%3C/svg%3E`,

    // Hero right — person at laptop with analytics on screen
    heroDash: "/images/gtm1_converted.png",
    // Hero floating card 1 — coding / script feel
    heroC1: "/images/gtm2_converted.png",
    // Hero floating card 2 — charts / data
    heroC2: "/images/gtm3_converted.png",
    // Hero floating card 3 — finance / ROI numbers
    heroROI: "/images/gtm4_converted.png",

    // Section 3 — analytics desk
    s3a: "/images/gtm5_converted.png",
    s3b: "/images/gtm6_converted.png",

    // Section 4 — data screens
    s4a: "/images/gtm7_converted.png",
    s4b: "/images/gtm8_converted.png",

    // Section 5 FAQ images
    faq1: "/images/gtm9_converted.png",
    faq2: "/images/gtm10_converted.png",
    faq3: "/images/gtm11_converted.png",

    // Video banner BG
    vidBg: "/images/gtm/gtm12_converted.png",

    // Avatars
    av1: "https://i.pravatar.cc/150?img=47",
    av2: "https://i.pravatar.cc/150?img=12",
    av3: "https://i.pravatar.cc/150?img=32",
};

// Brand logos via Clearbit (highly reliable public CDN)
const LOGOS = [
    { src: "/images/google.svg", name: "Google" },
    { src: "/images/meta.svg", name: "Meta" },
    { src: "/images/shopify.svg", name: "Shopify" },
    { src: "/images/hubspot.svg", name: "HubSpot" },
    { src: "/images/salesforce.svg", name: "Salesforce" },
    { src: "/images/mailchimp.svg", name: "Mailchimp" },
    { src: "/images/stripe.svg", name: "Stripe" },
    { src: "/images/zendesk.svg", name: "Zendesk" },
];

const GTMIntegration = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [current, setCurrent] = useState(0);
    const go = (n) => setCurrent(Math.max(0, Math.min(n, MAX)));

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
                            <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                                Talk to our GTM Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-black" /> Watch a Demo
                            </button>
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
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90 transition-all duration-500">
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
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">
                            Get a free GTM audit now
                        </button>
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
                        <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">
                            Talk to our GTM Expert Now
                        </button>
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
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('${IMG.vidBg}')` }} />
                <a href="https://www.youtube.com/watch?v=AiOyBHDQctY" target="_blank" rel="noreferrer"
                    className="relative z-10 w-24 h-24 bg-[#FDB813] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,184,19,0.5)]">
                    <Play size={40} className="fill-black text-black ml-2" />
                </a>
            </section>

            {/* ════ 8. TESTIMONIALS ════ */}
            <TestimonialsSection reviews={reviews} />

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
            <ContactSection
                headingLine1="Let's Talk with"
                headingLine2="Experienced"
                headingHighlight="Google Tag Manager"
                headingLine3="Consultant"
            />

        </main>
    );
};

export default GTMIntegration;