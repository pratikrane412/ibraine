import React, { useState } from 'react';
import { Headphones } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactInput = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: '', text: '' });

    emailjs.send(
      'service_n80kbgh',
      'template_fape8qn',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'shrishti@digitalskillinstitute.com',
      },
      'KU3a_1qwKVe090Dea'
    )
    .then(() => {
      setStatusMsg({ type: 'success', text: 'Message sent to Shrishti successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatusMsg({ type: 'error', text: 'Failed to send message. Please try again.' });
    })
    .finally(() => setLoading(false));
  };

  return (
    <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 shadow-sm">
            <Headphones size={24} />
          </div>
          <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
            Let's Talk with <br /> Experienced <br />
            <span className="text-marker">Digital Marketing</span> <br /> Consultant
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
            Ready to take your online presence to the next level? Our team of experts is here to help!
          </p>
          <div className="pt-4">
            <p className="text-[#ffb400] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p>
            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
              <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span> +91 9321111753
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone" required className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message..." rows="5" required className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm resize-none"></textarea>

              {statusMsg.text && (
                <p className={`text-sm ${statusMsg.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {statusMsg.text}
                </p>
              )}

              <button type="submit" disabled={loading} className="w-full sm:w-auto border-2 border-brand-yellow text-brand-yellow px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-yellow hover:text-white transition-all duration-300 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInput;