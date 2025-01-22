const timeService = require('../services/timeService');

const createNewTime = async (req, res) => {
    const { body } = req;

    if ( 
        !body.day_number,
        !body.day_week,
        !body.km_traveled,
        !body.km_total
    ) {
        res.status(400).send({
            status: "FAILED",
            message: "Faltan datos obligatorios",
            data: body
        });
    } 

    const newTime = {
        day_number: body.day_number,
        day_week: body.day_week,
        km_traveled: body.km_traveled,
        km_total: body.km_total,
    }

    try {
        const createdTime = await timeService.createNewTime(newTime);
        res.status(201).send({ status: "OK", data: createdTime });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                message: "Error al realizar la petición:",
                data: { error: error?.message || error }
            });
    }
}

module.exports = { createNewTime };