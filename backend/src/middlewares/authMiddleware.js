import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
    let token;

    // 1. Check if the Authorization header exists and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // 2. Extract the token
            token = req.headers.authorization.split(" ")[1];

            // 3. Verify the token using your secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 4. Find the user in the DB and attach it to the request (excluding password)
            req.user = await User.findById(decoded.id).select("-password");

            // 5. Move to the next function
            return next();
        } catch (error) {
            console.error("❌ Token Verification Failed:", error.message);
            return res.status(401).json({ message: "Not authorized, token invalid or expired" });
        }
    }

    // 6. If no token was found at all
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }
};

export default protect;