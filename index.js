require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Die = require('./die'); // Importar la clase Die
const Character = require('./src/models/characterModel');

const mongodbRoute = process.env.MONGODB_URI;

//Comentario

const characterRouter = require("./src/routes/characterRoutes")
const timeRouter = require("./src/routes/timeRoutes")
const saddlebagService = require('./src/services/saddlebagService');
const precious_stones = require('./src/services/stonesService');

const app = express();
const PORT = process.env.PORT || 3001;

// Use body-parser para manejar datos JSON
app.use(bodyParser.json());

app.use("/api/characters", characterRouter);
app.use("/api/time", timeRouter);

//Populate all characters
async function findAllCharacters() {
    try {
        const characters = await Character.find()
            .populate('equipment.saddlebag')
            .populate('equipment.weapons')
            .populate('equipment.pouch.precious_stones')
            .exec();
        // characters.forEach(character => {
        //     console.log(character.equipment.weapons);
        // });
        //console.log(characters);
        return characters;
    } catch (err) {
        console.error(err);
    }

}

async function gameCicle() {
    const characters = await findAllCharacters();
    await morning(characters);
}

async function morning(characters) {
    const saddlebag = await saddlebagService.getAllSaddlebags();
    const preciousStones = await precious_stones.getAllStones();
    const die = new Die(100);


    for (let character of characters) {
        character.stats.strength += 1;
        character.stats.dexterity += 1;
        
        const roll = die.roll();
        if (roll <= 30) {
            character.equipment.pouch.gold += 1;
        }
        else if (roll > 30 && roll <= 80) {
            const coins = new Die(20).roll();
            character.equipment.pouch.coins += coins;
        }
        else {
            const stone = preciousStones[Math.floor(Math.random() * preciousStones.length)];
            character.equipment.pouch.precious_stones.push(stone);
        }

        // Save the updated character
        await character.save();
    }
}


async function middleDay(characters) {
    const saddlebag = await saddlebagService.getAllSaddlebags();
    const preciousStones = await precious_stones.getAllStones();
}

// Conexión con MongoDB y arrancar el servidor
async function start() {
    try {
        await mongoose.connect(mongodbRoute);
        console.log('Conexión con MongoDB exitosa.');

        // Arrancar el servidor HTTP para Express y Socket.IO
        app.listen(PORT, () => {
            console.log(`API escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error(`Error al conectar a la base de datos: ${error.message}`);
    }
}

gameCicle();
start();