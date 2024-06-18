const request = require('supertest')
const server = require('../index')
const jwt = require("jsonwebtoken")
const { secretKey } = require('../src/utils/utils')

describe("CRUD", () => {
  it("Code 200 y Array en GET /equipos", async () => {
    const response = await request(server)
      .get('/equipos')
      .send()

    const {statusCode, body} = response

    expect(statusCode).toBe(200)
    expect(body).toBeInstanceOf(Array)
  })

  it("Validar credenciales Login", async () => {
    const credenciales = {
      username: "admin",
      password: "1234"
    }

    const {body: response} = await request(server)
      .post('/login')
      .send(credenciales)

    expect(response).toBeInstanceOf(Object)
  })

  it("Code 400 credenciales incorrectas", async () => {
    const credenciales = {
      username: "usuario",
      password: "7890"
    }

    const {statusCode} = await request(server)
      .post('/login')
      .send(credenciales)

    expect(statusCode).toBe(401) //401 Unauthorized
  })

  it("Validar token al ingresar un nuevo jugador", async () => {
    const jugador = {
      name: "David 'Viajero' Navarro", 
      position: 4
    }

    const token = jwt.sign({username: "admin"}, secretKey)
    const {statusCode} = await request(server)
      .post('/equipos/1/jugadores')
      .send(jugador)
      .set('Authorization', token)

    expect(statusCode).toBe(201)
  })
})