const express = require('express');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

app.use(express.json());

// Use routes
app.use('/api', messageRoutes);

module.exports = app;
