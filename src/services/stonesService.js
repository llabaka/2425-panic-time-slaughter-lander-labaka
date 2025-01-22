const Stone = require('../database/Stone');

const getAllStones = async () => {
    try {
        const allStones = Stone.getAllStones();
        return allStones;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllStones
}