
// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const categoryAssets = import.meta.glob('../../assets/*/*.png', { eager: true, import: 'default' });
// const categories = [
//   { number: '01.', title: 'Marketing Solutions', description: 'Build demand, reach the right audience, and turn attention into measurable business growth.', folder: 'performance-market', services: [['Performance Marketing', 'performance-marketing'], ['SEM Experts', 'sem-experts'], ['SEO Services', 'seo-services'], ['Social Media Marketing', 'social-media-marketing']] },
//   { number: '02.', title: 'Website Solutions', description: 'Create useful, high-performing digital experiences that make every interaction easier.', folder: 'web-dev', services: [['Website Development', 'website-design'], ['UI/UX Design', 'ui-ux'], ['Google Tag Manager', 'gtm-integration'], ['Conversion Rate Optimisation', 'cro']] },
//   { number: '03.', title: 'Creative Solutions', description: 'Give your brand a distinctive voice and visual presence people remember.', folder: 'content-writing', services: [['Content Writing', 'content-writing'], ['Graphic Design', 'graphic-design'], ['Video Production', 'reels-videos-photos']] },
// ];

// const getCategoryImage = (folder) => categoryAssets[`../../assets/${folder}/1.png`];

// function ServiceRow({ category, index }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.article
//       className={`relative border-t border-[#c9c9c4] py-[22px] md:py-[26px] ${isOpen ? 'opacity-100' : ''}`}
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, delay: index * 0.08 }}
//     >
//       <div className="grid items-center gap-[3vw] md:grid-cols-[18%_29%_20%_1fr]">
//         <div className="font-['Space_Grotesk',sans-serif] text-[clamp(70px,8vw,128px)] leading-none tracking-[-8px] text-[#050505]">
//           {category.number}
//         </div>

//         <p className="m-0 max-w-[355px] text-[17px] leading-[1.45] text-[#050505]">
//           {category.description}
//         </p>

//         <div className="h-[220px] overflow-hidden opacity-80 transition duration-300 ease-out hover:opacity-100 hover:scale-[1.04] md:opacity-90">
//           <img className="h-full w-full object-contain" src={getCategoryImage(category.folder)} alt={`${category.title} services`} />
//         </div>

//         <div className="flex flex-col items-end justify-center text-right">
//           <h2 className="mb-[28px] font-['Space_Grotesk',sans-serif] text-[clamp(28px,3vw,46px)] font-normal tracking-[-2px] text-[#050505]">
//             {category.title}
//           </h2>

//           <button
//             type="button"
//             className="inline-flex items-center gap-[18px] border-0 bg-transparent p-0 text-[11px] font-bold uppercase tracking-[0.02em] text-[#050505]"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-expanded={isOpen}
//           >
//             <span>View more</span>
//             <b
//               aria-hidden="true"
//               className={`inline-flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#050505] text-white transition duration-300 ${isOpen ? 'rotate-90 bg-[#ff6338]' : ''}`}
//             >
//               <ArrowUpRight size={22} />
//             </b>
//           </button>
//         </div>
//       </div>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             className="grid-column-full overflow-hidden"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.35 }}
//           >
//             <div className="mt-[18px] grid gap-[12px_18px] border-t border-[#c9c9c4] pt-[25px] md:grid-cols-3">
//               {category.services.map(([name, slug]) => (
//                 <Link
//                   key={slug}
//                   to={`/services/${slug}`}
//                   className="flex items-center justify-between border-b border-[#deded8] py-[12px] font-['Space_Grotesk',sans-serif] text-[17px] text-[#050505] transition hover:text-[#ff6338]"
//                 >
//                   <span>{name}</span>
//                   <ArrowUpRight size={18} />
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.article>
//   );
// }

// const Servicespage = () => (
//   <main className="overflow-hidden bg-[#fbfbf8] text-[#050505] font-['DM_Sans',sans-serif]">
//     <section className="relative mx-auto min-h-[610px] max-w-[1420px] overflow-hidden px-[8vw] pb-[90px] pt-[72px] md:min-h-[660px]">
//       <div className="absolute left-[34%] top-[145px] h-[525px] w-[525px] rounded-full bg-gradient-to-br from-[#4bd9ef] to-[#e9ff5b] md:top-[145px] md:h-[525px] md:w-[525px]" />
//       <div className="absolute right-[17%] top-[63px] h-[145px] w-[145px] rounded-full bg-gradient-to-br from-[#f1ff58] to-[#9cebcf] md:h-[145px] md:w-[145px]" />

//       <div className="relative z-10">
//         <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[2px] text-[#050505]">
//           iBraine Digital Services
//         </p>
//         <h1 className="m-0 font-['Space_Grotesk',sans-serif] text-[clamp(58px,9.2vw,144px)] font-normal leading-[0.86] tracking-[-8px] text-[#050505]">
//           <span className="block text-right">we are-</span>
//           <strong className="mt-[92px] block font-semibold">webdesign*<br />agency</strong>
//         </h1>
//       </div>

//       <div className="absolute left-[57%] top-[300px] z-20 max-w-[425px]">
//         <p className="mb-[27px] text-[16px] leading-[1.45] text-[#050505]">
//           This webdesign agency theme features clean, focused solutions for SEO, marketing, website analysis, optimisation, and growth.
//         </p>
//         <a
//           className="inline-flex items-center gap-[18px] rounded-full bg-[#050505] px-[22px] py-[15px] text-[11px] font-bold uppercase text-white"
//           href="#service-categories"
//         >
//           Get started
//           <span className="text-[#e9ff5b]"><ArrowUpRight size={18} /></span>
//         </a>
//       </div>
//     </section>

//     <div className="mx-auto max-w-[1420px] bg-[linear-gradient(rgba(255,255,255,.08),rgba(255,255,255,.08)),url('/parallax-office.png')] bg-cover bg-center bg-fixed h-[250px]" aria-label="Our creative workspace" />

//     <section className="mx-auto max-w-[1420px] px-[5vw]" id="service-categories">
//       {categories.map((category, index) => (
//         <ServiceRow key={category.number} category={category} index={index} />
//       ))}
//     </section>

//     <section id="contact" className="mt-[110px] bg-[#050505] px-[8vw] py-[100px] text-white">
//       <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[2px] text-[#e9ff5b]">
//         Have a project in mind?
//       </p>
//       <h2 className="mb-[42px] m-0 font-['Space_Grotesk',sans-serif] text-[clamp(58px,9.2vw,144px)] font-normal leading-[0.86] tracking-[-8px] text-white">
//         Let&apos;s make something<br />people remember.
//       </h2>
//       <Link
//         className="inline-flex items-center gap-[18px] rounded-full bg-white px-[22px] py-[15px] text-[11px] font-bold uppercase text-[#050505]"
//         to="/contact"
//       >
//         Get in touch
//         <span className="text-[#ff6338]"><ArrowUpRight size={18} /></span>
//       </Link>
//     </section>
//   </main>
// );

// export default Servicespage;

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import AmbientCurve from '../../components/ServicePage/AmbientCurve';

const categoryAssets = import.meta.glob('../../assets/*/*.png', { eager: true, import: 'default' });

const categories = [
  {
    number: '01.',
    title: 'Marketing Solutions',
    description: 'Build demand, reach the right audience, and turn attention into measurable business growth.',
    folder: 'performance-market',
    services: [
      ['Performance Marketing', 'performance-marketing'],
      ['SEM Experts', 'sem-experts'],
      ['SEO Services', 'seo-services'],
      ['Social Media Marketing', 'social-media-marketing']
    ]
  },
  {
    number: '02.',
    title: 'Website Solutions',
    description: 'Create useful, high-performing digital experiences that make every interaction easier.',
    folder: 'web-dev',
    services: [
      ['Website Development', 'website-design'],
      ['UI/UX Design', 'ui-ux'],
      ['Google Tag Manager', 'gtm-integration'],
      ['Conversion Rate Optimisation', 'cro']
    ]
  },
  {
    number: '03.',
    title: 'Creative Solutions',
    description: 'Give your brand a distinctive voice and visual presence people remember.',
    folder: 'content-writing',
    services: [
      ['Content Writing', 'content-writing'],
      ['Graphic Design', 'graphic-design'],
      ['Video Production', 'reels-videos-photos']
    ]
  },
];

const getCategoryImage = (folder) => categoryAssets[`../../assets/${folder}/1.png`];

function ServiceRow({ category, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      className="relative border-t border-[#cbd8e8] py-[32px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="grid items-center gap-6 md:grid-cols-[15%_30%_25%_1fr]">
        <div className="text-[clamp(60px,6vw,96px)] font-black leading-none tracking-[-4px] text-[#102c63]">
          {category.number}
        </div>

        <p className="m-0 max-w-[355px] text-[15px] leading-relaxed text-[#59677e]">
          {category.description}
        </p>

        <div className="h-[180px] overflow-hidden transition duration-300 ease-out hover:scale-[1.04]">
          <img
            className="h-full w-full object-contain"
            src={getCategoryImage(category.folder)}
            alt={`${category.title} services`}
          />
        </div>

        <div className="flex flex-col items-start md:items-end md:text-right">
          <h2 className="mb-6 text-[clamp(28px,2.5vw,40px)] font-extrabold tracking-[-1px] text-[#102c63]">
            {category.title}
          </h2>

          <button
            type="button"
            className="inline-flex items-center gap-3 border-0 bg-transparent p-0 text-[11px] font-bold uppercase tracking-[1.6px] text-[#102c63]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span>View More</span>
            <b
              aria-hidden="true"
              className={`inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#102c63] text-white transition duration-300 ${
                isOpen ? 'rotate-90 bg-[#18b8c9]' : ''
              }`}
            >
              <ArrowUpRight size={20} />
            </b>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mt-6 grid gap-4 border-t border-[#cbd8e8] pt-6 md:grid-cols-3">
              {category.services.map(([name, slug]) => (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="flex items-center justify-between border-b border-[#e2e8f0] py-3 text-[15px] font-bold text-[#102c63] transition hover:text-[#18b8c9]"
                >
                  <span>{name}</span>
                  <ArrowUpRight size={18} className="text-[#18b8c9]" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

const Servicespage = () => (
  <main className="relative overflow-hidden bg-[#fbfdff] text-[#102c63] font-sans">
  

    {/* HERO SECTION */}
    <section className="relative mx-auto min-h-[600px] max-w-[1160px] overflow-hidden px-6 pb-20 pt-16">
      <AmbientCurve top="-180px" />

      {/* MATCHED GRADIENT ACCENT ORBS */}
      <div className="absolute left-[30%] top-[120px] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#18b8c9]/20 to-[#102c63]/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[15%] top-[50px] h-[180px] w-[180px] rounded-full bg-gradient-to-br from-[#18b8c9]/30 to-[#fbfdff] blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.6px] text-[#59677e]">
          iBraine Digital Services
        </p>
        <h1 className="m-0 text-[clamp(48px,7vw,110px)] font-black leading-[0.95] tracking-[-4px] text-[#102c63]">
          <span className="block text-right">we provide-</span>
          <strong className="mt-6 block font-black text-[#102c63]">
            digital<span className="text-[#18b8c9]">*</span>
            <br />
            solutions
          </strong>
        </h1>
      </div>

      <div className="relative lg:absolute lg:left-[52%] lg:top-[280px] z-20 mt-8 lg:mt-0 max-w-[420px]">
        <p className="mb-6 text-[16px] leading-relaxed text-[#59677e]">
          This digital marketing agency theme features clean, focused solutions for SEO, marketing, website analysis, optimisation, and growth.
        </p>
        <motion.a
          className="inline-flex items-center gap-4 rounded-full bg-[#102c63] px-8 py-4 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#18b8c9] transition-all"
          href="#service-categories"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
          <span className="text-[#18b8c9]">
            <ArrowUpRight size={18} />
          </span>
        </motion.a>
      </div>
    </section>

    {/* BANNER SECTION */}
    <div
      className="mx-auto max-w-[1160px] bg-[linear-gradient(rgba(16,44,99,0.3),rgba(16,44,99,0.3)),url('/parallax-office.png')] bg-cover bg-center bg-fixed h-[260px] rounded-[24px]"
      aria-label="Our creative workspace"
    />

    {/* SERVICES CATEGORIES SECTION */}
    <section className="mx-auto max-w-[1160px] px-6 py-20" id="service-categories">
      {categories.map((category, index) => (
        <ServiceRow key={category.number} category={category} index={index} />
      ))}
    </section>

    {/* CALL TO ACTION SECTION */}
    <section id="contact" className="relative my-12 mx-auto max-w-[1160px] rounded-[28px] bg-[#102c63] px-8 py-20 text-white overflow-hidden">
      <AmbientCurve reverse top="-100px" />
      <div className="relative z-10">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.6px] text-[#18b8c9]">
          Have a project in mind?
        </p>
        <h2 className="mb-10 text-[clamp(42px,6vw,90px)] font-black leading-[0.95] tracking-[-3px] text-white">
          Let&apos;s make something
          <br />
          people remember.
        </h2>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <Link
            className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-extrabold uppercase tracking-wider text-[#102c63] shadow-lg hover:bg-[#18b8c9] hover:text-white transition-all"
            to="/contact"
          >
            Get in touch
            <ArrowUpRight size={18} className="text-[#18b8c9]" />
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Servicespage;