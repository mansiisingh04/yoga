
// import React, { useState, useEffect } from 'react';
// import { Mail, Instagram, Phone, Award, Music, Zap, Wind, Anchor, Activity, Sparkles, Heart, Leaf, Sun, Brain, Target, Star } from 'lucide-react';

// const LandingPage = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [yogaSlide, setYogaSlide] = useState(0);

//     const stickyNotes = [
//         { text: "Child's pose for 2 mins releases lower back tension. 🧘‍♀️", icon: <Sun size={18} />, bg: "bg-[#F1F4F0]", shadow: "rgba(132, 148, 124, 0.2)" },
//         { text: "Eating magnesium-rich foods helps muscle recovery. 🥑", icon: <Leaf size={18} />, bg: "bg-[#F9F9F1]", shadow: "rgba(165, 165, 141, 0.2)" },
//         { text: "Try 4-7-8 breathing to calm your nervous system. ✨", icon: <Brain size={18} />, bg: "bg-[#F0F4F6]", shadow: "rgba(157, 180, 192, 0.2)" }
//     ];

//     const yogaSlideshow = [
//         { title: "Power Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500", desc: "Build heat & endurance" },
//         { title: "Aerial Yoga", img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=500", desc: "Defy gravity, find space" },
//         { title: "Meditation", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500", desc: "Mental clarity & focus" }
//     ];

//     useEffect(() => {
//         const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % stickyNotes.length), 4000);
//         const slideTimer = setInterval(() => setYogaSlide((prev) => (prev + 1) % yogaSlideshow.length), 5000);
//         return () => { clearInterval(timer); clearInterval(slideTimer); };
//     }, []);

//     const yogaTypes = [
//         { title: "Flexibility & Strength", name: "Vinyasa Flow", icon: <Zap size={14} />, img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400" },
//         { title: "Yoga for Pain Relief", name: "Hatha Restorative", icon: <Activity size={14} />, img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400" },
//         { title: "Yoga Posture", name: "Ashtanga Yoga", icon: <Anchor size={14} />, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" },
//         { title: "Stress & Anxiety", name: "Yin Yoga", icon: <Wind size={14} />, img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=400" }
//     ];

//     return (
//         <div className="w-full bg-[#FAF9F6] text-[#2D302D] font-sans antialiased">

//             {/* 1. HERO SECTION */}
//             <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
//                 <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 brightness-75">
//                     <source src="yoga-bg.mp4" type="video/mp4" />
//                 </video>
//                 <div className="absolute inset-0 bg-black/20 z-[1]" />
//                 <div className="relative z-10 text-center px-4">
//                     <span className="inline-block text-[10px] uppercase font-bold tracking-[0.6em] mb-4 text-white">Mind • Body • Soul</span>
//                     <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
//                         Find your <span className="italic font-light text-[#E9EDC9]">peace</span>, <br />
//                         Keep your <span className="font-bold">power.</span>
//                     </h1>

//                     {/* NEW HERO BUTTONS */}
//                     <div className="flex flex-row items-center justify-center gap-4">
//                         <button className="bg-[#E9EDC9] text-[#2D302D] px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
//                             Start Free Trial
//                         </button>
//                         <button className="bg-transparent border border-white/40 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//                             Join Now
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* 2. MARQUEE STRIPE */}
//             <div className="bg-[#EDEEE9] py-3 border-y border-[#84947C]/10 overflow-hidden flex relative z-20">
//                 <div className="flex animate-marquee whitespace-nowrap items-center">
//                     {[1, 2, 3, 4, 5, 6].map((i) => (
//                         <div key={i} className="flex items-center mx-10 space-x-12">
//                             <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#84947C]"><Sparkles size={12} /> Rejuvenate</span>
//                             <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#5A6355]"><Heart size={12} /> Organic</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* 3. COLLAGE & QUOTE SECTION */}
//             <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col gap-12">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto lg:mx-0">
//                         <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300" className="rounded-xl h-24 w-full object-cover" alt="y1" />
//                         <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300" className="rounded-xl h-24 w-full object-cover" alt="y2" />
//                         <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=300" className="rounded-xl h-24 w-full object-cover" alt="y3" />
//                         <div className="col-span-2 overflow-hidden rounded-2xl">
//                             <img src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?w=500" className="h-36 w-full object-cover" alt="y4" />
//                         </div>
//                         <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300" className="rounded-xl h-36 w-full object-cover shadow-sm" alt="y5" />
//                     </div>

//                     <div className="flex flex-col items-center lg:items-start space-y-10">
//                         <div className="w-full">
//                             <p className="text-2xl md:text-3xl font-serif italic border-l-4 border-[#84947C] pl-6 leading-tight">
//                                 "The soul always knows what to do to heal itself."<br />
//                                 <span className="text-lg text-[#84947C] font-light mt-2 block italic">Every breath is a second chance.</span>
//                             </p>
//                         </div>

//                         <div className="flex flex-row justify-center lg:justify-center w-full gap-6">
//                             <div className={`p-5 w-44 h-44 rounded-[2.5rem] transition-all duration-1000 animate-cool-float ${stickyNotes[currentSlide].bg} shadow-lg flex flex-col justify-between`}>
//                                 <div key={currentSlide} className="animate-slide-up space-y-2">
//                                     <div className="p-2 bg-white/60 w-fit rounded-xl backdrop-blur-sm">{stickyNotes[currentSlide].icon}</div>
//                                     <p className="text-[11px] font-serif italic leading-relaxed">"{stickyNotes[currentSlide].text}"</p>
//                                 </div>
//                                 <div className="flex gap-1">
//                                     {stickyNotes.map((_, i) => (
//                                         <div key={i} className={`h-1 rounded-full transition-all duration-700 ${i === currentSlide ? 'bg-black w-5' : 'bg-black/10 w-1.5'}`} />
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden relative shadow-lg group animate-cool-float" style={{ animationDelay: '1s' }}>
//                                 <img src={yogaSlideshow[yogaSlide].img} className="w-full h-full object-cover transition-transform duration-700" alt="slide" />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
//                                     <h4 className="text-white font-serif text-[13px]">{yogaSlideshow[yogaSlide].title}</h4>
//                                     <p className="text-white/70 text-[7px] uppercase tracking-widest">{yogaSlideshow[yogaSlide].desc}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* UNIQUE NEEDS */}
//             <section className="py-8 px-6 max-w-7xl mx-auto">
//                 <h2 className="text-xl font-serif mb-6 flex items-center gap-3">For Your Unique Needs <span className="h-px flex-1 bg-black/5"></span></h2>
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                     {yogaTypes.map((item, idx) => (
//                         <div key={idx} className="relative rounded-[1.5rem] h-56 overflow-hidden group shadow-md">
//                             <img src={item.img} className="w-full h-full object-cover" />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//                             <div className="absolute bottom-4 left-4 right-4">
//                                 <div className="flex items-center gap-2 mb-1">
//                                     <span className="text-white/80">{item.icon}</span>
//                                     <span className="text-white text-[8px] font-bold uppercase tracking-widest">{item.name}</span>
//                                 </div>
//                                 <p className="text-white text-sm font-bold leading-tight">{item.title}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* 4. INSTRUCTOR SECTION */}
//             <section className="bg-white py-16 px-6 border-y border-gray-100">
//                 <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
//                     <div className="relative">
//                         <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400" className="w-52 h-72 object-cover rounded-[2rem] shadow-xl" alt="trainer" />
//                         <div className="absolute -bottom-4 -right-4 bg-[#E9EDC9] p-4 rounded-2xl shadow-lg">
//                             <p className="text-xs font-bold text-[#84947C]">10+ Years</p>
//                             <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Experience</p>
//                         </div>
//                     </div>
//                     <div className="text-left flex-1">
//                         <span className="text-[#84947C] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
//                             <Award size={14} /> Certified Expert Mentorship
//                         </span>
//                         <h2 className="text-4xl font-serif mt-2 mb-4">Master the <span className="italic font-light text-[#84947C]">Art of Form.</span></h2>
//                         <button className="text-[#84947C] border-2 border-[#84947C] px-8 py-3 rounded-full text-[10px] font-bold uppercase hover:bg-[#84947C] hover:text-white transition-all">
//                             Meet Our Instructors
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* 5. ZUMBA SECTION */}
//             <section className="py-12 px-6">
//                 <div className="max-w-5xl mx-auto bg-[#FFF9F5] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-[#FF8A50]/10 shadow-sm">
//                     <div className="w-full md:w-1/3">
//                         <img src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=500" className="w-full h-56 object-cover rounded-[2rem] shadow-md" alt="Zumba" />
//                     </div>
//                     <div className="w-full md:w-2/3 text-left space-y-4">
//                         <div className="flex items-center gap-2 text-[#FF8A50]">
//                             <Music size={16} />
//                             <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Dance & Fitness</span>
//                         </div>
//                         <h3 className="text-3xl font-serif italic text-[#1A1C19]">Feel the Rhythm: <span className="text-[#FF8A50]">Zumba Collective</span></h3>
//                         <p className="text-gray-500 text-sm leading-relaxed max-w-md">
//                             High-energy dance sessions that feel more like a party than a workout. Burn calories while moving to global beats.
//                         </p>
//                         <button className="bg-[#FF8A50]/10 text-[#FF8A50] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#FF8A50] hover:text-white transition-all">
//                             Join the Beat
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* 6. ONLINE/OFFLINE + FREE TRIAL */}
//             <section className="py-20 px-6 bg-[#F2F1ED]">
//                 <div className="max-w-5xl mx-auto space-y-8 text-center">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
//                         <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer">
//                             <img src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="online" />
//                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                                 <h3 className="text-white text-3xl font-serif">Online Session</h3>
//                             </div>
//                         </div>
//                         <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer">
//                             <img src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="offline" />
//                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                                 <h3 className="text-white text-3xl font-serif">Offline Session</h3>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="pt-4">
//                         <button className="bg-[#FF8A50] text-white px-12 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
//                             Book a Free Trial Session
//                         </button>
//                         <p className="text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-widest">No Credit Card Required</p>
//                     </div>
//                 </div>
//             </section>

//             {/* 7. FOOTER */}
//             <footer className="bg-black text-white pt-16 pb-12 px-6">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
//                     <div className="space-y-4">
//                         <h3 className="font-serif text-3xl">Yoga Bliss.</h3>
//                         <p className="text-gray-400 text-sm italic">"Inhale the future, exhale the past."</p>
//                     </div>
//                     <div className="space-y-4">
//                         <h4 className="text-[10px] uppercase font-bold text-[#84947C]">Location</h4>
//                         <p className="text-xs text-gray-300">45 Ocean Breeze Blvd, Wellness Suite 210<br />Santa Monica, CA 90401</p>
//                     </div>
//                     <div className="space-y-4">
//                         <h4 className="text-[10px] uppercase font-bold text-[#84947C]">Connect</h4>
//                         <div className="flex gap-6 text-gray-300">
//                             <Mail size={18} className="hover:text-[#84947C] cursor-pointer" />
//                             <Instagram size={18} className="hover:text-[#84947C] cursor-pointer" />
//                             <Phone size={18} className="hover:text-[#84947C] cursor-pointer" />
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//                 @keyframes cool-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
//                 @keyframes slide-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
//                 .animate-marquee { animation: marquee 35s linear infinite; }
//                 .animate-cool-float { animation: cool-float 6s ease-in-out infinite; }
//                 .animate-slide-up { animation: slide-up 0.8s ease-out; }
//             `}} />
//         </div>
//     );
// };

// export default LandingPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Instagram, Phone, Music, Zap, Anchor, Activity, Sparkles, Heart, Wind, Sun, Flower2, Star, Waves, Leaf, Award as AwardIcon } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    const loadUser = () => {
        try {
            const storedUser = localStorage.getItem("user");

            if (!storedUser || storedUser === "undefined") {
                setUser(null);
                return;
            }

            setUser(JSON.parse(storedUser));
        } catch (error) {
            console.log("Invalid user in localStorage");
            localStorage.removeItem("user");
            setUser(null);
        }
    };
    const handleFreeTrialClick = () => {
        if (storedUser) {
            // User is logged in → go to courses
            navigate("/courses");
        } else {
            // User is not logged in → go to signup/login
            navigate("/auth", { state: { mode: 'signup' } });
        }
    };

    const yogaTypes = [
        { title: "Flexibility & Strength", name: "Vinyasa Flow", icon: <Zap size={14} />, img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400" },
        { title: "Yoga for Pain Relief", name: "Hatha Restorative", icon: <Activity size={14} />, img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400" },
        { title: "Yoga Posture", name: "Ashtanga Yoga", icon: <Anchor size={14} />, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" },
        { title: "Stress & Anxiety", name: "Yin Yoga", icon: <Wind size={14} />, img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=400" }
    ];

    return (
        <div className="w-full bg-[#FAF9F6] text-[#2D302D] font-sans antialiased">

            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-top z-0 brightness-[0.85]"
                >
                    <source src="yoga-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/10 z-[1]" />
                <div className="relative z-10 text-center px-4 mt-[-5vh]">
                    <span className="inline-block text-[10px] uppercase font-bold tracking-[0.6em] mb-4 text-white drop-shadow-md">Mind • Body • Soul</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
                        Find your <span className="italic font-light text-[#E9EDC9]">peace</span>, <br />
                        Keep your <span className="font-bold">power.</span>
                    </h1>

                    <div className="flex flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/courses')}
                            className="bg-[#E9EDC9] text-[#2D302D] px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl cursor-pointer"
                        >
                            Start Free Trial
                        </button>

                        <button
                            onClick={() => navigate('/instructor')}
                            className="bg-transparent border border-white/60 backdrop-blur-md text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer"
                        >
                            Meet Instructor
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. MARQUEE STRIPE */}
            <div className="bg-[#EDEEE9] py-4 border-y border-[#84947C]/10 overflow-hidden flex relative z-20">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center mx-10 space-x-12">
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#84947C]"><Wind size={12} /> Breathe</span>
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#5A6355]"><Leaf size={12} /> Restore</span>
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#84947C]"><Sun size={12} /> Rejuvenate</span>
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#5A6355]"><Flower2 size={12} /> Align</span>
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#84947C]"><Star size={12} /> Glow</span>
                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#5A6355]"><Waves size={12} /> Flow</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. CENTERED QUOTE SECTION */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <div className="space-y-8">
                    <p className="text-2xl md:text-3xl font-serif italic text-[#4A4D4A] leading-relaxed">
                        "The soul always knows what to do to heal itself. <br />
                        True yoga is not about the shape of your body, <br />
                        but the shape of your life."
                    </p>
                    <div className="max-w-xl mx-auto">
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Discover a sanctuary where every movement is an invitation to return to yourself.
                            Through mindful flow and intentional stillness, we bridge the gap between
                            who you are and who you are meant to be.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-6 pt-4">
                        <div className="h-px w-12 bg-[#84947C]/20"></div>
                        <p className="text-[11px] uppercase font-bold tracking-[0.4em] text-[#84947C] italic">
                            Inhale the future, exhale the past
                        </p>
                        <div className="h-px w-12 bg-[#84947C]/20"></div>
                    </div>
                </div>
            </section>

            {/* 4. UNIQUE NEEDS */}
            <section className="py-8 px-6 max-w-7xl mx-auto">
                <h2 className="text-xl font-serif mb-8 flex items-center gap-4 text-gray-400">
                    Your Personal Practice <span className="h-px flex-1 bg-black/5"></span>
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {yogaTypes.map((item, idx) => (
                        <div key={idx}
                            onClick={() => navigate('/courses')}
                            className="relative rounded-[2rem] h-64 overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[#E9EDC9]">{item.icon}</span>
                                    <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">{item.name}</span>
                                </div>
                                <p className="text-white text-base font-serif italic">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. INSTRUCTOR SECTION */}
            <section className="bg-white py-20 px-6 border-y border-gray-50">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400" className="w-60 h-80 object-cover rounded-[2.5rem] shadow-2xl" alt="trainer" />
                        <div className="absolute -bottom-6 -right-6 bg-[#E9EDC9] p-6 rounded-3xl shadow-xl">
                            <p className="text-sm font-black text-[#84947C]">EST. 2014</p>
                            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Certified Studio</p>
                        </div>
                    </div>
                    <div className="text-left flex-1 space-y-6">
                        <span className="text-[#84947C] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <AwardIcon size={14} /> Global Yoga Alliance Certified
                        </span>
                        <h2 className="text-5xl font-serif leading-[1.1]">Master the <span className="italic font-light text-[#84947C]">Form,</span> master the <span className="font-bold">mind.</span></h2>
                        <button
                            onClick={() => navigate('/instructor')}
                            className="text-[#84947C] border border-[#84947C] px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#84947C] hover:text-white transition-all cursor-pointer"
                        >
                            Meet Our Mentor
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. ZUMBA SECTION */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto bg-[#FFF9F5] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-[#FF8A50]/5 shadow-sm">
                    <div className="w-full md:w-1/3">
                        <img src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=500" className="w-full h-64 object-cover rounded-[2.5rem] shadow-lg" alt="Zumba" />
                    </div>
                    <div className="w-full md:w-2/3 text-left space-y-6">
                        <div className="flex items-center gap-2 text-[#FF8A50]">
                            <Music size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">The Dance Collective</span>
                        </div>
                        <h3 className="text-4xl font-serif italic text-[#1A1C19]">Feel the Beat: <span className="text-[#FF8A50]">Soul Zumba</span></h3>
                        <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                            An explosive blend of movement and music. High-energy sessions designed to elevate your heart rate and your spirit simultaneously.
                        </p>
                        <button
                            onClick={() => navigate('/gallery')}
                            className="bg-[#FF8A50] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:shadow-xl transition-all cursor-pointer"
                        >
                            View Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* 7. ONLINE/OFFLINE + FREE TRIAL */}
            <section className="py-24 px-6 bg-[#F2F1ED]">
                <div className="max-w-5xl mx-auto space-y-12 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div
                            onClick={() => navigate('/courses')}
                            className="relative h-72 rounded-[3rem] overflow-hidden group cursor-pointer shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="online" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[1px]">
                                <h3 className="text-white text-3xl font-serif">Digital Studio</h3>
                            </div>
                        </div>
                        <div
                            onClick={() => navigate('/courses')}
                            className="relative h-72 rounded-[3rem] overflow-hidden group cursor-pointer shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="offline" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[1px]">
                                <h3 className="text-white text-3xl font-serif">In-Person Class</h3>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        {/* THE BOTTOM FREE TRIAL BUTTON */}
                        <button
                            onClick={() => navigate('/courses')}  // <-- attach here too
                            className="bg-[#FF8A50] text-white px-16 py-6 rounded-[2rem] text-xs font-bold uppercase tracking-[0.3em] shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
                        >
                            Start Free Trial for 3 Days
                        </button>
                        <p className="text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-widest">No Commitment • Pure Bliss</p>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-marquee { animation: marquee 40s linear infinite; }
            `}} />
        </div>
    );
};

export default LandingPage;