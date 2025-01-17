const express = require('express');
const bodyParser = require('body-parser');
const helloRoutes = require('./routes/helloRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/hello', helloRoutes);
app.use('/auth', authRoutes);

module.exports = app;
