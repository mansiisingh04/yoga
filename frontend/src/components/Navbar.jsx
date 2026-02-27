import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import toast from "react-hot-toast";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const handleClickOutside = (event) => {
                if (!event.target.closest(".profile-dropdown")) {
                    setOpen(false);
                }
            };
            window.addEventListener("click", handleClickOutside);
        };
        const loadUser = () => {
            try {
                const storedUser = localStorage.getItem("user");

                // If nothing or invalid value
                if (!storedUser || storedUser === "undefined" || storedUser === "null") {
                    setUser(null);
                    return;
                }


                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);

            } catch (error) {
                console.log("Invalid JSON in localStorage:", error);
                localStorage.removeItem("user");
                setUser(null);
            }
        };

        // Load user on first render
        loadUser();

        // Listen for login/signup/logout changes
        window.addEventListener("authChange", loadUser);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("authChange", loadUser);
        };
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setOpen(false); // 👈 close dropdown

        window.dispatchEvent(new Event("authChange"));

        alert("You successfully logged out");

        navigate("/");
    };
    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 py-6 flex justify-between items-center ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>

            {/* LOGO */}
            <Link to="/" className="text-2xl font-serif tracking-tighter text-[#1A1C19]">
                Yoga Bliss<span className="text-[#84947C]">.</span>
            </Link>

            {/* NAV LINKS */}
            <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1C19]">
                <Link to="/" className="hover:text-[#84947C] transition-colors">Home</Link>
                <Link to="/gallery" className="hover:text-[#84947C] transition-colors">Gallery</Link>
                <Link to="/courses" className="hover:text-[#84947C] transition-colors">Courses</Link>
                <Link to="/contactus" className="hover:text-[#84947C] transition-colors">Contact Us</Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center relative">

                {!user ? (
                    <Link
                        to="/auth"
                        className="border border-[#1A1C19] text-[#1A1C19] px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#1A1C19] hover:text-white transition-all duration-500"
                    >
                        Login / Sign Up
                    </Link>
                ) : (
                    <div className="relative profile-dropdown">
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <User size={18} />
                            <span className="text-sm font-semibold">{user.name}</span>
                        </div>

                        {open && (
                            <div className="absolute right-0 mt-4 w-56 bg-white text-black rounded-2xl shadow-xl p-4 space-y-3">
                                <div className="text-sm">
                                    <p className="text-sm text-gray-600 break-all">
                                        {user.email}
                                    </p>
                                    <p className="text-gray-500">{user.phone || "No phone added"}</p>
                                </div>

                                <hr />
                                <button onClick={() => navigate("/")} className="block w-full text-left hover:text-[#84947C]">
                                    Home
                                </button>
                                <button onClick={() => navigate("/courses")} className="block w-full text-left hover:text-[#84947C]">
                                    Courses
                                </button>
                                <button onClick={() => navigate("/gallery")} className="block w-full text-left hover:text-[#84947C]">
                                    Gallery
                                </button>
                                <button onClick={() => navigate("/instructor")} className="block w-full text-left hover:text-[#84947C]">
                                    Instructor
                                </button>
                                <button onClick={() => navigate("/contactus")} className="block w-full text-left hover:text-[#84947C]">
                                    Contact Us
                                </button>

                                <hr />

                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left text-red-500 hover:text-red-700"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;