import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();


// 📌 Create Booking
router.post("/", async (req, res) => {
    try {
        const { name, email, date, slot } = req.body;

        if (!name || !email || !date || !slot) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const booking = await Booking.create({
            name,
            email,
            date,
            slot,
        });

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


// 📌 Get All Bookings
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();

        res.status(200).json({
            success: true,
            bookings,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


// 📌 Delete Booking
router.delete("/:id", async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


export default router;