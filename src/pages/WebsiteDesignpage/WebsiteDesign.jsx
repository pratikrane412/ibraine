import React, { useState } from 'react';
import { 
  MonitorSmartphone, 
  Rocket, 
  Code2, 
  Headset, 
  CheckCircle2, 
  ArrowRight,
  Search,
  PenTool,
  Settings,
  Star,
  Quote,
  Zap,
  Phone,
  Mail,
  Check
} from 'lucide-react';

const WebsiteDesign = () => {
  // --- Form State ---
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! Your request has been sent successfully.`);
    setForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  // --- Combined Data from Snippets ---
  const features = [
    { title: "Bespoke Customization", desc: "Tailor-made solutions that reflect your brand identity and resonate with your target audience.", icon: <PenTool /> },
    { title: "User Experience (UX) Focus", desc: "Prioritizing intuitive navigation and seamless interactions for a delightful user experience.", icon: <MonitorSmartphone /> },
    { title: "Cutting-edge Technology", desc: "Leveraging the latest tools and frameworks to build modern, fast, responsive websites.", icon: <Code2 /> },
    { title: "Result-Driven Approach", desc: "Committed to delivering tangible results, improved SEO, and increased conversions.", icon: <Rocket /> },
  ];

  const processSteps = [
    { title: "Information Gathering", desc: "Shaping a strategy that aligns perfectly with your objectives.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Planning & Ideation", desc: "Creativity meets strategy as we conceptualize your digital masterpiece.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Selecting Technology", desc: "Delving into the digital toolbox to identify the perfect technologies.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Interface Designing", desc: "Ensuring every pixel aligns with your brand and enhances interaction.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Backend Development", desc: "Laying the robust foundation for functionality and performance.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Content Integration", desc: "Seamlessly weaving your captivating content into the framework.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Testing & Optimization", desc: "Scrutinizing every aspect to ensure peak performance.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
    { title: "Deployment & Maintenance", desc: "Launching your website into the digital stratosphere with care.", img: "https://ibraine.com/wp-content/uploads/2024/03/sale-report.png" },
  ];

  const industries = [
    { name: "Education", img: "https://ibraine.com/wp-content/uploads/2024/03/learning.png" },
    { name: "Health Care", img: "https://ibraine.com/wp-content/uploads/2024/03/protection.png" },
    { name: "E-commerce", img: "https://ibraine.com/wp-content/uploads/2024/03/ecommerce.png" },
    { name: "Financial Services", img: "https://ibraine.com/wp-content/uploads/2024/03/invesment.png" },
    { name: "Business", img: "https://ibraine.com/wp-content/uploads/2024/03/stats-1.png" },
    { name: "Tourism", img: "https://ibraine.com/wp-content/uploads/2024/03/tourism.png" },
    { name: "Logistics", img: "https://ibraine.com/wp-content/uploads/2024/03/logistics-1.png" },
    { name: "Real Estate", img: "https://ibraine.com/wp-content/uploads/2024/03/developer.png" },
  ];

  const portfolio = [
    "https://brandwitty.com/media/2023/08/demo-5-img.png",
    "https://brandwitty.com/media/2023/08/Startup-Product-Development.png",
    "https://ibraine.com/wp-content/uploads/2024/05/screencapture-fitxfatloss-2024-03-19-12_20_03-1-scaled.webp",
    "https://ibraine.com/wp-content/uploads/2024/05/screencapture-chilterneventplanners-co-uk-ramadan-kareem-2024-03-19-12_20_51-scaled.webp"
  ];

  const testimonials = [
    { name: "Mukta Tolani", company: "Radiant Health", rating: 5, text: "I would give them 10 stars for the absolutely marvelous job! The team exceeded my expectations. Thank you for a splendid website!" },
    { name: "Priyanka Chavan", company: "Body & Beyond", rating: 5, text: "Extremely professional. Timely delivery in tight deadlines and beautiful creations. Overall coordination is excellent. I am very happy with their service." },
    { name: "Bhavi Merchant", company: "Signatures Smiles", rating: 5, text: "They seamlessly translated our ethos into a captivating online platform. The functionality creates an enjoyable browsing experience for our patients." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* Custom Keyframes for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        .animate-marquee { display: flex; width: 200%; animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="https://ibraine.com/wp-content/uploads/2024/07/Ibraine-Registered-Logo-Transparent.png" alt="Logo" className="h-10" />
          </div>
          <div className="hidden lg:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-blue-500/30">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-blue-100 to-orange-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-blue-600 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Professional Agency in Mumbai</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
              Website Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                Development
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Accelerate your digital presence. With a transparent process and cutting-edge tech, our expert developers create seamless, custom websites that delight your customers and startle your competition.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center group transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center space-x-4 border-t border-slate-200 pt-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">750+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Worldwide Clients</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition */}
          <div className="relative mt-12 lg:mt-0">
            {/* Floating Icons from user snippet */}
            <img src="https://ibraine.com/wp-content/uploads/2024/03/wordpress.png" alt="WP" className="absolute -top-10 left-10 w-24 h-24 animate-float z-20 drop-shadow-2xl" />
            <img src="https://ibraine.com/wp-content/uploads/2024/03/cloud.png" alt="Cloud" className="absolute top-1/2 -right-12 w-28 h-28 animate-float-delayed z-20 drop-shadow-2xl" />
            <img src="https://ibraine.com/wp-content/uploads/2024/03/social.png" alt="Social" className="absolute -bottom-8 left-1/4 w-20 h-20 animate-float z-20 drop-shadow-2xl" />

            {/* Main Image */}
            <div className="relative z-10 rounded-[2.5rem] p-4 bg-white/50 backdrop-blur-xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
              <img 
                src="https://brandwitty.com/media/2023/07/Web-Design-Agency-Hero-Image-1.webp" 
                alt="Web Development Agency" 
                className="rounded-[2rem] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY OPT FOR US --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Why Opt for Us for Your <br/><span className="text-blue-600">Designing Needs?</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">Drawing from a decade of expertise, we elevate clients to online prominence with award-winning website designs, seamless consumer experiences, and custom solutions.</p>
            </div>
            <button className="shrink-0 bg-orange-100 text-orange-600 hover:bg-orange-200 px-6 py-3 rounded-full font-bold transition-colors">
              Read More
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE PROCESS (Timeline Grid) --- */}
      <section className="py-24 relative bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">The Process of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Website Development</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Putting you first: the core of our custom-centric web development process. We ensure every step is transparent and perfectly aligned with your goals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative group hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-50 rounded-full flex items-center justify-center text-xl font-black text-slate-800 shadow-sm border border-white">
                  {index + 1}
                </div>
                <div className="mb-6">
                  <img src={step.img} alt={step.title} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES (Grid) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
            <p className="text-slate-600 text-lg">We Provide Dedicated Services For The Following Industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all duration-300 group">
                <img src={ind.img} alt={ind.name} className="w-16 h-16 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <h3 className="font-bold text-slate-800 text-center">{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO MARQUEE --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="text-center mb-16 relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Unveiling Our Success Stories</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Take a look at some of the amazing digital platforms we have built for our clients.</p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
            View Full Portfolio
          </button>
        </div>

        {/* Marquee Container */}
        <div className="relative flex items-center">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
          
          <div className="animate-marquee flex gap-8 shrink-0 items-start">
            {[...portfolio, ...portfolio, ...portfolio].map((src, i) => (
              <div key={i} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl h-[400px] relative group">
                <img src={src} alt="Portfolio item" className="w-full object-cover object-top transition-transform duration-[10s] ease-linear group-hover:-translate-y-[20%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Clients Rave About Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Experience!</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100" />
                <div className="flex space-x-1 mb-6">
                  {[...Array(test.rating)].map((_, s) => <Star key={s} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10 text-lg">"{test.text}"</p>
                <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                  <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-md">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{test.name}</h4>
                    <span className="text-sm font-semibold text-orange-500">{test.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / CTA (With Working State) --- */}
      <section className="py-24 relative overflow-hidden bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Info */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm text-blue-300 font-medium mb-6">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span>Fast Response Time</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
                  Ready to make your mark online?
                </h2>
                <p className="text-slate-400 mb-12 text-lg">Reach out to us today and let’s turn your digital dreams into reality!</p>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Call Us At</p>
                      <a href="tel:+919892854892" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">+91 98928 54892</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-400">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Email Our Team</p>
                      <a href="mailto:info@ibraine.com" className="text-2xl font-bold text-white hover:text-orange-400 transition-colors">info@ibraine.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Working Form */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={form.company}
                        onChange={handleInputChange}
                        placeholder="Your Company" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Project Details *</label>
                    <textarea 
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Share a brief of your requirements..." 
                      rows="4" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default WebsiteDesign;