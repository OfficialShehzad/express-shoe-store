require("./config/db/db.js");

const express = require('express');
const cors = require('cors');

const swaggerConfigs = require('./config/swagger/swagger.js');
const { swaggerUi, specs } = swaggerConfigs;

const authRoutes = require('./modules/auth/auth.routes.js');
const brandRoutes = require('./modules/brands/brands.routes.js');

// EXPRESS APP INITIALIZATION
const app = express();
app.use(express.json());
app.use(cors());

// SWAGGER ROUTE
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// HOME ROUTE
app.get('/', (req, res) => res.send('Welcome to the shoe store. Go to /api-docs to see the Swagger Documentation.'));

// ROUTES
app.use('/auth', authRoutes);
app.use('/brands', brandRoutes);


module.exports = app;