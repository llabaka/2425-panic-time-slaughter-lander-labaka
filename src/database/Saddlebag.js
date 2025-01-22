const Saddlebag = require('../models/saddlebagModel');

const getAllSaddlebags = async () => {
    try {
        const saddlebags = await Saddlebag.find();
        return saddlebags;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllSaddlebags
}