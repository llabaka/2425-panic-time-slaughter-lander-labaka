const playerService = require('../services/playerService');

const getAllPlayers = async (req, res) => {
    try {
        const allPlayers = await playerService.getPlayers();
        if (allPlayers.length === 0) {
            console.log("NO HAY CHARACTERS");
            
            return res.status(404).send({ message: "Characters don't exist" });
        }
        res.send({ status: "OK", data: allPlayers });
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
    getAllPlayers
}