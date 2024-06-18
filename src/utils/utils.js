const secretKey = "ULTRA SECRET KEY :O"

/* 
No es el mejor metodo para validar credenciales
Pero a modo de practica en este desafio lo realizare asi
y asi mismo no insertar las credenciales de un usuario en la Base de Datos
*/
const verificarCredenciales = (credenciales) => {
  const {username, password} = credenciales
  return username === "admin" && password === "1234"
}

module.exports = { 
  secretKey,
  verificarCredenciales
}