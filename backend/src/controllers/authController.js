// const nodemailer = require('nodemailer');

// exports.signup = async (req, res) => {
//     const { email, username } = req.body;

//     console.log(`Step 1: Received signup request for ${email}`);

//     // 1. Setup Transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS // This MUST be a 16-character App Password
//         }
//     });

//     // 2. Define Email Options
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Welcome to Yoga Bliss!',
//         text: `Hi ${username}, your account is ready!`
//     };

//     try {
//         console.log("Step 2: Attempting to send email...");

//         // IMPORTANT: We use 'await' so the code waits for the email result
//         const info = await transporter.sendMail(mailOptions);

//         console.log("✅ Step 3: Email sent successfully:", info.response);
//         res.status(200).json({ message: "User created and email sent!" });

//     } catch (error) {
//         console.error("❌ Step 3: Email failed!", error.message);

//         // If it fails here, Postman will finally show you the ERROR instead of "Success"
//         res.status(500).json({
//             error: "Email failed to send",
//             details: error.message
//         });
//     }
// };
// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import nodemailer from "nodemailer";

// export const signup = async (req, res) => {
//     try {
//         const { name, email, phone, password } = req.body;

//         // 1️⃣ Check if all fields are provided
//         if (!name || !email || !phone || !password) {
//             return res.status(400).json({
//                 message: "All fields are required",
//             });
//         }

//         // 2️⃣ Check if user already exists (email or phone)
//         const existingUser = await User.findOne({
//             $or: [{ email }, { phone }],
//         });

//         if (existingUser) {
//             return res.status(400).json({
//                 message: "User already exists with this email or phone",
//             });
//         }

//         // 3️⃣ Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // 4️⃣ Create new user
//         const user = await User.create({
//             name,
//             email,
//             phone,
//             password: hashedPassword,
//         });

//         // 5️⃣ Setup email transporter
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         // 6️⃣ Send welcome email
//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "Welcome to Yoga Bliss!",
//             text: `Hi ${name}, your account has been created successfully! 🧘‍♀️`,
//         });

//         // 7️⃣ Send success response
//         res.status(201).json({
//             message: "Signup successful. Welcome email sent.",
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 phone: user.phone,
//             },
//         });

//     } catch (error) {
//         console.error("Signup Error:", error);
//         res.status(500).json({
//             message: "Something went wrong",
//             error: error.message,
//         });
//     }
// };

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

        // 5️⃣ Send welcome email using SAME email function
        await sendEmail(
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