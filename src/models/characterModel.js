const mongoose = require('mongoose');

const { Schema } = mongoose;

const ObjectId = Schema.Types.ObjectId

const characterSchema = new Schema({
    name: String,
    occupation: String,
    description: String,
    stats: {
        strength: Number,
        dexterity: Number,
        stamina: Number
    },
    equipment: {
        saddlebag: [ObjectId],
        quiver: Number,
        weapons: [ObjectId],
        pouch: {
            coins: Number,
            gold: Number,
            precious_stones: [ObjectId]
        },
        miscellaneous: Array
    }
})

module.exports = mongoose.model('Character', characterSchema);