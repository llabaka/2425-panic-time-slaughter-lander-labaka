const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema({
    name: String,
    occupation: String,
    description: String,
    stats: Object,
    equipment: {
        saddlebag: [Number],
        quiver: Number,
        weapons: [Number],
        pouch: Object,
        precious_stones: [Number],
        miscellaneous: Array
    }
})

module.exports = mongoose.model('Character', characterSchema);