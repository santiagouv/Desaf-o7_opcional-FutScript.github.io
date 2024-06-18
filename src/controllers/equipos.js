const { getTeams, addTeam } = require('../db/consultas')

const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await getTeams()
        res.json(equipos)
    } catch (error) {
        res.status(error.code).send(error.message)
    }
}

const agregarEquipo = async (req, res) => {
    try {
        const equipo = req.body
        const nuevoEquipo = await addTeam(equipo)

        res.status(201).json({ message: "Equipo agregado con éxito", nuevoEquipo })
    } catch (error) {
        res.status(error.code).send(error.message)
    }
}

module.exports = { obtenerEquipos, agregarEquipo }