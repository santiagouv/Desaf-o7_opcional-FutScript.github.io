const database = require('./config')

const getTeams = async () => {
    const consulta = "SELECT * FROM equipos"
    const {rows: equipos, rowCount} = await database.query(consulta)

    if(!rowCount){
        throw {
            code: 404,
            message: "Aún no hay equipos registrados"
        }
    }

    return equipos
}

const getPlayers = async (teamID) => {
    const consulta = "SELECT jugadores.name AS name, posiciones.name AS posicion FROM jugadores INNER JOIN posiciones ON jugadores.position = posiciones.id WHERE jugadores.id_equipo = $1"

    const { rows: jugadores, rowCount} = await database.query(consulta, [teamID])

    if(!rowCount){
        throw {
            code: 404,
            message: "No se encontraron jugadores para este equipo"
        }
    }

    return jugadores
}

const addTeam = async (equipo) => {
    const consulta = "INSERT INTO equipos VALUES (DEFAULT, $1) RETURNING *"
    const values = [equipo.name]

    const {rows: nuevoEquipo, rowCount} = await database.query(consulta, values)

    if(!rowCount){
        throw {
            code: 400,
            message: "No se pudo agregar el equipo"
        }
    }

    return nuevoEquipo
}

const addPlayer = async ({ jugador, teamID }) => {
    const team = parseInt(teamID)
    const {name, position} = jugador
    const consulta = "INSERT INTO jugadores VALUES (DEFAULT, $1, $2, $3) RETURNING *"
    const values = [team, name, position]

    const {rows: nuevoJugador, rowCount} = await database.query(consulta, values)

    if(!rowCount){
        throw {
            code: 400,
            message: "No se pudo agregar al jugador"
        }
    }

    return nuevoJugador
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer }