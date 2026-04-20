import { useState } from "react";
import { Headphones, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// ✅ Points to your PHP file on Hostinger
// When deployed, this becomes: https://yourdomain.com/contact.php
const API_URL = "/contact.php";

export default function ContactSection({
    headingLine1 = "Let's Talk with",
    headingLine2 = "Experienced",
    headingHighlight = "Web Development",
    headingLine3 = "Consultant",
}) {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
            setStatus("error");
            setErrorMsg("Please fill in all fields before submitting.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setStatus("error");
            setErrorMsg("Please enter a valid email address.");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Something went wrong.");

            setStatus("success");
            setForm({ name: "", email: "", phone: "", message: "" });

        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

            {/* Decorative puzzle piece */}
            <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block animate-floating">
                <div className="w-24 h-24 lg:w-32 lg:h-32 text-blue-500">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                    </svg>
                </div>
            </div>
            <div className="absolute top-4 left-[45%] w-6 h-6 bg-blue-500 rounded-full opacity-80 hidden lg:block" />
            <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT */}
                <div className="space-y-8">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 shadow-sm">
                        <Headphones size={24} />
                    </div>
                    <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                        {headingLine1} <br />
                        {headingLine2} <br />
                        <span className="text-marker">{headingHighlight}</span> <br />
                        {headingLine3}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                        Ready to build a website that truly works for your business? Our team of experts is here to help! Fill out the form, and let's start creating your digital success story today.
                    </p>
                    <div className="pt-4">
                        <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                            <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                            <a href="tel:+919321111753" className="hover:underline">
                                +91 9321111753
                            </a>
                        </p>
                    </div>
                </div>

                {/* RIGHT — FORM */}
                <div className="relative">
                    <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
                        <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                            <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                            <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">

                        {/* SUCCESS STATE */}
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center space-y-5">
                                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle size={32} className="text-green-500" />
                                </div>
                                <h3 className="font-lora text-2xl text-[#1a162d]">Message Sent!</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 border-2 border-gray-200 text-gray-500 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-gray-400 transition-colors duration-200"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    disabled={status === "loading"}
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm disabled:opacity-50"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    disabled={status === "loading"}
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm disabled:opacity-50"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone"
                                    disabled={status === "loading"}
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm disabled:opacity-50"
                                />
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Message..."
                                    rows="5"
                                    disabled={status === "loading"}
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm resize-none disabled:opacity-50"
                                />

                                {/* Error */}
                                {status === "error" && errorMsg && (
                                    <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-xl">
                                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                        <span>{errorMsg}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full sm:w-auto flex items-center gap-2 border-2 border-[#FDB813] text-[#FDB813] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FDB813] hover:text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 size={14} className="animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        )}

                        <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                            Let's Build Your <span className="text-[#1a162d] font-black">Dream Website!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}