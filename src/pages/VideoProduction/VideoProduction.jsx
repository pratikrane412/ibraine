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

const VideoProduction = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        { title: "Pre-Production Planning", content: "We start with a detailed discovery session to understand your brand, goals, and target audience. Our team crafts a compelling script, storyboard, and production schedule tailored to your vision." },
        { title: "Professional Filming & Direction", content: "Our experienced directors and cinematographers capture your story using industry-grade cameras and lighting equipment. We ensure every frame aligns with your brand identity and message." },
        { title: "Post-Production & Editing", content: "From color grading to motion graphics, sound design to VFX — our editors transform raw footage into a polished, broadcast-ready video that resonates with your audience." },
        { title: "Distribution & Video Marketing", content: "We help you publish and promote your video across YouTube, social media, OTT platforms, and your website to maximize reach, views, and conversions." }
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
            <section className="relative bg-[#f0f4ff] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
                {/* Decorative floating shapes */}
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-32 left-[5%] w-16 h-16 hidden lg:block opacity-20 rounded-full bg-[#e8c84a]" />
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-20 left-[45%] w-10 h-10 hidden lg:block opacity-20 rounded-full bg-[#e8c84a]" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="lg:w-1/2">
                        <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
                            className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                            We create <span className="relative inline-block z-10">
                                cinematic videos
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#e8c84a]/60 -z-10 rounded-sm"></span>
                            </span> that tell your brand story and drive real results.
                        </motion.h1>

                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                            className="text-black-300 text-[18px] mb-8 leading-relaxed">
                            Video is the most powerful medium in digital marketing today. From corporate films and product demos to social media reels and YouTube ads — we handle every frame with precision, creativity, and purpose to help your brand stand out.
                        </motion.p>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                            <button className="bg-[#e8c84a] text-black font-bold px-8 py-4 rounded-md hover:bg-white hover:text-black transition-all shadow-lg w-full sm:w-auto">
                                Talk to our Video Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-500 text-black px-8 py-4 rounded-md font-bold bg-transparent hover:bg-white/10 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-white" /> Watch Our Showreel
                            </button>
                        </motion.div>
                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}
                            className="text-black-400 text-[15px]">
                            From concept to final cut — we deliver videos that convert viewers into customers.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=700&auto=format&fit=crop"
                            className="absolute right-0 top-0 w-[85%] object-cover z-10 rounded-2xl shadow-2xl"
                            alt="Video Production Studio"
                        />
                        <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=400&auto=format&fit=crop"
                            className="absolute left-[-10%] top-[20%] w-[60%] z-20 shadow-2xl rounded-xl object-cover"
                            alt="Camera Setup"
                        />
                        <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop"
                            className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl object-cover"
                            alt="Video Editing"
                        />
                        <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=300&auto=format&fit=crop"
                            className="absolute right-[-5%] bottom-[5%] w-[40%] z-20 rounded-xl shadow-2xl object-cover"
                            alt="Director Clapperboard"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS SLIDER ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands Whose Stories We've Told Over the Years</h2>
                    <p className="text-gray-500 mb-12 text-lg">Diverse industries. Compelling narratives. Measurable impact. Your vision, our craft. Let's create together.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {brandLogos.map((logo, index) => (
                            <img key={index} src={logo} alt="Brand Logo" className="w-32 md:w-40 object-contain hover:scale-110 transition-transform" />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 3. FEATURE: END-TO-END PRODUCTION ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700&auto=format&fit=crop"
                            className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10 object-cover h-[380px]"
                            alt="Film Crew"
                        />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=500&auto=format&fit=crop"
                            className="absolute top-0 right-0 w-[65%] z-20 rounded-2xl shadow-2xl object-cover h-[300px]"
                            alt="Cinematic Lighting"
                        />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">End-to-end video production — concept, filming, editing, and delivery.</h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">Getting your message across in today's fast-scrolling world requires more than just good visuals. It demands a story that stops the scroll, sparks emotion, and drives action. That's exactly what we deliver.</p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">From scripting and storyboarding to professional filming and final post-production, our full-stack video team manages every stage of production so you can focus on your business.</p>
                        <ul className="space-y-4 mb-10">
                            {["Certified Video Professionals", "100% Creative Confidentiality", "Transparent Timelines & Deliverables"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#e8c84a] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#e8c84a] hover:text-black transition-all shadow-lg">Get a free consultation now</button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. FEATURE: VIDEOS THAT CONVERT ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">We turn your ideas into videos that engage, educate, and convert</h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">As a leading <b>video production company in Mumbai</b>, we craft purpose-driven content — from brand films and explainer videos to Instagram reels and YouTube commercials. With 10+ years of production expertise, our team ensures every video delivers measurable ROI. Whether you need one video or an entire content calendar, we've got you covered.</p>
                        <ul className="space-y-4 mb-10">
                            {["Brand Films & Corporate Videos", "Social Media Reels & Short-Form", "Product & E-commerce Videos", "Animated Explainer Videos", "Event & Documentary Coverage"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#e8c84a] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#e8c84a] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Talk to our Video Expert Now</button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=700&auto=format&fit=crop"
                            className="absolute top-0 right-0 w-[90%] z-10 rounded-2xl shadow-xl object-cover h-[400px]"
                            alt="Video Analytics"
                        />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&auto=format&fit=crop"
                            className="absolute bottom-10 left-[-5%] w-[60%] z-20 shadow-2xl rounded-xl bg-white object-cover h-[220px]"
                            alt="Video Performance Stats"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. ACCORDION / FAQ SECTION ════ */}
            <section className="py-24 px-6 bg-[#0d1f2d]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[600px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop"
                            className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl object-cover h-[350px]"
                            alt="Film Production"
                        />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&auto=format&fit=crop"
                            className="absolute top-[20%] right-[-5%] w-[60%] z-20 rounded-2xl shadow-2xl object-cover h-[260px]"
                            alt="Behind the Scenes"
                        />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop"
                            className="absolute bottom-0 left-[10%] w-[70%] z-30 shadow-2xl bg-white rounded-2xl object-cover h-[180px]"
                            alt="Video Editing Suite"
                        />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-white mb-4">Video Production Company in Mumbai</h2>
                        <p className="text-gray-300 text-[18px] mb-10 leading-relaxed">Supercharge your brand with our expert video production services! Increase engagement, attract a flood of viewers to your content, and leave your competitors in awe. Let's make video magic happen – contact us now!</p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-700 rounded-lg bg-[#162535] overflow-hidden shadow-sm">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#e8c84a]' : 'text-white'}`}>{faq.title}</span>
                                        {openFaq === index ? <ChevronUp className="text-[#e8c84a]" /> : <ChevronDown className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6 text-gray-300 text-[15px]">
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
            <section className="py-24 px-6 bg-gradient-to-r from-[#e8c84a] to-[#f5a623] text-black text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="font-lora text-4xl lg:text-5xl mb-6 text-black">We are a Premier Video Production Studio</motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-black/70 text-lg">Experience results-driven video production with one of the <b>best video production agencies in Mumbai</b>! We begin with meticulous scripting, storyboarding, and creative strategy.</motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-black/20">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-black mb-2">500+</h3>
                        <p className="text-black/70 text-lg">Videos produced and delivered!</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-black mb-2">300%</h3>
                        <p className="text-black/70 text-lg">Avg. increase in engagement</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-black mb-2">10M+</h3>
                        <p className="text-black/70 text-lg">Total views generated for clients!</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer"
                    className="relative z-10 w-24 h-24 bg-[#e8c84a] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(232,200,74,0.5)]">
                    <Play size={40} className="fill-black text-black ml-2" />
                </a>
            </section>

            {/* ════ 8. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                            What clients <span className="italic text-[#e8c84a]">say</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hear from brands who transformed their presence through the power of compelling video storytelling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Mehta",
                                role: "FreshBox — Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial2.png",
                                text: "The team produced our product launch video in just 5 days. The quality was absolutely cinematic — it got 2 lakh views organically in the first week. Outstanding work!"
                            },
                            {
                                name: "Rajan Sharma",
                                role: "NexaFintech — Marketing Head",
                                img: "https://brandwitty.com/media/2023/09/testimonial13.png",
                                text: "We needed an explainer video for our fintech app and they nailed the brief perfectly. The animation, voice-over, and pacing were exactly what we envisioned. Highly recommend!"
                            },
                            {
                                name: "Kavita Nair",
                                role: "Bloom Wellness — Co-founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial11.png",
                                text: "Our Instagram reels went from 500 views to 50,000+ after partnering with this team. The content strategy combined with stunning production quality has been a game changer for us."
                            }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-[#fafafa] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <img
                                            src={review.img}
                                            alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-[#e8c84a] shadow-md"
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
                                    <div className="flex text-[#e8c84a] gap-1 text-sm">
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
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Unlock the full power of your brand with stunning video content</h2>
                    <p className="text-gray-600 text-lg mb-10">Partner with our video production experts to bring your brand to life on screen. From scripting to distribution, we craft videos that captivate your audience and drive real business results.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#e8c84a] hover:text-black transition-all shadow-lg">Call Now</button>
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">View Portfolio</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

                {/* Decorative Clapperboard Icon (Top Right) */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-10 hidden md:block">
                    <svg viewBox="0 0 64 64" fill="#0d1f2d" className="w-24 h-24 lg:w-32 lg:h-32">
                        <rect x="4" y="16" width="56" height="44" rx="3" />
                        <rect x="4" y="4" width="56" height="16" rx="3" />
                        <line x1="16" y1="4" x2="20" y2="20" stroke="white" strokeWidth="3" />
                        <line x1="30" y1="4" x2="34" y2="20" stroke="white" strokeWidth="3" />
                        <line x1="44" y1="4" x2="48" y2="20" stroke="white" strokeWidth="3" />
                    </svg>
                </div>

                {/* Floating Dots */}
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-[#e8c84a] rounded-full opacity-80 hidden lg:block"></div>
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-[#0d1f2d] rounded-full opacity-40 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* --- LEFT SIDE: TEXT CONTENT --- */}
                    <div className="space-y-8">
                        <div className="w-12 h-12 bg-[#e8c84a]/20 rounded-full flex items-center justify-center text-[#e8c84a] shadow-sm">
                            <Headphones size={24} />
                        </div>

                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Our Experienced <br />
                            <span className="relative inline-block">
                                Video Production
                                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#e8c84a]/50 -z-10 rounded-sm"></span>
                            </span> <br />
                            Team
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to bring your brand story to life on screen? Our creative team is here to help! Fill out the form and let's start crafting a video that drives results.
                        </p>

                        <div className="pt-4">
                            <p className="text-[#e8c84a] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p>
                            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                                <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                                +91 9892 854 892
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: FORM --- */}
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
                                <input type="text" placeholder="Your name"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm" />
                                <input type="email" placeholder="Your email"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm" />
                                <input type="tel" placeholder="Your phone"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm" />
                                <textarea placeholder="Tell us about your video project..." rows="5"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm resize-none"></textarea>
                                <button className="w-full sm:w-auto border-2 border-[#e8c84a] text-[#b8970a] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#e8c84a] hover:text-black transition-all duration-300">
                                    Send Message
                                </button>
                            </form>

                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Tell Your <span className="text-[#1a162d] font-black">Brand Story!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default VideoProduction;
