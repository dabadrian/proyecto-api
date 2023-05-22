const express = require('express');
const usuariosRouter = require('./routes/usuarios');
const estadoRouter = require('./routes/estado');

const app = express();
const port = 3000;

// Middleware para utilizar las rutas de usuarios
app.use('/usuarios', usuariosRouter);
app.use('/estado', estadoRouter);


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});