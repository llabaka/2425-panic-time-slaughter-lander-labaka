const Weapon = require('../models/weaponsModel');

const getAllWeapons = async () => {
    try {
        const weapons = await Weapon.find();
        return weapons;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllWeapons
}