require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const mongodbRoute = process.env.MONGODB_URI;

//Comentario

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser para manejar datos JSON
app.use(bodyParser.json());

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

start();