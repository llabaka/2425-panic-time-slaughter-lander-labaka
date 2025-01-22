const Time = require('../models/timeModel');

const createNewTime = async (newTime) => {
    try {
        let timeToInsert = new Time(newTime);
        const createdTime = await timeToInsert.save();    
        return createdTime;
    }
    catch (error) {
        throw error;
    }
};

module.exports = { createNewTime };