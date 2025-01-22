const weaponService = require('../services/weaponService');

const getAllWeapons = async (req, res) => {
    try {
        const allWeapons = await weaponService.getAllWeapons();
        if (allWeapons.length === 0) {
            console.log("NO HAY CHARACTERS");

            return res.status(404).send({ message: "Characters don't exist" });
        }
        res.send({ status: "OK", data: allCharacters });
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
    getAllSaddlebag,
    getAllWeapons
}