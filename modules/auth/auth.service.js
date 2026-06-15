require('dotenv').config();

const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user.model.js");
const { serviceErrorThrower } = require('../../utils/helper.js');

const login = async (email, password) => {
    const user = await UserModel.findOne({ email });

    if (!user) serviceErrorThrower(404, "User not found")

    if (user.password !== password) serviceErrorThrower(401, "Invalid password")

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
    const { name, email, password } = payload;

    if (!name) serviceErrorThrower(400, "Name is required");
    if (!email) serviceErrorThrower(400, "Email is required");
    if (!password) serviceErrorThrower(400, "Password is required");

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) serviceErrorThrower(409, "User with the same email already exists");

    const user = await UserModel.create(payload);

    const userObj = user.toObject();
    delete userObj.password;

    return userObj;
};

const authService = { login, register };

module.exports = authService;