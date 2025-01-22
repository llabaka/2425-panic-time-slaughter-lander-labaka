const Saddlebag = require('../database/Saddlebag');

const getAllSaddlebags = async () => {
    try {
        const allSaddlebags = Saddlebag.getAllSaddlebags();
        return allSaddlebags;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllSaddlebags
}