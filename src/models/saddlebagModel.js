const mongoose = require('mongoose');

const { Schema } = mongoose;

const saddlebagSchema = new Schema({
    name: String,
    description: String,
    recover_staminga: Number
})

module.exports = mongoose.model('SaddleBag', saddlebagSchema);