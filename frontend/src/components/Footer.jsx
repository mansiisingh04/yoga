{/* <footer className="bg-black text-white pt-20 pb-12 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-left border-b border-white/10 pb-16">
        <div className="space-y-6">
            <h3 className="font-serif text-4xl">Yoga Bliss.</h3>
            <p className="text-gray-400 text-sm italic leading-relaxed">
                A curated space for the modern practitioner. <br />
                Est. 2014 • Santa Monica
            </p>
        </div>
        <div className="space-y-6">
            <h4 className="text-[11px] uppercase font-bold text-[#84947C] tracking-widest">The Sanctuary</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
                45 Ocean Breeze Blvd, Wellness Suite 210<br />
                Santa Monica, CA 90401
            </p>
        </div>
        <div className="space-y-6">
            <h4 className="text-[11px] uppercase font-bold text-[#84947C] tracking-widest">Stay Connected</h4>
            <div className="flex gap-8 text-gray-300">
                <Mail size={20} className="hover:text-[#E9EDC9] cursor-pointer transition-colors" />
                <Instagram size={20} className="hover:text-[#E9EDC9] cursor-pointer transition-colors" />
                <Phone size={20} className="hover:text-[#E9EDC9] cursor-pointer transition-colors" />
            </div>
        </div>
    </div>
    <div className="text-center pt-8">
        <p className="text-[9px] text-white/20 uppercase tracking-[1em]">© 2026 Yoga Bliss Collective</p>
    </div>
</footer> */}
// components/Footer.js
import React from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-12 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-left border-b border-white/10 pb-16">
                <div className="space-y-6">
                    <h3 className="font-serif text-4xl">Yoga Bliss.</h3>
                    <p className="text-gray-400 text-sm italic leading-relaxed">
                        A curated space for the modern practitioner. <br />
                        Est. 2014 • Santa Monica
                    </p>
                </div>
                <div className="space-y-6">
                    <h4 className="text-[11px] uppercase font-bold text-[#84947C] tracking-widest">The Sanctuary</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                        45 Ocean Breeze Blvd, Wellness Suite 210<br />
                        Santa Monica, CA 90401
                    </p>
                </div>
                <div className="space-y-6">
                    <h4 className="text-[11px] uppercase font-bold text-[#84947C] tracking-widest">Stay Connected</h4>
                    <div className="flex gap-8 text-gray-300">
                        <Mail size={20} className="hover:text-[#E9EDC9] cursor-pointer transition-colors" />
                        <Instagram size={20} className="hover:text-[#E9EDC9] cursor-pointer transition-colors" />
                        <Phone size={20} className="hover:text-[#E9EDC9] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
            <div className="text-center pt-8">
                <p className="text-[9px] text-white/20 uppercase tracking-[1em]">© 2026 Yoga Bliss Collective</p>
            </div>
        </footer>
    );
};

export default Footer;