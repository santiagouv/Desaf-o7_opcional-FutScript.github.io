const express = require('express');
const app = express();

app.listen(3000, console.log("SERVER ON"));
app.use(express.json())

const { obtenerJugadores, registrarJugador } = require('./src/controllers/jugadores')
const { obtenerEquipos, agregarEquipo } = require('./src/controllers/equipos')
const { iniciarSesion } = require('./src/controllers/login')
const { validarToken } = require('./src/middlewares/autorizacion')

app.post("/login", iniciarSesion)

app.get("/equipos", obtenerEquipos)
app.post("/equipos", validarToken, agregarEquipo)

app.get("/equipos/:teamID/jugadores", obtenerJugadores)
app.post("/equipos/:teamID/jugadores", validarToken, registrarJugador)

module.exports = app