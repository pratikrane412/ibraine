import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Plus, 
  Minus, 
  Sparkles, 
  Calculator, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  Award,
  Info,
  TrendingUp,
  Search,
  Users,
  Code,
  Image,
  Database
} from 'lucide-react';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';

const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

const SERVICES = [
  { id: 'performance-marketing', name: 'Performance Marketing', active: true, icon: <TrendingUp size={16} />, desc: 'Outcome-first campaigns on Google, Meta, LinkedIn, etc., designed to scale ROAS.' },
  { id: 'seo-marketing', name: 'SEO Services & GEO/AEO', active: true, icon: <Search size={16} />, desc: 'Organic keywords ranking and AI Search Optimization (Google News, ChatGPT, Claude).' },
  { id: 'social-media', name: 'Social Media Management', active: true, icon: <Users size={16} />, desc: 'Silver, Gold, Platinum & Titanium packages for page aesthetics and reel production.' },
  { id: 'web-dev', name: 'Website Development', active: true, icon: <Code size={16} />, desc: 'Premium WordPress themes, WooCommerce stores, and Custom React JS development.' },
  { id: 'analytics-gtm', name: 'Google Analytics & GTM', active: true, icon: <Database size={16} />, desc: 'GA4 dashboard setup, e-commerce conversion tracking, and cross-domain filters.' },
  { id: 'blog-management', name: 'Blog Setup & Writing', active: true, icon: <FileText size={16} />, desc: 'WordPress blog setup and weekly industry-specific content writing.' },
  { id: 'marketing-collateral', name: 'Collateral & Digital Assets', active: true, icon: <Image size={16} />, desc: 'Logo designs, brochures, standing banners, landing pages, and static ad creatives.' }
];

const PLATFORMS_LIST = [
  { id: 'google', name: 'Google Ads', color: '#4285F4' },
  { id: 'meta', name: 'Facebook Ads', color: '#1877F2' },
  { id: 'instagram', name: 'Instagram Ads', color: '#E1306C' },
  { id: 'linkedin', name: 'LinkedIn Ads', color: '#0A66C2' },
  { id: 'bing', name: 'Bing Ads', color: '#008373' },
  { id: 'amazon', name: 'Amazon Ads', color: '#FF9900' },
  { id: 'flipkart', name: 'Flipkart Ads', color: '#2874F0' },
  { id: 'twitter', name: 'Twitter Ads', color: '#1DA1F2' },
  { id: 'snapchat', name: 'Snapchat Ads', color: '#FFFC00' }
];

const SETUP_OPTIONS = [
  { id: 'basic', name: 'Basic Setup', desc: 'Analytics linking, conversion pixels tracking setup, and campaign structure.' },
  { id: 'account', name: 'Account Setup', desc: 'Audits of historical metrics, target demographics, and permission configurations.' },
  { id: 'profile', name: 'Profile Setup', desc: 'Profile synchronization, asset library setups, and brand compliance verification.' }
];

const COLLATERAL_ITEMS = [
  { id: 'logo', name: 'Logo Design Suite', price: 12000, desc: 'Logo + Slogan. Up to 4 design drafts.' },
  { id: 'poster', name: 'Marketing Posters', price: 5000, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'standee', name: 'Standing Banner', price: 8000, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'hoarding', name: 'Outdoor Banner / Hoarding', price: 10000, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'brochure', name: 'Brochure (4 sides)', price: 20000, desc: 'Copy + Design. Additional sides @ ₹3000.' },
  { id: 'leaflet', name: 'Leaflet (2 sides)', price: 10000, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'pitch_deck', name: 'Pitch Deck (12 slides)', price: 30000, desc: 'Design only. Copy provided from client side.' },
  { id: 'web_creative', name: 'Website Creative Banner', price: 2000, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'web_content', name: 'Website Content Page', price: 3000, desc: 'Text Copy. Up to 500 words per page.' },
  { id: 'blog_article', name: 'Blog Article (700 words)', price: 3500, desc: 'Copy + 2 unedited static images from stock.' },
  { id: 'emailer', name: 'HTML Emailers (4 folds)', price: 10000, desc: 'Copy + Design + HTML coding.' },
  { id: 'static_sm_post', name: 'Static SM Post', price: 3500, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'carousel_sm_post', name: 'Carousel SM Post (5 slides)', price: 6000, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'sm_video', name: 'Social Media Video', price: 12500, desc: 'Copy + Design. Up to 2 iterations (or ₹700/sec).' },
  { id: 'video_edit', name: 'Video Edit (Footage provided)', price: 5000, desc: 'Client footage edit. 1 iteration (or ₹800/sec).' },
  { id: 'long_animation', name: 'Long Animation Video', price: 15000, desc: 'Scripting + Animation (starts at ₹1,000/sec).' },
  { id: 'yt_desc', name: 'YouTube Description', price: 2500, desc: 'Text only. Up to 300 words.' },
  { id: 'search_ad_copy', name: 'Search Ad Copy Batch', price: 2500, desc: 'Only text copies for search campaigns.' },
  { id: 'google_display_ads', name: 'Google Display Ads (Batch)', price: 4500, desc: 'Copy + Design batch of 4-6 sizes.' },
  { id: 'social_display_ads', name: 'Social Ad Creative (Single)', price: 3500, desc: 'Copy + Design. Up to 2 iterations.' },
  { id: 'template_ad_video', name: 'Social Video Ad (5-15 secs)', price: 7500, desc: 'Copy + Design template. Up to 2 iterations.' },
  { id: 'google_html5_ad', name: 'Google HTML5 Ad', price: 8500, desc: 'Only Design. Up to 2 iterations.' },
  { id: 'ad_landing_page', name: 'Landing Page for Ads', price: 20000, desc: 'Copy + Design + HTML coding.' }
];

const DELIVERABLES_DATABASE = {
  setup: [
    "Conducting in-depth keyword research to identify high-value terms",
    "Identifying and building negative keyword lists to reduce wasted spend",
    "Analyzing competitor ad copy and landing pages",
    "Structuring campaigns into logical, tightly-themed ad groups",
    "Writing multiple versions of responsive search ads and expanded text ads",
    "Setting up conversion tracking for key actions (e.g. purchases, leads)",
    "Linking your Google Ads account with Google Analytics (GA4)",
    "Configuring bid strategies based on your specific growth goals",
    "Defining and setting appropriate campaign daily budgets",
    "Setting up ad extensions (sitelinks, callouts) to improve CTR"
  ],
  optimization: [
    "Reviewing search query reports to find new terms and negative keywords",
    "Adjusting bids for individual keywords to maximize efficiency",
    "Pausing low-performing keywords and ad copies",
    "Testing and rotating different ad copy to find effective messaging",
    "Monitoring click-through rates (CTR) and quality scores",
    "Adding new ad extensions to enhance ad relevance",
    "Creating and refining remarketing audiences for targeted ads",
    "Developing and testing new audience segments (in-market, custom intent)",
    "Optimizing campaigns for mobile and other devices",
    "Analyzing performance by demographics and adjusting bids accordingly",
    "Reviewing geographic performance and targeting settings",
    "Scheduling ads to run during peak performance times",
    "Testing different landing pages to improve conversion rates",
    "Conducting regular A/B tests on ad copy and creative assets",
    "Implementing scripts for automated bidding or reporting",
    "Analyzing auction insights to stay ahead of the competition"
  ],
  management: [
    "Daily monitoring of campaign performance metrics (clicks, impressions, cost)",
    "Analyzing cost per acquisition (CPA) to ensure campaign profitability",
    "Managing and adjusting daily budgets to maximize spend efficiency",
    "Utilizing Meta/Facebook's lookalike audiences to acquire new customers",
    "Providing actionable insights from data analysis",
    "Reviewing and refining keyword match types",
    "Managing and organizing campaign labels",
    "Identifying and troubleshooting tracking issues",
    "Staying up to date on new Google/Meta Ads features and best practices",
    "Preparing for seasonal trends and sales promotions",
    "Benchmarking performance against industry standards",
    "Auditing ad account settings for errors or missed opportunities",
    "Creating and managing call-only campaigns",
    "Optimizing for phone calls using call tracking",
    "Developing and managing display campaigns for brand awareness",
    "Building out YouTube campaigns for video advertising",
    "Creating shopping campaigns for e-commerce clients",
    "Managing local service ads for home service businesses",
    "Utilizing dynamic search ads for large product inventories",
    "Setting up performance max (PMax) campaigns for broad reach",
    "Conducting regular check-ins and strategy calls",
    "Documenting all campaign changes and optimizations",
    "Forecasting future performance and budget needs",
    "Ensuring campaign compliance with Google & Meta policies"
  ],
  reports: [
    "Weekly Graphical Report (On-Demand)",
    "Monthly Graphical Report (Included)"
  ]
};

export default function InteractivePlanner() {
  const [selectedService, setSelectedService] = useState('performance-marketing');
  
  // ════ 1. Performance Marketing State ════
  const [adSpend, setAdSpend] = useState(250000); 
  const [selectedPlatforms, setSelectedPlatforms] = useState(['google', 'meta', 'instagram']); 
  const [setupChecked, setSetupChecked] = useState({ basic: true, account: true, profile: true });
  const [needsCreatives, setNeedsCreatives] = useState(false);
  const [creativeQty, setCreativeQty] = useState(5);
  const [existingCampaigns, setExistingCampaigns] = useState(false);

  // ════ 2. SEO & GEO/AEO State ════
  const [seoTier, setSeoTier] = useState('standard'); 
  const [geoTier, setGeoTier] = useState('none'); 
  const [needsGuestBlog, setNeedsGuestBlog] = useState(false);
  const [guestBlogQty, setGuestBlogQty] = useState(2);
  const [guestBlogTier, setGuestBlogTier] = useState('standard'); 
  const [needsPR, setNeedsPR] = useState(false);
  const [prQty, setPrQty] = useState(1);
  const [prTier, setPrTier] = useState('basic'); 

  // ════ 3. Social Media Management State ════
  const [smmTier, setSmmTier] = useState('gold'); 
  
  // ════ 4. Website Development State ════
  const [webDevTier, setWebDevTier] = useState('wp-non-ecommerce'); 
  const [extraWebPages, setExtraWebPages] = useState(0);
  const [needsHosting, setNeedsHosting] = useState(false);

  // ════ 5. Google Analytics State ════
  const [gaTier, setGaTier] = useState('gold'); 

  // ════ 6. Blog Setup & Writing State ════
  const [wantsBlogSetup, setWantsBlogSetup] = useState(true);
  const [weeklyBlogPosts, setWeeklyBlogPosts] = useState(4); 

  // ════ 7. Marketing Collateral State ════
  const [collateralQtys, setCollateralQtys] = useState(
    COLLATERAL_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  // ════ Final Sum Calculations ════
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [isDeliverablesOpen, setIsDeliverablesOpen] = useState(false);
  const [showBillModal, setShowBillModal] = useState(false);

  useEffect(() => {
    let items = [];
    let total = 0;

    if (selectedService === 'performance-marketing') {
      let rate = 15;
      let fee = 0;
      if (adSpend < 500000) {
        rate = 15;
        fee = Math.max(15000, adSpend * 0.15);
      } else if (adSpend <= 1000000) {
        rate = 12;
        fee = adSpend * 0.12;
      } else {
        rate = 10;
        fee = adSpend * 0.10;
      }
      items.push({ name: `Monthly Management Fee (${rate}% of Spend)`, cost: fee, subtitle: `Based on ₹${adSpend.toLocaleString('en-IN')} target ad spend` });
      
      const setups = Object.keys(setupChecked).filter(k => setupChecked[k]).map(k => k.toUpperCase() + ' SETUP');
      if (setups.length > 0) {
        items.push({ name: `Project Initialization (${setups.join(', ')})`, cost: 0, subtitle: 'Fully included in management package' });
      }

      const extraPlatforms = Math.max(0, selectedPlatforms.length - 3);
      if (extraPlatforms > 0) {
        items.push({ name: `Extra Platforms Surcharge (${extraPlatforms} extra)`, cost: extraPlatforms * 10000, subtitle: `Covers: ${selectedPlatforms.map(p => p.toUpperCase()).join(', ')}` });
      } else {
        items.push({ name: 'Ad Platforms Coverage (Up to 3 channels)', cost: 0, subtitle: `Covers: ${selectedPlatforms.map(p => p.toUpperCase()).join(', ')}` });
      }

      if (needsCreatives) {
        items.push({ name: `Creatives Production (${creativeQty} units)`, cost: creativeQty * 2000, subtitle: 'Billed at ₹2,000 per creative design' });
      }

      if (existingCampaigns) {
        items.push({ name: 'Complimentary Account Review Audit', cost: 0, subtitle: 'Free review of Google/Meta historical campaigns' });
      }

    } else if (selectedService === 'seo-marketing') {
      let seoCost = 0;
      let seoKw = 0;
      if (seoTier === 'economy15') { seoCost = 15000; seoKw = 15; }
      else if (seoTier === 'economy25') { seoCost = 25000; seoKw = 25; }
      else if (seoTier === 'standard') { seoCost = 45000; seoKw = 50; }
      else if (seoTier === 'premium') { seoCost = 90000; seoKw = 100; }
      
      items.push({ name: `SEO ${seoTier.toUpperCase()} Package (${seoKw} Keywords)`, cost: seoCost, subtitle: '6 Months Minimum Contract Period' });

      if (geoTier !== 'none') {
        let geoCost = 0;
        let geoKw = 0;
        if (geoTier === 'silver') { geoCost = 45000; geoKw = 25; }
        else if (geoTier === 'gold') { geoCost = 80000; geoKw = 50; }
        else if (geoTier === 'platinum') { geoCost = 110000; geoKw = 75; }
        else if (geoTier === 'titanium') { geoCost = 150000; geoKw = 100; }
        
        items.push({ name: `GEO/AEO AI Optimization Upgrade (${geoKw} Keywords)`, cost: geoCost, subtitle: 'ChatGPT, Claude, Gemini citation visibility optimization' });
      }

      if (needsGuestBlog) {
        let blogCostPerUnit = 4000;
        if (guestBlogTier === 'advanced') blogCostPerUnit = 6000;
        else if (guestBlogTier === 'premium') blogCostPerUnit = 8000;
        
        items.push({ 
          name: `Guest Blogging Add-on (${guestBlogQty} posts)`, 
          cost: guestBlogQty * blogCostPerUnit, 
          subtitle: `Domain Authority (DA) target level: ${guestBlogTier.toUpperCase()}` 
        });
      }

      if (needsPR) {
        let prCostPerUnit = 18000;
        if (prTier === 'advanced') prCostPerUnit = 25000;
        
        items.push({ 
          name: `Press Release Distribution (${prQty} unit)`, 
          cost: prQty * prCostPerUnit, 
          subtitle: `Targeting: ${prTier === 'basic' ? '400' : '600'}+ Google News publications` 
        });
      }

    } else if (selectedService === 'social-media') {
      let smmCost = 0;
      let smmPlats = "";
      let smmCreatives = 0;
      
      if (smmTier === 'silver') { smmCost = 25000; smmPlats = "Any 2 platforms"; smmCreatives = 10; }
      else if (smmTier === 'gold') { smmCost = 55000; smmPlats = "Any 3 platforms"; smmCreatives = 15; }
      else if (smmTier === 'platinum') { smmCost = 75000; smmPlats = "Any 4 platforms"; smmCreatives = 20; }
      else if (smmTier === 'titanium') { smmCost = 125000; smmPlats = "Any 5 platforms"; smmCreatives = 30; }

      items.push({ 
        name: `SMO ${smmTier.toUpperCase()} Management Package`, 
        cost: smmCost, 
        subtitle: `Includes ${smmPlats}, ${smmCreatives} monthly creatives, 3 months contract` 
      });

    } else if (selectedService === 'web-dev') {
      let devCost = 0;
      let devPlatform = "";
      if (webDevTier === 'wp-non-ecommerce') { devCost = 25000; devPlatform = "WordPress Non-Ecommerce (up to 20 pages)"; }
      else if (webDevTier === 'ecommerce-shopify') { devCost = 120000; devPlatform = "WooCommerce/Shopify E-Commerce Store"; }
      else if (webDevTier === 'custom-react') { devCost = 180000; devPlatform = "Custom React, Python, Node Suite (Created from scratch)"; }

      items.push({ name: `Website Development (${webDevTier.toUpperCase()})`, cost: devCost, subtitle: devPlatform });

      if (extraWebPages > 0) {
        items.push({ name: `Additional Pages/Products (${extraWebPages} units)`, cost: extraWebPages * 500, subtitle: 'Billed at ₹500 per additional page layout' });
      }

      if (needsHosting) {
        items.push({ name: 'Shared Website Hosting (Yearly Setup)', cost: 2000, subtitle: 'Billed annually' });
      }

    } else if (selectedService === 'analytics-gtm') {
      let gaCost = 0;
      let gaScope = "";
      if (gaTier === 'silver') { gaCost = 15000; gaScope = "Dashboard, GA4 tracking setup, up to 5 goal funnels"; }
      else if (gaTier === 'gold') { gaCost = 25000; gaScope = "Dashboard, Custom report alerts, GTM integrations, outbound links tracking"; }
      else if (gaTier === 'platinum') { gaCost = 40000; gaScope = "E-Commerce conversion triggers, sub-domain cross-domain setup"; }

      items.push({ name: `Google Analytics 4 ${gaTier.toUpperCase()} Plan`, cost: gaCost, subtitle: gaScope });

    } else if (selectedService === 'blog-management') {
      if (wantsBlogSetup) {
        items.push({ name: 'WordPress Blog Design & Setup', cost: 15000, subtitle: 'Sections design and website redirection linkage (One-time fee)' });
      }
      
      const monthlyBlogPosts = weeklyBlogPosts * 4;
      items.push({ name: `Weekly Blog Content Writing (${monthlyBlogPosts} posts/mo)`, cost: monthlyBlogPosts * 1500, subtitle: 'Billed at ₹1,500 per blog article post' });

    } else if (selectedService === 'marketing-collateral') {
      COLLATERAL_ITEMS.forEach(item => {
        const qty = collateralQtys[item.id] || 0;
        if (qty > 0) {
          items.push({ name: `${item.name} (${qty} units)`, cost: qty * item.price, subtitle: item.desc });
        }
      });
    }

    total = items.reduce((sum, item) => sum + item.cost, 0);
    setInvoiceItems(items);
    setGrandTotal(total);
  }, [
    selectedService, adSpend, selectedPlatforms, setupChecked, needsCreatives, creativeQty, existingCampaigns,
    seoTier, geoTier, needsGuestBlog, guestBlogQty, guestBlogTier, needsPR, prQty, prTier,
    smmTier, webDevTier, extraWebPages, needsHosting, gaTier, wantsBlogSetup, weeklyBlogPosts, collateralQtys
  ]);

  const handlePlatformToggle = (platId) => {
    if (selectedPlatforms.includes(platId)) {
      if (selectedPlatforms.length > 1) { 
        setSelectedPlatforms(selectedPlatforms.filter(id => id !== platId));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, platId]);
    }
  };

  const handleSetupToggle = (id) => {
    setSetupChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const updateCollateralQty = (id, delta) => {
    setCollateralQtys(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#fdfdfd] font-jakarta">
      
      {/* ════ VISUAL STYLE CORRESPONDING TO CONTACT PAGE ════ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. Moving Mesh Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[70%] bg-[#2c66f6]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#fdb813]/3 rounded-full blur-[100px]" />

        {/* 2. Professional Grain Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 3. Subtle Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:10%_100%]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 pl-4 md:pl-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#2c66f6]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Proposal Planner</p>
          </div>
          <h2 className="font-lora text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-medium text-[#0f172a] mb-6">
            Build Your Commercial Plan
          </h2>
          <p className="font-lora text-slate-600 max-w-xl text-base md:text-lg italic leading-relaxed">
            Select a service category, customize parameters, and generate an instant commercials estimate matching your requirements.
          </p>
        </div>

        {/* ════ STEP 1: SERVICE SELECTOR ════ */}
        <div className="mb-16 px-4 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#2c66f6]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 01</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {SERVICES.map((service) => {
              const isSelected = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center gap-3 px-6 py-3.5 rounded-[5px] border transition-all duration-300 ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 shadow-md scale-[1.01]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900 cursor-pointer'
                  }`}
                >
                  <span className="font-bold text-sm tracking-wide">{service.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-4 md:px-10">
          
          {/* Left Column Settings (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* ════ SERVICE OPTIONS FOR PERFORMANCE MARKETING ════ */}
            {selectedService === 'performance-marketing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* Setup layers */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Select Onboarding Initialization Scope
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {SETUP_OPTIONS.map((opt) => (
                      <div 
                        key={opt.id}
                        onClick={() => handleSetupToggle(opt.id)}
                        className={`p-5 rounded-[5px] border transition-all cursor-pointer select-none flex flex-col justify-between h-44 ${
                          setupChecked[opt.id] ? 'border-[#ffb400] bg-[#ffb400]/5' : 'border-slate-200 bg-white hover:border-slate-350'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-lora font-bold text-base text-slate-900">{opt.name}</span>
                            <div className="relative flex items-center justify-center w-4 h-4 border border-slate-300 rounded-[4px] bg-white shrink-0">
                              {setupChecked[opt.id] && (
                                <div className="absolute inset-0 bg-[#ffb400] flex items-center justify-center">
                                  <Check className="text-white" size={12} strokeWidth={3.5} />
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">{opt.desc}</p>
                        </div>
                        <div className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded inline-block w-max">
                          INCLUDED
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spend slider */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 03</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Configure Planned Monthly Ad Spend
                  </h3>
                  
                  <div className="bg-[#fafafa] border border-slate-100 p-6 md:p-8 rounded-[5px]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Planned Monthly Ad Spend</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400 font-bold">₹</span>
                        <input
                          type="number"
                          value={adSpend}
                          min={20000}
                          max={5000000}
                          step={10000}
                          onChange={(e) => setAdSpend(Math.max(20000, Number(e.target.value)))}
                          className="bg-white border-b border-slate-200 focus:border-[#2c66f6] px-3 py-1.5 text-right text-lg font-bold text-slate-800 outline-none w-44 font-jakarta"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={2000000}
                      step={25000}
                      value={adSpend}
                      onChange={(e) => setAdSpend(Number(e.target.value))}
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2c66f6] mb-6"
                    />
                    
                    {/* Pre-set Tiers info */}
                    <div className="grid grid-cols-3 gap-3 text-center text-xs">
                      {[
                        { label: 'Starter', range: '<5L', rate: '15% fee', val: 300000 },
                        { label: 'Growth', range: '5L-10L', rate: '12% fee', val: 750000 },
                        { label: 'Scale', range: '10L+', rate: '10% fee', val: 1500000 }
                      ].map((t) => {
                        const isMatch = (t.label === 'Starter' && adSpend < 500000) || (t.label === 'Growth' && adSpend >= 500000 && adSpend <= 1000000) || (t.label === 'Scale' && adSpend > 1000000);
                        return (
                          <button 
                            key={t.label}
                            onClick={() => setAdSpend(t.val)}
                            className={`p-3 rounded-[5px] border transition-all font-jakarta ${
                              isMatch ? 'bg-slate-950 text-white border-slate-950 shadow-sm' : 'bg-white border-slate-250 hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            <span className="font-bold block tracking-wide">{t.label} Tier</span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">{t.rate}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Platforms selection */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 04</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Select Advertising Platforms
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    Base package includes coverage for up to <b>3 platforms</b>. Additional networks are billed at <b>₹10,000/month</b> for each additional channel.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {PLATFORMS_LIST.map((plat) => {
                      const isSelected = selectedPlatforms.includes(plat.id);
                      return (
                        <button
                          key={plat.id}
                          onClick={() => handlePlatformToggle(plat.id)}
                          className={`p-3.5 rounded-[5px] border text-left flex items-center justify-between transition-all select-none ${
                            isSelected ? 'bg-slate-950 text-white border-slate-950 font-bold' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-350'
                          }`}
                        >
                          <span className="text-[13px] font-semibold flex items-center gap-2.5 tracking-wide">
                            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: plat.color }} />
                            {plat.name}
                          </span>
                          <div className="relative flex items-center justify-center w-4 h-4 border border-slate-300 rounded-[4px] bg-white shrink-0">
                            {isSelected && (
                              <div className="absolute inset-0 bg-[#ffb400] flex items-center justify-center">
                                <Check className="text-white" size={10} strokeWidth={4} />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Yes/No queries */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 05</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Additional Parameters
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 tracking-wide">Do you need ad creatives designed by us?</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">Charged at ₹2,000 per creative unit if not provided by client.</p>
                      </div>
                      <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white shrink-0 shadow-sm">
                        <button onClick={() => setNeedsCreatives(true)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${needsCreatives ? 'bg-[#ffb400] text-black' : 'bg-white text-slate-500'}`}>Yes</button>
                        <button onClick={() => setNeedsCreatives(false)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${!needsCreatives ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>No</button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {needsCreatives && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="pl-6 pr-4 py-4 bg-[#ffb400]/5 border-l-2 border-[#ffb400] rounded-r-[5px] flex items-center justify-between text-sm shadow-sm">
                          <span className="font-bold text-slate-800 text-xs tracking-wide">Monthly creative designs:</span>
                          <div className="flex items-center gap-3 bg-white p-1 border border-slate-200 rounded-[5px]">
                            <button onClick={() => setCreativeQty(Math.max(1, creativeQty - 1))} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Minus size={12} /></button>
                            <span className="font-bold text-slate-950 w-5 text-center text-xs">{creativeQty}</span>
                            <button onClick={() => setCreativeQty(creativeQty + 1)} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Plus size={12} /></button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 tracking-wide">Do you have existing active campaigns for review?</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">Complimentary free account review analysis included.</p>
                      </div>
                      <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white shrink-0 shadow-sm">
                        <button onClick={() => setExistingCampaigns(true)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${existingCampaigns ? 'bg-[#ffb400] text-black' : 'bg-white text-slate-500'}`}>Yes</button>
                        <button onClick={() => setExistingCampaigns(false)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${!existingCampaigns ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>No</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════ SERVICE OPTIONS FOR SEO & GEO/AEO ════ */}
            {selectedService === 'seo-marketing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* SEO Packages */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Select SEO Core Plan
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {[
                      { id: 'economy15', name: 'Economy Tier 1', kw: 15, cost: 15000, desc: 'Organic setups, canonicalization, robots optimization, site validation.' },
                      { id: 'economy25', name: 'Economy Tier 2', kw: 25, cost: 25000, desc: 'Includes all Tier 1 items + duplicate content audits, analytics integration.' },
                      { id: 'standard', name: 'Standard Tier', kw: 50, cost: 45000, desc: 'Schema setups, 13 blog posts, 12 articles, keyword rank reports.' },
                      { id: 'premium', name: 'Premium Tier', kw: 100, cost: 90000, desc: 'Full custom schemas, 25 blogs, 25 articles, Q&A posting, infographics.' }
                    ].map((plan) => (
                      <div 
                        key={plan.id}
                        onClick={() => setSeoTier(plan.id)}
                        className={`p-5 rounded-[5px] border transition-all cursor-pointer flex flex-col justify-between h-full ${
                          seoTier === plan.id ? 'border-[#ffb400] bg-[#ffb400]/5 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-350'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                            <span className="font-lora font-bold text-lg text-slate-900">{plan.name}</span>
                            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{plan.kw} Keywords</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed mb-4 tracking-wide font-normal">{plan.desc}</p>
                        </div>
                        <div className="text-lg font-bold text-slate-950 border-t border-slate-100 pt-3 font-lora">
                          {formatINR(plan.cost)}<span className="text-xs text-slate-500 font-normal">/mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GEO/AEO Upgrades */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 03</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    GEO & AEO AI Search Upgrades
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    Elevate your brand visibility in AI-generated answers like ChatGPT, Claude, and Gemini context mapping.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-stretch">
                    {[
                      { id: 'none', name: 'No Upgrade', kw: 0, cost: 0 },
                      { id: 'silver', name: 'GEO Silver', kw: 25, cost: 45000 },
                      { id: 'gold', name: 'GEO Gold', kw: 50, cost: 80000 },
                      { id: 'platinum', name: 'GEO Platinum', kw: 75, cost: 110000 },
                      { id: 'titanium', name: 'GEO Titanium', kw: 100, cost: 150000 }
                    ].map((upgrade) => (
                      <div 
                        key={upgrade.id}
                        onClick={() => setGeoTier(upgrade.id)}
                        className={`p-4 rounded-[5px] border transition-all cursor-pointer flex flex-col justify-between text-center h-full min-h-[110px] ${
                          geoTier === upgrade.id ? 'border-[#ffb400] bg-[#ffb400]/5' : 'border-slate-200 bg-white hover:border-slate-350'
                        }`}
                      >
                        <span className="font-lora font-bold text-sm text-slate-900 block mb-1">{upgrade.name}</span>
                        {upgrade.cost > 0 ? (
                          <div className="mt-auto pt-2">
                            <span className="text-[10px] text-slate-500 font-bold block mb-1">{upgrade.kw} Keywords</span>
                            <span className="text-xs font-bold text-slate-950 block font-lora">+{upgrade.cost / 1000}k/m</span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-500 block py-4 mt-auto font-normal leading-normal">Standard organic</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SEO Optional Add-ons */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 04</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    SEO Optional Add-ons
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Guest Blogging */}
                    <div className="p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="font-bold text-sm text-slate-800 tracking-wide">Guest Blogging Distribution</h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">Authored high DA domain placements to build backlink authority.</p>
                        </div>
                        <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white shrink-0 shadow-sm">
                          <button onClick={() => setNeedsGuestBlog(true)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${needsGuestBlog ? 'bg-[#ffb400] text-black' : 'bg-white text-slate-500'}`}>Yes</button>
                          <button onClick={() => setNeedsGuestBlog(false)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${!needsGuestBlog ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>No</button>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {needsGuestBlog && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-4 pl-4 border-l-2 border-[#ffb400] mt-4 pt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                              <span className="font-bold text-slate-800">Domain Authority Tier:</span>
                              <div className="flex gap-1.5">
                                {[
                                  { id: 'standard', label: 'DA 20-30', price: '₹4k/p' },
                                  { id: 'advanced', label: 'DA 30-50', price: '₹6k/p' },
                                  { id: 'premium', label: 'DA 50-80', price: '₹8k/p' }
                                ].map((t) => (
                                  <button 
                                    key={t.id} 
                                    onClick={() => setGuestBlogTier(t.id)}
                                    className={`px-2.5 py-1.5 rounded-[4px] border text-[10px] font-bold transition-all ${
                                      guestBlogTier === t.id ? 'bg-slate-950 text-white border-slate-950' : 'bg-white text-slate-600 hover:border-slate-350'
                                    }`}
                                  >
                                    {t.label} ({t.price})
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-xs pt-2">
                              <span className="font-bold text-slate-800">Monthly post volume:</span>
                              <div className="flex items-center gap-3 bg-white p-1 border border-slate-200 rounded-[5px]">
                                <button onClick={() => setGuestBlogQty(Math.max(1, guestBlogQty - 1))} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Minus size={12} /></button>
                                <span className="font-bold text-slate-950 w-5 text-center text-xs">{guestBlogQty}</span>
                                <button onClick={() => setGuestBlogQty(guestBlogQty + 1)} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Plus size={12} /></button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Press Release */}
                    <div className="p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="font-bold text-sm text-slate-800 tracking-wide">Press Release Submissions</h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">Billed per release distribution on Google News publications.</p>
                        </div>
                        <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white shrink-0 shadow-sm">
                          <button onClick={() => setNeedsPR(true)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${needsPR ? 'bg-[#ffb400] text-black' : 'bg-white text-slate-500'}`}>Yes</button>
                          <button onClick={() => setNeedsPR(false)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${!needsPR ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>No</button>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {needsPR && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-4 pl-4 border-l-2 border-[#ffb400] mt-4 pt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                              <span className="font-bold text-slate-800">Submission Scope:</span>
                              <div className="flex gap-2">
                                {[
                                  { id: 'basic', label: 'Basic (400 sites)', price: '₹18k' },
                                  { id: 'advanced', label: 'Advanced (600 sites)', price: '₹25k' }
                                ].map((t) => (
                                  <button 
                                    key={t.id} 
                                    onClick={() => setPrTier(t.id)}
                                    className={`px-3 py-1.5 rounded-[4px] border text-[10px] font-bold transition-all ${
                                      prTier === t.id ? 'bg-slate-950 text-white border-slate-950' : 'bg-white text-slate-600 hover:border-slate-350'
                                    }`}
                                  >
                                    {t.label} ({t.price})
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-xs pt-2">
                              <span className="font-bold text-slate-800">Quantity:</span>
                              <div className="flex items-center gap-3 bg-white p-1 border border-slate-200 rounded-[5px]">
                                <button onClick={() => setPrQty(Math.max(1, prQty - 1))} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Minus size={12} /></button>
                                <span className="font-bold text-slate-950 w-5 text-center text-xs">{prQty}</span>
                                <button onClick={() => setPrQty(prQty + 1)} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Plus size={12} /></button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════ SERVICE OPTIONS FOR SOCIAL MEDIA ════ */}
            {selectedService === 'social-media' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* SMO Packages */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Select SMO Management Tier
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {[
                      { id: 'silver', name: 'Silver Plan', platforms: 'Any 2 platforms', posts: '10 Static Posts', cost: 25000, desc: 'Includes page setups, business page optimization, custom cover design.' },
                      { id: 'gold', name: 'Gold Plan', platforms: 'Any 3 platforms', posts: '13 Static, 2 Videos/Reels', cost: 55000, desc: 'Includes responder comment, custom vanity links, quiz/polls creations.' },
                      { id: 'platinum', name: 'Platinum Plan', platforms: 'Any 4 platforms', posts: '17 Static, 3 Videos/Reels', cost: 75000, desc: 'Includes thumbnail selection, multiple video distribution.' },
                      { id: 'titanium', name: 'Titanium Plan', platforms: 'Any 5 platforms', posts: '26 Static, 4 Videos/Reels', cost: 125000, desc: 'Includes 60 tweets,pin images, Sendible auto tool setups.' }
                    ].map((plan) => (
                      <div 
                        key={plan.id}
                        onClick={() => setSmmTier(plan.id)}
                        className={`p-5 rounded-[5px] border transition-all cursor-pointer flex flex-col justify-between h-full ${
                          smmTier === plan.id ? 'border-[#ffb400] bg-[#ffb400]/5 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-350'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                            <span className="font-lora font-bold text-lg text-slate-900">{plan.name}</span>
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{plan.platforms}</span>
                          </div>
                          <p className="text-sm font-bold text-slate-800 leading-normal mb-1 tracking-wide">{plan.posts}</p>
                          <p className="text-xs text-slate-600 leading-relaxed mb-4 tracking-wide font-normal">{plan.desc}</p>
                        </div>
                        <div className="text-lg font-bold text-slate-950 border-t border-slate-100 pt-3 font-lora">
                          {formatINR(plan.cost)}<span className="text-xs text-slate-500 font-normal">/mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SMO Parameters */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 03</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Review Contract & Ad Spend Rules
                  </h3>
                  
                  <div className="flex items-start gap-4 bg-[#ffb400]/5 p-5 rounded-[5px] border border-[#ffb400]/20 text-[13px] text-slate-800 leading-relaxed">
                    <Info size={16} className="shrink-0 text-[#ffb400] mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1.5 uppercase tracking-wider text-[11px]">Commercial parameters:</p>
                      <p className="mb-1 font-normal">• Minimum Contract Cycle: 3 Months.</p>
                      <p className="font-normal">• DIRECT MEDIA BUDGETS: Excluded (billed directly by networks to client).</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════ SERVICE OPTIONS FOR WEBSITE DEVELOPMENT ════ */}
            {selectedService === 'web-dev' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* Website Framework */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Select Development Framework
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'wp-non-ecommerce', name: 'Non E-commerce Website (WordPress)', platform: 'WordPress premium templates. Up to 20 pages.', support: '1 Month technical support. 15 Days delivery.', cost: 25000 },
                      { id: 'ecommerce-shopify', name: 'E-commerce Website (WooCommerce/Shopify)', platform: 'WooCommerce/Shopify theme setups. Unlimited pages & products.', support: '1 Month support. 30-45 Days delivery.', cost: 120000 },
                      { id: 'custom-react', name: 'Custom Website (React, Node, Python, CSS)', platform: 'Custom engineered architecture built from scratch. Highly customizable.', support: '2 Months technical support. 60 Days+ delivery.', cost: 180000 }
                    ].map((dev) => (
                      <div 
                        key={dev.id}
                        onClick={() => setWebDevTier(dev.id)}
                        className={`p-5 rounded-[5px] border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                          webDevTier === dev.id ? 'border-[#ffb400] bg-[#ffb400]/5' : 'border-slate-200 bg-white hover:border-slate-350'
                        }`}
                      >
                        <div className="sm:max-w-[70%]">
                          <span className="font-lora font-bold text-lg text-slate-900 block mb-1">{dev.name}</span>
                          <span className="text-xs text-slate-600 block mb-1 font-normal">{dev.platform}</span>
                          <span className="text-[11px] text-slate-400 block font-normal">{dev.support}</span>
                        </div>
                        <div className="text-right sm:border-l sm:border-slate-100 sm:pl-6 shrink-0">
                          <span className="text-lg font-bold text-slate-950 block font-lora">{formatINR(dev.cost)}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5 font-normal">One-time setup</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pages & Hosting */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 03</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Configure Pages & Hosting
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 tracking-wide">Do you need additional pages / products?</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">Billed at ₹500 per additional page over core package limits.</p>
                      </div>
                      <div className="flex items-center gap-3 bg-white p-1 border border-slate-200 rounded-[5px]">
                        <button onClick={() => setExtraWebPages(Math.max(0, extraWebPages - 1))} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Minus size={12} /></button>
                        <span className="font-bold text-slate-955 w-5 text-center text-xs">{extraWebPages}</span>
                        <button onClick={() => setExtraWebPages(extraWebPages + 1)} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Plus size={12} /></button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 tracking-wide">Need shared hosting and domain maintenance?</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">Billed at ₹2,000 per year.</p>
                      </div>
                      <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white shrink-0 shadow-sm">
                        <button onClick={() => setNeedsHosting(true)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${needsHosting ? 'bg-[#ffb400] text-black' : 'bg-white text-slate-500'}`}>Yes</button>
                        <button onClick={() => setNeedsHosting(false)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${!needsHosting ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>No</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════ SERVICE OPTIONS FOR GA & GTM SETUP ════ */}
            {selectedService === 'analytics-gtm' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* GA4 Package */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Select GA4 Analytics Package
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    {[
                      { id: 'silver', name: 'Silver Plan', cost: 15000, desc: 'GA4 account creation, dashboard setup, filter configurations (up to 5), internal search tracking, goal funnel setup (up to 5), campaign tagging.' },
                      { id: 'gold', name: 'Gold Plan', cost: 25000, desc: 'Includes SILVER plan + Custom definitions mapping, custom reports scheduler, custom alerts tracking, YouTube videos analytics, GTM outbound/download event tracking.' },
                      { id: 'platinum', name: 'Platinum Plan', cost: 40000, desc: 'Includes GOLD plan + Sub-domain tracking setups, cross-domain redirection mapping, customized advanced tracker code injections, E-Commerce tracking triggers.' }
                    ].map((plan) => (
                      <div 
                        key={plan.id}
                        onClick={() => setGaTier(plan.id)}
                        className={`p-5 rounded-[5px] border transition-all cursor-pointer flex flex-col justify-between h-full ${
                          gaTier === plan.id ? 'border-[#ffb400] bg-[#ffb400]/5 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-350'
                        }`}
                      >
                        <div className="flex justify-between items-baseline mb-3 pb-2 border-b border-slate-100">
                          <span className="font-lora font-bold text-lg text-slate-900">{plan.name}</span>
                          <span className="font-bold text-slate-955 font-jakarta text-base">{formatINR(plan.cost)}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">{plan.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════ SERVICE OPTIONS FOR BLOG SETUP & WRITING ════ */}
            {selectedService === 'blog-management' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* Blog Setup */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    WordPress Blog Setup
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 tracking-wide">WordPress Blog Setup & REDIRECT integration</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Design sections, WordPress installation, link with main domain. (₹15,000 one-time setup)</p>
                    </div>
                    <div className="flex rounded-lg border border-slate-200 p-0.5 bg-white shrink-0 shadow-sm">
                      <button onClick={() => setWantsBlogSetup(true)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${wantsBlogSetup ? 'bg-[#ffb400] text-black' : 'bg-white text-slate-500'}`}>Yes</button>
                      <button onClick={() => setWantsBlogSetup(false)} className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${!wantsBlogSetup ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>No</button>
                    </div>
                  </div>
                </div>

                {/* Blog Post Freq */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 03</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Weekly Articles Frequency
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[5px] bg-[#fafafa] border border-slate-100">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 tracking-wide">Weekly Blog Post Writing (Articles)</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Keyword taggings, redirection anchors. Billed at ₹1,500 per article post.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-1 border border-slate-200 rounded-[5px] shrink-0">
                      <button onClick={() => setWeeklyBlogPosts(Math.max(1, weeklyBlogPosts - 1))} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Minus size={12} /></button>
                      <span className="font-bold text-slate-950 w-5 text-center text-xs">{weeklyBlogPosts}</span>
                      <button onClick={() => setWeeklyBlogPosts(weeklyBlogPosts + 1)} className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"><Plus size={12} /></button>
                      <span className="text-[11px] text-slate-400 font-bold pr-2 font-lora">/ wk</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════ SERVICE OPTIONS FOR MARKETING COLLATERAL & DIGITAL ASSETS ════ */}
            {selectedService === 'marketing-collateral' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                
                {/* Collaterals List */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-[#2c66f6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2c66f6] m-0">Step 02</p>
                  </div>
                  <h3 className="font-lora text-2xl lg:text-3xl text-[#0f172a] font-medium leading-snug">
                    Marketing Collateral Planner
                  </h3>
                  
                  <div className="max-h-[500px] overflow-y-auto pr-3 space-y-3.5 border-t border-b border-slate-100 py-6">
                    {COLLATERAL_ITEMS.map((item) => {
                      const qty = collateralQtys[item.id] || 0;
                      return (
                        <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-[5px] border border-slate-100 hover:border-slate-300 bg-[#fafafa]/50 transition-all">
                          <div className="sm:max-w-[65%]">
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="font-lora font-bold text-base text-slate-900">{item.name}</span>
                              <span className="text-xs font-bold text-amber-700 font-lora">₹{item.price.toLocaleString('en-IN')}</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-normal font-normal">{item.desc}</p>
                          </div>
                          
                          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-[5px] p-1 shrink-0 self-end sm:self-center">
                            <button 
                              onClick={() => updateCollateralQty(item.id, -1)}
                              className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-bold text-slate-955 text-center w-5 text-xs">{qty}</span>
                            <button 
                              onClick={() => updateCollateralQty(item.id, 1)}
                              className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center font-bold text-xs"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Expandable Deliverables database list */}
            {selectedService === 'performance-marketing' && (
              <div className="border-t border-slate-100 pt-8">
                <button 
                  onClick={() => setIsDeliverablesOpen(!isDeliverablesOpen)}
                  className="w-full flex justify-between items-center py-4 text-left border border-slate-200 rounded-[5px] px-5 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-lora text-md font-bold text-slate-800 flex items-center gap-2">
                    <Award size={18} className="text-[#ffb400]" />
                    See Full Deliverables Scope of Work (From Excel)
                  </span>
                  {isDeliverablesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {isDeliverablesOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-4">
                      <div className="bg-white border border-slate-200 rounded-[5px] p-6 space-y-6 text-sm">
                        <div>
                          <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2 uppercase tracking-wider text-[10px]">1. Campaign Setup</h4>
                          <ul className="space-y-1.5 list-inside list-disc text-slate-600 pl-2">
                            {DELIVERABLES_DATABASE.setup.map((item, idx) => (
                              <li key={idx} className="leading-relaxed text-xs">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2 uppercase tracking-wider text-[10px]">2. Ongoing Optimization</h4>
                          <ul className="space-y-1.5 list-inside list-disc text-slate-600 pl-2">
                            {DELIVERABLES_DATABASE.optimization.map((item, idx) => (
                              <li key={idx} className="leading-relaxed text-xs">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2 uppercase tracking-wider text-[10px]">3. Management & Analysis</h4>
                          <ul className="space-y-1.5 list-inside list-disc text-slate-600 pl-2">
                            {DELIVERABLES_DATABASE.management.map((item, idx) => (
                              <li key={idx} className="leading-relaxed text-xs">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2 uppercase tracking-wider text-[10px]">4. Reporting</h4>
                          <ul className="space-y-1.5 list-inside list-disc text-slate-600 pl-2">
                            {DELIVERABLES_DATABASE.reports.map((item, idx) => (
                              <li key={idx} className="leading-relaxed text-xs">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

          </div>

          {/* Right Column Invoice Table (5 cols) */}
          <div id="proposal-invoice-card" className="lg:col-span-5 sticky top-28 bg-[#fafafa] text-slate-850 rounded-[5px] p-6 md:p-8 border border-slate-100/80 shadow-md mb-20 lg:mb-0">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#2c66f6]" />
                <h3 className="font-lora text-xl font-bold tracking-wide text-slate-900">
                  Commercial Proposal
                </h3>
              </div>
              <span className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider animate-pulse">
                Live proposal
              </span>
            </div>

            {/* Proposal Details Table */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Service Category</span>
                <p className="font-lora text-lg font-bold text-slate-900 mt-1">
                  {SERVICES.find(s => s.id === selectedService)?.name}
                </p>
              </div>

              {/* Billing Item Lines */}
              <div className="border-t border-slate-200 pt-5 space-y-4">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Pricing Breakdown</span>
                
                {invoiceItems.length > 0 ? (
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    {invoiceItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-sm border-b border-slate-100 pb-3.5">
                        <div className="max-w-[70%]">
                          <span className="text-slate-800 font-semibold block leading-snug tracking-wide">{item.name}</span>
                          <span className="text-[10px] text-slate-500 block mt-1 leading-normal tracking-wide">{item.subtitle}</span>
                        </div>
                        <span className="font-bold text-slate-950 shrink-0 text-right whitespace-nowrap text-sm tracking-wide font-lora">
                          {item.cost > 0 ? formatINR(item.cost) : 'Included'}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 py-4 italic font-normal">Select quantities/packages on the left settings options to populate invoice proposal.</p>
                )}
              </div>

              {/* Grand Total Area */}
              <div className="border-t-2 border-dashed border-slate-200 pt-5 mt-6">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Fee Total</span>
                    <span className="text-[9px] text-slate-500">(Exclusive of Taxes & External spend)</span>
                  </div>
                  <span className="text-3xl font-extrabold text-[#2c66f6] leading-none font-jakarta">
                    {formatINR(grandTotal)}
                    <span className="text-xs text-slate-500 font-normal">
                      {['web-dev', 'analytics-gtm'].includes(selectedService) ? ' total' : '/mo'}
                    </span>
                  </span>
                </div>
              </div>

              {/* Contract Term Reminder */}
              <p className="text-[10px] text-slate-500 leading-relaxed border-t border-slate-200 pt-4 font-normal">
                * Taxes (GST 18%) extra. Ad budgets are paid directly by client to channels (Google/Meta). Indicative rates. Proposal calculations are structured on the official commercials sheet.
              </p>

              {/* Submit CTA */}
              <div className="pt-2">
                <button 
                  onClick={() => setShowBillModal(true)}
                  className="flex items-center gap-4 group mt-6 cursor-pointer border-none bg-transparent w-full text-left focus:outline-none"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#ffb400] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[#ffb400]/30 shrink-0">
                    <FiArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 group-hover:text-[#ffb400] transition-colors">
                    Submit Proposal Request
                  </span>
                </button>
              </div>
            </div>

          </div>
          
        </div>

      </div>

      {/* Mobile Floating Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-jakarta">Est. Agency Fee</span>
          <span className="text-xl font-bold text-[#2c66f6] font-jakarta">
            {formatINR(grandTotal)}
            <span className="text-[10px] text-slate-500 font-normal">
              {['web-dev', 'analytics-gtm'].includes(selectedService) ? '' : '/mo'}
            </span>
          </span>
        </div>
        <button 
          onClick={() => {
            const el = document.getElementById('proposal-invoice-card');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
          className="bg-slate-950 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-[5px]"
        >
          Review &amp; Submit &rarr;
        </button>
      </div>
      {/* Bill Popup Modal */}
      <AnimatePresence>
        {showBillModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 font-jakarta">
            {/* Overlay click to dismiss */}
            <div className="absolute inset-0" onClick={() => setShowBillModal(false)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 md:p-8 border border-slate-100 max-h-[85vh] overflow-y-auto z-10"
            >
              {/* Header */}
              <div className="border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2c66f6]">Proposal Bill Statement</span>
                  <button 
                    onClick={() => setShowBillModal(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    Close
                  </button>
                </div>
                <h3 className="font-lora text-2xl font-bold text-slate-900">iBraine Commercial Summary</h3>
                <p className="text-xs text-slate-500 mt-1">Generated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>

              {/* Bill Details Table */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Service Type</span>
                  <p className="font-lora text-base font-bold text-slate-900">
                    {SERVICES.find(s => s.id === selectedService)?.name}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">Itemized Commercials</span>
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[9px] font-bold">
                        <th className="pb-2 font-semibold">Deliverable / Scope Detail</th>
                        <th className="pb-2 text-right font-semibold">Cost (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceItems.map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-100">
                          <td className="py-3 pr-4">
                            <span className="font-bold text-slate-800 block">{item.name}</span>
                            <span className="text-[10px] text-slate-500 block mt-0.5 leading-normal">{item.subtitle}</span>
                          </td>
                          <td className="py-3 text-right font-bold text-slate-950 whitespace-nowrap font-lora">
                            {item.cost > 0 ? formatINR(item.cost) : 'Included'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Total */}
                <div className="border-t-2 border-dashed border-slate-200 pt-4 mt-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Fee Total</span>
                      <span className="text-[9px] text-slate-500">(Exclusive of Taxes & Ad budgets)</span>
                    </div>
                    <span className="text-2xl font-extrabold text-[#2c66f6] font-lora leading-none">
                      {formatINR(grandTotal)}
                      <span className="text-xs text-slate-500 font-normal">
                        {['web-dev', 'analytics-gtm'].includes(selectedService) ? '' : '/mo'}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Footer buttons / No download */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-[9px] text-slate-400 max-w-[65%] leading-normal font-normal">
                    * Billed in INR. GST (18%) extra. Direct advertising media budgets are paid separately directly to publishers.
                  </p>
                  
                  <button
                    onClick={() => setShowBillModal(false)}
                    className="flex items-center gap-3 group cursor-pointer border-none bg-transparent text-left focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#ffb400] transition-all duration-300 shrink-0">
                      <Check size={16} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 group-hover:text-[#ffb400] transition-colors">
                      Done
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
