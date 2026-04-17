import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp, Headphones } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SocialMediaMarketing = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            title: "Understanding Your Brand & Goals",
            content: "We begin with an in-depth exploration of your brand vision, values, and objectives, leveraging AI-assisted insights to establish a strong, strategic foundation."
        },
        {
            title: "Audience Analysis",
            content: "Through a blend of human expertise and AI-driven intelligence, we identify and decode your ideal audience to ensure meaningful, high-value engagement."
        },
        {
            title: "Crafting the Optimal SMM Strategy",
            content: "We curate a bespoke social media marketing strategy, enhanced by predictive analytics, designed to position your brand for sustained growth and visibility."
        },
        {
            title: "Competitor Research",
            content: "Our advanced competitor analysis combines strategic thinking with AI insights to position your brand distinctively within a competitive digital landscape."
        }
    ];

    const brandLogos = [
        "/client/MRC.png",
        "/client/NAT.png",
        "/client/Meditac Kits Logo.png",
        "/client/Vastu Energetics Logo.png",
        "/client/Papita Logo.jpg",
        "/client/LOK.png",
        "/client/Emrik Cakes Logo.webp",
        "/client/Artigenius Logo.png",
        "/client/GRT.png",
        "/client/DHOBI.png",
        "/client/Thorny Affairs Logo.png",
        "/client/Lullabies Logo.png",
    ];

    return (
        <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">

            {/* ════ 1. HERO SECTION ════ */}
            <section className="relative bg-[#fcfaf2] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
                <motion.img
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-1.webp"
                    className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50"
                />
                <motion.img
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-2.webp"
                    className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50"
                />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    {/* Left: Headline & CTA */}
                    <div className="lg:w-1/2">
                        <motion.h1
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black"
                        >
                            We turn scrolls into sales with{' '}
                            <span className="relative inline-block z-10">
                                high-converting
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#FDB813]/60 -z-10 rounded-sm"></span>
                            </span>{' '}
                            social media marketing.
                        </motion.h1>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-[18px] mb-8 leading-relaxed"
                        >
                            From intelligent content creation to data-driven conversions, we leverage advanced AI and strategic social media marketing to scale your brand across all major platforms. Our approach blends high-impact organic storytelling with precision-targeted paid campaigns designed to maximize engagement, visibility, and ROI.
                        </motion.p>

                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-5 mb-6"
                        >
                            <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                                Talk to our SMM Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-black" /> Watch a Demo
                            </button>
                        </motion.div>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp}
                            transition={{ delay: 0.5 }}
                            className="text-gray-500 text-[15px]"
                        >
                            We can start growing your social media presence today — with results you'll see in the first 30 days.
                        </motion.p>
                    </div>

                    {/* Right: Hero Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0"
                    >
                        {/* Main hero image - social media dashboard/phone mockup */}
                        <img
                            src="/images/social3_converted.png"
                            className="absolute right-0 top-0 w-[85%] object-contain z-10 rounded-2xl"
                            alt="Social Media Marketing"
                        />
                        {/* Floating card - Instagram-style engagement stats */}
                        <motion.img
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            src="/images/social2_converted.png"
                            className="absolute left-[-10%] top-[20%] w-[55%] z-20 shadow-2xl rounded-xl"
                            alt="Social Media Post"
                        />
                        {/* Floating card - follower growth chart */}
                        <motion.img
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            src="/images/social1_converted.png"
                            className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl"
                            alt="Analytics"
                        />
                        {/* ROI badge */}
                        <motion.div
                            animate={{ scale: [0.95, 1.05, 0.95] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute right-[-5%] bottom-[5%] z-20 bg-white rounded-2xl shadow-2xl p-4 w-[38%]"
                        >
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">This Month</p>
                            <p className="text-2xl font-black text-black">+12,400</p>
                            <p className="text-sm text-[#FDB813] font-bold">New Followers ↑</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS SLIDER ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands We’ve Scaled on Social Media</h2>
                    <p className="text-gray-500 mb-12 text-lg">From startups to established brands. We’ve delivered measurable growth through content, ads, and strategy. </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90 transition-all duration-500">
                        {brandLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="w-32 md:w-40 h-20 md:h-24 flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt="Brand Logo"
                                    className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 3. FEATURE: DOMINATE EVERY PLATFORM ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] w-full"
                    >
                        <img
                            src="/images/social5_converted.png"
                            className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10 object-cover h-[380px]"
                            alt="Social Media Platforms"
                        />
                        <motion.img
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            src="/images/social4_converted.png"
                            className="absolute top-0 right-0 w-[60%] z-20 rounded-2xl shadow-2xl object-cover h-[280px]"
                            alt="Platform Icons"
                        />
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="lg:w-1/2"
                    >
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                            Dominate Instagram, Meta, LinkedIn, YouTube & More.
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
                            Organic reach is declining. Competition is rising.
                            If your brand isn’t showing up strategically, you’re invisible.

                        </p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            We combine organic + paid social media to:

                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Platform-specific strategies", "Performance-driven creatives", "Consistent brand positioning", "Data-backend optimization"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">
                            Get a Free Social Media Audit
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. FEATURE: CONTENT THAT CONVERTS ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    {/* Left: Text */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="lg:w-1/2"
                    >
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                            What We Deliver as Your Social Media Growth Partner
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            We create social media campaigns that people don’t scroll past; they engage with.</p>

                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            By combining creative storytelling, AI-driven insights, and strategic distribution, we help brands achieve higher reach, stronger engagement, and consistent growth.</p>

                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            From content and influencers to trends and reputation management, we handle it all so your brand doesn’t just exist online, it leads.
                        </p>


                        <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">
                            Talk to our SMM Expert Now
                        </button>
                    </motion.div>

                    {/* Right: Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full"
                    >
                        <img
                            src="/images/social6_converted.png"
                            className="absolute top-0 right-0 w-[90%] z-10 rounded-2xl shadow-xl object-cover h-[420px]"
                            alt="Social Media Content Strategy"
                        />
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-10 left-[-5%] w-[55%] z-20 shadow-2xl rounded-xl bg-white p-4"
                        >
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Engagement Rate</p>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-3xl font-black text-black">6.8%</span>
                                <span className="text-green-500 font-bold text-sm mb-1">↑ 4.2%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-[#FDB813] h-2 rounded-full w-[68%]"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. ACCORDION / HOW WE WORK ════ */}
            <section className="py-24 px-6 bg-[#fcfaf2]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[600px] w-full"
                    >
                        <img
                            src="/images/social7_converted.png"
                            className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl object-cover h-[320px]"
                            alt="Social Media Team"
                        />
                        <motion.img
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            src="/images/social8_converted.png"
                            className="absolute top-[20%] right-[-5%] w-[58%] z-20 rounded-2xl shadow-2xl object-cover h-[260px]"
                            alt="Content Design"
                        />
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-0 left-[10%] w-[72%] z-30 shadow-2xl bg-white rounded-2xl p-5"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-[#FDB813]/20 rounded-full flex items-center justify-center">
                                    <span className="text-[#FDB813] font-black text-lg">↑</span>
                                </div>
                                <div>
                                    <p className="font-black text-black text-lg">+340%</p>
                                    <p className="text-xs text-gray-400">Reach Growth — 90 Days</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#FDB813]/20 rounded-sm" style={{ height: `${h * 0.4}px`, alignSelf: 'flex-end' }}></div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Accordion */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="lg:w-1/2"
                    >
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">
                            Our Social Media Marketing Process: From Strategy to Growth
                        </h2>
                        <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">
                            We follow a data-driven, result-oriented social media marketing process designed to help your brand grow, engage, and convert consistently. From understanding your business goals to executing high-performing campaigns, we work with you at every step.
                        </p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                    >
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#FDB813]' : 'text-black'}`}>
                                            {faq.title}
                                        </span>
                                        {openFaq === index ? <ChevronUp className="text-[#FDB813]" /> : <ChevronDown className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6 text-gray-500 text-[15px]"
                                            >
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

            {/* ════ 6. GRADIENT STATS SECTION ════ */}
            <section className="py-24 px-6 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="font-lora text-4xl lg:text-5xl mb-6"
                    >
                        We are a Result-Driven Social Media Marketing Agency
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-gray-300 text-lg"
                    >
                        Experience measurable social media growth with one of the <b>best social media marketing agencies in Mumbai</b>! We start with deep audience research, platform strategy, and content that genuinely resonates.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-teal-600/50">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">10M+</h3>
                        <p className="text-gray-300 text-lg">Reach Generated</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">4X–16X </h3>
                        <p className="text-gray-300 text-lg">ROAS on Paid Campaigns</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">300%</h3>
                        <p className="text-gray-300 text-lg">Avg Engagement Growth</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80')" }}
                ></div>
                <a
                    href="https://www.youtube.com/watch?v=zfMHTO__b6M"
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 w-24 h-24 bg-[#FDB813] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,184,19,0.5)]"
                >
                    <Play size={40} className="fill-black text-black ml-2" />
                </a>
            </section>

            {/* ════ 8. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                            Testimonials That Make <span className="italic text-[#FDB813]">Us Blush</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Real brands. Real growth. Hear from clients who transformed their social media presence into a revenue engine.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Kapoor",
                                role: "The Bloom Store — Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial2.png",
                                text: "Ibraine took our Instagram from 900 followers to 28,000 in just 3 months. The reels they create are absolutely stunning and we get DMs from potential customers every single day. Best investment ever!"
                            },
                            {
                                name: "Arjun Malhotra",
                                role: "FitFuel India — Growth Head",
                                img: "https://brandwitty.com/media/2023/09/testimonial13.png",
                                text: "Our Facebook and Instagram ads are now generating 5x the leads at half the cost. The team truly understands paid social strategy. Our ROAS jumped from 1.6x to over 6x within the first 60 days of working together."
                            },
                            {
                                name: "Sneha Patil",
                                role: "Urban Closet — Co-Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial11.png",
                                text: "From reels to story campaigns, every piece of content they create feels so true to our brand. Our engagement rate went from 0.8% to consistently hitting 7%. The team's creativity and dedication is unmatched!"
                            }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-[#fcfaf2] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <img
                                            src={review.img}
                                            alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-[#FDB813] shadow-md"
                                        />
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1a162d] leading-tight">{review.name}</h4>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{review.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-[16px] leading-relaxed italic">"{review.text}"</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200/50">
                                    <div className="flex text-[#FDB813] gap-1 text-sm">
                                        {"★★★★★".split("").map((star, idx) => <span key={idx}>{star}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 9. MINI CTA ════ */}
            <section className="py-20 px-6 bg-slate-50 text-center border-t border-gray-200">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">
                        A Global Independent Digital Marketing Network | Start A Project
                    </h2>
                    <p className="text-gray-600 text-lg mb-10">
                        Partner with Ibraine, the social media experts, to build a brand people follow, trust, and buy from. Our tailored social media strategies will grow your audience, deepen engagement, and consistently drive real business results.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Call Now</button> */}
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

                {/* Decorative puzzle icon */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 text-blue-500">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-blue-500 rounded-full opacity-80 hidden lg:block"></div>
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Left: Text */}
                    <div className="space-y-8">
                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 shadow-sm">
                            <Headphones size={24} />
                        </div>
                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Experienced <br />
                            <span className="relative inline-block">
                                Social Media
                                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FDB813]/50 -z-10 rounded-sm"></span>
                            </span> <br />
                            Consultant
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to grow your brand on social media? Our team of experts is here to help. Fill out the form and let's start building a social media strategy that delivers real, measurable results.
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

                    {/* Right: Form */}
                    <div className="relative">
                        <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
                            <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                                <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                                <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
                            <form className="space-y-6">
                                <input type="text" placeholder="Your name" className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none transition-colors shadow-sm" />
                                <input type="email" placeholder="Your email" className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none transition-colors shadow-sm" />
                                <input type="tel" placeholder="Your phone" className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none transition-colors shadow-sm" />
                                <select className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none transition-colors shadow-sm text-gray-500">
                                    <option value="">Which platforms do you need help with?</option>
                                    <option>Instagram</option>
                                    <option>Facebook</option>
                                    <option>LinkedIn</option>
                                    <option>YouTube</option>
                                    <option>All Platforms</option>
                                </select>
                                <textarea
                                    placeholder="Tell us about your social media goals..."
                                    rows="4"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none transition-colors shadow-sm resize-none"
                                ></textarea>
                                <button className="w-full sm:w-auto border-2 border-[#FDB813] text-[#FDB813] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FDB813] hover:text-black transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Boost Your <span className="text-[#1a162d] font-black">Social Media Presence!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default SocialMediaMarketing;