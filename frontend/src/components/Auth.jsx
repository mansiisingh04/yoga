import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { signupUser, loginUser } from "../api/auth";

const YogaAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [mode, setMode] = useState("login");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    useEffect(() => {
        if (location.state?.mode) {
            setMode(location.state.mode);
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (mode === "signup") {

                // 1️⃣ Create account
                await signupUser(formData);

                // 2️⃣ Immediately login after signup
                const loginResponse = await loginUser({
                    email: formData.email,
                    password: formData.password
                });

                if (!loginResponse?.data?.token) {
                    throw new Error("Auto login failed after signup");
                }

                localStorage.setItem("token", loginResponse.data.token);

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        _id: loginResponse.data._id,
                        name: loginResponse.data.name,
                        email: loginResponse.data.email
                    })
                );

                window.dispatchEvent(new Event("authChange"));

                // 4️⃣ Show success
                toast.success("Account created successfully!", {
                    style: { background: "#1A1C19", color: "#fff" }
                });

                // 5️⃣ Navigate to landing page
                navigate("/");


            } else {
                // 🔹 LOGIN
                const response = await loginUser({
                    email: formData.email,
                    password: formData.password
                });


                if (!response?.data?.token) {
                    throw new Error("Login failed: token missing");
                }

                localStorage.setItem("token", response.data.token);

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        _id: response.data._id,
                        name: response.data.name,
                        email: response.data.email
                    })
                );

                window.dispatchEvent(new Event("authChange"));

                toast.success(
                    `Welcome back, ${response.data.name}!`,
                    {
                        style: { background: "#1A1C19", color: "#fff" }
                    }
                );

                setTimeout(() => {
                    navigate(location.state?.redirectTo || "/");
                }, 1000);
            }

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                error.message ||
                "Something went wrong",
                {
                    style: { background: "#333", color: "#fff" }
                }
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[90vh] bg-[#FAF9F6] flex items-center justify-center p-6">
            <div className="relative bg-white p-10 md:p-16 rounded-[3rem] shadow-sm max-w-[450px] w-full border border-gray-50 flex flex-col items-center my-12 animate-in fade-in zoom-in-95 duration-500">

                <button
                    onClick={() => navigate("/")}
                    className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors"
                >
                    <X size={20} />
                </button>

                <h2 className="text-4xl font-serif mb-3 text-center text-[#1A1C19]">
                    {mode === "login" ? "Welcome Back" : "Begin Your Journey"}
                </h2>

                <form onSubmit={handleSubmit} className="w-full space-y-4">

                    {mode === "signup" && (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="w-full p-5 rounded-2xl bg-[#F8F8F8] outline-none text-gray-500 text-sm"
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="w-full p-5 rounded-2xl bg-[#F8F8F8] outline-none text-gray-500 text-sm"
                    />

                    {mode === "signup" && (
                        <div className="flex items-center bg-[#F8F8F8] rounded-2xl">
                            <span className="pl-5 pr-3 text-gray-600 text-sm font-medium">
                                +91
                            </span>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="w-full p-5 pl-0 bg-transparent outline-none text-gray-500 text-sm"
                            />
                        </div>
                    )}

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="w-full p-5 rounded-2xl bg-[#F8F8F8] outline-none text-gray-500 text-sm"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] mt-4 transition-all 
                        ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#2D302D] hover:bg-black text-white"
                            }`}
                    >
                        {loading
                            ? "PLEASE WAIT..."
                            : mode === "login"
                                ? "LOG IN"
                                : "CREATE ACCOUNT"}
                    </button>

                </form>

                <p className="text-center mt-10 text-xs text-gray-400">
                    {mode === "login"
                        ? "Don't have an account? "
                        : "Already a member? "}
                    <span
                        className="text-[#84947C] cursor-pointer font-bold underline ml-1 hover:text-[#5A6355]"
                        onClick={() =>
                            setMode(mode === "login" ? "signup" : "login")
                        }
                    >
                        {mode === "login" ? "Sign up here" : "Login here"}
                    </span>
                </p>

            </div>
        </div>
    );
};

export default YogaAuth;