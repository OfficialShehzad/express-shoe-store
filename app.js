require("./config/db/db.js");

const express = require('express');
const app = express();

const authRoutes = require('./modules/auth/auth.routes.js');

app.use(express.json());


// HOME ROUTE
app.get('/', (req, res) => res.send('Welcome to the shoe store.'));

// ROUTES
app.use('/auth', authRoutes);

module.exports = app;