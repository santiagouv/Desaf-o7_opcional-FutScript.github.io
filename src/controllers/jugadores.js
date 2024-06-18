const { getPlayers, addPlayer } = require('../db/consultas')

const obtenerJugadores = async (req, res) => {
    try {
        const {teamID} = req.params
        const jugadores = await getPlayers(teamID)
    
        res.json(jugadores)
    } catch (error) {
        res.status(error.code).send(error.message)
    }
}

const registrarJugador = async (req, res) => {
    try {
        const { teamID } = req.params
        const jugador = req.body
        const nuevoJugador = await addPlayer({ jugador, teamID })
        
        res.status(201).json({ message: "Jugador agregado con éxito", nuevoJugador })
    } catch (error) {
        res.status(error.code).send(error.message)
    }
}


module.exports = { obtenerJugadores, registrarJugador }