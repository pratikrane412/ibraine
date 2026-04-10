import React from 'react';
import { motion } from 'framer-motion';

const CLIENT_DATA = [
  { name: "Cleartrip", src: "https://brandwitty.com/media/2023/08/cleartrip.png", bg: "#e8f0fe" },
  { name: "DHFL", src: "https://brandwitty.com/media/2023/08/dhfl-3.png", bg: "#fff3e0" },
  { name: "Kalpataru", src: "https://brandwitty.com/media/2023/08/kalpatru.png", bg: "#e8f5e9" },
  { name: "TripXoXo", src: "https://brandwitty.com/media/2023/08/tripxoxo-2.png", bg: "#fce4ec" },
  { name: "AH", src: "https://brandwitty.com/media/2023/08/AH.png", bg: "#f3e5f5" },
  { name: "Monjin", src: "https://brandwitty.com/media/2023/08/monjin-1.png", bg: "#e3f2fd" },
  { name: "Home", src: "https://brandwitty.com/media/2023/08/home-1.png", bg: "#fff8e1" },
  { name: "Nahar", src: "https://brandwitty.com/media/2023/08/nahar-1.png", bg: "#e8f5e9" },
  { name: "Integriti", src: "https://brandwitty.com/media/2023/08/integriti.png", bg: "#e3f2fd" },
  { name: "Rustomjee", src: "https://brandwitty.com/media/2023/08/rustomjee.png", bg: "#fce4ec" },
  { name: "Laman", src: "https://brandwitty.com/media/2023/08/laman-1.png", bg: "#f3e5f5" },
  { name: "Xclusive", src: "https://brandwitty.com/media/2023/08/xclusive-1.png", bg: "#e0f2f1" },
  { name: "Craftsvilla", src: "https://brandwitty.com/media/2023/08/craftsvilla-1-2.png", bg: "#fff3e0" },
  { name: "Vjaylaxmi", src: "https://brandwitty.com/media/2023/08/vjaylaxmi.png", bg: "#e8f5e9" },
  { name: "Luxulo", src: "https://brandwitty.com/media/2023/08/luxulo-1-2.png", bg: "#fce4ec" },
  { name: "Signature", src: "https://brandwitty.com/media/2023/08/signature-1.png", bg: "#e3f2fd" },
  { name: "Radiant", src: "https://brandwitty.com/media/2023/08/radiant.png", bg: "#f3e5f5" },
  { name: "E-Amplify", src: "https://brandwitty.com/media/2023/08/e-amplify-1.png", bg: "#e0f2f1" },
  { name: "Accord", src: "https://brandwitty.com/media/2023/08/accord-1.png", bg: "#fff8e1" },
  { name: "Chrysalis", src: "https://brandwitty.com/media/2023/08/chrysalis-1-1.png", bg: "#e8f5e9" },
  { name: "Destimoney", src: "https://brandwitty.com/media/2023/08/destimoney.png", bg: "#e3f2fd" },
  { name: "Houseome", src: "https://brandwitty.com/media/2023/08/houseome.png", bg: "#fce4ec" },
  { name: "Hobby", src: "https://brandwitty.com/media/2023/08/hobby-2.png", bg: "#f3e5f5" },
  { name: "SlimNHappy", src: "https://brandwitty.com/media/2023/08/slimnhappy-2.png", bg: "#fff3e0" },
  { name: "Tamilnadu", src: "https://brandwitty.com/media/2023/08/tamilnadu-1.png", bg: "#e0f2f1" },
  { name: "SchoolGuru", src: "https://brandwitty.com/media/2023/08/schoolguru-1.png", bg: "#fff8e1" },
  { name: "Gypsy", src: "https://brandwitty.com/media/2023/08/gypsy-1.png", bg: "#fce4ec" },
  { name: "Client", src: "https://brandwitty.com/media/2023/08/New-Project-12.png", bg: "#e8f5e9" },
  { name: "Accounting", src: "https://brandwitty.com/media/2023/08/accounting.png", bg: "#e3f2fd" },
  { name: "ADR", src: "https://brandwitty.com/media/2023/08/adr.png", bg: "#f3e5f5" },
  { name: "Tee Close", src: "https://brandwitty.com/media/2023/08/tee-close.png", bg: "#fff3e0" },
  { name: "SMM", src: "https://brandwitty.com/media/2023/08/smm-1-2.png", bg: "#e8f5e9" },
  { name: "Pegasus", src: "https://brandwitty.com/media/2023/08/pegasus-1.png", bg: "#e3f2fd" },
  { name: "Aranya", src: "https://brandwitty.com/media/2023/08/aranya-1.png", bg: "#fce4ec" },
  { name: "ZKTeco", src: "https://brandwitty.com/media/2023/08/zkteco-1.png", bg: "#e0f2f1" },
  { name: "Illusion", src: "https://brandwitty.com/media/2023/08/illusion-1.png", bg: "#fff8e1" },
  { name: "Let's Relax", src: "https://brandwitty.com/media/2023/08/lets-relax.png", bg: "#f3e5f5" },
  { name: "Offbeat", src: "https://brandwitty.com/media/2023/08/offbeat-1.png", bg: "#fce4ec" },
  { name: "Wine", src: "https://brandwitty.com/media/2023/08/wine-1.png", bg: "#fff3e0" },
  { name: "Dr Kenia", src: "https://brandwitty.com/media/2023/08/drkenia.png", bg: "#e8f5e9" },
  { name: "Veco", src: "https://brandwitty.com/media/2023/08/veco-v-logo.png", bg: "#e0f2f1" },
  { name: "Body", src: "https://brandwitty.com/media/2023/08/body.png", bg: "#fff8e1" },
  { name: "Medisynth", src: "https://brandwitty.com/media/2023/08/medisynth-1.png", bg: "#e3f2fd" },
  { name: "Supple", src: "https://brandwitty.com/media/2023/08/supple-1.png", bg: "#fce4ec" },
  { name: "Zeeba", src: "https://brandwitty.com/media/2023/08/zeeba-1.png", bg: "#f3e5f5" },
  { name: "Chocolate", src: "https://brandwitty.com/media/2023/08/chocolate-2.png", bg: "#fff3e0" },
  { name: "Kamba", src: "https://brandwitty.com/media/2023/08/kamba.png", bg: "#e8f5e9" },
  { name: "Swordtail", src: "https://brandwitty.com/media/2023/08/swordtail.png", bg: "#e8f5e9" },
  { name: "Hasa", src: "https://brandwitty.com/media/2023/08/hasa.png", bg: "#e3f2fd" },
  { name: "Elever", src: "https://brandwitty.com/media/2023/08/elever.png", bg: "#fce4ec" },
  { name: "Illumor", src: "https://brandwitty.com/media/2023/08/illumor.png", bg: "#e0f2f1" },
  { name: "Synk", src: "https://brandwitty.com/media/2023/08/synk.png", bg: "#fff8e1" },
  { name: "Rohan", src: "https://brandwitty.com/media/2023/08/rohan.png", bg: "#f3e5f5" },
];

const ClienteleGrid = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CLIENT_DATA.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 6) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ backgroundColor: client.bg }}
              className="group relative h-32 md:h-40 flex items-center justify-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Image with Greyscale Hover effect */}
              <img 
                src={client.src} 
                alt={client.name} 
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-100"
              />

              {/* Tooltip on hover */}
              <div className="absolute bottom-2 translate-y-full group-hover:translate-y-0 transition-transform bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                {client.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClienteleGrid;