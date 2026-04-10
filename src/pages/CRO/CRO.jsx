import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    DollarSign,
    Lightbulb,
    MousePointer2,
    PieChart,
    Quote,
    Star,
    TrendingUp,
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut' },
    },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const staggerFast = {
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const CRO = () => {
    const proofStats = [
        { value: '+218%', label: 'Average conversion growth' },
        { value: '-37%', label: 'Cost per acquisition' },
        { value: '4.9/5', label: 'Client satisfaction score' },
    ];

    const offerCards = [
        {
            icon: MousePointer2,
            title: 'Behavior-Led UX Audits',
            description: 'Session analysis, heatmaps, and funnel diagnostics to find hidden friction.',
        },
        {
            icon: PieChart,
            title: 'Experimentation Program',
            description: 'A/B testing roadmap with hypothesis prioritization and statistical rigor.',
        },
        {
            icon: TrendingUp,
            title: 'Revenue Optimization',
            description: 'Lift checkout, lead quality, and LTV through conversion-focused design systems.',
        },
    ];

    return (
        <div className="w-full overflow-hidden bg-[#f6f7fb] text-[#121212] selection:bg-[#f9b91b] selection:text-white">
            <section className="relative px-6 pb-20 pt-32 md:pt-36">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,185,27,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_30%)]" />
                <motion.div
                    aria-hidden
                    animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#f9b91b]/10 blur-3xl"
                />
                <motion.div
                    aria-hidden
                    animate={{ y: [0, 22, 0], x: [0, -10, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -right-16 top-12 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl"
                />
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <motion.div initial="hidden" animate="visible" variants={staggerFast}>
                        <motion.span variants={fadeInUp} className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em]">
                            Conversion Rate Optimization
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
                            Turn more traffic
                            <br />
                            into premium
                            <br />
                            revenue.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                            We design and test conversion systems that make every click, scroll, and interaction more profitable. Built for ambitious brands that want measurable growth, not guesswork.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="mb-12 flex flex-col gap-4 sm:flex-row">
                            <motion.button whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-8 py-4 font-bold text-white transition-all hover:bg-[#f9b91b]">
                                Book a CRO Strategy Call
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </motion.button>
                            <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="rounded-2xl border border-black/15 bg-white px-8 py-4 font-bold transition-all hover:border-black hover:bg-black hover:text-white">
                                View Success Stories
                            </motion.button>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {proofStats.map((stat) => (
                                <motion.div key={stat.label} whileHover={{ y: -5 }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)]">
                                    <p className="text-2xl font-black">{stat.value}</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeInRight}
                    >
                        <motion.div whileHover={{ y: -6 }} className="relative mx-auto max-w-md overflow-hidden rounded-[2.75rem] border border-white/70 bg-white p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)]">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                                alt="CRO growth team"
                                className="h-[520px] w-full rounded-[2.1rem] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -9, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            className="absolute -left-4 top-16 rounded-2xl border border-black/10 bg-white p-4 shadow-xl"
                        >
                            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-500">Revenue Lift</p>
                            <p className="flex items-center gap-2 text-lg font-black">
                                <TrendingUp className="text-emerald-500" size={18} />
                                +42% in 90 days
                            </p>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                            className="absolute -bottom-6 right-0 rounded-2xl border border-black/10 bg-black p-5 text-white shadow-2xl"
                        >
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">Optimization Engine</p>
                            <div className="flex items-center gap-3">
                                <BarChart3 size={20} className="text-[#f9b91b]" />
                                <span className="font-bold">Insight - Test - Scale</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="border-y border-black/5 bg-white py-14">
                <motion.div
                    className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={staggerFast}
                >
                    {['PROLICIOUS', 'ASKON', 'TRIPXOXO', 'THREAD STORIES', 'KUURAKU', 'OFFBEAT ROADS'].map((brand) => (
                        <motion.p variants={fadeInUp} whileHover={{ y: -2, color: '#111111' }} key={brand} className="text-sm font-black tracking-[0.16em] text-black/45 md:text-base">
                            {brand}
                        </motion.p>
                    ))}
                </motion.div>
            </section>

            <section className="px-6 py-24">
                <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerFast}>
                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <motion.div variants={fadeInLeft}>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#f9b91b]">What Makes This Different</p>
                            <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">A conversion framework built for serious scale.</h2>
                        </motion.div>
                        <motion.p variants={fadeInRight} className="max-w-lg text-base leading-relaxed text-gray-600">
                            We combine data science, persuasion psychology, and premium UI craft to produce growth you can measure every month.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {offerCards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={fadeInUp}
                                    transition={{ delay: index * 0.06 }}
                                    whileHover={{ y: -8 }}
                                    className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.65)]"
                                >
                                    <div className="mb-5 inline-flex rounded-2xl bg-black p-3 text-[#f9b91b]">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="mb-3 text-2xl font-black">{card.title}</h3>
                                    <p className="text-gray-600">{card.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            <section className="bg-white px-6 py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr]">
                    <motion.div
                        className="rounded-[2.5rem] bg-[#111111] p-10 text-white md:p-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeInLeft}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#f9b91b]">Our Process</p>
                        <h3 className="mb-8 text-4xl font-black leading-tight md:text-5xl">From insight to impact in three precision sprints.</h3>
                        <div className="space-y-6">
                            {[
                                'Audit: Analyze funnels, UX friction, and conversion intent.',
                                'Test: Launch high-impact experiments on key pages.',
                                'Scale: Productize winning variations across channels.',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#f9b91b]" />
                                    <p className="text-white/90">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="rounded-[2.5rem] border border-black/10 bg-[#f9f9fb] p-10 md:p-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeInRight}
                    >
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Case Snapshot</p>
                        <h4 className="mb-6 text-3xl font-black leading-tight">D2C brand checkout redesign</h4>
                        <div className="space-y-5">
                            {[
                                { label: 'Checkout conversion rate', value: 87, color: 'bg-emerald-500' },
                                { label: 'Average order value', value: 64, color: 'bg-indigo-500' },
                                { label: 'Abandonment reduction', value: 51, color: 'bg-[#f9b91b]' },
                            ].map((metric, index) => (
                                <div key={metric.label}>
                                    <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-600">
                                        <span>{metric.label}</span>
                                        <span>{metric.value}%</span>
                                    </div>
                                    <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${metric.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.9, delay: index * 0.12 }}
                                            className={`h-full rounded-full ${metric.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <motion.div whileHover={{ y: -4 }} className="mt-10 rounded-2xl bg-white p-5 shadow-lg">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Impact</p>
                            <p className="flex items-center gap-2 text-2xl font-black">
                                <DollarSign size={21} className="text-emerald-500" />
                                +$1.2M incremental annual revenue
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 py-24">
                <motion.div className="mx-auto max-w-6xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerFast}>
                    <motion.p variants={fadeInUp} className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#f9b91b]">Client Voice</motion.p>
                    <motion.h2 variants={fadeInUp} className="mx-auto mb-16 max-w-3xl text-4xl font-black leading-tight md:text-6xl">You know your business. We engineer conversion momentum.</motion.h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            {
                                name: 'Ifam Rehman',
                                role: 'Supple Tek - Manager',
                                quote: 'Their CRO team transformed our funnel into a predictable growth machine. Every test had a clear strategic reason and measurable outcome.',
                            },
                            {
                                name: 'Vincent Panangadon',
                                role: 'Offbeat Roads - Founder',
                                quote: 'The design quality and performance mindset were outstanding. We saw stronger conversion quality and lower acquisition waste in one quarter.',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.name}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -8 }}
                                className="rounded-3xl border border-black/10 bg-white p-8 text-left shadow-[0_18px_45px_-30px_rgba(0,0,0,0.6)]"
                            >
                                <Quote size={28} className="mb-5 text-[#f9b91b]" />
                                <p className="mb-8 text-gray-600">"{item.quote}"</p>
                                <p className="text-lg font-black">{item.name}</p>
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">{item.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="px-6 pb-24">
                <motion.div
                    className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-10 text-white shadow-[0_30px_100px_-35px_rgba(0,0,0,0.85)] md:p-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeInUp}
                >
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em]">
                                <Star size={14} className="text-[#f9b91b]" />
                                Limited Quarterly Slots
                            </div>
                            <h3 className="mb-5 text-4xl font-black leading-tight md:text-6xl">Build your next conversion leap.</h3>
                            <p className="max-w-xl text-white/75">
                                If growth is a priority this quarter, we can map your highest-value opportunities and launch a rapid test pipeline in under 14 days.
                            </p>
                        </div>
                        <motion.form whileHover={{ y: -4 }} className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/45 focus:border-[#f9b91b]" />
                            <input type="email" placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/45 focus:border-[#f9b91b]" />
                            <input type="text" placeholder="Company website" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/45 focus:border-[#f9b91b]" />
                            <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.985 }} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f9b91b] px-4 py-3 font-black text-black transition hover:bg-white">
                                Request CRO Audit
                                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default CRO;