import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ClipboardList, User, AtSign } from 'lucide-react';
const API = import.meta.env.VITE_API_URL || "https://yogabackend-ehoa.onrender.com";
const Contactus = () => {

    const mapLocation = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6821.540730740125!2d75.69942184371165!3d31.254779697346418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1771615581195!5m2!1sen!2sin";

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Popup state
    const [popupMsg, setPopupMsg] = useState("");

    const topics = [
        { label: "Book a Trial", emoji: "🌊" },
        { label: "Class Schedule", emoji: "🗓️" },
        { label: "Membership Plans", emoji: "💎" },
        { label: "Private Sessions", emoji: "🧘" },
        { label: "General Query", emoji: "💬" }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        setPopupMsg("");
        setLoading(true);

        try {
            const res = await fetch(`${API}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message: `${subject ? `Subject: ${subject}\n\n` : ""}${message}`
                }),
            });
            if (!res.ok) {
                throw new Error("Server error");
            }
            const data = await res.json();

            if (data.success) {

                setPopupMsg("Message sent successfully 🧘 Our team will contact you soon.");

                setTimeout(() => {
                    setPopupMsg("");
                }, 4000);

                // Clear form
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");

            } else {
                setPopupMsg("Failed to send message. Please try again.");
            }

        } catch (err) {
            setPopupMsg("Something went wrong. Please try again later.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#2D302D] pt-32 pb-12 px-6">

            {/* BLACK PREMIUM POPUP */}
            {popupMsg && (
                <div className="fixed top-28 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
                    <div className="px-8 py-4 rounded-2xl shadow-2xl bg-[#1A1C19] text-white font-medium tracking-wide border border-white/10">
                        {popupMsg}
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

                    {/* LEFT COLUMN */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-[11px] uppercase font-bold tracking-[0.6em] text-[#84947C] block mb-4">
                                Connect With Us
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                                Reach out to <br />
                                <span className="italic font-light text-[#84947C]">Yoga Bliss.</span>
                            </h1>
                            <p className="text-gray-500 leading-relaxed text-sm max-w-md">
                                Have questions about our classes or memberships? Our team is here to help you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-50"><Mail size={20} /></div>
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Email</p>
                                    <p className="text-base font-medium">hello@yogabliss.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-50"><Phone size={20} /></div>
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Phone</p>
                                    <p className="text-base font-medium">+91 2345678901</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-50"><MapPin size={20} /></div>
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Location</p>
                                    <p className="text-base font-medium">123 Zen Lane, CA 90401</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-50">
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-4 rounded-2xl bg-[#F8F8F8] outline-none text-sm"
                                    />
                                </div>

                                <div className="relative">
                                    <AtSign size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-4 rounded-2xl bg-[#F8F8F8] outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="relative">
                                <ClipboardList size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="What are you looking for?"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F8F8F8] outline-none text-sm"
                                />
                            </div>

                            {/* QUICK TOPICS BACK */}
                            <div className="flex flex-wrap gap-2">
                                {topics.map((topic, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setSubject(topic.label)}
                                        className={`px-4 py-2 rounded-full border text-[11px] font-medium transition-all flex items-center gap-2 
                                        ${subject === topic.label
                                                ? 'bg-[#84947C] text-white border-[#84947C]'
                                                : 'bg-white text-[#2D302D] border-gray-200 hover:border-[#84947C] hover:text-[#84947C]'}`}
                                    >
                                        {topic.label} {topic.emoji}
                                    </button>
                                ))}
                            </div>

                            {/* Message */}
                            <textarea
                                rows="4"
                                placeholder="Tell us more..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full p-4 rounded-2xl bg-[#F8F8F8] outline-none text-sm resize-none"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2
                                ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[#2D302D] hover:bg-black text-white"
                                    }`}
                            >
                                {loading ? "Sending..." : "SEND MESSAGE"}
                                <Send size={12} />
                            </button>

                        </form>
                    </div>
                </div>

                {/* MAP */}
                <div className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-sm border-8 border-white">
                    <iframe
                        src={mapLocation}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="eager"
                        title="Studio Location"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contactus;