// models/Price.js

const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Price', priceSchema);
