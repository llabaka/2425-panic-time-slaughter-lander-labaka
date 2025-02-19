const timeService = require('../services/timeService');

const getAllTimes = async (req, res) => {
  try {
    const allTimes = await timeService.getAllTimes();
    if (allTimes.length === 0) {
      console.log("NO HAY TIEMPOS");

      return res.status(404).send({ message: "Times don't exist" });
    }
    res.send({ status: "OK", data: allTimes });
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

module.exports = {
  getAllTimes
}