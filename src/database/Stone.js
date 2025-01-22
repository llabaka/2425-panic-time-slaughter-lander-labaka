const Stone = require('../models/preciousStonesModel');

const getAllStones = async () => {
    try {
        const stones = await Stone.find();
        return stones;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllStones
}