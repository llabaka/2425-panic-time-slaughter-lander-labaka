const Time = require('../database/Time');

const createNewTime = async (newTime) => {
    try {
        const createdWorkout = Time.createNewTime(newTime);
        return createdWorkout;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { createNewTime };