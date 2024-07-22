// cron/fetchPrices.js
require('dotenv').config(); // Load environment variables from .env file
const cron = require('node-cron');
const axios = require('axios');
const mongoose = require('mongoose');
const Price = require('../models/Price'); // Adjust the path to your Price model

const MONGODB_URI = process.env.MONGODB_URI; // Ensure this is set in your .env.local

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fetchAndSavePrices = async () => {
    try {
        // Example API call
        const response = await axios.get('https://api.example.com/prices'); // Replace with actual API endpoint
        const prices = response.data;

        // Save to MongoDB
        await Price.insertMany(prices);
        console.log('Prices saved successfully');
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
};

// Schedule the task to run every 5 minutes
cron.schedule('*/5 * * * *', fetchAndSavePrices);
