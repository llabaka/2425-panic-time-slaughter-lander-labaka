const Character = require("../models/characterModel");


const getPlayers = async () => {
    try {
        const players = Character.find();
        return players;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getPlayers
}