import { useState, useEffect, useCallback } from "react";

// ── Yoga SVG Icons ─────────────────────────────────────────────────────────────
const LotusIcon = ({ size = 32, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path d="M32 52 C32 52 12 40 12 26 C12 18 20 12 28 16 C30 17 31 18 32 20 C33 18 34 17 36 16 C44 12 52 18 52 26 C52 40 32 52 32 52Z" fill={color} opacity="0.15" />
        <path d="M32 52 C32 52 12 40 12 26 C12 18 20 12 28 16 C30 17 31 18 32 20 C33 18 34 17 36 16 C44 12 52 18 52 26 C52 40 32 52 32 52Z" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M32 20 C32 20 18 22 16 34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 20 C32 20 46 22 48 34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 18 C16 10 8 12 8 18 C8 24 20 26 20 26" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M44 18 C48 10 56 12 56 18 C56 24 44 26 44 26" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="32" cy="30" r="3" fill={color} />
    </svg>
);
const MeditationIcon = ({ size = 32, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="12" r="5" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M24 28 C24 22 40 22 40 28" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M16 36 C16 28 22 26 28 26 L36 26 C42 26 48 28 48 36" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M16 36 L14 44 C14 46 18 48 18 48 L46 48 C46 48 50 46 50 44 L48 36" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 48 L12 52 M46 48 L52 52" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const WarriorIcon = ({ size = 32, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="8" r="4.5" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M32 14 L32 30" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 22 L50 22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 30 L20 50" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 30 L44 50" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const TreePoseIcon = ({ size = 32, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="7" r="4.5" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M32 13 L32 40" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 22 L20 30" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 22 L44 30" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 40 L32 56" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M25 34 C25 34 28 38 32 40" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
);
const BalanceIcon = ({ size = 32, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="7" r="4.5" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M32 13 L32 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 34 L18 48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 34 L46 48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 24 L44 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 24 L20 28" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const BreathIcon = ({ size = 32, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path d="M32 12 C32 12 20 18 20 28 C20 36 26 40 32 40 C38 40 44 36 44 28 C44 18 32 12 32 12Z" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M26 28 C26 24 29 22 32 22 C35 22 38 24 38 28" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M32 40 L32 52" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 48 L40 48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────────
const PHOTOS = [
    { id: 1, src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85", thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=75", label: "Tree Pose", category: "Balance", desc: "Vrikshasana grounds you in stillness. Balance on one leg, root down, and rise tall like a tree toward the sky." },
    { id: 2, src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=85", thumb: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=75", label: "Warrior II", category: "Strength", desc: "Virabhadrasana II opens hips and chest while building fierce leg strength and unwavering mental focus." },
    { id: 3, src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=85", thumb: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&q=75", label: "Downward Dog", category: "Flow", desc: "Adho Mukha Svanasana lengthens the spine, energizes the whole body, and calms the nervous system." },
    { id: 4, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85", thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=75", label: "Sun Salutation", category: "Flow", desc: "Surya Namaskar is a flowing sequence of 12 poses that warms the body and synchronizes breath with movement." },
    { id: 5, src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=85", thumb: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&q=75", label: "Child's Pose", category: "Restore", desc: "Balasana gently stretches hips, thighs and lower back — a safe harbour of rest during any practice." },
    { id: 6, src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=85", thumb: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=75", label: "Lotus Pose", category: "Meditate", desc: "Padmasana is the timeless seat of meditation. It steadies the mind and awakens inner stillness." },
    { id: 7, src: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&q=85", thumb: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=400&q=75", label: "Bridge Pose", category: "Strength", desc: "Setu Bandhasana strengthens the back body, opens the chest and stretches the hip flexors deeply." },
    { id: 8, src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=85", thumb: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&q=75", label: "Cobra Pose", category: "Flow", desc: "Bhujangasana opens the heart space, strengthens the spine, and relieves stiffness from long hours of sitting." },
    { id: 9, src: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=800&q=85", thumb: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=400&q=75", label: "Mountain Pose", category: "Balance", desc: "Tadasana is the foundation of all standing poses — simple yet profound in teaching alignment and presence." },
    { id: 10, src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85", thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=75", label: "Pigeon Pose", category: "Restore", desc: "Eka Pada Rajakapotasana offers a deep hip release and is known to dissolve stored emotional tension." },
    { id: 11, src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=800&q=85", thumb: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&q=75", label: "Eagle Pose", category: "Balance", desc: "Garudasana wraps the limbs to sharpen concentration, improve balance and open the upper back." },
    { id: 12, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85", thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=75", label: "Chair Pose", category: "Strength", desc: "Utkatasana ignites heat in the legs and core, building determination and endurance with every breath." },
];

const CLASS_VIDEOS = [
    { id: 1, thumb: "https://unsplash.com/photos/woman-doing-yoga-nqUHQkuVj3c", tag: "⚡ Hanumanasana", title: "Flexibility & Strength", meta: "45 min · Intermediate", src: "/hanumansana.mp4" },
    { id: 2, thumb: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80", tag: "✦ Hatha Restorative", title: "Yoga for Pain Relief", meta: "60 min · Beginner", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", tag: "⊕ Ashtanga Yoga", title: "Yoga Posture Mastery", meta: "50 min · Advanced", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, thumb: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80", tag: "☯ Yin Yoga", title: "Stress & Anxiety Relief", meta: "40 min · All levels", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const TESTIMONIALS = [
    { id: 1, thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80", name: "Sarah Mitchell", role: "Practicing 3 years", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, thumb: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&q=80", name: "Priya Sharma", role: "Practicing 1 year", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, thumb: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80", name: "James Okafor", role: "Practicing 2 years", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const YT_VIDEOS = [
    { id: "5RDuSLtxAsk", tag: "Morning Flow", title: "20-Min Morning Yoga", meta: "Full body stretch" },
    { id: "v7AYKMP6rOE", tag: "Meditation", title: "Breathwork & Calm", meta: "Beginner friendly" },
    { id: "4vTJHUDB5ak", tag: "Strength", title: "Core Power Yoga", meta: "30 min · Intermediate" },
    { id: "eTiEPH0RQXU", tag: "Flexibility", title: "Deep Hip Openers", meta: "45 min · All levels" },
];

const FLOATING_ICONS = [
    { Icon: LotusIcon, top: "12%", left: "6%", size: 44, delay: 0, dur: 5.5, color: "#7a8c6e" },
    { Icon: MeditationIcon, top: "70%", left: "5%", size: 38, delay: 1.2, dur: 6.2, color: "#a89070" },
    { Icon: WarriorIcon, top: "20%", right: "5%", size: 42, delay: 0.6, dur: 5.8, color: "#7a8c6e" },
    { Icon: TreePoseIcon, top: "65%", right: "6%", size: 48, delay: 1.8, dur: 7, color: "#a89070" },
    { Icon: BalanceIcon, top: "85%", left: "18%", size: 34, delay: 0.9, dur: 6.4, color: "#7a8c6e" },
    { Icon: BreathIcon, top: "10%", right: "18%", size: 36, delay: 2.1, dur: 5.2, color: "#a89070" },
    { Icon: LotusIcon, top: "45%", left: "3%", size: 28, delay: 1.5, dur: 6.8, color: "#c4b49a" },
    { Icon: MeditationIcon, top: "40%", right: "3%", size: 30, delay: 0.3, dur: 7.2, color: "#c4b49a" },
];

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --cream: #f5f0e8;
    --warm-white: #faf8f4;
    --deep: #1a1a1a;
    --sage: #7a8c6e;
    --muted: #9e9b94;
    --gold: #a89070;
    --border: rgba(0,0,0,0.09);
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  .yg-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--warm-white);
    color: var(--deep);
    overflow-x: hidden;
  }

  /* HERO */
  .yg-hero {
    position: relative; min-height: 150px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 50px 30px 20px;
    border-bottom: 1px solid var(--border); overflow: hidden;
    background: radial-gradient(ellipse at 50% 60%, #ede8dc 0%, var(--warm-white) 65%);
  }
  .yg-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.6rem, 4vw, 4.6rem); font-weight: 600; line-height: 1;
    animation: fadeUp .7s .1s ease both;
  }
  .yg-hero h1 em { color: var(--sage); font-style: italic; }
  .yg-hero h1 strong { color: var(--gold); font-weight: 600; }
  .yg-float-icon {
    position: absolute; opacity: 0.5;
    animation: floatBob var(--dur, 6s) var(--delay, 0s) ease-in-out infinite alternate;
    pointer-events: none;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.06));
  }
  @keyframes floatBob {
    0%   { transform: translateY(0px) rotate(-3deg); }
    100% { transform: translateY(-16px) rotate(3deg); }
  }
  .yg-hero-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(122,140,110,0.1);
    pointer-events: none;
  }

  /* SECTION */
  .yg-section { padding: 72px 60px; border-bottom: 1px solid var(--border); }
  .yg-section.cream { background: var(--cream); }
  .yg-section-label {
    display: flex; align-items: center; gap: 12px;
    font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 36px;
  }
  .yg-section-label::before { content: ''; width: 28px; height: 1px; background: var(--muted); }
  .yg-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 600;
    margin-bottom: 36px; line-height: 1.15;
  }
  .yg-section-title em { color: var(--sage); font-style: italic; }

  /* FILTERS */
  .yg-filters { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px; }
  .yg-filter-btn {
    font-family: 'DM Sans', sans-serif; font-size: 0.74rem;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 8px 18px; border-radius: 40px;
    border: 1px solid var(--border); background: transparent;
    color: var(--muted); cursor: pointer; transition: all .2s;
  }
  .yg-filter-btn:hover { border-color: var(--deep); color: var(--deep); }
  .yg-filter-btn.active { background: var(--deep); color: white; border-color: var(--deep); }

  /* PHOTO GRID */
  .yg-photo-grid { columns: 6; column-gap: 10px; }
  @media(max-width:1200px){ .yg-photo-grid { columns: 4; } }
  @media(max-width:900px){  .yg-photo-grid { columns: 3; } }
  @media(max-width:580px){  .yg-photo-grid { columns: 2; } }

  .yg-photo-card {
    break-inside: avoid; margin-bottom: 10px; border-radius: 12px;
    overflow: hidden; cursor: pointer; background: var(--warm-white);
    border: 1px solid var(--border); animation: fadeUp .5s ease both;
    transition: transform .3s, box-shadow .3s;
  }
  .yg-photo-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.1); }
  .yg-photo-img { position: relative; height: 150px; overflow: hidden; }
  .yg-photo-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
  .yg-photo-card:hover .yg-photo-img img { transform: scale(1.07); }
  .yg-photo-hover {
    position: absolute; inset: 0; background: rgba(20,20,20,0.55);
    opacity: 0; transition: opacity .3s;
    display: flex; align-items: center; justify-content: center;
  }
  .yg-photo-card:hover .yg-photo-hover { opacity: 1; }
  .yg-photo-hover-icon { width: 40px; height: 40px; background: rgba(255,255,255,0.92); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .yg-photo-hover-icon svg { width: 20px; height: 20px; fill: var(--deep); }
  .yg-photo-info { padding: 9px 11px 12px; }
  .yg-photo-name { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; font-weight: 600; color: var(--deep); margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .yg-photo-cat { display: inline-block; font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage); border: 1px solid rgba(122,140,110,0.3); padding: 2px 7px; border-radius: 20px; margin-bottom: 5px; }
  .yg-photo-desc-text { font-size: 0.73rem; color: var(--muted); line-height: 1.55; }

  /* VIDEO GRID */
  .yg-video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 18px; }
  .yg-video-card {
    border-radius: 16px; overflow: hidden; background: var(--warm-white);
    cursor: pointer; border: 1px solid var(--border);
    transition: transform .3s, box-shadow .3s; animation: fadeUp .5s ease both;
  }
  .yg-video-card:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(0,0,0,0.12); }
  .yg-video-thumb-wrap { position: relative; overflow: hidden; }
  .yg-video-thumb { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: transform .4s; }
  .yg-video-card:hover .yg-video-thumb { transform: scale(1.05); }
  .yg-video-play {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%) scale(0.9);
    width: 52px; height: 52px; background: rgba(255,255,255,0.92); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: transform .3s, background .2s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .yg-video-card:hover .yg-video-play { transform: translate(-50%,-50%) scale(1.1); background: white; }
  .yg-video-play svg { width: 18px; fill: var(--deep); margin-left: 3px; }
  .yg-video-info { padding: 16px 18px 20px; }
  .yg-video-tag { font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--sage); margin-bottom: 6px; }
  .yg-video-title { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 600; }
  .yg-video-meta { font-size: 0.78rem; color: var(--muted); margin-top: 4px; }

  /* TESTIMONIALS */
  .yg-test-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
  @media(max-width:820px){ .yg-test-grid { grid-template-columns: 1fr; } }
  .yg-test-card {
    border-radius: 16px; overflow: hidden; position: relative;
    cursor: pointer; aspect-ratio: 9/14; animation: fadeUp .5s ease both; transition: transform .3s;
  }
  .yg-test-card:hover { transform: scale(1.02); }
  .yg-test-thumb { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s; }
  .yg-test-card:hover .yg-test-thumb { transform: scale(1.04); }
  .yg-test-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%);
    display: flex; flex-direction: column; justify-content: flex-end; padding: 22px;
  }
  .yg-test-play {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%) scale(0.9);
    width: 52px; height: 52px; background: rgba(255,255,255,0.88); border-radius: 50%;
    display: flex; align-items: center; justify-content: center; transition: transform .3s, background .2s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }
  .yg-test-card:hover .yg-test-play { transform: translate(-50%,-50%) scale(1.1); background: white; }
  .yg-test-play svg { width: 16px; fill: var(--deep); margin-left: 3px; }
  .yg-test-name { color: white; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 600; }
  .yg-test-role { color: rgba(255,255,255,0.62); font-size: 0.74rem; margin-top: 2px; }

  /* YOUTUBE */
  .yg-yt-intro { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; flex-wrap: wrap; gap: 20px; }
  .yg-yt-cta {
    display: flex; align-items: center; gap: 10px;
    font-family: 'DM Sans', sans-serif; font-size: 0.76rem;
    letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
    color: var(--deep); border: 1px solid var(--deep); padding: 12px 24px;
    border-radius: 40px; transition: background .2s, color .2s; background: transparent; cursor: pointer;
  }
  .yg-yt-cta:hover { background: var(--deep); color: white; }
  .yg-yt-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 18px; }
  .yg-yt-card {
    border-radius: 14px; overflow: hidden; cursor: pointer; background: var(--warm-white);
    border: 1px solid var(--border); transition: transform .3s, box-shadow .3s; animation: fadeUp .5s ease both;
  }
  .yg-yt-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(0,0,0,0.1); }
  .yg-yt-thumb-wrap { position: relative; aspect-ratio: 16/9; overflow: hidden; }
  .yg-yt-thumb-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .4s; }
  .yg-yt-card:hover .yg-yt-thumb-wrap img { transform: scale(1.06); }
  .yg-yt-play {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 44px; height: 44px; background: rgba(255,255,255,0.92); border-radius: 50%;
    display: flex; align-items: center; justify-content: center; transition: transform .2s, background .2s;
    box-shadow: 0 3px 14px rgba(0,0,0,0.18);
  }
  .yg-yt-card:hover .yg-yt-play { background: white; transform: translate(-50%,-50%) scale(1.08); }
  .yg-yt-play svg { width: 15px; fill: #c00; margin-left: 3px; }
  .yg-yt-info { padding: 14px 16px 18px; }

  /* ═══════════════════════════════════════════
     LIGHTBOX  — fixed, full working
  ═══════════════════════════════════════════ */
  .yg-lightbox {
    position: fixed; inset: 0;
    background: rgba(8,8,8,0.94);
    z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    opacity: 0; pointer-events: none;
    transition: opacity .3s ease;
  }
  .yg-lightbox.open {
    opacity: 1; pointer-events: all;
  }
  .yg-lb-inner {
    position: relative; max-width: 900px; width: 100%;
    transform: scale(0.93) translateY(10px);
    transition: transform .35s cubic-bezier(0.4,0,0.2,1);
  }
  .yg-lightbox.open .yg-lb-inner {
    transform: scale(1) translateY(0);
  }
  .yg-lb-img {
    width: 100%; border-radius: 16px; display: block;
    max-height: 75vh; object-fit: contain;
    box-shadow: 0 32px 80px rgba(0,0,0,0.6);
  }
  .yg-lb-close {
    position: absolute; top: -50px; right: 0;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
    color: white; width: 40px; height: 40px; border-radius: 50%;
    font-size: 1.1rem; cursor: pointer; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    transition: background .2s, transform .2s;
  }
  .yg-lb-close:hover { background: rgba(255,255,255,0.25); transform: rotate(90deg); }
  .yg-lb-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
    color: white; width: 46px; height: 46px; border-radius: 50%;
    font-size: 1.2rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(6px); transition: background .2s, transform .2s;
  }
  .yg-lb-nav:hover { background: rgba(255,255,255,0.25); }
  .yg-lb-prev { left: -62px; }
  .yg-lb-next { right: -62px; }
  .yg-lb-caption {
    text-align: center; color: rgba(255,255,255,0.75);
    font-size: 0.82rem; letter-spacing: 0.14em; text-transform: uppercase;
    margin-top: 16px; font-family: 'Cormorant Garamond', serif; font-size: 1.1rem;
  }
  .yg-lb-cat {
    display: inline-block; margin: 6px auto 0;
    font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: #7a8c6e; border: 1px solid rgba(122,140,110,0.4);
    padding: 3px 10px; border-radius: 20px;
  }
  .yg-lb-desc {
    text-align: center; color: rgba(255,255,255,0.38);
    font-size: 0.83rem; max-width: 520px; margin: 8px auto 0;
    line-height: 1.68;
  }
  .yg-lb-counter {
    text-align: center; color: rgba(255,255,255,0.25);
    font-size: 0.7rem; letter-spacing: 0.15em; margin-top: 10px;
  }
  /* Backdrop click area */
  .yg-lb-backdrop {
    position: absolute; inset: 0; z-index: -1;
  }

  /* ═══════════════════════════════════════════
     VIDEO MODAL — fixed, full working
  ═══════════════════════════════════════════ */
  .yg-vmodal {
    position: fixed; inset: 0;
    background: rgba(8,8,8,0.94);
    z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    opacity: 0; pointer-events: none;
    transition: opacity .3s ease;
  }
  .yg-vmodal.open {
    opacity: 1; pointer-events: all;
  }
  .yg-vm-inner {
    position: relative; max-width: 960px; width: 100%;
    transform: scale(0.93) translateY(10px);
    transition: transform .35s cubic-bezier(0.4,0,0.2,1);
  }
  .yg-vmodal.open .yg-vm-inner {
    transform: scale(1) translateY(0);
  }
  .yg-vm-inner video,
  .yg-vm-inner iframe {
    width: 100%; display: block; aspect-ratio: 16/9;
    border: none; border-radius: 16px;
    box-shadow: 0 32px 80px rgba(0,0,0,0.6);
  }
  .yg-vm-close {
    position: absolute; top: -50px; right: 0;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
    color: white; width: 40px; height: 40px; border-radius: 50%;
    font-size: 1.1rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background .2s, transform .2s;
  }
  .yg-vm-close:hover { background: rgba(255,255,255,0.25); transform: rotate(90deg); }
  .yg-vm-title {
    text-align: center; color: rgba(255,255,255,0.65);
    font-family: 'Cormorant Garamond', serif; font-size: 1.05rem;
    margin-top: 14px; letter-spacing: 0.06em;
  }
  /* Backdrop click area */
  .yg-vm-backdrop {
    position: absolute; inset: 0; z-index: -1;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

// ── Play Triangle SVG ──────────────────────────────────────────────────────────
const PlayTri = () => (
    <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%" }}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

// ── Photo Grid ─────────────────────────────────────────────────────────────────
function PhotoGrid({ photos, onPhotoClick }) {
    return (
        <div className="yg-photo-grid">
            {photos.map((p, i) => (
                <div
                    key={p.id}
                    className="yg-photo-card"
                    style={{ animationDelay: `${i * 0.045}s` }}
                    onClick={() => onPhotoClick(i)}
                >
                    <div className="yg-photo-img">
                        <img src={p.thumb} alt={p.label} loading="lazy" />
                        <div className="yg-photo-hover">
                            <div className="yg-photo-hover-icon">
                                <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="yg-photo-info">
                        <div className="yg-photo-name">{p.label}</div>
                        <span className="yg-photo-cat">{p.category}</span>
                        <p className="yg-photo-desc-text">{p.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Video Card ─────────────────────────────────────────────────────────────────
function VideoCard({ video, delay, onPlay }) {
    return (
        <div className="yg-video-card" style={{ animationDelay: `${delay}s` }} onClick={() => onPlay(video.src, "local", video.title)}>
            <div className="yg-video-thumb-wrap">
                <img className="yg-video-thumb" src={video.thumb} alt={video.title} />
                <div className="yg-video-play">
                    <svg style={{ width: 18, fill: "var(--deep)", marginLeft: 3 }} viewBox="0 0 24 24"><PlayTri /></svg>
                </div>
            </div>
            <div className="yg-video-info">
                <div className="yg-video-tag">{video.tag}</div>
                <div className="yg-video-title">{video.title}</div>
                <div className="yg-video-meta">{video.meta}</div>
            </div>
        </div>
    );
}

// ── Testimonial Card ───────────────────────────────────────────────────────────
function TestimonialCard({ t, delay, onPlay }) {
    return (
        <div className="yg-test-card" style={{ animationDelay: `${delay}s` }} onClick={() => onPlay(t.src, "local", t.name)}>
            <img className="yg-test-thumb" src={t.thumb} alt={t.name} loading="lazy" />
            <div className="yg-test-overlay">
                <div className="yg-test-play">
                    <svg style={{ width: 16, fill: "var(--deep)", marginLeft: 3 }} viewBox="0 0 24 24"><PlayTri /></svg>
                </div>
                <div className="yg-test-name">{t.name}</div>
                <div className="yg-test-role">{t.role}</div>
            </div>
        </div>
    );
}

// ── YouTube Card ───────────────────────────────────────────────────────────────
function YtCard({ video, delay, onPlay }) {
    return (
        <div className="yg-yt-card" style={{ animationDelay: `${delay}s` }} onClick={() => onPlay(video.id, "yt", video.title)}>
            <div className="yg-yt-thumb-wrap">
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} loading="lazy" />
                <div className="yg-yt-play">
                    <svg style={{ width: 15, fill: "#c00", marginLeft: 3 }} viewBox="0 0 24 24"><PlayTri /></svg>
                </div>
            </div>
            <div className="yg-yt-info">
                <div className="yg-video-tag">{video.tag}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", fontWeight: 600 }}>{video.title}</div>
                <div className="yg-video-meta">{video.meta}</div>
            </div>
        </div>
    );
}

// ── LIGHTBOX COMPONENT ─────────────────────────────────────────────────────────
function Lightbox({ open, photos, idx, onClose, onNav }) {
    const photo = photos[idx];
    if (!photo) return null;

    return (
        <div className={`yg-lightbox${open ? " open" : ""}`}>
            {/* backdrop — click anywhere dark area to close */}
            <div className="yg-lb-backdrop" onClick={onClose} />

            <div className="yg-lb-inner" onClick={e => e.stopPropagation()}>
                {/* Close */}
                <button className="yg-lb-close" onClick={onClose} title="Close (Esc)">✕</button>

                {/* Prev */}
                <button className="yg-lb-nav yg-lb-prev" onClick={() => onNav(-1)} title="Previous (←)">‹</button>

                {/* Image */}
                <img className="yg-lb-img" src={photo.src} alt={photo.label} />

                {/* Next */}
                <button className="yg-lb-nav yg-lb-next" onClick={() => onNav(1)} title="Next (→)">›</button>

                {/* Caption */}
                <div className="yg-lb-caption">{photo.label}</div>
                <div style={{ textAlign: "center", marginTop: 6 }}>
                    <span className="yg-lb-cat">{photo.category}</span>
                </div>
                <div className="yg-lb-desc">{photo.desc}</div>
                <div className="yg-lb-counter">{idx + 1} / {photos.length}</div>
            </div>
        </div>
    );
}

// ── VIDEO MODAL COMPONENT ──────────────────────────────────────────────────────
function VideoModal({ open, src, type, title, onClose }) {
    return (
        <div className={`yg-vmodal${open ? " open" : ""}`}>
            {/* backdrop */}
            <div className="yg-vm-backdrop" onClick={onClose} />

            <div className="yg-vm-inner" onClick={e => e.stopPropagation()}>
                {/* Close */}
                <button className="yg-vm-close" onClick={onClose} title="Close (Esc)">✕</button>

                {/* Video or YouTube iframe */}
                {open && (
                    type === "yt"
                        ? <iframe
                            src={`https://www.youtube.com/embed/${src}?autoplay=1&rel=0`}
                            title={title || "Yoga Video"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        : <video
                            src={src}
                            controls
                            autoPlay
                            style={{ background: "#000" }}
                        />
                )}

                {title && <div className="yg-vm-title">{title}</div>}
            </div>
        </div>
    );
}

// ── MAIN ────────────────────────────────────────────────────────────────────────
export default function YogaGallery() {
    const [filter, setFilter] = useState("All");
    const [lbOpen, setLbOpen] = useState(false);
    const [lbIdx, setLbIdx] = useState(0);
    const [vmOpen, setVmOpen] = useState(false);
    const [vmSrc, setVmSrc] = useState(null);
    const [vmType, setVmType] = useState(null);
    const [vmTitle, setVmTitle] = useState(null);

    const categories = ["All", ...Array.from(new Set(PHOTOS.map(p => p.category)))];
    const filteredPhotos = filter === "All" ? PHOTOS : PHOTOS.filter(p => p.category === filter);

    // ── Lightbox handlers ────────────────────────────────────────────────────────
    const openLightbox = useCallback((idx) => {
        setLbIdx(idx);
        setLbOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLbOpen(false);
    }, []);

    const lbNav = useCallback((dir) => {
        setLbIdx(prev => (prev + dir + filteredPhotos.length) % filteredPhotos.length);
    }, [filteredPhotos.length]);

    // ── Video modal handlers ─────────────────────────────────────────────────────
    const openVideo = useCallback((src, type, title) => {
        setVmSrc(src);
        setVmType(type);
        setVmTitle(title || null);
        setVmOpen(true);
    }, []);

    const closeVideo = useCallback(() => {
        setVmOpen(false);
        // delay clearing src so video stops before modal fades out
        setTimeout(() => { setVmSrc(null); setVmType(null); setVmTitle(null); }, 350);
    }, []);

    // ── Keyboard ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        const fn = (e) => {
            if (e.key === "Escape") { closeLightbox(); closeVideo(); }
            if (e.key === "ArrowLeft" && lbOpen) lbNav(-1);
            if (e.key === "ArrowRight" && lbOpen) lbNav(1);
        };
        window.addEventListener("keydown", fn);
        return () => window.removeEventListener("keydown", fn);
    }, [lbOpen, lbNav, closeLightbox, closeVideo]);

    // ── Body scroll lock ──────────────────────────────────────────────────────────
    useEffect(() => {
        document.body.style.overflow = (lbOpen || vmOpen) ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lbOpen, vmOpen]);

    return (
        <>
            <style>{styles}</style>
            <div className="yg-root">

                {/* HERO */}
                <div className="yg-hero">
                    {[340, 520, 700].map((r, i) => (
                        <div key={i} className="yg-hero-ring"
                            style={{ width: r, height: r, top: "50%", left: "50%", transform: `translate(-50%,-50%)`, opacity: 0.45 - i * 0.14 }}
                        />
                    ))}
                    {FLOATING_ICONS.map(({ Icon, size, color, delay, dur, ...pos }, i) => (
                        <div key={i} className="yg-float-icon"
                            style={{ ...pos, "--dur": `${dur}s`, "--delay": `${delay}s` }}>
                            <Icon size={size} color={color} />
                        </div>
                    ))}
                    <h1>Our <em>Gallery</em><br />&amp; <strong>Studio</strong></h1>
                </div>

                {/* PHOTO GALLERY */}
                <section className="yg-section">
                    <div className="yg-section-label">Photography</div>
                    <div className="yg-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`yg-filter-btn${filter === cat ? " active" : ""}`}
                                onClick={() => setFilter(cat)}
                            >{cat}</button>
                        ))}
                    </div>
                    <PhotoGrid photos={filteredPhotos} onPhotoClick={openLightbox} />
                </section>

                {/* CLASS VIDEOS */}
                <section className="yg-section cream">
                    <div className="yg-section-label">Class Sessions</div>
                    <div className="yg-video-grid">
                        {CLASS_VIDEOS.map((v, i) => (
                            <VideoCard key={v.id} video={v} delay={i * 0.08} onPlay={openVideo} />
                        ))}
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="yg-section">
                    <div className="yg-section-label">Student Stories</div>
                    <div className="yg-section-title">What our community <em>says</em></div>
                    <div className="yg-test-grid">
                        {TESTIMONIALS.map((t, i) => (
                            <TestimonialCard key={t.id} t={t} delay={i * 0.1} onPlay={openVideo} />
                        ))}
                    </div>
                </section>

                {/* YOUTUBE */}
                <section className="yg-section cream">
                    <div className="yg-yt-intro">
                        <div className="yg-section-title" style={{ marginBottom: 0 }}>
                            More on our <em>YouTube</em><br />channel
                        </div>
                        <a className="yg-yt-cta" href="https://youtube.com" target="_blank" rel="noreferrer">
                            Visit Channel →
                        </a>
                    </div>
                    <div className="yg-yt-grid">
                        {YT_VIDEOS.map((v, i) => (
                            <YtCard key={v.id} video={v} delay={i * 0.08} onPlay={openVideo} />
                        ))}
                    </div>
                </section>

            </div>

            {/* ── IMAGE LIGHTBOX ── */}
            <Lightbox
                open={lbOpen}
                photos={filteredPhotos}
                idx={lbIdx}
                onClose={closeLightbox}
                onNav={lbNav}
            />

            {/* ── VIDEO MODAL ── */}
            <VideoModal
                open={vmOpen}
                src={vmSrc}
                type={vmType}
                title={vmTitle}
                onClose={closeVideo}
            />
        </>
    );
}