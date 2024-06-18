const jwt = require('jsonwebtoken')
const { secretKey, verificarCredenciales } = require('../utils/utils')

const iniciarSesion = (req, res) => {
  try {
    const credenciales = req.body
    const match = verificarCredenciales(credenciales)
  
    if(!match){
      throw {
        code: 401,
        message: "Credenciales invalidas"
      }
    }
  
    const {username} = credenciales
    const token = jwt.sign({username}, secretKey)
    res.send({token})
    
  } catch (error) {
    res.status(error.code).send(error)
  }
}

module.exports = {
  iniciarSesion
}