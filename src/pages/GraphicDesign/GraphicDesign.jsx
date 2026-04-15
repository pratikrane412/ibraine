import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { Headphones } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const GraphicDesign = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            title: "Brand Identity & Logo Design",
            content: "We craft timeless logos and full brand identity systems — colour palettes, typography, iconography, and brand guidelines — that make your business instantly recognisable and memorable across every touchpoint."
        },
        {
            title: "Social Media & Digital Graphics",
            content: "From Instagram posts and story templates to LinkedIn banners and YouTube thumbnails, we design scroll-stopping social graphics that are consistent with your brand and optimised for engagement."
        },
        {
            title: "Print & Marketing Collateral",
            content: "We design everything your business needs in print — brochures, flyers, business cards, banners, packaging, and more — ensuring your offline presence is just as powerful as your online one."
        },
        {
            title: "UI/UX & Web Graphics",
            content: "Our designers create beautiful, conversion-focused UI elements, landing page graphics, infographics, and web assets that elevate your digital experience and keep visitors engaged."
        }
    ];

    const brandLogos = [
        "https://brandwitty.com/media/2023/08/Lamanpg-1.png",
        "https://brandwitty.com/media/2023/08/Clear-trip-1.png",
        "https://brandwitty.com/media/2023/08/Rustomjee-2.png",
        "https://brandwitty.com/media/2023/08/Kalpataru-2.png",
        "https://brandwitty.com/media/2023/08/Speakwell-2.png",
        "https://brandwitty.com/media/2023/08/askon-1-2.png",
        "https://brandwitty.com/media/2023/08/Signature-smiles-1.png",
        "https://brandwitty.com/media/2023/08/Bath-shop-1.png"
    ];

    return (
        <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">


            {/* ════ 1. HERO SECTION ════ */}
            <section className="relative bg-[#fff5f0] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
                <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-1.webp" className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50" />
                <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-2.webp" className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="lg:w-1/2">
                        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                            We design{" "}
                            <span className="relative inline-block z-10">
                                stunning visuals
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#f97316]/40 -z-10 rounded-sm"></span>
                            </span>{" "}
                            that make your brand impossible to ignore.
                        </motion.h1>

                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                            Great graphic design is more than aesthetics — it's communication. Every colour, shape, and layout choice tells your brand's story and influences how people feel about your business. From logos to full brand identities, our designers craft visuals that captivate, convert, and leave a lasting impression.
                        </motion.p>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                            <button className="bg-[#f97316] text-white font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                                Talk to our Design Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-black" /> Watch a Demo
                            </button>
                        </motion.div>
                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }} className="text-gray-500 text-[15px]">
                            We can deliver your first design concepts within 48 hours — ready to impress.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
                        <img src="https://img.freepik.com/free-vector/graphic-designer-concept-illustration_114360-1292.jpg" className="absolute right-0 top-0 w-[85%] object-contain z-10" alt="Graphic Design Hero" />
                        <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/19.png" className="absolute left-[-10%] top-[20%] w-[60%] z-20 shadow-2xl rounded-xl" alt="Stats" />
                        <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/images.png" className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl" alt="Graph" />
                        <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Return-on-Investment-1-1.png" className="absolute right-[-5%] bottom-[5%] w-[40%] z-20" alt="ROI" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS SLIDER ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands We've Designed For Over the Last Few Years</h2>
                    <p className="text-gray-500 mb-12 text-lg">Diverse industries. Distinctive visuals. Memorable brands. Your identity, crafted with purpose. Join us now.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {brandLogos.map((logo, index) => (
                            <img key={index} src={logo} alt="Brand Logo" className="w-32 md:w-40 object-contain hover:scale-110 transition-transform" />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 3. FEATURE: MAKE YOUR BRAND UNFORGETTABLE ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[500px] w-full">
                        <img src="https://img.freepik.com/free-vector/branding-concept-illustration_114360-627.jpg" className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10" alt="Branding" />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Home-5-SEO-Audit-Image.png" className="absolute top-0 right-0 w-[65%] z-20 rounded-2xl shadow-2xl" alt="Design Tools" />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">Make your brand unforgettable with logos, branding, social graphics, print, and UI design.</h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">In a world flooded with content, great design is what makes people stop, look, and remember you. A powerful visual identity builds trust instantly — before a single word is read. But creating consistently great design across every channel takes expertise, creativity, and strategy.</p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">Our graphic design service delivers pixel-perfect, brand-aligned visuals ready for every platform. From initial concepts to final files, we handle the entire creative process so your brand always looks its absolute best.</p>
                        <ul className="space-y-4 mb-10">
                            {["Award-Winning Creative Designers", "Unlimited Revision Rounds", "Fast Turnaround & Transparent Process"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#f97316] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#f97316] hover:text-white transition-all shadow-lg">Get a free design consultation</button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. FEATURE: DESIGN THAT CONVERTS ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">We turn creative vision into measurable business impact</h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">As a leading <b>Graphic Design Agency in Mumbai</b>, we create visuals that do far more than look good — they communicate your value, build brand loyalty, and drive conversions. With 10+ years of design expertise across industries, our agency delivers creative that resonates with your audience and produces real, measurable results across every platform.</p>
                        <ul className="space-y-4 mb-10">
                            {["Logo & Brand Identity Design", "Social Media Graphics & Templates", "Brochures, Flyers & Print Design", "Packaging & Product Design", "UI/UX & Web Graphics"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#f97316] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#f97316] text-white font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Talk to our Design Expert Now</button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
                        <img src="https://img.freepik.com/free-vector/design-process-concept-illustration_114360-928.jpg" className="absolute top-0 right-0 w-[90%] z-10" alt="Design Process" />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Stats.svg" className="absolute bottom-10 left-[-5%] w-[60%] z-20 shadow-2xl rounded-xl bg-white" alt="Stats Tool" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. ACCORDION / FAQ SECTION ════ */}
            <section className="py-24 px-6 bg-[#fff5f0]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[600px] w-full">
                        <img src="https://img.freepik.com/free-vector/creative-agency-concept-illustration_114360-630.jpg" className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl" alt="Creative Agency" />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/case-1.png" className="absolute top-[20%] right-[-5%] w-[60%] z-20 rounded-2xl shadow-2xl" alt="Case" />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Stats2.svg" className="absolute bottom-0 left-[10%] w-[70%] z-30 shadow-2xl bg-white rounded-2xl" alt="Stats2" />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">Graphic Design Company in Mumbai</h2>
                        <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">Supercharge your brand with our expert graphic design services! Stand out from the competition, create a lasting visual impression, and build the kind of brand recognition that money can't buy. Let's make design magic happen — contact us now!</p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#f97316]' : 'text-black'}`}>{faq.title}</span>
                                        {openFaq === index ? <ChevronUp className="text-[#f97316]" /> : <ChevronDown className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-500 text-[15px]">
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
            <section className="py-24 px-6 bg-gradient-to-r from-orange-900 to-orange-600 text-white text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-lora text-4xl lg:text-5xl mb-6">We are a Graphic Design Agency</motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-orange-100 text-lg">Experience brand-transforming design with one of the <b>best graphic design agencies in Mumbai</b>! We begin with deep discovery, strategic creative direction, and pixel-perfect execution.</motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-orange-700/50">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#fde68a] mb-2">5,000+</h3>
                        <p className="text-orange-100 text-lg">Design projects delivered!</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#fde68a] mb-2">98%</h3>
                        <p className="text-orange-100 text-lg">Client satisfaction rate</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#fde68a] mb-2">200+</h3>
                        <p className="text-orange-100 text-lg">Brands built from scratch!</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer" className="relative z-10 w-24 h-24 bg-[#f97316] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                    <Play size={40} className="fill-white text-white ml-2" />
                </a>
            </section>

            {/* ════ 8. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                            What people <span className="italic text-[#f97316]">say</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hear from clients whose brands were transformed by the power of great design.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Vikram Nair",
                                role: "Aura Interiors - Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial2.png",
                                text: "The team redesigned our entire brand identity and the results were immediate. Clients started commenting on how professional and premium we looked. We saw a 40% increase in enquiries within two months. Absolutely brilliant!"
                            },
                            {
                                name: "Neha Kapoor",
                                role: "FreshBite Foods - CMO",
                                img: "https://brandwitty.com/media/2023/09/testimonial13.png",
                                text: "Our packaging design was completely transformed. Brandwitty understood our target audience perfectly and created visuals that genuinely stand out on the shelf. Our retail sales jumped significantly after the rebrand. Exceptional work!"
                            },
                            {
                                name: "Arjun Malhotra",
                                role: "SwiftLaunch - Co-Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial11.png",
                                text: "From our logo to our entire pitch deck design, the team delivered beyond expectations every single time. The quality, speed, and attention to detail is unmatched. We look like a Fortune 500 company now. Highly recommended!"
                            }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-[#fff5f0] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <img
                                            src={review.img}
                                            alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-[#f97316] shadow-md"
                                        />
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1a162d] leading-tight">{review.name}</h4>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{review.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-[16px] leading-relaxed italic">
                                        "{review.text}"
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200/50">
                                    <div className="flex text-[#f97316] gap-1 text-sm">
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
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Unlock the full visual potential of your brand with Ibraine</h2>
                    <p className="text-gray-600 text-lg mb-10">Partner with Ibraine, the graphic design experts, to build a brand identity that commands attention and trust. Our tailored design strategies will elevate your visual presence, captivate your target audience, and drive real business growth.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#f97316] hover:text-white transition-all shadow-lg">Call Now</button>
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">View Portfolio</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

                {/* Orange Puzzle Piece (Top Right) */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block animate-floating">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 text-orange-400">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                        </svg>
                    </div>
                </div>

                {/* Floating Dots */}
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-orange-400 rounded-full opacity-80 hidden lg:block"></div>
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-yellow-400 rounded-full opacity-60 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 reveal-active">

                    {/* --- LEFT SIDE: TEXT CONTENT --- */}
                    <div className="space-y-8 reveal-item">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-400 shadow-sm">
                            <Headphones size={24} />
                        </div>

                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Experienced <br />
                            <span className="text-marker">Graphic Design</span> <br />
                            Consultants
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to transform your brand's visual identity? Our team of expert designers is here to help! Fill out the form, and let's start creating visuals that make your business truly unforgettable.
                        </p>

                        <div className="pt-4">
                            <p className="text-[#f97316] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p>
                            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                                <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                                +91 9892 854 892
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: FORM --- */}
                    <div className="relative reveal-item delay-1">

                        <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
                            <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                                <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                                <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
                            <form className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-orange-400 transition-colors shadow-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-orange-400 transition-colors shadow-sm"
                                />
                                <input
                                    type="tel"
                                    placeholder="Your phone"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-orange-400 transition-colors shadow-sm"
                                />
                                <textarea
                                    placeholder="Tell us about your design project..."
                                    rows="5"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-orange-400 transition-colors shadow-sm resize-none"
                                ></textarea>

                                <button className="w-full sm:w-auto border-2 border-[#f97316] text-[#f97316] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#f97316] hover:text-white transition-all duration-300">
                                    Send Message
                                </button>
                            </form>

                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Build Your <span className="text-[#1a162d] font-black">Visual Identity!</span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default GraphicDesign;
