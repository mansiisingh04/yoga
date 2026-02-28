import { useState, useEffect, useRef } from "react";

const INSTRUCTOR = {
  name: "Priya",
  lastName: "Sharma",
  role: "Yoga Instructor & Breathwork Guide",
  cert: "RYT · 500",
  years: "12 Years",
  location: "Mumbai, India",
  mantra: "Breathe in what you need. Release what you don't.",
  quote: "Yoga is not about touching your toes — it's about what you learn on the way down.",
  about: "Priya found her way to the mat during a quiet monsoon season in Pune, and never really left. Over twelve years she has built a practice rooted not in performance, but in presence — the gentle art of arriving fully in your own body.",
  about2: "Her classes are unhurried. There is no urgency here, no competition. Only breath, only now. Students leave not just stretched, but genuinely stilled.",
  photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=90",
  photo2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=85",
  photo3: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80",
  stats: [
    { n: "2,400+", l: "Students Guided" },
    { n: "12 yrs", l: "Teaching" },
    { n: "4.9", l: "★ Rating" },
    { n: "200+", l: "Classes / Year" },
  ],
  offerings: [
    { icon: "🌿", name: "Yin Yoga", desc: "Long, passive holds. Deep tissue release. Stillness as practice." },
    { icon: "🌬️", name: "Pranayama", desc: "Ancient breathwork to calm the nervous system and sharpen focus." },
    { icon: "🌸", name: "Somatic Flow", desc: "Body-led, trauma-informed. No performance required." },
    { icon: "🌙", name: "Yoga Nidra", desc: "Guided sleep yoga. The most restful hour you'll ever spend awake." },
    { icon: "☀️", name: "Morning Flow", desc: "A gentle awakening — stretch, breathe, and begin." },
    { icon: "🪷", name: "Meditation", desc: "Sit quietly. That's all. Priya will hold the space." },
  ],
  journey: [
    { y: "2009", t: "First mat, Pune rooftop", d: "Monsoon season. A borrowed mat. Everything changed." },
    { y: "2013", t: "RYT-200, Rishikesh", d: "Studied under classical Ashtanga lineage teachers." },
    { y: "2017", t: "Somatic Therapy, London", d: "Trauma-informed movement and nervous system work." },
    { y: "2021", t: "RYT-500 Completed", d: "Advanced certification in trauma-informed yoga." },
    { y: "2024", t: "Yoga Bliss Lead", d: "Guiding 1,200+ students through their first year." },
  ],
  schedule: [
    { day: "Monday", time: "7:00 AM", cls: "Morning Flow", level: "All Levels", spots: 6, mins: 60 },
    { day: "Tuesday", time: "6:30 PM", cls: "Pranayama & Breath", level: "Beginner", spots: 9, mins: 45 },
    { day: "Thursday", time: "8:00 AM", cls: "Somatic Movement", level: "Intermediate", spots: 0, mins: 75 },
    { day: "Friday", time: "5:30 PM", cls: "Yin & Restore", level: "All Levels", spots: 3, mins: 90 },
    { day: "Saturday", time: "9:00 AM", cls: "Vinyasa Flow", level: "Open", spots: 2, mins: 60 },
    { day: "Sunday", time: "10:00 AM", cls: "Yoga Nidra", level: "All Levels", spots: 14, mins: 45 },
  ],
  reviews: [
    { name: "Ananya M.", when: "2 weeks ago", stars: 5, text: "Priya's classes feel like being held. No rush, no pressure — just an invitation to arrive. I've tried many teachers. She's different." },
    { name: "Rahul S.", when: "1 month ago", stars: 5, text: "I came for flexibility. I stayed for the stillness she creates. Her voice alone slows your heart rate down." },
    { name: "Sofia K.", when: "3 weeks ago", stars: 5, text: "Three months in and my relationship with my body has completely changed. Not from pushing — from listening." },
    { name: "James W.", when: "1 month ago", stars: 4, text: "The Yin sessions are transcendent. Ninety minutes where nothing else exists. I drive forty minutes just for this class." },
    { name: "Meera P.", when: "2 months ago", stars: 5, text: "She creates the kind of atmosphere where it's safe to be a beginner. Safe to not know. That is rarer than any certification." },
    { name: "David L.", when: "3 months ago", stars: 5, text: "I was skeptical. I'm a runner, not a yoga person. Six classes later I sleep better, breathe better, and am a gentler version of myself." },
  ],
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream: #F2EDE3;
  --cream2: #EDE6D8;
  --white: #FDFCF9;
  --sage: #6B7A4A;
  --sage2: #8A9A60;
  --sage-pale: #F0F2E8;
  --btn: #2C2C28;
  --btn-hover: #1A1A16;
  --text: #1E1C18;
  --mid: #4A4640;
  --light: #9A9088;
  --border: #E0D8C8;
}

body { background: var(--cream); }

.yp {
  font-family: 'Jost', sans-serif;
  background: var(--cream);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ═══ HERO ═══ */
.yp-hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

/* Animated gradient orbs in background */
.yp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(135deg, #F7F2EA 0%, #EDE6D8 40%, #F0EBE0 70%, #E8DFC8 100%);
  overflow: hidden;
}
.yp-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  animation: floatOrb 8s ease-in-out infinite;
}
.yp-orb-1 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, #D4C8A8, transparent 70%);
  top: -80px; left: -60px;
  animation-delay: 0s;
}
.yp-orb-2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, #C8B890, transparent 70%);
  bottom: 80px; left: 35%;
  animation-delay: -3s;
}
.yp-orb-3 {
  width: 260px; height: 260px;
  background: radial-gradient(circle, #B8C4A0, transparent 70%);
  top: 40%; right: 52%;
  animation-delay: -5s;
}

@keyframes floatOrb {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-28px) scale(1.06); }
}

/* Left hero panel */
.yp-hero-left {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 72px 80px 80px;
}

.yp-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(44,44,40,0.07);
  border: 1px solid rgba(44,44,40,0.15);
  border-radius: 100px;
  padding: 6px 18px 6px 10px;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #4A4640;
  font-weight: 500;
  margin-bottom: 36px;
  width: fit-content;
  animation: riseIn 0.7s ease both;
}
.yp-badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--btn);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}

.yp-hero-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 7vw, 7.5rem);
  font-weight: 500;
  line-height: 0.9;
  color: var(--text);
  letter-spacing: -0.025em;
  animation: riseIn 0.7s 0.1s ease both;
}
.yp-hero-name-em {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 7vw, 7.5rem);
  font-weight: 400;
  font-style: italic;
  line-height: 0.9;
  color: var(--sage);
  letter-spacing: -0.015em;
  display: block;
  margin-bottom: 36px;
  animation: riseIn 0.7s 0.15s ease both;
}

.yp-hero-rule {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  animation: riseIn 0.7s 0.2s ease both;
}
.yp-hero-rule-line {
  width: 52px; height: 1px;
  background: linear-gradient(90deg, var(--sage), transparent);
}
.yp-hero-rule-leaf {
  font-size: 14px; opacity: 0.6;
}

.yp-hero-mantra {
  font-family: 'Playfair Display', serif;
  font-size: 1.12rem;
  font-style: italic;
  color: var(--mid);
  line-height: 1.8;
  max-width: 400px;
  margin-bottom: 40px;
  animation: riseIn 0.7s 0.25s ease both;
}

.yp-hero-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  animation: riseIn 0.7s 0.3s ease both;
}
.yp-pill {
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 7px 18px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.6);
  color: var(--mid);
  backdrop-filter: blur(8px);
  transition: all 0.2s;
  cursor: default;
}
.yp-pill:hover { background: rgba(255,255,255,0.9); border-color: #C8BEA8; }
.yp-pill.sage {
  background: rgba(107,143,94,0.14);
  border-color: rgba(107,143,94,0.4);
  color: #4A6E3E;
  font-weight: 500;
}

.yp-hero-ctas {
  display: flex;
  gap: 14px;
  animation: riseIn 0.7s 0.35s ease both;
}
.yp-btn-primary {
  background: var(--btn);
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 100px;
  font-family: 'Jost', sans-serif;
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.yp-btn-primary:hover {
  background: var(--btn-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.22);
}
.yp-btn-secondary {
  background: transparent;
  color: var(--mid);
  border: 1px solid var(--border);
  padding: 14px 28px;
  border-radius: 100px;
  font-family: 'Jost', sans-serif;
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.25s;
  backdrop-filter: blur(8px);
}
.yp-btn-secondary:hover { border-color: var(--btn); color: var(--btn); background: rgba(44,44,40,0.05); }

/* Right hero — photo panel */
.yp-hero-right {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.yp-hero-img-wrap {
  position: absolute;
  inset: 24px 24px 24px 0;
  border-radius: 24px;
  overflow: hidden;
  background: #D4CEC0;
}
/* Botanical deco circles */
.yp-hero-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(107,143,94,0.15);
  pointer-events: none;
  z-index: 3;
}
.yp-hero-img-wrap::before {
  content: '';
  position: absolute;
  inset: 0; z-index: 1;
  background: linear-gradient(180deg,
    transparent 40%,
    rgba(20,18,12,0.55) 100%
  );
}
.yp-hero-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: saturate(0.9) brightness(1.05);
  transition: transform 8s ease;
}
.yp-hero-img-wrap:hover img { transform: scale(1.04); }

/* Floating glass quote */
.yp-quote-card {
  position: absolute;
  bottom: 40px;
  left: 12px;
  right: 36px;
  z-index: 4;
  background: rgba(253,252,249,0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.75);
  border-radius: 18px;
  padding: 20px 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
.yp-quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  line-height: 0.6;
  color: var(--mid);
  opacity: 0.4;
  display: block;
  margin-bottom: 6px;
}
.yp-quote-text {
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text);
  line-height: 1.65;
  margin-bottom: 10px;
}
.yp-quote-attr {
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--sage);
  font-weight: 500;
}

/* ═══ STATS STRIP ═══ */
.yp-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--white);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.yp-strip-cell {
  padding: 32px 40px;
  border-right: 1px solid var(--border);
  cursor: default;
  transition: background 0.25s;
  position: relative;
  overflow: hidden;
}
.yp-strip-cell:last-child { border-right: none; }
.yp-strip-cell::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--btn), #888, transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.yp-strip-cell:hover { background: #F5F0E6; }
.yp-strip-cell:hover::after { transform: scaleX(1); }
.yp-strip-n {
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: var(--text);
  line-height: 1;
  margin-bottom: 6px;
}
.yp-strip-l {
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--light);
}

/* ═══ NAV TABS ═══ */
.yp-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247,242,234,0.94);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 62px;
  transition: box-shadow 0.3s;
}
.yp-nav.sh { box-shadow: 0 2px 24px rgba(0,0,0,0.06); }
.yp-nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: var(--sage);
  font-weight: 400;
  letter-spacing: 0.02em;
}
.yp-nav-links { display: flex; align-items: center; }
.yp-nav-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 20px 0;
  margin-right: 36px;
  font-family: 'Jost', sans-serif;
  font-size: 0.63rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--light);
  cursor: pointer;
  transition: all 0.2s;
}
.yp-nav-tab:hover { color: var(--mid); }
.yp-nav-tab.on { color: var(--text); border-bottom-color: var(--btn); font-weight: 500; }
.yp-nav-right { display: flex; align-items: center; gap: 10px; }
.yp-social {
  width: 34px; height: 34px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--light);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}
.yp-social:hover { border-color: var(--btn); color: var(--btn); background: rgba(44,44,40,0.06); }
.yp-social svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }

/* ═══ CONTENT WRAP ═══ */
.yp-wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 80px 120px;
}

.yp-sec-label {
  font-size: 0.59rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--mid);
  font-weight: 500;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.yp-sec-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }

/* ─── ABOUT SECTION ─── */
.yp-about { display: grid; grid-template-columns: 1fr 340px; gap: 72px; align-items: start; margin-bottom: 80px; }
.yp-about-blockquote {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.4rem, 2vw, 1.95rem);
  font-weight: 400;
  font-style: italic;
  color: var(--text);
  line-height: 1.55;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--border);
  position: relative;
}
.yp-about-blockquote::before {
  content: '';
  position: absolute;
  left: 0; bottom: -1px;
  width: 48px; height: 2px;
  background: var(--btn);
}
.yp-about-p {
  font-size: 0.88rem;
  color: var(--mid);
  line-height: 2;
  margin-bottom: 16px;
  font-weight: 300;
}
.yp-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 30px; }
.yp-tag {
  font-size: 0.76rem;
  color: var(--mid);
  border: 1px solid var(--border);
  padding: 7px 16px;
  border-radius: 100px;
  background: var(--white);
  transition: all 0.2s;
  cursor: default;
}
.yp-tag:hover { border-color: var(--btn); color: var(--btn); background: rgba(44,44,40,0.04); }

/* Photo card with subtle glow */
.yp-photo-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
  transition: box-shadow 0.3s, transform 0.3s;
}
.yp-photo-card:hover {
  box-shadow: 0 20px 60px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.06);
  transform: translateY(-3px);
}
.yp-photo-card img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  filter: saturate(0.85) brightness(1.05);
  display: block;
  transition: transform 0.6s ease;
}
.yp-photo-card:hover img { transform: scale(1.04); }
.yp-photo-card-foot {
  padding: 18px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--white);
}
.yp-photo-cert {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: var(--sage);
}
.yp-photo-cert-sub { font-size: 0.7rem; color: var(--light); line-height: 1.5; }

/* ─── OFFERINGS ─── */
.yp-offerings { margin-bottom: 80px; }
.yp-offerings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.yp-offering {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 30px 26px;
  transition: all 0.28s;
  cursor: default;
  position: relative;
  overflow: hidden;
}
.yp-offering::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--btn), #666);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  border-radius: 0 0 18px 18px;
}
.yp-offering:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 32px rgba(0,0,0,0.09);
  border-color: rgba(44,44,40,0.18);
}
.yp-offering:hover::after { transform: scaleX(1); }
.yp-offering-icon { font-size: 1.8rem; margin-bottom: 14px; display: block; }
.yp-offering-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.08rem;
  color: var(--text);
  margin-bottom: 7px;
}
.yp-offering-desc { font-size: 0.79rem; color: var(--light); line-height: 1.7; }

/* ─── JOURNEY ─── */
.yp-journey { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.yp-tl-list { position: relative; }
.yp-tl-list::before {
  content: '';
  position: absolute;
  left: 3px; top: 8px; bottom: 8px;
  width: 1px;
  background: linear-gradient(to bottom, var(--btn), transparent);
}
.yp-tl {
  position: relative;
  padding-left: 28px;
  margin-bottom: 32px;
  transition: all 0.2s;
}
.yp-tl::before {
  content: '';
  position: absolute;
  left: 0; top: 7px;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--cream);
  border: 1.5px solid #C8C0B0;
  transition: all 0.25s;
}
.yp-tl:hover::before { background: var(--btn); border-color: var(--btn); box-shadow: 0 0 0 4px rgba(44,44,40,0.1); }
.yp-tl-yr { font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--mid); margin-bottom: 3px; font-weight: 500; }
.yp-tl-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 4px; }
.yp-tl-detail { font-size: 0.78rem; color: var(--light); line-height: 1.65; font-style: italic; }

.yp-journey-photo {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 12px 48px rgba(0,0,0,0.08);
  transition: all 0.3s;
}
.yp-journey-photo:hover { transform: translateY(-3px); box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
.yp-journey-photo img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  filter: saturate(0.85) brightness(1.05);
  display: block;
  transition: transform 0.6s ease;
}
.yp-journey-photo:hover img { transform: scale(1.04); }

/* ─── SCHEDULE ─── */
.yp-sch-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 44px;
  gap: 20px;
  flex-wrap: wrap;
}
.yp-sch-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 400;
  line-height: 1.15;
}
.yp-sch-title em { font-style: italic; color: var(--sage); }
.yp-sch-sub { font-size: 0.8rem; color: var(--light); margin-top: 8px; font-weight: 300; }

.yp-sch-list { border-top: 1px solid var(--border); }
.yp-sch-row {
  display: grid;
  grid-template-columns: 120px 96px 1fr 160px 80px 140px;
  align-items: center;
  gap: 0 16px;
  padding: 24px 18px;
  margin: 0 -18px;
  border-bottom: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s;
  cursor: pointer;
}
.yp-sch-row:hover {
  background: var(--white);
  border-color: transparent;
  box-shadow: 0 3px 16px rgba(0,0,0,0.05);
}
.yp-sch-day { font-family: 'Playfair Display', serif; font-size: 0.92rem; color: var(--light); font-style: italic; }
.yp-sch-time { font-size: 0.84rem; color: var(--mid); font-weight: 400; }
.yp-sch-cls { font-family: 'Playfair Display', serif; font-size: 1.08rem; color: var(--text); }
.yp-sch-mins { font-size: 0.7rem; color: var(--light); margin-top: 2px; }
.yp-sch-lvl {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--light);
  border: 1px solid var(--border);
  padding: 5px 13px;
  border-radius: 100px;
  background: var(--white);
  width: fit-content;
}
.yp-sch-spots { font-size: 0.8rem; font-weight: 500; text-align: right; }
.yp-sch-btn {
  padding: 9px 20px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--mid);
  cursor: pointer;
  transition: all 0.25s;
  white-space: nowrap;
}
.yp-sch-btn.av:hover { background: var(--btn); color: #fff; border-color: var(--btn); box-shadow: 0 4px 16px rgba(0,0,0,0.18); }
.yp-sch-btn.full { color: var(--light); border-color: var(--border); cursor: not-allowed; opacity: 0.5; }
.yp-sch-btn.done { background: var(--btn); color: #fff; border-color: var(--btn); cursor: default; }

/* ─── REVIEWS ─── */
.yp-rev-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 64px;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 48px;
  margin-bottom: 28px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}
.yp-rev-big {
  font-family: 'Playfair Display', serif;
  font-size: 6rem;
  font-weight: 400;
  color: var(--text);
  line-height: 1;
  letter-spacing: -0.02em;
}
.yp-rev-stars { display: flex; gap: 3px; margin: 8px 0; }
.yp-rev-star { font-size: 15px; color: #B8952A; }
.yp-rev-count { font-size: 0.73rem; color: var(--light); }
.yp-rev-bars { display: flex; flex-direction: column; gap: 10px; max-width: 320px; }
.yp-rev-bar-row { display: flex; align-items: center; gap: 10px; }
.yp-rev-bar-lbl { font-size: 0.68rem; color: var(--light); min-width: 10px; }
.yp-rev-bar-track { flex: 1; height: 5px; background: var(--border); border-radius: 3px; overflow: hidden; }
.yp-rev-bar-fill { height: 100%; background: linear-gradient(90deg, var(--btn), #666); border-radius: 3px; transition: width 1.2s cubic-bezier(.4,0,.2,1); }
.yp-rev-bar-pct { font-size: 0.68rem; color: var(--light); min-width: 30px; text-align: right; }
.yp-rev-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.yp-rev-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 32px;
  transition: all 0.25s;
}
.yp-rev-card:hover {
  background: #FDFCF9;
  box-shadow: 0 8px 28px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}
.yp-rev-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
.yp-rev-name { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--text); margin-bottom: 3px; }
.yp-rev-when { font-size: 0.7rem; color: var(--light); }
.yp-rev-text { font-size: 0.84rem; color: var(--mid); line-height: 1.88; font-style: italic; font-weight: 300; }

/* ─── TOAST ─── */
.yp-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(14px);
  background: #1E1C18;
  color: rgba(255,255,255,0.9);
  padding: 12px 26px;
  border-radius: 100px;
  font-size: 0.73rem;
  letter-spacing: 0.04em;
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.yp-toast.on { opacity: 1; transform: translateX(-50%) translateY(0); }

@keyframes riseIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── RESPONSIVE ─── */
@media (max-width: 960px) {
  .yp-hero { grid-template-columns: 1fr; min-height: auto; }
  .yp-hero-right { height: 400px; }
  .yp-hero-img-wrap { inset: 16px; }
  .yp-hero-left { padding: 60px 32px 40px; }
  .yp-about { grid-template-columns: 1fr; gap: 36px; }
  .yp-journey { grid-template-columns: 1fr; gap: 36px; }
  .yp-offerings-grid { grid-template-columns: 1fr 1fr; }
  .yp-strip { grid-template-columns: 1fr 1fr; }
  .yp-rev-header { grid-template-columns: 1fr; gap: 24px; }
  .yp-rev-grid { grid-template-columns: 1fr; }
  .yp-sch-row { grid-template-columns: 96px 1fr 100px; }
  .yp-sch-lvl, .yp-sch-spots, .yp-sch-btn { display: none; }
  .yp-nav, .yp-wrap { padding-left: 28px; padding-right: 28px; }
}
@media (max-width: 580px) {
  .yp-offerings-grid { grid-template-columns: 1fr; }
  .yp-strip { grid-template-columns: 1fr 1fr; }
  .yp-hero-left { padding: 44px 20px 32px; }
}
`;

const IgIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" stroke="none" /></svg>
);
const YtIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22.5 6.5s-.3-2-1.2-2.8C20.2 2.5 19 2.5 18.4 2.4 15.6 2.2 12 2.2 12 2.2s-3.6 0-6.4.2c-.6.1-1.8.1-2.9 1.3C1.8 4.5 1.5 6.5 1.5 6.5S1.2 8.7 1.2 11v2c0 2.3.3 4.5.3 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2 2.4.2 10 .3 10 .3s3.6 0 6.4-.3c.6-.1 1.8-.1 2.9-1.2.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.5v-2c0-2.3-.3-4.5-.3-4.5z" fill="currentColor" stroke="none" /><polygon points="9.5,8.5 9.5,15.5 16,12" fill="white" stroke="none" /></svg>
);
const LiIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function YogaInstructorPage() {
  const [tab, setTab] = useState("OVERVIEW");
  const [booked, setBooked] = useState({});
  const [loading, setLoading] = useState({});
  const [toast, setToast] = useState({ on: false, msg: "" });
  const [scrolled, setScrolled] = useState(false);
  const [barsOn, setBarsOn] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (tab !== "REVIEWS") return;
    setBarsOn(false);
    const t = setTimeout(() => setBarsOn(true), 250);
    return () => clearTimeout(t);
  }, [tab]);

  const showToast = (msg) => {
    setToast({ on: true, msg });
    setTimeout(() => setToast({ on: false, msg: "" }), 2800);
  };

  const bookClass = (i) => {
    if (booked[i] || INSTRUCTOR.schedule[i].spots === 0) return;
    setLoading(p => ({ ...p, [i]: true }));
    setTimeout(() => {
      setLoading(p => ({ ...p, [i]: false }));
      setBooked(p => ({ ...p, [i]: true }));
      showToast(`Spot reserved · ${INSTRUCTOR.schedule[i].cls}, ${INSTRUCTOR.schedule[i].day}`);
    }, 1400);
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="yp">

        {/* ═══ HERO ═══ */}
        <div className="yp-hero">
          <div className="yp-hero-bg">
            <div className="yp-orb yp-orb-1" />
            <div className="yp-orb yp-orb-2" />
            <div className="yp-orb yp-orb-3" />
          </div>

          <div className="yp-hero-left">
            <div className="yp-badge">
              <span className="yp-badge-dot" />
              Lead Instructor · Yoga Bliss
            </div>

            <div className="yp-hero-name">{INSTRUCTOR.name}</div>
            <span className="yp-hero-name-em">{INSTRUCTOR.lastName}</span>

            <div className="yp-hero-rule">
              <div className="yp-hero-rule-line" />
              <span className="yp-hero-rule-leaf">🌿</span>
            </div>

            <p className="yp-hero-mantra">"{INSTRUCTOR.mantra}"</p>

            <div className="yp-hero-pills">
              <span className="yp-pill sage">{INSTRUCTOR.cert}</span>
              <span className="yp-pill">{INSTRUCTOR.years}</span>
              <span className="yp-pill">{INSTRUCTOR.location}</span>
              <span className="yp-pill">⭐ 4.9 Rating</span>
            </div>

            <div className="yp-hero-ctas">

              <button className="yp-btn-secondary" onClick={(navigate) => setTab("SCHEDULE")}>
                View Schedule
              </button>
            </div>
          </div>

          <div className="yp-hero-right">
            {/* Botanical ring decorations */}
            {[440, 290, 160].map((s, i) => (
              <div key={i} className="yp-hero-ring" style={{
                width: s, height: s,
                top: `calc(50% - ${s / 2}px)`,
                left: `calc(50% - ${s / 2}px)`,
                opacity: 0.4 - i * 0.1
              }} />
            ))}
            <div className="yp-hero-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=90"
                alt="Priya Sharma in practice"
              />
              <div className="yp-quote-card">
                <span className="yp-quote-mark">"</span>
                <p className="yp-quote-text">{INSTRUCTOR.quote}</p>
                <p className="yp-quote-attr">— Priya Sharma</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="yp-strip">
          {INSTRUCTOR.stats.map((s, i) => (
            <div key={i} className="yp-strip-cell">
              <div className="yp-strip-n">{s.n}</div>
              <div className="yp-strip-l">{s.l}</div>
            </div>
          ))}
        </div>

        {/* ═══ NAV ═══ */}
        <nav className={`yp-nav${scrolled ? " sh" : ""}`}>
          <div className="yp-nav-logo">Yoga Bliss.</div>
          <div className="yp-nav-links">
            {["OVERVIEW", "SCHEDULE", "REVIEWS"].map(t => (
              <button key={t} className={`yp-nav-tab${tab === t ? " on" : ""}`} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="yp-nav-right">
            {[{ C: IgIcon, l: "Instagram" }, { C: YtIcon, l: "YouTube" }, { C: LiIcon, l: "LinkedIn" }].map(({ C, l }) => (
              <a key={l} href="#" className="yp-social" title={l}><C /></a>
            ))}
            <button className="yp-btn-primary" style={{ padding: "9px 22px", fontSize: "0.62rem" }}
              onClick={() => showToast("Booking request sent — Priya will confirm within 24 hrs")}>
              Book Now
            </button>
          </div>
        </nav>

        {/* ═══ CONTENT ═══ */}
        <div className="yp-wrap">

          {/* ── OVERVIEW ── */}
          {tab === "OVERVIEW" && (
            <div style={{ animation: "riseIn 0.45s ease" }}>

              <div className="yp-sec-label">About Priya</div>
              <div className="yp-about">
                <div>
                  <p className="yp-about-blockquote">"{INSTRUCTOR.quote}"</p>
                  <p className="yp-about-p">{INSTRUCTOR.about}</p>
                  <p className="yp-about-p">{INSTRUCTOR.about2}</p>
                  <div className="yp-tags">
                    {INSTRUCTOR.offerings.map(o => (
                      <span key={o.name} className="yp-tag">{o.icon} {o.name}</span>
                    ))}
                  </div>
                </div>
                <div className="yp-photo-card">
                  <img src={INSTRUCTOR.photo2} alt="Priya meditating" />
                  <div className="yp-photo-card-foot">
                    <div className="yp-photo-cert">RYT · 500</div>
                    <div className="yp-photo-cert-sub">Yoga Alliance<br />Certified · 2021</div>
                  </div>
                </div>
              </div>

              <div className="yp-offerings">
                <div className="yp-sec-label">What She Offers</div>
                <div className="yp-offerings-grid">
                  {INSTRUCTOR.offerings.map((o, i) => (
                    <div key={i} className="yp-offering">
                      <span className="yp-offering-icon">{o.icon}</span>
                      <div className="yp-offering-name">{o.name}</div>
                      <div className="yp-offering-desc">{o.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="yp-sec-label">Her Journey</div>
              <div className="yp-journey">
                <div className="yp-tl-list">
                  {INSTRUCTOR.journey.map((m, i) => (
                    <div key={i} className="yp-tl">
                      <div className="yp-tl-yr">{m.y}</div>
                      <div className="yp-tl-title">{m.t}</div>
                      <div className="yp-tl-detail">{m.d}</div>
                    </div>
                  ))}
                </div>
                <div className="yp-journey-photo">
                  <img src={INSTRUCTOR.photo3} alt="Yoga practice" />
                </div>
              </div>
            </div>
          )}

          {/* ── SCHEDULE ── */}
          {tab === "SCHEDULE" && (
            <div style={{ animation: "riseIn 0.45s ease" }}>
              <div className="yp-sch-header">
                <div>
                  <div className="yp-sch-title">Weekly <em>Classes.</em></div>
                  <div className="yp-sch-sub">Live sessions · Small groups · Book early to hold your spot.</div>
                </div>
                <button className="yp-btn-primary"
                  onClick={() => showToast("Private session request sent — we'll be in touch")}>
                  Private Session
                </button>
              </div>
              <div className="yp-sch-list">
                {INSTRUCTOR.schedule.map((cls, i) => (
                  <div key={i} className="yp-sch-row">
                    <div className="yp-sch-day">{cls.day}</div>
                    <div className="yp-sch-time">{cls.time}</div>
                    <div>
                      <div className="yp-sch-cls">{cls.cls}</div>
                      <div className="yp-sch-mins">{cls.mins} min</div>
                    </div>
                    <div className="yp-sch-lvl">{cls.level}</div>
                    <div className="yp-sch-spots" style={{
                      color: cls.spots === 0 ? "#9A9088" : cls.spots <= 3 ? "#B06040" : "#2C2C28"
                    }}>
                      {cls.spots === 0 ? "Full" : `${cls.spots} left`}
                    </div>
                    <button
                      className={`yp-sch-btn ${booked[i] ? "done" : cls.spots === 0 ? "full" : "av"}`}
                      onClick={() => bookClass(i)}
                      disabled={cls.spots === 0 || !!booked[i]}
                    >
                      {booked[i] ? "✓ Reserved" : loading[i] ? "…" : cls.spots === 0 ? "Class Full" : "Reserve →"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── REVIEWS ── */}
          {tab === "REVIEWS" && (
            <div style={{ animation: "riseIn 0.45s ease" }}>
              <div className="yp-rev-header">
                <div>
                  <div className="yp-rev-big">4.9</div>
                  <div className="yp-rev-stars">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="yp-rev-star">★</span>)}
                  </div>
                  <div className="yp-rev-count">Based on 318 reviews</div>
                </div>
                <div className="yp-rev-bars">
                  {[[5, 88], [4, 8], [3, 3], [2, 1], [1, 0]].map(([star, pct], i) => (
                    <div key={star} className="yp-rev-bar-row">
                      <span className="yp-rev-bar-lbl">{star}</span>
                      <span style={{ fontSize: 11, color: "#B8952A" }}>★</span>
                      <div className="yp-rev-bar-track">
                        <div className="yp-rev-bar-fill"
                          style={{ width: barsOn ? `${pct}%` : "0%", transitionDelay: `${i * 0.09}s` }} />
                      </div>
                      <span className="yp-rev-bar-pct">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="yp-rev-grid">
                {INSTRUCTOR.reviews.map((r, i) => (
                  <div key={i} className="yp-rev-card">
                    <div className="yp-rev-card-head">
                      <div>
                        <div className="yp-rev-name">{r.name}</div>
                        <div className="yp-rev-when">{r.when}</div>
                      </div>
                      <div className="yp-rev-stars" style={{ gap: 2 }}>
                        {[...Array(r.stars)].map((_, s) => (
                          <span key={s} className="yp-rev-star" style={{ fontSize: 12 }}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="yp-rev-text">{r.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={`yp-toast${toast.on ? " on" : ""}`}>{toast.msg}</div>
      </div>
    </>
  );
}