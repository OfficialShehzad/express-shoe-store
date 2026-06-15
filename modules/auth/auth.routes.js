const router = require("express").Router();

const authController = require("./auth.controller.js")


/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *      - Authentication
 *     summary: Register a new user
 *     description: Creates a new user record in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: SecurePass123
 *     responses:
 *       201:
 *         description: User creation was successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully.
 *       400:
 *         description: Bad request (e.g., missing fields or email already exists).
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *    tags:
 *      - Authentication
 *    summary: Login an existing user
 *    description: Checks existing users in the database and returns a JWT token for the user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                example: user@example.com
 *              password:
 *                type: string
 *                example: SecurePass123
 *    responses:
 *      201:
 *        description: User login was successful
 *        content:
 *          application/json:
 *            token:
 *              type: string
 *              example: longassjwt.accesstoken.isreturned
 *            user:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: loggedinuser@example.com
 *                name:
 *                  type: string
 *                  example: Jane Doe
 *      400:
 *        description: User not found or invalid credentials
 *     
 */
router.post('/login', authController.login);

module.exports = router;