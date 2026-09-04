// import React from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles, ArrowDown, BarChart3, Users2, Globe2 } from 'lucide-react';

// const AboutHero = () => {
//   const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: {
//       pathLength: 1,
//       opacity: 0.3,
//       transition: { pathLength: { type: "spring", duration: 2.5, bounce: 0 }, opacity: { duration: 0.5 } }
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section className="relative w-full bg-[#090A0F] py-28 lg:py-44 px-6 overflow-hidden text-white font-sans">
      
//       {/* Dynamic Background Mesh */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#0072BC]/20 rounded-full blur-[140px]" />
//         <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#F58220]/15 rounded-full blur-[140px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       {/* Ambient Curved Vector Lines */}
//       <svg className="absolute left-0 bottom-0 h-full w-auto text-[#0072BC] pointer-events-none hidden lg:block" viewBox="0 0 150 300">
//         <motion.path 
//           d="M-20,320 C50,250 80,150 20,-20" 
//           stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"
//           variants={draw} initial="hidden" animate="visible"
//         />
//       </svg>
//       <svg className="absolute right-0 top-0 h-full w-auto text-[#F58220] pointer-events-none hidden lg:block" viewBox="0 0 300 300">
//         <motion.path 
//           d="M320,50 C250,50 200,50 180,80 C150,130 250,180 250,120 C250,70 150,60 120,150 C100,220 150,280 200,320" 
//           stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"
//           variants={draw} initial="hidden" animate="visible"
//         />
//       </svg>

//       {/* Hero Content Block */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col items-center"
//         >
//           {/* Tagline Badge */}
//           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
//             <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
//             <span className="text-gray-300 text-xs font-bold tracking-[0.25em] uppercase">Est. Mumbai 2011</span>
//           </motion.div>

//           {/* Main Headline */}
//           <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-8xl font-normal leading-[1.05] tracking-tight mb-8">
//             Engineered for <br />
//             <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#0072BC] via-[#29ABE2] to-[#F58220]">
//               Digital Growth.
//             </span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-14 font-normal">
//             iBraine transforms ambitious enterprises into category-defining leaders using data, precision creative, and scalable digital infrastructure.
//           </motion.p>

//           {/* Hero Metrics Row */}
//           <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl">
//             {[
//               { icon: <BarChart3 className="text-[#0072BC]" size={20} />, label: "Client Retention Rate", val: "93%" },
//               { icon: <Users2 className="text-[#F58220]" size={20} />, label: "Scale Growth Stories", val: "300+" },
//               { icon: <Globe2 className="text-[#29ABE2]" size={20} />, label: "Global Industries", val: "20+" },
//             ].map((stat, i) => (
//               <motion.div 
//                 key={i} 
//                 whileHover={{ y: -6, transition: { duration: 0.2 } }}
//                 className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex items-center gap-4 text-left group hover:border-[#0072BC]/40 hover:bg-white/[0.06] transition-all"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white tracking-tight">{stat.val}</div>
//                   <div className="text-[11px] uppercase font-semibold text-gray-400 tracking-wider mt-0.5">{stat.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Down Arrow Indicator */}
//       <motion.div 
//         animate={{ y: [0, 8, 0] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
//       >
//         <ArrowDown size={20} />
//       </motion.div>

//     </section>
//   );
// };

// export default AboutHero;



import React from 'react';

import { motion } from 'framer-motion';

import { Sparkles, ArrowDown, BarChart3, Users2, Globe2 } from 'lucide-react';



const AboutHero = () => {

  // Animation for the SVG scribbles

  const draw = {

    hidden: { pathLength: 0, opacity: 0 },

    visible: {

      pathLength: 1,

      opacity: 0.4,

      transition: { pathLength: { type: "spring", duration: 2.5, bounce: 0 }, opacity: { duration: 0.5 } }

    }

  };



  return (

    <section className="relative w-full bg-[#050505] py-24 lg:py-40 px-6 overflow-hidden">

     

      {/* ════ 1. BETTER BACKGROUND (MESH & TEXTURE) ════ */}

      <div className="absolute inset-0 z-0">

        {/* Deep Glows */}

        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[100%] bg-indigo-400 rounded-full blur-[120px] opacity-50" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[100%] bg-blue-600 rounded-full blur-[120px] opacity-40" />

       

        {/* Professional Grain Texture */}

        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

       

        {/* Subtle Interactive Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>



      {/* ════ 2. ANIMATED Scribbles ════ */}

      {/* Left Curve */}

      <svg className="absolute left-[-20px] bottom-0 h-full w-auto text-white pointer-events-none hidden lg:block" viewBox="0 0 150 300">

        <motion.path

          d="M-20,320 C50,250 80,150 20,-20"

          stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"

          variants={draw} initial="hidden" animate="visible"

        />

      </svg>



      {/* Right Loop */}

      <svg className="absolute right-[-40px] top-0 h-full w-auto text-white pointer-events-none hidden lg:block" viewBox="0 0 300 300">

        <motion.path

          d="M320,50 C250,50 200,50 180,80 C150,130 250,180 250,120 C250,70 150,60 120,150 C100,220 150,280 200,320"

          stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"

          variants={draw} initial="hidden" animate="visible"

        />

      </svg>



      {/* ════ 3. INFORMATIVE CONTENT ════ */}

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

        >

          {/* Eyebrow */}

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">

            <Sparkles className="w-3 h-3 text-indigo-200" />

            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Est. Mumbai 2011</span>

          </div>



          {/* Main Title */}

          <h1 className="font-lora text-white text-5xl md:text-8xl font-medium tracking-tight mb-8">

            About <span className="italic opacity-90">iBraine</span>

          </h1>



          {/* Informative Mission Statement */}

          <p className="font-jakarta text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 opacity-80">

            We Engineer Digital Growth and high-performance digital agency engineered to transform ambitious brands into industry leaders through data and creative mastery.

          </p>



          {/* ════ 4. QUICK STATS (Informative Element) ════ */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">

            {[

              { icon: <BarChart3 size={18} />, label: "Client Retention", val: "93%" },

              { icon: <Users2 size={18} />, label: "Success Stories", val: "300+" },

              { icon: <Globe2 size={18} />, label: "Industries Served", val: "20+" },

            ].map((stat, i) => (

              <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl flex items-center justify-center gap-4 group hover:bg-white/10 transition-colors">

                <div className="w-10 h-10 rounded-xl bg-indigo-500/30 flex items-center justify-center text-white">

                  {stat.icon}

                </div>

                <div className="text-left">

                  <div className="text-xl font-bold text-white leading-none">{stat.val}</div>

                  <div className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider mt-1">{stat.label}</div>

                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </div>



      {/* Scroll Indicator */}

      <motion.div

        animate={{ y: [0, 10, 0] }}

        transition={{ repeat: Infinity, duration: 2 }}

        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"

      >

        <ArrowDown size={24} />

      </motion.div>



      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

        .font-lora { font-family: 'Lora', serif; }

        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }

      `}</style>

    </section>

  );

};



export default AboutHero;