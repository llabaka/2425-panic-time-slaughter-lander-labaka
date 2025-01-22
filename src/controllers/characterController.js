const characterService = require('../services/characterService');

const getAllCharacters = async (req, res) => {
    try {
        const allCharacters = await characterService.getAllCharacters();
        if (allCharacters.length === 0) {
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
    getAllCharacters
}