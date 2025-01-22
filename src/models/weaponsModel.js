const mongoose = require('mongoose');

const { Schema } = mongoose;

const weaponsSchema = new Schema({
    name: String,
    description: String,
    num_die_damage: Number,
    type: String,
    queality: Number
})

module.exports = mongoose.model('Weapon', weaponsSchema);