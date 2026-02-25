import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// ================= MIDDLEWARE =================
app.use(
    cors({
        origin: "http://localhost:5173", // frontend URL (Vite default)
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= ROUTES =================
app.get("/", (req, res) => {
    res.send("Yoga Bliss API Running 🧘‍♀️");
});

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api", contactRoutes);

// ================= ERROR HANDLER =================
app.use(errorMiddleware);

export default app;