import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar, ChevronRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    category: "Performance Marketing",
    title: "How Neural Networks are Redefining ROAS in 2024",
    excerpt: "Discover how AI-driven bidding strategies are helping Mumbai's top brands scale their ad spend effectively.",
    date: "March 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    color: "text-indigo-600 bg-indigo-50"
  },
  {
    id: 2,
    category: "SEO Strategy",
    title: "Beyond Keywords: The Era of Semantic Search and Intent",
    excerpt: "Why ranking #1 isn't enough anymore. Learn how to optimize for user satisfaction and topical authority.",
    date: "March 08, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    id: 3,
    category: "Social Growth",
    title: "The Physics of Virality: Why Some Content Explodes",
    excerpt: "Breaking down the psychological triggers that drive shares and high-retention engagement on short-form video.",
    date: "March 05, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    color: "text-amber-600 bg-amber-50"
  }
];

const BlogSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden selection:bg-indigo-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-amber-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-lora text-5xl md:text-7xl font-medium text-slate-900 leading-[1.1] tracking-tight">
              Latest <span className="italic text-indigo-600">Thinking</span> & <br /> Digital Insights
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 font-jakarta font-bold text-sm uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
          >
            View All Posts <ChevronRight size={16} />
          </motion.button>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm ${post.color}`}>
                    {post.category}
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight size={20} className="text-slate-900 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-6 text-slate-400 text-xs font-medium font-jakarta">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-lora text-2xl md:text-[28px] font-medium text-slate-900 leading-[1.2] mb-4 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-jakarta text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Bottom Divider */}
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">Read Full Article</span>
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-indigo-600 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Background Accent Text (Optional) */}
      <div className="absolute -bottom-10 right-0 text-[15vw] font-black text-slate-200/20 pointer-events-none select-none uppercase tracking-tighter leading-none font-jakarta">
        Blog
      </div>
    </section>
  );
};

export default BlogSection;