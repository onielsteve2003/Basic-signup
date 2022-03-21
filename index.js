const express = require('express');
// Initialize express
const app = express();

require('dotenv').config({ path: './config/config.env' });

const mongoose = require('mongoose');
const cors = require('cors');

// Middlewares
app.use(express.urlencoded({ extended: false }));
// Body Parser..... This is to be able to use req.body to get data
app.use(express.json());
// app.use(cors({origin: 'http://127.0.0.1:5500/'}));
app.use(cors());

//Mongo Connection
const connectDB = require('./config/db')

connectDB()

// Routes
app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))