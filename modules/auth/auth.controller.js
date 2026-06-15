const authService = require("./auth.service.js");

const { controllerErrorCatcher } = require("../../utils/helper.js");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        return res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        return controllerErrorCatcher(res, error);
    }
};

const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);

        return res.status(201).json({
            success: true,
            data: result,
        });
    } catch (error) {
        return controllerErrorCatcher(res, error);
    }
};

const authController = { login, register }

module.exports = authController;