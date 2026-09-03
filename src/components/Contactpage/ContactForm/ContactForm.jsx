import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPhone, FiMail, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const services = [
    "Performance Marketing", "SEM Experts", "SEO Services",
    "Social Media Marketing", "Website Design", "UX/UI Design",
    "GTM Integration", "CRO Optimization", "Content Writing",
    "Graphic Design", "Video Production"
  ];

  const [formData, setFormData] = useState({
    full_name: '', email: '', phone: '', subject: '',
    company: '', website: '', services: [], requirements: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleCheckboxChange = (serviceName) => {
    setFormData((prev) => {
      const currentServices = [...prev.services];
      const updated = currentServices.includes(serviceName)
        ? currentServices.filter((s) => s !== serviceName)
        : [...currentServices, serviceName];
      return { ...prev, services: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: '', text: '' });

    const templateParams = {
      from_name: formData.full_name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      company: formData.company || '',       // Use empty string instead of 'N/A'
      website: formData.website || '',       // Use empty string instead of 'N/A'
      services: formData.services.join(', ') || '',
      requirements: formData.requirements || '',
      to_email: 'ibraineshrishti@gmail.com'
    };

    emailjs.send(
      'service_n80kbgh',
      'template_8zl1q62',
      templateParams,
      'KU3a_1qwKVe090Dea'
    )
    .then(() => {
      setStatusMsg({ type: 'success', text: 'Inquiry sent successfully to Shrishti!' });
      setFormData({
        full_name: '', email: '', phone: '', subject: '',
        company: '', website: '', services: [], requirements: ''
      });
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setStatusMsg({ type: 'error', text: 'Failed to send inquiry. Please try again.' });
    })
    .finally(() => setLoading(false));
  };

  return (
    <section className="w-full bg-white relative overflow-hidden" style={{ fontFamily: "'Lora', serif" }}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 relative z-10">
        <div className="lg:col-span-7 p-8 md:p-14 lg:p-20 bg-white border-r border-slate-100">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-tight mb-12">Project Brief.</h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { key: 'full_name', label: 'Full Name*', type: 'text', placeholder: 'John Doe', required: true },
                { key: 'email', label: 'Email Address*', type: 'email', placeholder: 'john@example.com', required: true },
                { key: 'phone', label: 'Phone Number*', type: 'tel', placeholder: '+91 00000 00000', required: true },
                { key: 'subject', label: 'Subject*', type: 'text', placeholder: 'Inquiry Type', required: true },
                { key: 'company', label: 'Company Name', type: 'text', placeholder: 'Optional', required: false },
                { key: 'website', label: 'Website Link', type: 'url', placeholder: 'www.example.com', required: false },
              ].map((field, idx) => (
                <div key={idx} className="group relative pt-4">
                  <label className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{field.label}</label>
                  <input type={field.type} name={field.key} value={formData[field.key]} onChange={handleChange} required={field.required} className="w-full bg-transparent border-b border-slate-200 pb-2 pt-3 outline-none focus:border-[#2c66f6] transition-all text-slate-800" placeholder={field.placeholder} />
                </div>
              ))}
            </div>

            <div className="space-y-5 pt-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 block mb-2">Services Required</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                {services.map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group w-fit">
                    <input type="checkbox" className="peer sr-only" checked={formData.services.includes(service)} onChange={() => handleCheckboxChange(service)} />
                    <span className="text-slate-500 text-[14px] font-medium peer-checked:text-slate-900">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="group relative pt-4">
              <label className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Requirements</label>
              <textarea rows="2" name="requirements" value={formData.requirements} onChange={handleChange} className="w-full bg-transparent border-b border-slate-200 pb-2 pt-3 outline-none focus:border-[#2c66f6] transition-all text-slate-800 resize-none mt-2" placeholder="Share a brief of your requirements..." />
            </div>

            {statusMsg.text && (
              <div className={`p-4 rounded-md text-[14px] font-medium ${statusMsg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                {statusMsg.text}
              </div>
            )}

            <button type="submit" disabled={loading} className="flex items-center gap-5 group mt-8 cursor-pointer border-none bg-transparent disabled:opacity-50">
              <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#ffb400] transition-all">
                <FiArrowUpRight size={24} />
              </div>
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-900">{loading ? 'Sending...' : 'Send Inquiry'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;