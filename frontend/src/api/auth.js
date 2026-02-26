import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: `${API_URL}/api/auth`,
    withCredentials: true,
});

export const signupUser = (data) => API.post("/signup", data);
export const loginUser = (data) => API.post("/login", data); 