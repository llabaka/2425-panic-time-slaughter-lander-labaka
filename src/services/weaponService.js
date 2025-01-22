const Weapon = require('../database/Weapon');

const getAllWeapons = async () => {
    try {
        const allWeapons = Weapon.getAllWeapons();
        return allWeapons;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllWeapons
}