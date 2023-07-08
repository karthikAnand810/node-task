const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconfig');
const routes = require('./routes/index')

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/api', routes);
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to Node App' })
})
app.use('*', (req, res) => {
    res.status(200).json({ message: 'Invalid Api Endpoint' })
})
const PORT = 5000;
const DB_URL = 'mongodb+srv://admin:admin123@cluster1.niz1tlz.mongodb.net/?retryWrites=true&w=majority';
connectDB(DB_URL);
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
