# Descripción
FutScript es un proyecto iniciado por 5 aficionados de la programación que tiene como
objetivo crear un sistema de administración para las distintas escuelas de fútbol de la
ciudad.

En este desafío deberás continuar el desarrollo de una aplicación Express basada en la
temática planteada, agregándole lo necesario para cumplir los requerimientos.

#

El desarrollo de esta API REST debe continuar agregando:

### Una ruta POST /login 
Que espere recibir en el payload las credenciales de un usuario
administrador. En caso de recibir correctamente estas credenciales se debe responder la
consulta con JWT.

### 2 rutas POST
Para registrar nuevos equipos y jugadores. Agregar un middleware que obtenga y valide un token ubicado en las cabeceras
de la consulta.

### Base de Datos

Consultar e insertar datos utilizando un modelo relacional.

### Tests unitarios

Definiendo codigos de estado y tipos de datos como respuestas esperadas.

#

> *Considerar que la información y procesos sensibles como la validación de credenciales o firma de JWT normalmente no deben estar expuestos,  pero está de esta forma para fines practicos de este desafío y no manipular más de la cuenta el material de apoyo prehecho.*
