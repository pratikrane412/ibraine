import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, Calendar, Tag, User, ChevronRight } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   BLOG DATA
═══════════════════════════════════════════════════════════ */
const BLOGS = [
    {
        id: 1,
        slug: "performance-marketing-guide-2025",
        category: "Performance Marketing",
        categoryColor: "#FDB813",
        tag: "Guide",
        title: "The Ultimate Guide to Performance Marketing in 2025",
        subtitle: "Everything you need to know about running campaigns that pay for themselves",
        excerpt: "Performance marketing has evolved dramatically. In 2025, brands that win aren't just running ads — they're building full-funnel systems that turn every rupee into predictable, scalable revenue.",
        author: "Dashmeer Bhogal",
        authorRole: "Head of Performance",
        date: "April 12, 2025",
        readTime: "8 min read",
        cover: "/images/blog1_converted.png",
        accentColor: "#FDB813",
        content: [
            {
                type: "intro",
                text: "Performance marketing in 2025 is no longer about spending money on ads and hoping for the best. It's a science — one built on data, creative intelligence, and relentless optimization. Whether you're a D2C brand, a SaaS startup, or a brick-and-mortar business going digital, understanding the mechanics of performance marketing is your biggest competitive advantage."
            },
            {
                type: "heading",
                text: "What Is Performance Marketing?"
            },
            {
                type: "text",
                text: "Performance marketing is a results-based advertising model where advertisers only pay when a specific action is completed — a click, a lead, a sale, or an app install. Unlike traditional brand advertising (which focuses on impressions and awareness), performance marketing is obsessively measurable. Every rupee has a job to do."
            },
            {
                type: "heading",
                text: "The 4 Pillars of a Winning Performance Campaign"
            },
            {
                type: "list",
                items: [
                    "Audience Precision — Knowing exactly who you're targeting and why they'll convert",
                    "Creative Intelligence — Building ads that stop the scroll AND drive action",
                    "Funnel Architecture — Taking users from awareness to purchase systematically",
                    "Data & Optimization — Using real-time signals to allocate budget where it works"
                ]
            },
            {
                type: "heading",
                text: "Meta vs. Google: Where Should Your Budget Go?"
            },
            {
                type: "text",
                text: "The answer depends on your business model and where your customers are in their buying journey. Google Ads captures demand — people are already searching for what you offer. Meta Ads creates demand — you're interrupting people with something they didn't know they needed. The best brands use both in tandem: Meta for awareness and retargeting, Google for high-intent bottom-funnel capture."
            },
            {
                type: "callout",
                text: "🔑 Pro Tip: Allocate 70% of your budget to proven ad sets and 30% to testing new audiences, creatives, and placements. Never let a campaign run without a challenger."
            },
            {
                type: "heading",
                text: "The Most Important Metric You're Probably Ignoring"
            },
            {
                type: "text",
                text: "Most marketers obsess over CPL (Cost Per Lead) or ROAS (Return on Ad Spend). But the metric that actually determines long-term profitability is Customer Lifetime Value (CLV). A campaign with a high CPA might be your most profitable if those customers return and spend 5x more over 12 months. Always look beyond the first conversion."
            },
            {
                type: "heading",
                text: "Creative Is the New Targeting"
            },
            {
                type: "text",
                text: "With iOS privacy changes and the decline of cookie-based targeting, your ad creative has become the most powerful targeting tool you have. The right creative attracts the right audience — even without precise targeting parameters. Invest in UGC (user-generated content), video testimonials, and problem-solution formats that resonate deeply with your ideal customer."
            },
            {
                type: "callout",
                text: "💡 At iBraine, our top-performing creatives share one trait: they lead with a specific pain point the audience recognizes within 2 seconds."
            },
            {
                type: "heading",
                text: "Conclusion"
            },
            {
                type: "text",
                text: "Performance marketing done right is the most accountable, scalable form of growth available to businesses today. The brands that dominate in 2025 will be those who treat their ad accounts as living, breathing systems — constantly tested, refined, and scaled. If you're ready to build that system for your brand, we're here to help."
            }
        ]
    },
    {
        id: 2,
        slug: "meta-ads-roas-tips",
        category: "Meta Ads",
        categoryColor: "#3b82f6",
        tag: "Tips",
        title: "7 Meta Ads Strategies That Consistently Deliver 5x+ ROAS",
        subtitle: "The playbook our team uses every day to scale paid social campaigns profitably",
        excerpt: "Getting a 5x return on Meta Ads isn't luck — it's a repeatable system. Here are the exact strategies our team uses to consistently hit and exceed ROAS targets for our clients.",
        author: "Dashmeet Bhogal",
        authorRole: "Paid Social Lead",
        date: "March 28, 2025",
        readTime: "6 min read",
        cover: "/images/blog2_converted.png",
        accentColor: "#3b82f6",
        content: [
            {
                type: "intro",
                text: "Meta Ads remain one of the most powerful paid acquisition channels available — when used correctly. The difference between campaigns that drain budgets and campaigns that generate consistent 5x+ ROAS often comes down to a handful of strategic decisions. Here's the playbook we use every single day."
            },
            {
                type: "heading",
                text: "1. Start With Broad Targeting, Let the Algorithm Learn"
            },
            {
                type: "text",
                text: "Counter-intuitive as it sounds, overly narrow targeting often kills performance. Meta's AI is extraordinarily good at finding buyers within a broad audience pool — but only if you give it enough volume to learn. Start broad (age range, location, interests at category level), feed it quality conversion data, and let it optimize."
            },
            {
                type: "heading",
                text: "2. Build a Proper Creative Testing Framework"
            },
            {
                type: "text",
                text: "Never run one creative. Never run ten without a system. The right approach: test 3-5 creative concepts per campaign, each with a distinct hook, visual style, and CTA. After 500 impressions per creative, cut underperformers and double down on winners. Rotate winning creatives every 3-4 weeks to combat fatigue."
            },
            {
                type: "list",
                items: [
                    "Hook Test — First 3 seconds should stop the scroll",
                    "Format Test — Static vs. video vs. carousel vs. UGC",
                    "Offer Test — Discount vs. free trial vs. social proof lead",
                    "CTA Test — 'Shop Now' vs. 'Learn More' vs. 'Get Offer'"
                ]
            },
            {
                type: "heading",
                text: "3. Retargeting Is Where the Money Is"
            },
            {
                type: "text",
                text: "Your warmest audience — website visitors, video viewers, Instagram engagers — converts at 3-10x the rate of cold audiences. Build a tight retargeting funnel: 3-day visitors see urgency ads, 7-day visitors see testimonials, 30-day visitors see a final-offer ad. Don't let warm traffic go cold."
            },
            {
                type: "callout",
                text: "🎯 Our retargeting campaigns average a 9.2x ROAS vs. 3.4x for cold traffic. The math is clear — retargeting deserves a dedicated budget allocation."
            },
            {
                type: "heading",
                text: "4. Optimize for Purchase, Not Traffic"
            },
            {
                type: "text",
                text: "This is one of the most common mistakes we see. Brands optimize for link clicks or landing page views to get cheap results, but the algorithm then sends the cheapest traffic — not the most likely buyers. Always optimize for the conversion event that actually matters to your business, even if the volume is lower initially."
            },
            {
                type: "heading",
                text: "5. Use Advantage+ Shopping Campaigns (ASC) for E-commerce"
            },
            {
                type: "text",
                text: "Meta's Advantage+ Shopping Campaigns have been a game-changer for e-commerce brands. By combining prospecting and retargeting into one automated campaign, ASC consistently outperforms manual campaign structures for brands with healthy pixel data. If you're running e-commerce and not testing ASC, you're leaving money on the table."
            },
            {
                type: "heading",
                text: "6. Your Landing Page Is 50% of Your ROAS"
            },
            {
                type: "text",
                text: "A great ad that lands on a slow, confusing, or trust-lacking page is wasted money. Your landing page must match the ad's message exactly (message match), load in under 3 seconds, and make the next step blindingly obvious. Run heatmaps, A/B test your hero section, and never stop optimizing below the click."
            },
            {
                type: "heading",
                text: "7. Scale With Caution: The 20% Rule"
            },
            {
                type: "text",
                text: "When you find a winning ad set, resist the urge to 10x the budget overnight. Meta's algorithm needs to re-learn at every significant budget change. Scale budgets by no more than 20% every 3-5 days. For larger jumps, duplicate the ad set at the new budget instead of editing the original — this preserves the learnings."
            }
        ]
    },
    {
        id: 3,
        slug: "seo-sem-difference-2025",
        category: "SEM & SEO",
        categoryColor: "#10b981",
        tag: "Educational",
        title: "SEO vs. SEM in 2025: Which One Does Your Business Actually Need?",
        subtitle: "Stop guessing — here's a clear framework to decide where your marketing budget should go",
        excerpt: "One takes months to show results. The other works overnight but costs money every day. SEO and SEM both have a place — but knowing which to prioritize (and when) can make or break your digital marketing strategy.",
        author: "Zahid Shaikh",
        authorRole: "SEO Strategist",
        date: "March 10, 2025",
        readTime: "7 min read",
        cover: "/images/blog3_converted.png",
        accentColor: "#10b981",
        content: [
            {
                type: "intro",
                text: "The SEO vs. SEM debate is one of the most common questions we get from business owners. The honest answer? It's not an either/or question. But understanding how each works — and which one your business needs right now — is critical to avoiding wasted budget and slow growth."
            },
            {
                type: "heading",
                text: "The Core Difference"
            },
            {
                type: "text",
                text: "SEO (Search Engine Optimization) is the process of earning organic (unpaid) visibility on search engines through content, technical optimization, and authority building. SEM (Search Engine Marketing) is paying for visibility through ads — primarily Google Ads. SEO is slow but compounds over time. SEM is instant but stops the moment you stop paying."
            },
            {
                type: "heading",
                text: "When to Prioritize SEM"
            },
            {
                type: "list",
                items: [
                    "You need leads or sales NOW — SEM delivers results within hours of going live",
                    "You're launching a new product or entering a new market",
                    "Your competitors are dominating Google organically — paid ads let you compete immediately",
                    "You want to test messaging or offers before committing to long-form SEO content",
                    "You have a high-ticket product with strong conversion economics"
                ]
            },
            {
                type: "heading",
                text: "When to Prioritize SEO"
            },
            {
                type: "list",
                items: [
                    "You're playing a long-term game and want traffic that compounds without ongoing ad spend",
                    "Your product has high search intent — people are actively looking for it",
                    "You want to reduce customer acquisition cost (CAC) over time",
                    "You're in a competitive paid market where CPCs are extremely high",
                    "You're building a content brand or media property alongside your core business"
                ]
            },
            {
                type: "callout",
                text: "📊 Our data across 100+ clients: Businesses that invest in BOTH SEM and SEO see 40% lower blended CAC within 12 months compared to those using just one channel."
            },
            {
                type: "heading",
                text: "The Hybrid Strategy: Use SEM to Fund SEO"
            },
            {
                type: "text",
                text: "The smartest approach we've seen: use SEM to drive immediate revenue and cash flow, then reinvest a portion of those profits into SEO. As your SEO builds momentum (typically months 4-8), gradually reduce SEM spend on keywords where you're now ranking organically. This creates a compounding growth engine that gets cheaper over time."
            },
            {
                type: "heading",
                text: "The Google Ads Features That Changed Everything in 2025"
            },
            {
                type: "text",
                text: "Performance Max (PMax) campaigns have matured significantly in 2025. When fed with strong creative assets and conversion data, PMax consistently outperforms traditional Search + Display splits. Smart bidding has also improved — Target ROAS and Target CPA bidding are now reliable enough to use from campaign launch for brands with 30+ conversions per month in their account history."
            },
            {
                type: "heading",
                text: "Conclusion: It Depends on Your Stage"
            },
            {
                type: "text",
                text: "Early-stage business (0-12 months)? Lead with SEM for immediate results while building your SEO foundation. Growth stage (1-3 years)? Run both in parallel with dedicated resources for each. Mature business (3+ years)? SEO should be generating significant organic traffic, with SEM focused on high-intent, high-value terms and competitor defense."
            }
        ]
    },
    {
        id: 4,
        slug: "content-marketing-lead-generation",
        category: "Content Marketing",
        categoryColor: "#f43f5e",
        tag: "Strategy",
        title: "How Content Marketing Generates Leads While You Sleep",
        subtitle: "Build a content engine that attracts, educates, and converts — on autopilot",
        excerpt: "The best marketing doesn't feel like marketing. Content that genuinely helps your target audience builds trust, establishes authority, and generates a steady stream of inbound leads — often with a fraction of the cost of paid ads.",
        author: "Rasika Karjavkar",
        authorRole: "Content Strategist",
        date: "February 22, 2025",
        readTime: "9 min read",
        cover: "/images/blog4_converted.png",
        accentColor: "#f43f5e",
        content: [
            {
                type: "intro",
                text: "Content marketing is often misunderstood. It's not about writing blog posts for the sake of it. It's about building a compounding asset — a library of genuinely helpful material that attracts your ideal customers, educates them on their problems, and positions your brand as the obvious solution. Done right, it generates leads around the clock."
            },
            {
                type: "heading",
                text: "Why Most Content Marketing Fails"
            },
            {
                type: "text",
                text: "The graveyard of the internet is littered with abandoned company blogs that published 5 articles, saw no traction, and gave up. Content marketing fails when: it's created without a clear ICP (Ideal Customer Profile), it doesn't target specific search intent, there's no distribution strategy, and there's no conversion path built in. Great content without strategy is just digital noise."
            },
            {
                type: "heading",
                text: "The Content Flywheel Framework"
            },
            {
                type: "list",
                items: [
                    "Attract — SEO-optimized blog posts, YouTube videos, and social content that bring strangers to your brand",
                    "Engage — Lead magnets, email sequences, and case studies that build trust with warm audiences",
                    "Convert — Comparison pages, pricing content, and testimonials that push prospects to act",
                    "Retain — Newsletters, product education, and community content that keep customers loyal"
                ]
            },
            {
                type: "heading",
                text: "The 3 Types of Content Every Business Needs"
            },
            {
                type: "text",
                text: "Top of Funnel (TOFU): Educational content that addresses the problems your audience has — not your product. Think '10 Reasons Your Google Ads Aren't Converting' rather than 'Why Our Agency is Great'. Middle of Funnel (MOFU): Comparison content, case studies, and how-to guides that help prospects evaluate their options. Bottom of Funnel (BOFU): Testimonials, ROI calculators, free trials, and consultation offers that convert evaluators into customers."
            },
            {
                type: "callout",
                text: "✍️ Our rule: Every piece of content must answer a specific question your ideal customer is asking. If it doesn't, it's not content marketing — it's a press release nobody asked for."
            },
            {
                type: "heading",
                text: "Distribution: The Multiplier Most Brands Miss"
            },
            {
                type: "text",
                text: "Creating great content is only half the battle. The brands that win at content marketing have systematic distribution: every blog post becomes a LinkedIn article, 5 social media posts, an email newsletter, a YouTube short, and a podcast talking point. One piece of content, amplified across every channel your audience uses. This is how you 10x the ROI of every content investment."
            },
            {
                type: "heading",
                text: "Measuring Content Marketing ROI"
            },
            {
                type: "text",
                text: "Unlike paid ads, content marketing ROI isn't immediate — but it's measurable. Track: organic traffic growth month-over-month, keyword rankings for target terms, leads attributed to organic/content channels, and the blended CAC reduction over 6-12 months. Companies that invest consistently in content marketing for 12+ months typically see a 3-5x improvement in their cost to acquire a customer vs. pure paid channels."
            },
            {
                type: "heading",
                text: "Getting Started: The 90-Day Content Sprint"
            },
            {
                type: "text",
                text: "Month 1: Define your ICP, build your keyword strategy, create 8-10 foundational pillar posts. Month 2: Publish 4x per week on social, build your email list with a strong lead magnet, start recording short-form video. Month 3: Analyze what's getting traction, double down on your top performers, begin building backlinks to your pillar content. By month 3, you'll have a clear picture of which content types and topics resonate — and a growing asset that compounds over time."
            }
        ]
    }
];

/* ═══════════════════════════════════════════════════════════
   ANIMATIONS
═══════════════════════════════════════════════════════════ */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

/* ═══════════════════════════════════════════════════════════
   BLOG LISTING PAGE
═══════════════════════════════════════════════════════════ */
const BlogListing = ({ onSelectBlog }) => {
    const featured = BLOGS[0];
    const rest = BLOGS.slice(1);

    return (
        <main className="w-full bg-[#fafaf8] min-h-screen font-lora overflow-hidden">

            {/* ── HERO ── */}
            <section className="relative bg-[#0f172a] py-28 px-6 overflow-hidden">
                {/* grid texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
                        backgroundSize: '72px 72px'
                    }} />
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#FDB813]/10 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
                        className="text-[#FDB813] text-xs font-bold tracking-[0.4em] uppercase mb-5"
                    >
                        iBraine Insights
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
                        className="font-lora text-[44px] md:text-[68px] leading-[1.1] text-white font-normal mb-6"
                    >
                        Marketing insights that{' '}
                        <span className="relative inline-block">
                            <span className="text-[#FDB813]">actually</span>
                            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#FDB813]/40 rounded-full" />
                        </span>
                        {' '}move the needle
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Strategies, playbooks, and real-world lessons from a team that manages ₹50Cr+ in ad spend every year.
                    </motion.p>
                </div>
            </section>

            {/* ── FEATURED BLOG ── */}
            <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
                    onClick={() => onSelectBlog(featured)}
                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 grid md:grid-cols-2"
                >
                    {/* image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                        <img src={featured.cover} alt={featured.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        <span className="absolute top-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full text-white"
                            style={{ background: featured.accentColor }}>
                            {featured.tag}
                        </span>
                    </div>

                    {/* content */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                        <span className="text-xs font-bold tracking-widest uppercase mb-3"
                            style={{ color: featured.accentColor }}>{featured.category}</span>
                        <h2 className="font-lora text-2xl md:text-3xl text-[#0f172a] leading-tight mb-4 group-hover:text-[#1d4ed8] transition-colors duration-300">
                            {featured.title}
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8">{featured.excerpt}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                    style={{ background: `linear-gradient(135deg, ${featured.accentColor}, #0f172a)` }}>
                                    {featured.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-[#0f172a]">{featured.author}</p>
                                    <p className="text-[11px] text-gray-400">{featured.date} · {featured.readTime}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all duration-300"
                                style={{ color: featured.accentColor }}>
                                Read Article <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── REST OF BLOGS ── */}
            <section className="max-w-7xl mx-auto px-6 pb-28">
                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-[#FDB813] text-xs font-bold tracking-[0.35em] uppercase mb-10"
                >
                    More Articles
                </motion.p>

                <motion.div
                    variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {rest.map((blog) => (
                        <motion.div
                            key={blog.id}
                            variants={fadeUp}
                            onClick={() => onSelectBlog(blog)}
                            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* cover */}
                            <div className="relative h-52 overflow-hidden">
                                <img src={blog.cover} alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${blog.accentColor}33, transparent)` }} />
                                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                                    style={{ background: blog.accentColor }}>
                                    {blog.tag}
                                </span>
                            </div>

                            {/* body */}
                            <div className="p-7 flex flex-col flex-1">
                                <span className="text-xs font-bold tracking-widest uppercase mb-3"
                                    style={{ color: blog.accentColor }}>{blog.category}</span>
                                <h3 className="font-lora text-xl text-[#0f172a] leading-snug mb-3 group-hover:text-[#1d4ed8] transition-colors duration-300 flex-1">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-400 text-[13px] leading-relaxed mb-6 line-clamp-2">{blog.excerpt}</p>

                                {/* meta */}
                                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                                            style={{ background: blog.accentColor }}>
                                            {blog.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-[#0f172a]">{blog.author}</p>
                                            <p className="text-[10px] text-gray-400">{blog.readTime}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 group-hover:border-transparent transition-colors duration-300"
                                        style={{ background: `group-hover:${blog.accentColor}` }}>
                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-gray-600" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
};

/* ═══════════════════════════════════════════════════════════
   BLOG DETAIL PAGE
═══════════════════════════════════════════════════════════ */
const BlogDetail = ({ blog, onBack, allBlogs }) => {
    useEffect(() => { window.scrollTo(0, 0); }, [blog]);

    const related = allBlogs.filter(b => b.id !== blog.id).slice(0, 2);

    const renderContent = (block, i) => {
        switch (block.type) {
            case 'intro':
                return (
                    <p key={i} className="text-[19px] text-gray-700 leading-[1.85] mb-8 font-lora border-l-4 pl-6"
                        style={{ borderColor: blog.accentColor }}>
                        {block.text}
                    </p>
                );
            case 'heading':
                return (
                    <h2 key={i} className="font-lora text-2xl md:text-3xl text-[#0f172a] font-normal mt-12 mb-5 leading-snug">
                        {block.text}
                    </h2>
                );
            case 'text':
                return (
                    <p key={i} className="text-[17px] text-gray-600 leading-[1.9] mb-6">
                        {block.text}
                    </p>
                );
            case 'list':
                return (
                    <ul key={i} className="mb-8 space-y-3">
                        {block.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-[16px] text-gray-600 leading-relaxed">
                                <span className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ background: blog.accentColor }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            case 'callout':
                return (
                    <div key={i} className="my-8 p-6 rounded-2xl border-l-4 text-[15px] text-gray-700 leading-relaxed"
                        style={{ borderColor: blog.accentColor, background: `${blog.accentColor}0d` }}>
                        {block.text}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <main className="w-full bg-[#fafaf8] min-h-screen font-lora overflow-hidden">

            {/* ── BACK BAR ── */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button onClick={onBack}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#0f172a] transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                        <span>Blog</span>
                        <ChevronRight size={12} />
                        <span style={{ color: blog.accentColor }}>{blog.category}</span>
                    </div>
                </div>
            </div>

            {/* ── HERO ── */}
            <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
                <img src={blog.cover} alt={blog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                            style={{ background: blog.accentColor }}>{blog.tag}</span>
                        <span className="text-xs font-bold tracking-widest uppercase text-white/70">{blog.category}</span>
                    </div>
                    <h1 className="font-lora text-3xl md:text-5xl text-white font-normal leading-[1.2] mb-4">
                        {blog.title}
                    </h1>
                    <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">{blog.subtitle}</p>
                </motion.div>
            </section>

            {/* ── AUTHOR META STRIP ── */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ background: `linear-gradient(135deg, ${blog.accentColor}, #0f172a)` }}>
                            {blog.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#0f172a]">{blog.author}</p>
                            <p className="text-xs text-gray-400">{blog.authorRole}</p>
                        </div>
                    </div>
                    <div className="h-4 w-px bg-gray-200 hidden sm:block" />
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar size={13} /> {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock size={13} /> {blog.readTime}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1"
                        style={{ background: `${blog.accentColor}18`, color: blog.accentColor }}>
                        <Tag size={11} /> {blog.category}
                    </div>
                </div>
            </div>

            {/* ── ARTICLE BODY ── */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <motion.article
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
                >
                    {blog.content.map((block, i) => renderContent(block, i))}
                </motion.article>
            </section>

            {/* ── AUTHOR BIO CARD ── */}
            <section className="max-w-4xl mx-auto px-6 pb-16">
                <div className="rounded-3xl p-8 flex items-start gap-6 border"
                    style={{ background: `${blog.accentColor}0a`, borderColor: `${blog.accentColor}30` }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
                        style={{ background: `linear-gradient(135deg, ${blog.accentColor}, #0f172a)` }}>
                        {blog.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-[#0f172a] text-lg">{blog.author}</p>
                        <p className="text-sm font-medium mb-2" style={{ color: blog.accentColor }}>{blog.authorRole} at iBraine</p>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                            A performance marketing specialist with 8+ years of experience managing high-scale paid media campaigns across Meta, Google, and programmatic channels. Passionate about turning data into decisions that drive real business growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── RELATED ARTICLES ── */}
            <section className="bg-white border-t border-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#FDB813] text-xs font-bold tracking-[0.35em] uppercase mb-3">Keep Reading</p>
                    <h3 className="font-lora text-3xl text-[#0f172a] mb-10">Related Articles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {related.map((b) => (
                            <motion.div key={b.id} whileHover={{ y: -4 }}
                                onClick={() => onBack(b)}
                                className="group cursor-pointer bg-[#fafaf8] rounded-2xl overflow-hidden border border-gray-100 flex gap-5 p-5 hover:shadow-lg transition-all duration-400">
                                <img src={b.cover} alt={b.title}
                                    className="w-28 h-24 object-cover rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-500" />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: b.accentColor }}>{b.category}</span>
                                        <h4 className="font-lora text-[15px] text-[#0f172a] leading-snug mt-1 group-hover:text-[#1d4ed8] transition-colors">{b.title}</h4>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                                        <Clock size={11} /> {b.readTime}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-[#0f172a] py-20 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <p className="text-[#FDB813] text-xs font-bold tracking-[0.35em] uppercase mb-5">Work With Us</p>
                    <h3 className="font-lora text-white text-4xl leading-tight mb-6">
                        Ready to put these strategies to work for your brand?
                    </h3>
                    <p className="text-gray-400 mb-10 leading-relaxed">
                        Our team manages ₹50Cr+ in ad spend every year. Let's talk about what we can do for your business.
                    </p>
                    <button
                        className="inline-flex items-center gap-2 font-bold px-9 py-4 rounded-xl text-[#0f172a] hover:scale-105 transition-transform duration-200"
                        style={{ background: '#FDB813' }}
                    >
                        Get a Free Strategy Call <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </main>
    );
};

/* ═══════════════════════════════════════════════════════════
   ROOT — handles routing between listing & detail
═══════════════════════════════════════════════════════════ */
const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleSelectBlog = (blog) => setSelectedBlog(blog);

    // also used by "related articles" click — if blog object passed, navigate to it; else go back to listing
    const handleBack = (blogOrUndefined) => {
        if (blogOrUndefined && typeof blogOrUndefined === 'object' && blogOrUndefined.id) {
            setSelectedBlog(blogOrUndefined);
        } else {
            setSelectedBlog(null);
        }
    };

    return (
        <AnimatePresence mode="wait">
            {selectedBlog ? (
                <motion.div key={selectedBlog.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <BlogDetail blog={selectedBlog} onBack={handleBack} allBlogs={BLOGS} />
                </motion.div>
            ) : (
                <motion.div key="listing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <BlogListing onSelectBlog={handleSelectBlog} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BlogPage;