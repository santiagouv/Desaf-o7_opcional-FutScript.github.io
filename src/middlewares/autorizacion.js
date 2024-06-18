const jwt = require('jsonwebtoken')
const { secretKey } = require('../utils/utils')

const validarToken = (req, res, next) => {
  try {
    
    const token = req.header("Authorization")

    jwt.verify(token, secretKey)
    const {username} = jwt.decode(token)

    req.user = username
    next()
    
  } catch (error) {

    res.send(error.message)
    
  }
}

module.exports = {
  validarToken
}