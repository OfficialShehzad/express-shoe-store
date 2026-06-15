require('dotenv').config();

const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Shoe Store swagger docs',
            version: '1.0.0',
            description: 'A simple shoe store ecommerce application'
        },
        servers: [
            {
                url: process.env.NODE_ENV === 'development' ? process.env.DEV_API_URL : 'http://localhost:3000',
                description: process.env.NODE_ENV === 'development' ? 'Dev server on vercel' : 'Local dev server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [
        path.join(__dirname, './modules/**/*.routes.js'),
        path.join(__dirname, './app.js')
    ], 
};

const specs = swaggerJsdoc(options);

const swaggerConfigs = {
    swaggerUi,
    specs,
};

module.exports = swaggerConfigs;