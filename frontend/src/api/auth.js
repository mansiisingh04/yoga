import axios from "axios";

const API = axios.create({
    // 1️⃣ We keep the base URL up to /api
    baseURL: "https://yogabackend-ehoa.onrender.com/api",
});

// Signup
export const signupUser = async (data) => {
    // 2️⃣ This will now correctly hit .../api/auth/signup
    return await API.post("/auth/signup", data);
};

// Login
export const loginUser = async (data) => {
    // 3️⃣ This will now correctly hit .../api/auth/login
    return await API.post("/auth/login", data);
};