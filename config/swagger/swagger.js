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
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ]
    },
    apis: ['./modules/**/*.routes.js', './app.js'], 
};

const specs = swaggerJsdoc(options);

const swaggerConfigs = {
    swaggerUi,
    specs,
};

module.exports = swaggerConfigs;