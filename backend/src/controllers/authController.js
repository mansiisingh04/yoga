import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";   // ✅ use same email function

export const signup = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // 1️⃣ Check if all fields are provided
        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // 2️⃣ Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phone }],
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email or phone",
            });
        }

        // 3️⃣ Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4️⃣ Create user
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // 5️⃣ Send welcome email using SAME email function
        sendEmail(
            email,
            "Welcome to Yoga Bliss!",
            `Hi ${name},

Your account has been created successfully! 🧘‍♀️
Welcome to Yoga Bliss 💛

Team Yoga Bliss`
        );

        // 6️⃣ Success response
        res.status(201).json({
            message: "Signup successful. Welcome email sent.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
        });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1️⃣ Check fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required"
            });
        }

        // 2️⃣ Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // 3️⃣ Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        // 4️⃣ Create token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // 5️⃣ IMPORTANT → Send user object
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            }
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            message: "Server error"
        });
    }
};
