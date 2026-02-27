import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import sendEmail from "../utils/sendEmail.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();


// ==========================
// ✅ SIGNUP
// ==========================
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: "Invalid phone number. Must be exactly 10 digits." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please login instead." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        // ==========================
        // ✅ PROFESSIONAL WELCOME EMAIL
        // ==========================
        const welcomeMessage = `
Dear ${name},

Welcome to Yoga Bliss 🧘‍♀️

We are delighted to have you join our growing wellness community. 
Your journey towards better health, mindfulness, and inner peace begins here.

At Yoga Bliss, our mission is to help you:

• Build physical strength and flexibility  
• Improve mental clarity and emotional balance  
• Develop a sustainable and healthy lifestyle  

For regular class updates, announcements, and session schedules, 
you may join our official WhatsApp group:

WhatsApp Contact: +91 8630978854

If you have any questions or need assistance, 
please feel free to reply to this email.

We look forward to supporting you in every step of your wellness journey.

Warm regards,  
Team Yoga Bliss 🌿
        `;

        await sendEmail(
            email,
            "Welcome to Yoga Bliss 🧘‍♀️",
            welcomeMessage
        );

        // ==========================
        // ✅ ADMIN NOTIFICATION EMAIL
        // ==========================
        if (process.env.ADMIN_EMAIL) {
            const adminMessage = `
New User Registration Notification

A new user has successfully registered.

Name  : ${name}
Email : ${email}
Phone : ${phone}

Please review the registration details if necessary.
            `;

            await sendEmail(
                process.env.ADMIN_EMAIL,
                "New User Registered - Yoga Bliss",
                adminMessage
            );
        }

        res.status(201).json({
            message: "Signup successful. Welcome email sent.",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


// ==========================
// ✅ LOGIN
// ==========================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // IMPORTANT: Send user data + token
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: token
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ==========================
// ✅ GET CURRENT USER (Protected)
// ==========================
router.get("/me", protect, (req, res) => {
    res.json(req.user);
});

export default router;