const mongoose = require('mongoose');

const { Schema } = mongoose;

const stonesSchema = new Schema({
    name: String,
    description: String,
    value: Number,
})

module.exports = mongoose.model('Stones', stonesSchema);