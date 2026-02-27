import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // change if deployed
});

// Signup
export const signupUser = async (data) => {
    return await API.post("/auth/signup", data);
};

// Login
export const loginUser = async (data) => {
    return await API.post("/auth/login", data);
};