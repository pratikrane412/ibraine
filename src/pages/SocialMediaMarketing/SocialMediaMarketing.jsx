import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckSquare, PhoneCall, Star, UserPlus, 
  ArrowRight, Heart, Share2, MessageCircle, Quote, TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const SocialMediaMarketing = () => {
  const scrollRef = useRef(null);

  const whyFeatures = [
    { title: "Dedicated Resource", desc: "An experienced social media manager dedicated to your business." },
    { title: "Customised Design", desc: "Custom graphic design to showcase your brand or products beautifully." },
    { title: "Daily Posts", desc: "Daily posts from Monday to Sunday, optimized for peak engagement." },
    { title: "In-depth Understanding", desc: "Deep industry research to produce highly relevant, viral content." },
    { title: "Tailored Hashtags", desc: "Tailored hashtag strategies to exponentially increase post discovery." }
  ];

  const caseStudies = [
    {
      date: "March 12, 2020",
      title: "Revamping TripXOXO: Enhancing Visibility, Trust & Revenue",
      img: "https://iBraine.com/media/2020/03/blog5-1-650x393.jpg",
      link: "#"
    },
    {
      date: "March 12, 2020",
      title: "Establishing India’s Premier Luxury Fashion Store",
      img: "https://iBraine.com/media/2020/03/blog6-1-650x393.jpg",
      link: "#"
    },
    {
      date: "September 13, 2022",
      title: "Boost Your Business Growth with the Ultimate Digital Guide",
      img: "https://iBraine.com/media/2022/09/businessman-working-with-digital-finance-business-graph-perceptive-technology_31965-90360-650x289.jpg",
      link: "#"
    }
  ];

  const testimonials = [
    { name: "Raj Shenoy", role: "Monjin", img: "https://iBraine.com/media/2023/09/testimonial17.png", text: "iBraine would be the best agency for branding your company to the highest peak in my opinion. Very best in providing social media services." },
    { name: "Nishigandha Kamble", role: "Medisynth", img: "https://iBraine.com/media/2023/09/testimonial19.png", text: "iBraine is a definite recommendation for anyone seeking impactful social media solutions." },
    { name: "Salman Khan", role: "TripXOXO", img: "https://iBraine.com/media/2023/09/testimonial18.png", text: "Tripxoxo's experience with iBraine has been outstanding. Their innovative strategies have truly elevated our online presence." },
    { name: "Nancy Tuscano", role: "Illumor Cosmetics", img: "https://iBraine.com/media/2023/09/testimonial20.png", text: "Highly satisfied with the services. Their creative approach and engaging content have brought our brand to life online." }
  ];

  // Real influencer/partner avatars to replace the old SEO icons
  const partnerAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  ];

  return (
    <main className="w-full bg-white overflow-hidden font-body text-[#323232] selection:bg-[#FB8C32] selection:text-white">
      
      {/* ════ GLOBAL TYPOGRAPHY STYLES ════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');
        
        :root {
          --font-heading: 'Montserrat', system-ui, -apple-system, sans-serif;
          --font-body: 'Open Sans', system-ui, -apple-system, sans-serif;
        }

        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ════ 1. PREMIUM HERO SECTION ════ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-20 lg:pb-20 px-4 md:px-8 bg-[#fafbfc] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#FB8C32]/10 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#1872BA]/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#32323205_1px,transparent_1px),linear-gradient(to_bottom,#32323205_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        </div>

        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10 w-full mt-6 lg:mt-0">
          
          {/* Left Text */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full lg:w-1/2 text-center lg:text-left z-20">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1872BA]/20 shadow-sm font-bold text-[10px] md:text-xs tracking-wider uppercase mb-5 font-body text-[#1872BA]">
              <span className="w-2 h-2 rounded-full bg-[#FB8C32] animate-pulse" /> #1 Social Media Agency
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl lg:text-[70px] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 font-extrabold tracking-tight text-[#323232]">
              We build <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">Viral Brands.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="font-body text-[#323232]/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Harness the power of social media marketing. We create personalized, highly-engaging strategies that turn followers into fiercely loyal customers.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-8">
               <button className="bg-[#FB8C32] text-white font-body font-bold px-6 py-3.5 rounded-xl hover:bg-[#1872BA] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,140,50,0.4)] text-sm md:text-base">
                  Start Your Campaign
               </button>
               <button className="bg-white border border-[#323232]/10 text-[#323232] font-body font-bold px-6 py-3.5 rounded-xl hover:bg-[#1872BA] hover:text-white hover:border-[#1872BA] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-sm md:text-base">
                  View Our Work
               </button>
            </motion.div>

            {/* Micro Image Stack - Influencers/Partners */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 p-2.5 pr-4 rounded-full shadow-md bg-white border border-[#323232]/5 mx-auto lg:mx-0">
                <div className="flex -space-x-2">
                    {partnerAvatars.map((img, i) => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-white shadow-sm overflow-hidden">
                           <img src={img} className="w-full h-full object-cover" alt="Partner Avatar" />
                        </div>
                    ))}
                </div>
                <div className="text-left">
                   <p className="font-heading font-bold text-[#323232] text-xs md:text-sm leading-tight">10M+ Audience</p>
                   <p className="text-[#323232]/60 font-body text-[10px]">Reached actively daily</p>
                </div>
            </motion.div>
          </motion.div>

          {/* Right Image with Modern Framing */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0">
             
             {/* Main Image Container */}
             <div className="relative z-10 w-[90%] md:w-[75%] lg:w-[80%] aspect-square bg-white rounded-[2rem] md:rounded-[3rem] border border-[#323232]/5 shadow-xl flex items-center justify-center p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,114,186,0.05),transparent_60%)] rounded-[2rem] md:rounded-[3rem]" />
                {/* Real Social Media Graphic */}
                <img src="https://iBraine.com/media/2023/09/Great-brands-3.png" className="w-full h-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-700 relative z-10" alt="Social Media Hero" />
             </div>
             
             {/* Floating Social Badges */}
             <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] -right-2 md:-right-4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-white z-20 flex gap-2 md:gap-3 items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FB8C32]/10 text-[#FB8C32] rounded-full flex items-center justify-center"><Heart size={16} fill="currentColor" className="md:w-5 md:h-5" /></div>
                <div>
                   <p className="text-[10px] md:text-xs font-bold text-[#323232]/50">Likes</p>
                   <p className="font-heading font-bold text-sm md:text-lg leading-none text-[#323232]">12.4K</p>
                </div>
             </motion.div>

             <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] -left-2 md:-left-6 bg-white/90 backdrop-blur-md p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl border border-white z-20 flex gap-2 md:gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1872BA]/10 text-[#1872BA] rounded-full flex items-center justify-center">
                    <UserPlus size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                    <h3 className="font-heading font-bold text-sm md:text-lg text-[#323232] leading-tight">Hire us!</h3>
                    <p className="text-[10px] md:text-xs text-[#323232]/60 font-body">Free consultation</p>
                </div>
             </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ════ 2. ABOUT/LEVERAGE SECTION ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white border-y border-[#323232]/5">
         <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            
            {/* Left Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/2">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] leading-[1.2] lg:leading-[1.15] text-[#323232] mb-4 md:mb-6 font-bold">
                    Great brands are built through <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">Social Media Dominance.</span>
                </h2>
                <p className="font-body text-[#323232]/70 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Social Media Marketing is highly effective in generating sales and strengthening branding. It presents an unprecedented opportunity to showcase your brand, establish thought leadership, and entertain your audience.
                </p>
                <p className="font-body text-[#323232]/70 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                    As Mumbai's top social media agency, we blend Organic Content with Paid Social Advertising to drive substantial revenue. We optimize every ad spend and analyze data to ensure continuous, scalable improvement.
                </p>
                <button className="bg-white text-[#323232] border border-[#323232]/10 font-body font-bold px-6 py-3.5 rounded-xl hover:bg-[#1872BA] hover:text-white hover:border-[#1872BA] transition-all duration-300 text-sm md:text-base shadow-sm">
                    Discover Our Process
                </button>
            </motion.div>

            {/* Right Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1872BA]/5 to-[#FB8C32]/5 rounded-[2rem] md:rounded-[3rem] -rotate-3 scale-105 z-0" />
                <div className="relative z-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-[#323232]/5 p-6 md:p-8 shadow-xl">
                   <img src="https://iBraine.com/media/2023/09/leverage-social-media-6-1-e1694546240101.png" className="w-full object-contain drop-shadow-md" alt="Leverage Social Media" />
                </div>
            </motion.div>
         </div>
      </section>

      {/* ════ 3. WHY IMPORTANT (Bento Grid Style) ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#fafbfc]">
         <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-16">
            
            {/* Left Image Side */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-5/12 relative mt-8 lg:mt-0">
                <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border-[6px] md:border-8 border-white">
                   <img src="https://iBraine.com/media/2023/09/why-is-social-media-important.jpg" className="w-full object-cover aspect-square md:aspect-[4/5] hover:scale-105 transition-transform duration-700" alt="Why Social Media is Important" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#323232]/80 to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center justify-between text-white">
                         <div className="flex gap-2 items-center"><TrendingUp size={18} className="text-[#FB8C32]" /> <span className="font-heading font-bold text-sm md:text-base">+340%</span></div>
                         <div className="text-xs md:text-sm font-body font-medium">Avg. Engagement Rate</div>
                      </div>
                   </div>
                </div>
            </motion.div>

            {/* Right Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="w-full lg:w-7/12">
                <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.2] lg:leading-[1.15] text-[#323232] mb-4 md:mb-6">
                    Why social media is <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">crucial</span> for your business.
                </motion.h2>
                <motion.p variants={fadeUp} className="font-body text-[#323232]/70 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                    Social media creates powerful brand awareness, ensuring your company is the first one customers recall when making decisions. Partnering with our experts ensures you never post into the void.
                </motion.p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {whyFeatures.map((feature, index) => (
                       <motion.div variants={fadeUp} key={index} className={`bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-[#323232]/5 hover:shadow-md hover:border-[#1872BA]/20 transition-all ${index === 4 ? 'sm:col-span-2' : ''}`}>
                           <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#FB8C32]/10 text-[#FB8C32] flex items-center justify-center mb-3">
                               <CheckSquare size={18} />
                           </div>
                           <h4 className="font-heading font-bold text-sm md:text-base text-[#323232] mb-1.5 md:mb-2">{feature.title}</h4>
                           <p className="font-body text-xs md:text-sm text-[#323232]/60 leading-relaxed">{feature.desc}</p>
                       </motion.div>
                    ))}
                </div>
            </motion.div>

         </div>
      </section>

      {/* ════ 4. TESTIMONIALS (Modern Cards) ════ */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#323232] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,140,50,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
           <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
             <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">Client Success Stories</h2>
             <p className="font-body text-white/70 text-sm md:text-base">Hear from brands who turned digital challenges into absolute market triumphs through our targeted strategies.</p>
           </div>
           
           <div 
             ref={scrollRef}
             className="flex overflow-x-auto gap-4 md:gap-6 pb-8 md:pb-12 snap-x snap-mandatory no-scrollbar px-2 md:px-0"
           >
              {testimonials.map((review, i) => (
                  <div key={i} className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] snap-center border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors relative group">
                      <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-white/10 w-8 h-8 md:w-12 md:h-12 group-hover:text-[#1872BA]/20 transition-colors" />
                      
                      <div className="flex items-center gap-3 md:gap-4 mb-6 relative z-10">
                          <img src={review.img} alt={review.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#FB8C32]" />
                          <div>
                              <h4 className="font-heading font-bold text-base md:text-lg text-white">{review.name}</h4>
                              <p className="text-[#FB8C32] text-xs md:text-sm font-body font-medium">{review.role}</p>
                          </div>
                      </div>
                      <div className="flex text-[#FB8C32] mb-4 md:mb-5">
                          <Star fill="currentColor" size={14} className="mr-1" /><Star fill="currentColor" size={14} className="mr-1" /><Star fill="currentColor" size={14} className="mr-1" /><Star fill="currentColor" size={14} className="mr-1" /><Star fill="currentColor" size={14} />
                      </div>
                      <p className="font-body text-white/80 text-sm md:text-base leading-relaxed flex-grow">"{review.text}"</p>
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* ════ 5. GROW YOUR BUSINESS SECTION ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
         <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            
            {/* Left Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#FB8C32]/10 text-[#FB8C32] font-body font-bold text-[10px] md:text-xs tracking-wider uppercase mb-4 md:mb-6">
                    Audience Expansion
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.2] lg:leading-[1.1] text-[#323232] mb-4 md:mb-6">
                    Ready to scale your <br className="hidden md:block"/> audience exponentially?
                </h2>
                <p className="font-body text-[#323232]/70 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                    We are one of the top agencies in Mumbai with highly experienced experts who utilize data to grow your brand's reach and authority in record time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="flex items-center gap-2.5 bg-[#fafbfc] px-4 py-3 rounded-xl border border-[#323232]/5 shadow-sm font-heading font-bold text-[#323232] text-sm md:text-base">
                       <Share2 size={18} className="text-[#1872BA]"/> Wide Audience Reach
                    </div>
                    <div className="flex items-center gap-2.5 bg-[#fafbfc] px-4 py-3 rounded-xl border border-[#323232]/5 shadow-sm font-heading font-bold text-[#323232] text-sm md:text-base">
                       <MessageCircle size={18} className="text-[#1872BA]"/> Real-Time Interaction
                    </div>
                </div>
                <button className="bg-[#323232] text-white font-body font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl hover:bg-[#FB8C32] transition-all shadow-md text-sm uppercase tracking-wider">
                    Get in touch with us now
                </button>
            </motion.div>

            {/* Right Image (High Quality Social App Context) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <div className="relative w-[90%] md:w-[75%] lg:w-[80%] aspect-square bg-[#fafbfc] rounded-full flex items-center justify-center p-4 md:p-6 border border-[#323232]/5 shadow-lg overflow-hidden">
                   <div className="absolute inset-2 md:inset-3 bg-white rounded-full shadow-sm" />
                   {/* Replaced generic slide_4 with a premium real-life social media concept photo */}
                   <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" className="w-[85%] h-[85%] object-cover rounded-full relative z-10 drop-shadow-md" alt="Grow Business Social Engagement" />
                </div>
            </motion.div>
         </div>
      </section>

      {/* ════ 6. CASE STUDIES SECTION ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#fafbfc] border-t border-[#323232]/5">
          <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6">
                  <div className="max-w-2xl">
                     <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#323232] leading-[1.2] lg:leading-[1.1] mb-3 md:mb-4">
                         Data-Backed Results.
                     </h2>
                     <p className="font-body text-[#323232]/70 text-sm md:text-base">See how we've mathematically scaled traffic, engagement, and profits for our partners.</p>
                  </div>
                  <Link to="/case-studies" className="bg-white border border-[#323232]/10 text-[#323232] px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-body font-bold hover:bg-[#1872BA] hover:text-white hover:border-[#1872BA] transition-all shrink-0 shadow-sm flex items-center gap-2 text-sm md:text-base">
                      View All Results <ArrowRight size={16} />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {caseStudies.map((item, i) => (
                      <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer bg-white rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-4 border border-[#323232]/5 shadow-sm hover:shadow-xl hover:border-[#1872BA]/20 transition-all duration-300">
                          <div className="overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-5 relative">
                              <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                          <div className="px-2 pb-2 md:pb-4">
                             <p className="text-[#FB8C32] font-body text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1.5 md:mb-2">{item.date}</p>
                             <h4 className="font-heading font-bold text-base md:text-lg text-[#323232] group-hover:text-[#1872BA] transition-colors line-clamp-2">{item.title}</h4>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* ════ 7. CONTACT FORM SECTION ════ */}
      <section className="bg-[#fafbfc] py-16 md:py-20 lg:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-[#323232] rounded-[2rem] md:rounded-[3rem] flex flex-col lg:flex-row items-center relative z-10 shadow-2xl overflow-hidden">
            
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle_at_center,rgba(251,140,50,0.15),transparent_70%)] pointer-events-none" />
            
            {/* Left Info */}
            <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-16 text-white border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#FB8C32] mb-6 md:mb-8 border border-white/10 backdrop-blur-sm shadow-sm">
                   <PhoneCall size={24} className="md:w-7 md:h-7" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[46px] leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                    Let’s build your <br className="hidden md:block"/> 
                    <span className="text-[#FB8C32]">Growth Engine.</span>
                </h2>
                <p className="font-body text-white/70 text-sm md:text-base mb-8 md:mb-10 leading-relaxed max-w-md">
                    Ready to take your online presence to the next level? Fill out the form, and let’s map the journey towards your digital dominance.
                </p>
                <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl backdrop-blur-md inline-block w-full sm:w-auto">
                    <p className="text-[#FB8C32] font-body font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1.5 flex items-center gap-1.5"><PhoneCall size={12}/> Direct Priority Line</p>
                    <a href="tel:+919892854892" className="text-2xl md:text-3xl font-heading font-bold text-white hover:text-[#1872BA] transition-colors">+91 9892 854 892</a>
                </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-7/12 bg-white p-8 md:p-12 lg:p-16 relative z-10">
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-[#323232]">Request your strategy call</h3>
                <form className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                       <div className="space-y-1.5">
                           <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Full Name</label>
                           <input type="text" placeholder="John Doe" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3.5 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] transition-all" required />
                       </div>
                       <div className="space-y-1.5">
                           <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Work Email</label>
                           <input type="email" placeholder="john@company.com" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3.5 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] transition-all" required />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Project Details</label>
                        <textarea rows="4" placeholder="Tell us about your brand goals..." className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3.5 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] resize-none transition-all" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#FB8C32] text-white font-body font-bold text-xs md:text-sm uppercase tracking-widest py-4 md:py-4 rounded-xl hover:bg-[#1872BA] transition-all shadow-md mt-2 md:mt-4">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </section>

    </main>
  );
};

export default SocialMediaMarketing;