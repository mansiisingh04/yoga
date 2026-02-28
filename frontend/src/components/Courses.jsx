
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* ── THEME ── */
const T = {
    bg: "#F7F5F0",
    bgAlt: "#EFEDE8",
    card: "#FFFFFF",
    text: "#1C1C1A",
    textMid: "#4A4A46",
    textLight: "#8A8A82",
    border: "#E2DED8",
    accent: "#5C6B3E",
    accentLight: "#7A8F52",
    coral: "#C4614A",
    gold: "#B8956A",
};

const COURSES = [
    {
        id: 1,
        title: "Vinyasa Flow Foundations",
        subtitle: "Move with breath. Flow with life.",
        level: "Beginner",
        duration: "6 Weeks",
        sessions: "12 Sessions",
        price: "₹4,999",
        originalPrice: "₹7,999",
        rating: 4.9,
        enrolled: 2341,
        instructor: "Priya Sharma",
        instructorRole: "Lead Instructor · RYT-500",
        instructorImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&q=80",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80",
        color: "#5C6B3E", colorLight: "#7A8F52",
        tag: "Most Popular",
        includes: ["12 live sessions (60 min each)", "Recorded replays for 30 days", "Breathwork & alignment guide PDF", "Private WhatsApp community", "Certificate of completion", "1 free private consultation"],
        curriculum: [
            { week: "Week 1–2", topic: "Sun Salutations & Breath Sync" },
            { week: "Week 3–4", topic: "Standing Flows & Balance" },
            { week: "Week 5–6", topic: "Inversions & Cool-down Sequences" },
        ],
        schedule: "Tues & Thurs · 7:00 AM IST",
        startDate: "March 10, 2025",
        spotsLeft: 7,
        description: "A transformative beginner journey teaching you to synchronize breath with movement. Perfect for those stepping onto the mat for the first time or returning after a break. Build strength, flexibility, and a lasting practice.",
    },
    {
        id: 2,
        title: "Pranayama & Inner Silence",
        subtitle: "Breathe deeper. Live fuller.",
        level: "All Levels",
        duration: "4 Weeks",
        sessions: "8 Sessions",
        price: "₹3,499",
        originalPrice: "₹5,500",
        rating: 4.8,
        enrolled: 1870,
        instructor: "Priya Sharma",
        instructorRole: "Lead Instructor · RYT-500",
        instructorImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&q=80",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80",
        color: "#C4614A", colorLight: "#D4826E",
        tag: "Bestseller",
        includes: ["8 live sessions (45 min each)", "Guided audio meditations (MP3)", "Pranayama technique workbook", "Lifetime access to recordings", "Certificate of completion"],
        curriculum: [
            { week: "Week 1", topic: "Nadi Shodhana & Kapalabhati" },
            { week: "Week 2", topic: "Bhramari & Ujjayi Breath" },
            { week: "Week 3", topic: "Retention & Kumbhaka" },
            { week: "Week 4", topic: "Integration & Daily Practice" },
        ],
        schedule: "Mon & Wed · 6:30 PM IST",
        startDate: "March 15, 2025",
        spotsLeft: 14,
        description: "Dive deep into the ancient art of breath control. Transform your nervous system, sharpen your focus, and awaken a stillness within you that no external noise can disturb.",
    },
    {
        id: 3,
        title: "Yin Yoga & Deep Release",
        subtitle: "Surrender. Restore. Renew.",
        level: "Intermediate",
        duration: "5 Weeks",
        sessions: "10 Sessions",
        price: "₹5,499",
        originalPrice: "₹8,200",
        rating: 5.0,
        enrolled: 984,
        instructor: "Leila Torres",
        instructorRole: "Yin Specialist · RYT-500",
        instructorImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&q=80",
        img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=700&q=80",
        color: "#5C6B3E", colorLight: "#7A8F52",
        tag: "⭐ 5.0 Rated",
        includes: ["10 live sessions (90 min each)", "Yoga Nidra sleep recordings", "Yin pose & meridian map PDF", "Sound healing audio pack", "Private community access", "Certificate of completion"],
        curriculum: [
            { week: "Week 1–2", topic: "Lower Body: Hips, Legs & Spine" },
            { week: "Week 3", topic: "Upper Body: Shoulders & Chest" },
            { week: "Week 4–5", topic: "Full Body Flow & Yoga Nidra" },
        ],
        schedule: "Fri & Sun · 5:30 PM IST",
        startDate: "March 20, 2025",
        spotsLeft: 3,
        description: "A deeply restorative practice targeting connective tissue and fascia. Long, passive holds melt away years of tension. Ideal for deep healing, improved flexibility, and profound relaxation.",
    },
    {
        id: 4,
        title: "Power Yoga & Strength",
        subtitle: "Build power. Own your body.",
        level: "Advanced",
        duration: "8 Weeks",
        sessions: "16 Sessions",
        price: "₹6,999",
        originalPrice: "₹10,500",
        rating: 4.7,
        enrolled: 756,
        instructor: "Arjun Mehta",
        instructorRole: "Ashtanga Specialist · RYT-300",
        instructorImg: "https://images.unsplash.com/photo-1607471237050-bf9e3e89d900?w=200&q=80",
        img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=700&q=80",
        color: "#B8956A", colorLight: "#C9A87C",
        tag: "Intensive",
        includes: ["16 live sessions (75 min each)", "Strength & conditioning plan PDF", "Nutrition for yogis guide", "Weekly check-ins with Arjun", "Progress tracking dashboard", "Certificate of completion"],
        curriculum: [
            { week: "Week 1–2", topic: "Core Activation & Foundations" },
            { week: "Week 3–4", topic: "Arm Balances & Inversions" },
            { week: "Week 5–6", topic: "Advanced Sequencing" },
            { week: "Week 7–8", topic: "Full Practice Integration" },
        ],
        schedule: "Mon · Wed · Fri · 8:00 AM IST",
        startDate: "April 1, 2025",
        spotsLeft: 9,
        description: "An intensive strength-building program combining Ashtanga principles with modern athletic conditioning. Expect handstands, arm balances, and a body you can trust. Not for the faint-hearted.",
    },
    {
        id: 5,
        title: "Meditation Masterclass",
        subtitle: "Still the mind. Free the soul.",
        level: "All Levels",
        duration: "3 Weeks",
        sessions: "6 Sessions",
        price: "₹2,499",
        originalPrice: "₹3,999",
        rating: 4.9,
        enrolled: 3102,
        instructor: "Priya Sharma",
        instructorRole: "Lead Instructor · RYT-500",
        instructorImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&q=80",
        img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=700&q=80",
        color: "#5C6B3E", colorLight: "#7A8F52",
        tag: "🔥 Trending",
        includes: ["6 live sessions (30 min each)", "21-day guided meditation series", "Mindfulness journal template", "Binaural beats audio pack", "Lifetime community access", "Certificate of completion"],
        curriculum: [
            { week: "Week 1", topic: "Foundations: Breath & Focus" },
            { week: "Week 2", topic: "Body Scan & Visualisation" },
            { week: "Week 3", topic: "Open Awareness & Daily Integration" },
        ],
        schedule: "Sun · 10:00 AM IST",
        startDate: "March 8, 2025",
        spotsLeft: 22,
        description: "The most accessible course on the platform. Learn science-backed meditation techniques that reduce anxiety, sharpen focus, and create a foundation of daily calm. Perfect for beginners.",
    },
    {
        id: 6,
        title: "Aerial Yoga Explorer",
        subtitle: "Defy gravity. Find freedom.",
        level: "Beginner–Intermediate",
        duration: "6 Weeks",
        sessions: "12 Sessions",
        price: "₹7,999",
        originalPrice: "₹12,000",
        rating: 4.8,
        enrolled: 412,
        instructor: "Kenji Nakamura",
        instructorRole: "Aerial Expert · RYT-300",
        instructorImg: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=200&q=80",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80",
        color: "#C4614A", colorLight: "#D4826E",
        tag: "New",
        includes: ["12 live sessions (60 min)", "Hammock setup guide & safety PDF", "Flexibility prep program", "Silk care & maintenance guide", "Access to replay library", "Certificate of completion"],
        curriculum: [
            { week: "Week 1–2", topic: "Hammock Basics & Trust Building" },
            { week: "Week 3–4", topic: "Inversions & Cocoon Poses" },
            { week: "Week 5–6", topic: "Flow Sequences in the Air" },
        ],
        schedule: "Wed & Sat · 9:00 AM IST",
        startDate: "April 5, 2025",
        spotsLeft: 5,
        description: "Experience yoga like never before — suspended in silk, upside down, and completely free. Aerial yoga combines traditional yoga with acrobatics and dance. Equipment guidance included.",
    },
    {
        id: 7,
        title: "Aerial Yoga Explorer – 3 Day Free Trial",
        subtitle: "Defy gravity. Experience freedom.",
        level: "Beginner Friendly",
        duration: "3 Days",
        sessions: "3 Sessions",
        price: "₹0",
        originalPrice: "₹0",
        rating: 4.8,
        enrolled: 412,
        instructor: "Kenji Nakamura",
        instructorRole: "Aerial Expert · RYT-300",
        instructorImg: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=200&q=80",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80",
        color: "#C4614A",
        colorLight: "#D4826E",
        tag: "Free Trial",

        includes: [
            "3 Live Guided Sessions (60 min each)",
            "Beginner-Friendly Introduction to Aerial Yoga",
            "Basic Hammock Setup & Safety Guidance",
            "Core Strength & Flexibility Starter Flow",
            "Access to Session Replays (3 Days)",
            "Completion Badge"
        ],

        curriculum: [
            { Day: "Day 1", topic: "Introduction to Aerial Yoga & Safety Basics" },
            { Day: "Day 2", topic: "Foundational Poses & Core Activation" },
            { Day: "Day 3", topic: "Beginner Flow & Confidence Building Sequence" }
        ]
    }
];

const FILTERS = ["All", "Beginner", "Intermediate", "Advanced", "Free Trials"];

export default function CoursesPage() {
    const [mounted, setMounted] = useState(false);
    const [filter, setFilter] = useState("All");
    const [modal, setModal] = useState(null);
    const [enrollStep, setEnrollStep] = useState(0);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", exp: "beginner" });
    const [formLoading, setFormLoad] = useState(false);
    const [hoveredCard, setHovCard] = useState(null);
    const [focusedField, setFocused] = useState("");
    const modalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setMounted(true), 80);
    }, []);

    useEffect(() => {
        if (!modal) return;
        const fn = (e) => { if (modalRef.current && !modalRef.current.contains(e.target)) closeModal(); };
        setTimeout(() => document.addEventListener("mousedown", fn), 100);
        return () => document.removeEventListener("mousedown", fn);
    }, [modal]);

    useEffect(() => {
        const fn = (e) => { if (e.key === "Escape") closeModal(); };
        window.addEventListener("keydown", fn);
        return () => window.removeEventListener("keydown", fn);
    }, []);

    const openModal = (course) => {
        const token = localStorage.getItem("token");

        // If user NOT logged in → redirect to login/signup
        if (!token) {
            navigate("/auth", {
                state: {
                    mode: "signup",
                    redirectTo: "/courses"
                }
            });
            return;
        }

        // If logged in → continue normal modal flow
        setModal(course);
        setEnrollStep(0);
        setFormData({ name: "", email: "", phone: "", exp: "beginner" });
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModal(null);
        setEnrollStep(0);
        document.body.style.overflow = "";
    };

    const handleEnroll = () => {
        setFormLoad(true);
        setTimeout(() => { setFormLoad(false); setEnrollStep(2); }, 1800);
    };

    const filtered =
        filter === "All"
            ? COURSES
            : filter === "Free Trials"
                ? COURSES.filter(c => c.tag === "Free Trial")
                : COURSES.filter(c => c.level.includes(filter));

    const inpStyle = (field) => ({
        width: "100%",
        padding: "11px 14px 11px 42px",
        borderRadius: 10,
        border: `1.5px solid ${focusedField === field ? (modal?.color || T.accent) : T.border}`,
        background: focusedField === field ? "#FAFAF8" : T.bg,
        fontFamily: "system-ui, sans-serif",
        fontSize: 14, color: T.text, outline: "none",
        transition: "all 0.25s",
        boxShadow: focusedField === field ? `0 0 0 3px ${(modal?.color || T.accent)}18` : "none",
    });

    return (
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: T.bg, color: T.text, minHeight: "100vh" }}>

            {/* ══════════════════════════════════
                1. COURSES HEADING
            ══════════════════════════════════ */}
            <div style={{
                maxWidth: 1180, margin: "0 auto",
                padding: "72px 48px 0",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.75s cubic-bezier(0.4,0,0.2,1)",
            }}>
                <p style={{
                    fontFamily: "system-ui, sans-serif", fontSize: 10,
                    letterSpacing: "0.38em", textTransform: "uppercase",
                    color: T.textLight, fontWeight: 600, marginBottom: 10,
                }}>— Your Personal Practice —</p>
                <h1 style={{
                    fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300,
                    color: T.text, lineHeight: 1.18, letterSpacing: "-0.01em",
                    marginBottom: 6,
                }}>
                    Our <em style={{ fontStyle: "italic", color: T.accent }}>Courses</em>
                </h1>
                <p style={{
                    fontFamily: "system-ui, sans-serif", fontSize: 14,
                    color: T.textLight, maxWidth: 480, lineHeight: 1.75,
                    marginBottom: 0,
                }}>
                    Discover a course crafted for your journey. From your very first breath to your most advanced practice, there's a path for you here.
                </p>
            </div>

            {/* ══════════════════════════════════
                2. FILTER TABS
            ══════════════════════════════════ */}
            <div style={{
                maxWidth: 1180, margin: "0 auto",
                padding: "28px 48px 20px",
                display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
            }}>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: T.textLight, fontWeight: 600, marginRight: 6 }}>Filter by level</span>
                {FILTERS.map(f => (
                    <button key={f} onClick={() => setFilter(f)} style={{
                        padding: "7px 18px", borderRadius: 100,
                        border: `1.5px solid ${filter === f ? T.accent : T.border}`,
                        background: filter === f ? T.accent : "transparent",
                        fontFamily: "system-ui, sans-serif", fontSize: 11, letterSpacing: "0.05em",
                        color: filter === f ? "#fff" : T.textMid,
                        fontWeight: filter === f ? 700 : 500,
                        cursor: "pointer", transition: "all 0.22s",
                    }}
                        onMouseEnter={e => { if (filter !== f) { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; } }}
                        onMouseLeave={e => { if (filter !== f) { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textMid; } }}
                    >{f}</button>
                ))}
                <span style={{ marginLeft: "auto", fontFamily: "system-ui, sans-serif", fontSize: 12, color: T.textLight, fontStyle: "italic" }}>
                    {filtered.length} courses available
                </span>
            </div>

            {/* ══════════════════════════════════
                3. COURSE GRID
            ══════════════════════════════════ */}
            <div style={{
                maxWidth: 1180, margin: "0 auto",
                padding: "4px 48px 80px",
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
            }}>
                {filtered.map((course, i) => (
                    <div key={course.id}
                        onMouseEnter={() => setHovCard(course.id)}
                        onMouseLeave={() => setHovCard(null)}
                        style={{
                            background: T.card,
                            border: `1px solid ${hoveredCard === course.id ? course.color + "44" : T.border}`,
                            borderRadius: 20, overflow: "hidden",
                            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                            transform: hoveredCard === course.id ? "translateY(-5px)" : "translateY(0)",
                            boxShadow: hoveredCard === course.id ? `0 18px 48px rgba(0,0,0,0.1), 0 0 0 1px ${course.color}22` : "0 2px 12px rgba(0,0,0,0.05)",
                            opacity: mounted ? 1 : 0,
                            animation: `fadeUp 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s both`,
                            cursor: "pointer",
                        }}>

                        {/* Image */}
                        <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                            <img src={course.img} alt={course.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.88) saturate(0.82)", transform: hoveredCard === course.id ? "scale(1.06)" : "scale(1)", transition: "transform 0.65s ease" }} />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(247,245,240,0.12) 100%)" }} />
                            <div style={{ position: "absolute", top: 14, left: 14, background: course.color, borderRadius: 100, padding: "4px 12px", fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: "#fff" }}>{course.tag}</div>
                            <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.92)", borderRadius: 100, padding: "4px 12px", fontFamily: "system-ui, sans-serif", fontSize: 9, color: T.textMid, letterSpacing: "0.08em" }}>{course.level}</div>
                            {course.spotsLeft <= 5 && (
                                <div style={{ position: "absolute", bottom: 12, left: 14, background: "rgba(196,97,74,0.9)", borderRadius: 100, padding: "4px 10px", fontFamily: "system-ui, sans-serif", fontSize: 9, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 5 }}>
                                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff", display: "inline-block", animation: "pulse 1.5s ease-in-out infinite" }} />
                                    {course.spotsLeft} spots left
                                </div>
                            )}
                        </div>

                        {/* Body */}
                        <div style={{ padding: "20px 22px 24px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                                <img src={course.instructorImg} alt="" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: `1.5px solid ${T.border}` }} />
                                <div>
                                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 700, color: T.textMid }}>{course.instructor}</p>
                                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, color: T.textLight }}>{course.instructorRole}</p>
                                </div>
                                <div style={{ marginLeft: "auto" }}>
                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, fontWeight: 700, color: T.gold }}>★ {course.rating}</span>
                                </div>
                            </div>

                            <h3 style={{ fontSize: 20, fontWeight: 400, color: T.text, lineHeight: 1.2, marginBottom: 4 }}>{course.title}</h3>
                            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, color: T.textLight, fontStyle: "italic", marginBottom: 15 }}>{course.subtitle}</p>

                            <div style={{ display: "flex", gap: 6, marginBottom: 17, flexWrap: "wrap" }}>
                                {["⏱ " + course.duration, "🎬 " + course.sessions, "🧘 " + course.enrolled.toLocaleString()].map(v => (
                                    <span key={v} style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, color: T.textLight, background: T.bgAlt, padding: "4px 10px", borderRadius: 100, border: `1px solid ${T.border}` }}>{v}</span>
                                ))}
                            </div>

                            <div style={{ height: 1, background: T.border, marginBottom: 17 }} />

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div>
                                    <span style={{ fontSize: 21, fontWeight: 300, color: T.text }}>{course.price}</span>
                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: T.textLight, textDecoration: "line-through", marginLeft: 7 }}>{course.originalPrice}</span>
                                </div>
                                <button onClick={(e) => { e.stopPropagation(); openModal(course); }} style={{
                                    background: course.color, border: "none", color: "#fff",
                                    padding: "10px 20px", borderRadius: 10,
                                    fontFamily: "system-ui, sans-serif", fontSize: 10,
                                    letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700,
                                    cursor: "pointer", transition: "all 0.25s",
                                    boxShadow: `0 4px 14px ${course.color}33`,
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 22px ${course.color}44`; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 14px ${course.color}33`; }}
                                >Enroll Now →</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ══════════════════════════════════
                4. HERO QUOTE (below courses)
            ══════════════════════════════════ */}
            <div style={{
                textAlign: "center",
                borderTop: `1px solid ${T.border}`,
                borderBottom: `1px solid ${T.border}`,
                padding: "80px 48px 64px",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.75s 0.2s cubic-bezier(0.4,0,0.2,1)",
            }}>
                <p style={{
                    fontFamily: "system-ui, sans-serif", fontSize: 10,
                    letterSpacing: "0.38em", textTransform: "uppercase",
                    color: T.textLight, fontWeight: 600, marginBottom: 22,
                }}>— Your Personal Practice —</p>

                <h2 style={{
                    fontSize: "clamp(26px, 4.5vw, 56px)", fontWeight: 300,
                    fontStyle: "italic", color: T.text, lineHeight: 1.2,
                    maxWidth: 760, margin: "0 auto 26px",
                    letterSpacing: "-0.01em", paddingInline: 32,
                }}>
                    "Every class is a step closer<br />to the truest version of yourself."
                </h2>

                <p style={{
                    fontFamily: "system-ui, sans-serif", fontSize: 14,
                    color: T.textLight, maxWidth: 500,
                    margin: "0 auto 36px", lineHeight: 1.85,
                }}>
                    From your very first breath to your most advanced practice — there's a path for you here.
                </p>

                <div style={{ display: "flex", alignItems: "center", maxWidth: 480, margin: "0 auto", gap: 16 }}>
                    <div style={{ flex: 1, height: 1, background: T.border }} />
                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.35em", color: T.textLight, fontWeight: 600 }}>BEGIN YOUR JOURNEY</span>
                    <div style={{ flex: 1, height: 1, background: T.border }} />
                </div>
            </div>

            {/* ══════════════════════════════════
                5. STATS STRIP (below hero quote)
            ══════════════════════════════════ */}
            <div style={{ background: T.bgAlt, borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {[["9,000+", "Students"], ["6", "Live Courses"], ["4.9★", "Avg Rating"], ["100%", "Live Sessions"]].map(([v, l], i, arr) => (
                    <div key={l} style={{
                        padding: "24px 48px",
                        borderRight: i < arr.length - 1 ? `1px solid ${T.border}` : "none",
                        textAlign: "center",
                    }}>
                        <p style={{ fontSize: 24, fontWeight: 300, color: T.accent, marginBottom: 4, fontStyle: "italic" }}>{v}</p>
                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: T.textLight, fontWeight: 600 }}>{l}</p>
                    </div>
                ))}
            </div>

            {/* ══════════════════════════════════
                ENROLLMENT MODAL
            ══════════════════════════════════ */}
            {modal && (
                <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(28,28,26,0.5)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.25s ease" }}>
                    <div ref={modalRef} style={{ width: "100%", maxWidth: 900, maxHeight: "92vh", overflowY: "auto", background: T.card, border: `1px solid ${T.border}`, borderRadius: 24, position: "relative", animation: "slideUp 0.35s cubic-bezier(0.4,0,0.2,1)", boxShadow: "0 40px 100px rgba(0,0,0,0.16)" }}>

                        <div style={{ position: "absolute", top: 0, left: "8%", right: "8%", height: 2, background: `linear-gradient(90deg, transparent, ${modal.color}, transparent)`, borderRadius: "0 0 4px 4px" }} />

                        <button onClick={closeModal} style={{ position: "absolute", top: 18, right: 18, zIndex: 10, background: T.bgAlt, border: `1px solid ${T.border}`, color: T.textLight, width: 34, height: 34, borderRadius: "50%", cursor: "pointer", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = T.coral; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = T.coral; }}
                            onMouseLeave={e => { e.currentTarget.style.background = T.bgAlt; e.currentTarget.style.color = T.textLight; e.currentTarget.style.borderColor = T.border; }}
                        >✕</button>

                        {/* STEP 0 */}
                        {enrollStep === 0 && (
                            <div>
                                <div style={{ position: "relative", height: 240, overflow: "hidden", borderRadius: "22px 22px 0 0" }}>
                                    <img src={modal.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.62) saturate(0.8)" }} />
                                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${T.card} 0%, transparent 55%)` }} />
                                    <div style={{ position: "absolute", bottom: 28, left: 36 }}>
                                        <span style={{ display: "inline-block", background: modal.color, borderRadius: 100, padding: "4px 14px", fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: "#fff", marginBottom: 10 }}>{modal.tag}</span>
                                        <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 300, color: T.text, lineHeight: 1.15 }}>{modal.title}</h2>
                                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: T.textMid, marginTop: 5, fontStyle: "italic" }}>{modal.subtitle}</p>
                                    </div>
                                </div>

                                <div style={{ padding: "28px 36px 36px", display: "grid", gridTemplateColumns: "1fr 290px", gap: 28 }}>
                                    <div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
                                            {[["⏱", "Duration", modal.duration], ["🎬", "Sessions", modal.sessions], ["📅", "Schedule", modal.schedule], ["🗓", "Starts", modal.startDate]].map(([icon, label, val]) => (
                                                <div key={label} style={{ background: T.bgAlt, border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 14px" }}>
                                                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textLight, marginBottom: 4 }}>{icon} {label}</p>
                                                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, fontWeight: 700, color: T.textMid }}>{val}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, color: T.textMid, lineHeight: 1.9, marginBottom: 22 }}>{modal.description}</p>
                                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: modal.color, fontWeight: 700, marginBottom: 12 }}>Curriculum</p>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
                                            {modal.curriculum.map((c, i) => (
                                                <div key={i} style={{ display: "flex", gap: 14, padding: "10px 14px", background: T.bgAlt, borderRadius: 10, border: `1px solid ${T.border}`, alignItems: "flex-start" }}>
                                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: modal.color, fontWeight: 700, whiteSpace: "nowrap", minWidth: 72 }}>{c.week}</span>
                                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: T.textMid }}>{c.topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px", background: T.bgAlt, borderRadius: 14, border: `1px solid ${T.border}` }}>
                                            <img src={modal.instructorImg} alt="" style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover", border: `2px solid ${modal.color}44` }} />
                                            <div>
                                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 2 }}>{modal.instructor}</p>
                                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: T.textLight }}>{modal.instructorRole}</p>
                                            </div>
                                            <div style={{ marginLeft: "auto", textAlign: "right" }}>
                                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 16, fontWeight: 700, color: T.gold }}>★ {modal.rating}</p>
                                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, color: T.textLight }}>{modal.enrolled.toLocaleString()} students</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{ background: T.bgAlt, border: `1px solid ${T.border}`, borderRadius: 18, padding: "24px", position: "sticky", top: 20 }}>
                                            <div style={{ marginBottom: 16 }}>
                                                <span style={{ fontSize: 30, fontWeight: 300, color: T.text }}>{modal.price}</span>
                                                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, color: T.textLight, textDecoration: "line-through", marginLeft: 10 }}>{modal.originalPrice}</span>
                                                <div style={{ display: "inline-block", marginLeft: 8, background: "#EDF7ED", border: "1px solid #B2D8B2", borderRadius: 100, padding: "2px 9px" }}>
                                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, color: "#3A763A", fontWeight: 700 }}>
                                                        {Math.round((1 - parseInt(modal.price.replace(/[^\d]/g, "")) / parseInt(modal.originalPrice.replace(/[^\d]/g, ""))) * 100)}% OFF
                                                    </span>
                                                </div>
                                            </div>
                                            {modal.spotsLeft <= 5 && (
                                                <div style={{ display: "flex", alignItems: "center", gap: 7, background: "#FEF2F0", border: "1px solid #F5C6BE", borderRadius: 10, padding: "9px 12px", marginBottom: 14 }}>
                                                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.coral, display: "inline-block", animation: "pulse 1.5s ease-in-out infinite" }} />
                                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: T.coral, fontWeight: 700 }}>Only {modal.spotsLeft} spots left!</span>
                                                </div>
                                            )}
                                            <button onClick={() => setEnrollStep(1)} style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: modal.color, color: "#fff", fontFamily: "system-ui, sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 800, cursor: "pointer", boxShadow: `0 6px 18px ${modal.color}33`, transition: "all 0.25s", marginBottom: 10, position: "relative", overflow: "hidden" }}
                                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 26px ${modal.color}44`; }}
                                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 18px ${modal.color}33`; }}
                                            >
                                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)", animation: "shimmer 2.5s infinite" }} />
                                                <span style={{ position: "relative", zIndex: 1 }}>Enroll Now →</span>
                                            </button>
                                            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, color: T.textLight, textAlign: "center" }}>🔒 Secure checkout · 7-day refund</p>
                                            <div style={{ height: 1, background: T.border, margin: "18px 0" }} />
                                            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.textLight, fontWeight: 700, marginBottom: 12 }}>What's Included</p>
                                            {modal.includes.map((item, i) => (
                                                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                                                    <span style={{ color: modal.color, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                                                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, color: T.textMid, lineHeight: 1.5 }}>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 1 */}
                        {enrollStep === 1 && (
                            <div style={{ padding: "44px", animation: "fadeUp 0.3s ease" }}>
                                <button onClick={() => setEnrollStep(0)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: T.textLight, fontFamily: "system-ui, sans-serif", fontSize: 11, letterSpacing: "0.1em", marginBottom: 28, padding: 0, transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = modal.color}
                                    onMouseLeave={e => e.currentTarget.style.color = T.textLight}
                                >← Back to Course</button>
                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: modal.color, fontWeight: 700, marginBottom: 8 }}>Complete Your Enrollment</p>
                                <h2 style={{ fontSize: 28, fontWeight: 300, color: T.text, marginBottom: 6, lineHeight: 1.2 }}>
                                    Join <em style={{ fontStyle: "italic", color: modal.color }}>{modal.title}</em>
                                </h2>
                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: T.textLight, marginBottom: 28 }}>Fill in your details below to reserve your spot instantly.</p>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                                    {[
                                        { id: "name", label: "Full Name", placeholder: "Aria Patel", type: "text", icon: "👤" },
                                        { id: "email", label: "Email Address", placeholder: "you@example.com", type: "email", icon: "✉️" },
                                    ].map(f => (
                                        <div key={f.id}>
                                            <label style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: modal.color, display: "block", marginBottom: 6, fontWeight: 700 }}>{f.label}</label>
                                            <div style={{ position: "relative" }}>
                                                <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>{f.icon}</span>
                                                <input type={f.type} placeholder={f.placeholder} value={formData[f.id]}
                                                    onChange={e => setFormData(p => ({ ...p, [f.id]: e.target.value }))}
                                                    onFocus={() => setFocused(f.id)} onBlur={() => setFocused("")}
                                                    style={inpStyle(f.id)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginBottom: 14 }}>
                                    <label style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: modal.color, display: "block", marginBottom: 6, fontWeight: 700 }}>Phone Number</label>
                                    <div style={{ position: "relative" }}>
                                        <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>📱</span>
                                        <input type="tel" placeholder="+91 98765 43210" value={formData.phone}
                                            onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                            onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                                            style={inpStyle("phone")} />
                                    </div>
                                </div>
                                <div style={{ marginBottom: 24 }}>
                                    <label style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: modal.color, display: "block", marginBottom: 10, fontWeight: 700 }}>Your Experience Level</label>
                                    <div style={{ display: "flex", gap: 10 }}>
                                        {[["beginner", "🌱 Beginner"], ["intermediate", "🌿 Intermediate"], ["advanced", "🌊 Advanced"]].map(([val, lbl]) => (
                                            <button key={val} onClick={() => setFormData(p => ({ ...p, exp: val }))} style={{ flex: 1, padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${formData.exp === val ? modal.color : T.border}`, background: formData.exp === val ? modal.color + "12" : T.bgAlt, fontFamily: "system-ui, sans-serif", fontSize: 12, color: formData.exp === val ? modal.color : T.textMid, fontWeight: formData.exp === val ? 700 : 500, cursor: "pointer", transition: "all 0.2s" }}>
                                                {lbl}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ background: T.bgAlt, border: `1px solid ${T.border}`, borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, color: T.textMid, marginBottom: 2 }}>{modal.title}</p>
                                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: T.textLight }}>{modal.duration} · {modal.sessions} · Starts {modal.startDate}</p>
                                    </div>
                                    <span style={{ fontSize: 22, fontWeight: 300, color: T.text }}>{modal.price}</span>
                                </div>
                                <button onClick={handleEnroll} disabled={!formData.name || !formData.email || formLoading} style={{ width: "100%", padding: "14px", borderRadius: 12, border: `1.5px solid ${!formData.name || !formData.email ? T.border : modal.color}`, background: !formData.name || !formData.email ? T.bgAlt : modal.color, color: !formData.name || !formData.email ? T.textLight : "#fff", fontFamily: "system-ui, sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 800, cursor: !formData.name || !formData.email ? "not-allowed" : "pointer", boxShadow: formData.name && formData.email ? `0 6px 18px ${modal.color}33` : "none", transition: "all 0.3s" }}>
                                    {formLoading ? "🌀  Confirming your spot..." : "Confirm Enrollment →"}
                                </button>
                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, color: T.textLight, textAlign: "center", marginTop: 10 }}>🔒 Your data is safe · 7-day money back guarantee</p>
                            </div>
                        )}

                        {/* STEP 2 */}
                        {enrollStep === 2 && (
                            <div style={{ padding: "64px 44px", textAlign: "center", animation: "fadeUp 0.4s ease" }}>
                                <div style={{ width: 70, height: 70, borderRadius: "50%", background: modal.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, margin: "0 auto 22px", boxShadow: `0 8px 28px ${modal.color}44`, animation: "popIn 0.45s cubic-bezier(0.4,0,0.2,1)" }}>🌿</div>
                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: modal.color, fontWeight: 700, marginBottom: 10 }}>Enrollment Confirmed</p>
                                <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 300, color: T.text, lineHeight: 1.2, marginBottom: 10 }}>
                                    Welcome to <em style={{ color: modal.color, fontStyle: "italic" }}>{modal.title}.</em>
                                </h2>
                                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, color: T.textMid, lineHeight: 1.85, maxWidth: 420, margin: "0 auto 30px" }}>
                                    🎉 Congratulations, <strong>{formData.name || "friend"}</strong>! Confirmation sent to <strong style={{ color: modal.color }}>{formData.email || "your email"}</strong>. First class on <strong>{modal.startDate}</strong>.
                                </p>
                                <div style={{ background: T.bgAlt, border: `1px solid ${T.border}`, borderRadius: 18, padding: "22px 26px", textAlign: "left", marginBottom: 26, display: "inline-block", minWidth: 320 }}>
                                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: modal.color, fontWeight: 700, marginBottom: 14 }}>What happens next?</p>
                                    {["Confirmation email sent to your inbox", "Join the WhatsApp group (link in email)", `Mark your calendar: ${modal.schedule}`, `First class: ${modal.startDate}`].map((item, i) => (
                                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 9 }}>
                                            <span style={{ width: 22, height: 22, borderRadius: "50%", background: modal.color + "18", border: `1.5px solid ${modal.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: modal.color, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                                            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, color: T.textMid, lineHeight: 1.55 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                                    <button onClick={closeModal} style={{ background: modal.color, border: "none", color: "#fff", padding: "12px 32px", borderRadius: 100, fontFamily: "system-ui, sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 800, cursor: "pointer", boxShadow: `0 6px 18px ${modal.color}33`, transition: "all 0.25s" }}
                                        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                                    >Back to Courses</button>
                                    <button style={{ background: "transparent", border: `1.5px solid ${T.border}`, color: T.textMid, padding: "12px 26px", borderRadius: 100, fontFamily: "system-ui, sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textMid; }}
                                        onClick={() => window.location.href = "/"}
                                    >View Dashboard</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: #B0ADA6 !important; font-family: system-ui, sans-serif; font-size: 13px; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #EFEDE8; }
        ::-webkit-scrollbar-thumb { background: #D8D4CE; border-radius: 3px; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(32px) scale(0.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes popIn   { 0%{transform:scale(0.5);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes shimmer { 0%{transform:translateX(-130%)} 100%{transform:translateX(130%)} }
        @media (max-width: 960px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="1fr 290px"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
