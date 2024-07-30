import User from "../model/User.js";
import bcryptjs from "bcryptjs";

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }
        res.json({ success: true, message: "Login successful", data: user });
    } catch (err) {
        res.json({ success: false, message: "Failed to login", error: err.message });
    }
}


const postSignup = async (req, res) => {
    try {
        const { name, email, password, mobile, age, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }
        const hashpassword = await bcryptjs.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashpassword,
            mobile,
            age,
            role,
        })
        await user.save();
        res.json({ success: true, message: "User registered successfully", data: user });
    } catch (err) {
        res.json({ success: false, message: "Failed to register user", error: err.message });
    }

}

export {
    postLogin,
    postSignup
}