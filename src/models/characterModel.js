const mongoose = require('mongoose');
const weaponsModel = require('./weaponsModel');
const saddlebagModel = require('./saddlebagModel');
const preciousStonesModel = require('./preciousStonesModel');

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
        saddlebag: [{type: ObjectId, ref: saddlebagModel}],
        quiver: Number,
        weapons: [{type: ObjectId, ref: weaponsModel}],
        pouch: {
            coins: Number,
            gold: Number,
            precious_stones: [{type: ObjectId, ref: preciousStonesModel}]
        },
        miscellaneous: Array
    }
})

module.exports = mongoose.model('Character', characterSchema);