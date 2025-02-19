const Time = require("../models/timeModel");

const getAllTimes = async () => {
    try {
        const times = await Time.find();
        return times;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllTimes
}