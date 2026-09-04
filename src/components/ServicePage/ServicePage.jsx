// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
// import ContactSection from '../ContactSection/ContactSection';
// import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const sectionReveal = {
//   hidden: { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// };

// const defaultLogos = [
//   '/client/MRC.png', '/client/NAT.png', '/client/Meditac Kits Logo.png',
//   '/client/Vastu Energetics Logo.png', '/client/Papita Logo.jpg', '/client/LOK.png',
//   '/client/Emrik Cakes Logo.webp', '/client/Artigenius Logo.png', '/client/DLOK.png',
//   '/client/DHOBI.png', '/client/Thorny Affairs Logo.png', '/client/Lullabies Logo.png',
// ];

// const MotionImage = ({ image, alt, className, animation }) => (
//   animation ? (
//     <motion.img animate={animation} whileHover={{ scale: 1.04 }} transition={{ duration: animation.scale ? 6 : 5, repeat: Infinity }} src={image} className={className} alt={alt} />
//   ) : <motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.35 }} src={image} className={className} alt={alt} />
// );

// const ImagePair = ({ images, altPrefix }) => (
//   <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:w-1/2 relative h-[500px] w-full">
//     {images?.[0] && <MotionImage image={images[0]} alt={`${altPrefix} primary`} className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10 object-cover" />}
//     {images?.[1] && <MotionImage image={images[1]} alt={`${altPrefix} secondary`} className="absolute top-0 right-0 w-[65%] z-20 rounded-2xl shadow-2xl object-cover" animation={{ y: [-15, 15, -15] }} />}
//   </motion.div>
// );

// const Feature = ({ section, reversed, accent }) => (
//   <motion.section variants={sectionReveal} initial="hidden" animate="visible" className={`py-24 px-6 ${reversed ? 'bg-white' : 'bg-slate-50'}`}>
//     <div className={`max-w-7xl mx-auto flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
//       <ImagePair images={section.images} altPrefix={section.title} />
//       <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:w-1/2">
//         <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">{section.title}</h2>
//         {section.copy.map((paragraph) => <p key={paragraph} className="text-gray-600 text-[17px] mb-6 leading-relaxed">{paragraph}</p>)}
//         <ul className="space-y-4 mb-10">
//           {section.bullets.map((bullet) => <li key={bullet} className="flex items-center gap-3 text-[18px] text-black font-medium"><CheckCircle2 className="shrink-0" size={24} style={{ color: accent }} />{bullet}</li>)}
//         </ul>
//         <a href="/contact"><button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:text-black transition-all shadow-lg" style={{ '--tw-bg-opacity': 1 }} onMouseEnter={(event) => { event.currentTarget.style.backgroundColor = accent; }} onMouseLeave={(event) => { event.currentTarget.style.backgroundColor = 'black'; }}>{section.button}</button></a>
//       </motion.div>
//     </div>
//   </motion.section>
// );

// const ServicePage = ({ data }) => {
//   const [openFaq, setOpenFaq] = useState(0);
//   const logos = data.logos || defaultLogos;

//   return (
//     <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">
//       <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="fixed inset-0 z-[2000] pointer-events-none bg-white" />
//       <motion.section initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className="relative pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center" style={{ backgroundColor: data.hero.background }}>
//         <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} src="/images/bg1.webp" className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50" alt="" />
//         <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} src="/images/bg2.webp" className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50" alt="" />
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
//           <motion.div variants={fadeUp} className="lg:w-1/2">
//             <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">{data.hero.before} <span className="relative inline-block z-10">{data.hero.highlight}<span className="absolute left-0 bottom-2 w-full h-3 -z-10 rounded-sm" style={{ backgroundColor: `${data.accent}66` }} /></span> {data.hero.after}</motion.h1>
//             {data.hero.copy.map((paragraph) => <motion.p key={paragraph} initial="hidden" animate="visible" variants={fadeUp} className="text-gray-600 text-[18px] mb-8 leading-relaxed">{paragraph}</motion.p>)}
//             <a href="/contact"><button className="font-bold px-8 py-4 rounded-md text-black hover:bg-black hover:text-white transition-all shadow-lg" style={{ backgroundColor: data.accent }}>{data.hero.button}</button></a>
//             <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-gray-500 text-[15px] mt-6">{data.hero.note}</motion.p>
//           </motion.div>
//           <motion.div variants={fadeUp} className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
//             {data.hero.images?.map((image, index) => image && <MotionImage key={image} image={image} alt={`${data.name} ${index + 1}`} className={['absolute right-0 top-0 w-[85%] object-contain z-10 rounded-2xl shadow-xl', 'absolute left-[-10%] top-[20%] w-[60%] z-20 shadow-2xl rounded-xl', 'absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl', 'absolute right-[-5%] bottom-[5%] w-[40%] z-20 rounded-xl shadow-2xl'][index]} animation={index === 1 ? { y: [-10, 10, -10] } : index === 2 ? { y: [10, -10, 10] } : index === 3 ? { scale: [0.95, 1.05, 0.95] } : undefined} />)}
//           </motion.div>
//         </div>
//       </motion.section>

//       <motion.section variants={sectionReveal} initial="hidden" animate="visible" className="py-20 px-6 border-b border-gray-100 bg-white"><div className="max-w-7xl mx-auto text-center"><h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">{data.brands.title}</h2><p className="text-gray-500 mb-12 text-lg">{data.brands.copy}</p><div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">{logos.map((logo) => <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ duration: 0.25 }} key={logo} className="w-32 md:w-40 h-20 md:h-24 flex items-center justify-center"><img src={logo} alt="Brand Logo" className="max-h-full max-w-full object-contain" /></motion.div>)}</div></div></motion.section>
//       <Feature section={data.features[0]} accent={data.accent} />

//       <motion.section variants={sectionReveal} initial="hidden" animate="visible" className="py-24 px-6" style={{ backgroundColor: data.faq.background }}><div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"><div className="lg:w-1/2 relative h-[600px] w-full">{data.faq.images.map((image, index) => <MotionImage key={image} image={image} alt={`${data.name} FAQ ${index + 1}`} className={['absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl', 'absolute top-[20%] right-[-5%] w-[60%] z-20 rounded-2xl shadow-2xl', 'absolute bottom-0 left-[10%] w-[70%] z-30 shadow-2xl bg-white rounded-2xl'][index]} animation={index === 1 ? { y: [-15, 15, -15] } : index === 2 ? { y: [15, -15, 15] } : undefined} />)}</div><motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:w-1/2"><h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">{data.faq.title}</h2><p className="text-gray-600 text-[18px] mb-10 leading-relaxed">{data.faq.copy}</p><div className="space-y-4">{data.faq.items.map((faq, index) => <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.2 }} key={faq.title} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left"><span className={`font-bold text-lg ${openFaq === index ? 'text-[#F58220]' : 'text-black'}`}>{faq.title}</span>{openFaq === index ? <ChevronUp /> : <ChevronDown className="text-gray-400" />}</button><AnimatePresence>{openFaq === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-500 text-[15px]">{faq.content}</motion.div>}</AnimatePresence></motion.div>)}</div></motion.div></div></motion.section>

//       <motion.section variants={sectionReveal} initial="hidden" animate="visible" className="py-24 px-6 text-white text-center" style={{ background: data.stats.gradient }}><div className="max-w-5xl mx-auto mb-16"><motion.h2 initial="hidden" animate="visible" variants={fadeUp} className="font-lora text-4xl lg:text-5xl mb-6">{data.stats.title}</motion.h2><motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-gray-200 text-lg">{data.stats.copy}</motion.p></div><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">{data.stats.items.map((stat) => <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }} key={stat.value}><h3 className="font-bold text-5xl lg:text-6xl mb-2" style={{ color: data.accent }}>{stat.value}</h3><p className="text-gray-200 text-lg">{stat.label}</p></motion.div>)}</div></motion.section>
//       <TestimonialsSection />
//       <motion.section variants={sectionReveal} initial="hidden" animate="visible" className="py-20 px-6 bg-slate-50 text-center border-t border-gray-200"><motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto"><h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">{data.cta.title}</h2><p className="text-gray-600 text-lg mb-10">{data.cta.copy}</p><motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">{data.cta.button}</motion.button></motion.div></motion.section>
//       <ContactSection headingLine1="Let's Talk with" headingLine2="Experienced" headingHighlight={data.contact} headingLine3="Consultant" />
//     </motion.main>
//   );
// };

// export default ServicePage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import Illustration from './Illustration';
import AmbientCurve from './AmbientCurve';

const categoryAssetFiles = import.meta.glob('../../assets/*/*.png', { eager: true, import: 'default' });
const categoryFolderBySlug = {
  'performance-marketing': 'performance-market',
  'sem-experts': 'sem',
  'seo-services': 'seo',
  'social-media-marketing': 'smm',
  'website-design': 'web-dev',
  'ui-ux': 'ui',
  'gtm-integration': 'gtm',
  'cro': 'cro',
  'content-writing': 'content-writing',
  'graphic-design': 'graphic',
  'reels-videos-photos': 'video'
};

export default function ServicePage({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [pricingCycle, setPricingCycle] = useState('monthly');
  const categoryFolder = categoryFolderBySlug[data.slug];
  const categoryImages = categoryFolder
    ? [1, 2, 3, 4, 5].map((number) => categoryAssetFiles[`../../assets/${categoryFolder}/${number}.png`])
    : data.hero.images;
  const relatedImages = categoryImages?.filter(Boolean) || [];
  const imagePaths = {
    hero: relatedImages[0],
    audience: relatedImages[1],
    content: relatedImages[2],
    testimonial: relatedImages[3],
    contact: relatedImages[4] || data.faq.images?.[0]
  };
  const serviceCards = data.features.flatMap((feature) => feature.bullets.map((bullet, index) => ({
    title: bullet,
    text: feature.copy[index % feature.copy.length],
    icon: ['social', 'cube', 'report'][index % 3]
  }))).slice(0, 3);
  const stats = data.stats.items;
  const firstFeature = data.features[0];
  const secondFeature = data.features[1] || firstFeature;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="social-page service-page-content bg-[#fbfdff] text-[#102c63] font-sans relative overflow-hidden">
    

      

      {/* HERO SECTION */}
      <section className="hero relative max-w-[1160px] mx-auto px-6 min-h-[620px] grid grid-cols-1 lg:grid-cols-[43%_57%] items-center overflow-hidden" id="top">
        <AmbientCurve top="-200px" />
        
        <motion.div
          className="hero-copy z-10"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-5">
            iBraine / {data.name}
          </p>
          <h1 className="text-[54px] lg:text-[82px] leading-[0.98] font-black tracking-[-4px] mb-8 text-[#102c63]">
            {data.hero.before}<br /><span className="service-highlight service-blink">{data.hero.highlight}</span> {data.hero.after}
          </h1>
          <p className="lead text-[#59677e] text-[17px] leading-relaxed max-w-[390px] mb-6">
            {data.hero.copy[0]}
          </p>
          <motion.a
            className="black-button bg-[#102c63] text-white font-bold text-[11px] uppercase tracking-wider px-7 py-4 rounded-full inline-block"
            href="#contact"
            whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(16,44,99,0.25)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="service-blink">{data.hero.button}</span>
          </motion.a>
          <p className="text-[#59677e] text-[13px] leading-relaxed max-w-[390px] mt-5">
            {data.hero.note}
          </p>
        </motion.div>

        <Illustration name="hero" src={imagePaths.hero} className="hero-art h-[480px] lg:h-[530px]" />

        {/* Floating Sparks */}
        <motion.span
          className="spark text-[46px] text-[#f47b20] absolute left-[5%] top-[26%]"
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.span>
        <motion.span
          className="spark text-[46px] text-[#18b8c9] absolute right-[2%] top-[10%]"
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.span>
      </section>

      {/* INTRO SECTION */}
      <motion.section
        className="intro relative max-w-[1160px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[56%_36%] gap-8 items-start"
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <AmbientCurve reverse top="-100px" />
        <div>
          <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-3">
            Our Expertise
          </p>
          <h2 className="text-[34px] lg:text-[52px] leading-[1.06] font-extrabold tracking-[-3px] text-[#102c63]">
            Take the lead in modern<br />{data.name.toLowerCase()}.
          </h2>
        </div>
        <p className="text-[#59677e] text-[16px] leading-relaxed pt-2">
          {data.hero.copy[1] || data.stats.copy}
        </p>
      </motion.section>

      {/* CORE SERVICES PANEL */}
      <section className="max-w-[1160px] mx-auto px-6 mb-28">
        <motion.div
          className="service-panel bg-[#102c63] rounded-[22px] text-white grid grid-cols-1 md:grid-cols-3 gap-10 p-10 lg:p-14 shadow-2xl relative"
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } }
          }}
        >
          <AmbientCurve top="-80px" />
          {serviceCards.map(({ title, text, icon }) => (
            <motion.article
              className="service-card flex flex-col justify-between"
              key={title}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div>
                <div className="service-icon text-[48px] h-16 text-[#18b8c9] font-bold mb-3">
                  {icon === 'social' ? '⌘' : icon === 'cube' ? '⬡' : '∿'}
                </div>
                <h3 className="text-[24px] font-bold tracking-tight mb-3 leading-tight">
                  {title}
                </h3>
                <p className="text-[#d4e0f2] text-[14px] leading-relaxed mb-6">
                  {text}
                </p>
              </div>
              <a href="#contact" className="text-[11px] font-extrabold uppercase tracking-wider text-white hover:text-[#18b8c9] transition-colors">
                More info <span className="text-[#18b8c9] ml-2">→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* SPLIT SECTION 1: AUDIENCE */}
      <section className="split-section relative max-w-[1160px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[52%_41%] gap-[7%] items-center min-h-[580px]">
        <AmbientCurve top="50px" />
        <Illustration name="audience" src={imagePaths.audience} className="h-[420px] lg:h-[500px]" />
        <motion.div
          className="split-copy z-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-3">
            01 / {firstFeature.title}
          </p>
          <h2 className="text-[34px] lg:text-[48px] leading-[1.06] font-extrabold tracking-[-3px] mb-5">
            {firstFeature.title}
          </h2>
          <p className="text-[#59677e] text-[16px] leading-relaxed mb-4">
            {firstFeature.copy[0]}
          </p>
          <p className="text-[#59677e] text-[16px] leading-relaxed mb-6">
            {firstFeature.copy[1] || firstFeature.copy[0]}
          </p>
          <a className="outline-button border-2 border-[#102c63] rounded-full text-[11px] font-extrabold uppercase tracking-wider px-7 py-3.5 inline-block hover:bg-[#102c63] hover:text-white transition-all" href="#contact">
            {firstFeature.button}
          </a>
        </motion.div>
      </section>

      {/* SPLIT SECTION 2: CONTENT */}
      <section className="split-section content relative max-w-[1160px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[41%_52%] gap-[7%] items-center min-h-[580px]">
        <AmbientCurve reverse top="20px" />
        <motion.div
          className="split-copy z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-3">
            02 / {secondFeature.title}
          </p>
          <h2 className="text-[34px] lg:text-[48px] leading-[1.06] font-extrabold tracking-[-3px] mb-5">
            {secondFeature.title}
          </h2>
          <p className="text-[#59677e] text-[16px] leading-relaxed mb-6">
            {secondFeature.copy[0]}
          </p>
          <a className="outline-button border-2 border-[#102c63] rounded-full text-[11px] font-extrabold uppercase tracking-wider px-7 py-3.5 inline-block hover:bg-[#102c63] hover:text-white transition-all" href="#contact">
            {secondFeature.button}
          </a>
        </motion.div>
        <Illustration name="content" src={imagePaths.content} className="h-[420px] lg:h-[500px]" />
      </section>

      {/* NUMBERS & STATS GRID */}
      <motion.section
        className="numbers relative max-w-[1160px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <AmbientCurve top="-50px" />
        
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 gap-6 z-10">
          {stats.map(({ value, label }) => (
            <motion.article
              className="stat-card border border-[#102c63] rounded-[17px] p-8 min-h-[190px] flex flex-col justify-between bg-white"
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 16px 30px rgba(16,44,99,0.12)' }}
            >
              <strong className="text-[44px] font-normal tracking-[-3px] text-[#18b8c9]">
                ↗ <Counter value={value} />
              </strong>
              <p className="text-[#102c63] text-[15px] font-bold mt-4">{label}</p>
            </motion.article>
          ))}
        </div>

        <motion.article
          className="numbers-card bg-[#102c63] rounded-[18px] text-white p-10 min-h-[380px] flex flex-col justify-between z-10"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
          }}
          whileHover={{ y: -8 }}
        >
          <div>
            <span className="stars service-blink text-[#d8f8f4] text-[28px] block mb-4">✦ ✦</span>
            <h2 className="text-[36px] font-extrabold leading-none mb-4">
              Company<br />Services In<br />Numbers
            </h2>
            <p className="text-[#d4e0f2] text-[14px] leading-relaxed">
              {data.stats.copy}
            </p>
          </div>
          <a className="text-[11px] font-extrabold uppercase tracking-wider text-[#18b8c9] hover:underline" href="#contact">
            More Info →
          </a>
        </motion.article>
      </motion.section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial relative max-w-[1160px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[52%_48%] gap-8 items-center min-h-[500px]">
        <AmbientCurve reverse top="-40px" />
        <Illustration name="testimonial" src={imagePaths.testimonial} className="h-[380px] lg:h-[420px]" />
        
        <motion.div
          className="quote bg-[#e8f8ff] rounded-full p-12 lg:p-16 text-center relative flex flex-col justify-center min-h-[340px] z-10"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-[36px] lg:text-[44px] font-extrabold tracking-[-3px] text-[#102c63] mb-4">
            What People Say
          </h2>
          <blockquote className="text-[#59677e] text-[18px] italic leading-relaxed">
            {data.cta.copy}
          </blockquote>
          <div className="dots service-blink text-[#18b8c9] text-[18px] tracking-[6px] mt-4">● ● ●</div>
        </motion.div>
      </section>

      {/* PRICING PLANS */}
      <motion.section
        className="pricing max-w-[1160px] mx-auto px-6 py-20 text-center relative z-10"
        id="pricing"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <AmbientCurve top="-60px" />
        <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-3">
          Flexible Plans
        </p>
        <h2 className="text-[38px] lg:text-[52px] font-extrabold tracking-[-3px] mb-8">
          {data.cta.title}
        </h2>

        <div className="plan-tabs inline-flex border border-[#102c63] rounded-full overflow-hidden p-1 bg-white">
          <motion.button
            className={`px-8 py-3 font-bold text-xs uppercase transition-colors rounded-full ${
              pricingCycle === 'monthly' ? 'bg-[#102c63] text-white' : 'text-[#102c63]'
            }`}
            type="button"
            onClick={() => setPricingCycle('monthly')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Monthly
          </motion.button>
          <motion.button
            className={`px-8 py-3 font-bold text-xs uppercase transition-colors rounded-full ${
              pricingCycle === 'yearly' ? 'bg-[#102c63] text-white' : 'text-[#102c63]'
            }`}
            type="button"
            onClick={() => setPricingCycle('yearly')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Yearly
          </motion.button>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        className="contact-section relative max-w-[1160px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center"
        id="contact"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <AmbientCurve reverse top="-80px" />
        <div className="contact-copy z-10">
          <p className="kicker text-[#59677e] text-[11px] font-bold tracking-[1.6px] uppercase mb-3">
            Let's Talk
          </p>
          <h2 className="text-[38px] lg:text-[52px] font-extrabold tracking-[-3px] mb-8">
            Ready to grow your<br />{data.name}?
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6 max-w-[520px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                required
                placeholder="Your Name*"
                className="w-full border-b border-[#cbd8e8] py-3 text-sm focus:border-[#102c63] outline-none bg-transparent"
              />
              <input
                required
                type="email"
                placeholder="Email*"
                className="w-full border-b border-[#cbd8e8] py-3 text-sm focus:border-[#102c63] outline-none bg-transparent"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                placeholder="Phone"
                className="w-full border-b border-[#cbd8e8] py-3 text-sm focus:border-[#102c63] outline-none bg-transparent"
              />
              <input
                required
                placeholder="Website*"
                className="w-full border-b border-[#cbd8e8] py-3 text-sm focus:border-[#102c63] outline-none bg-transparent"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full border-b border-[#cbd8e8] py-3 text-sm focus:border-[#102c63] outline-none bg-transparent h-24 resize-none"
            />
            <motion.button
              className="outline-button border-2 border-[#102c63] rounded-full text-[11px] font-extrabold uppercase tracking-wider px-8 py-4 inline-block hover:bg-[#102c63] hover:text-white transition-all"
              type="submit"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              {sent ? 'Message Sent ✓' : 'Send Message'}
            </motion.button>
          </form>
        </div>

        <Illustration name="contact" src={imagePaths.contact} className="h-[420px] lg:h-[500px]" />
      </motion.section>

     
    </main>
  );
}