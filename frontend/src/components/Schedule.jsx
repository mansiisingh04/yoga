import React from "react";

const Trainer = () => {
    return (
        <section className="bg-zinc-950 py-24 px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left: Trainer Info */}
                <div className="w-full md:w-1/2 space-y-6 text-white">
                    <h4 className="text-orange-400 uppercase tracking-widest font-bold text-sm">Meet Your Guide</h4>
                    <h2 className="text-5xl font-light">The Quality of <br /><span className="font-bold italic">Expertise.</span></h2>
                    <p className="text-gray-400 text-lg">
                        Our lead trainers are certified masters in both Vinyasa Flow and High-Intensity Athletic training. We focus on alignment, breathwork, and explosive power to ensure you reach your peak potential safely.
                    </p>
                    <ul className="space-y-4 text-sm uppercase tracking-wider text-gray-300">
                        <li className="flex items-center gap-3"><span className="text-orange-400">✔</span> 15+ Years Experience</li>
                        <li className="flex items-center gap-3"><span className="text-orange-400">✔</span> Internationally Certified</li>
                        <li className="flex items-center gap-3"><span className="text-orange-400">✔</span> Personalized Correction</li>
                    </ul>
                </div>

                {/* Right: Trainer Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-orange-400/20 blur-xl group-hover:bg-orange-400/40 transition duration-1000"></div>
                        <img
                            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1000"
                            className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            alt="Lead Trainer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainer;