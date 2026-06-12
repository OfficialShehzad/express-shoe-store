require('dotenv').config();

const jwt = require("jsonwebtoken");
const UserModel = require("./models/user.model.js");

const login = async (email, password) => {
    const user = await UserModel.findOne({ email });

    if (!user) throw new Error("User not found")

    if (user.password !== password) throw new Error("Invalid password")

    const token = jwt.sign(
        {
            userId: user._id,
            email: user.email,
            userType: user.user_type,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return { token, user };
};

const register = async (payload) => {
    if (!payload.name) {
        throw new Error("Name is required");
    }

    if (!payload.email) {
        throw new Error("Email is required");
    }

    if (!payload.password) {
        throw new Error("Password is required");
    }
    
    const existingUser = await UserModel.findOne({
        email: payload.email,
    });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const user = await UserModel.create(payload);

    return user;
};

const authService = { login, register };

module.exports = authService;