const router = require('express').Router();

const authenticate = require('../../middleware/auth.middleware.js');
const brandController = require('./brands.controller.js');

/**
 * @swagger
 * /brands:
 *   post:
 *     tags:
 *       - Brands
 *     summary: Create a new brand
 *     description: Creates a new brand record in the database. Requires a valid JWT bearer token.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: A new brand name
 *     responses:
 *       201:
 *         description: Brand creation was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Brand registered successfully.
 *       400:
 *         description: Bad request, required fields are missing.
 *       401:
 *         description: Unauthorized. Missing or invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Token missing
 */
router.post('/', authenticate, brandController.createBrand);

router.patch('/', brandController.updateBrand);

router.delete('/', brandController.deleteBrand);

router.get('/', brandController.getBrands);

module.exports = router;