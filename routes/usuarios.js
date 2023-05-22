const express = require('express');
const pool = require('../config/db.js');

const router = express.Router();

// Ruta GET para obtener el promedio de las edades de los usuarios
router.get('/promedio-edad', async (req, res) => {
  try {
    const query = 'SELECT AVG(date_part(\'year\', age(fecha_nacimiento))) AS promedio_edad FROM usuario';
    const { rows } = await pool.query(query);
    
    const promedioEdad = parseFloat(rows[0].promedio_edad);
    res.json({ promedio_edad: promedioEdad });
  } catch (error) {
    console.error('Error al obtener el promedio de edad:', error);
    res.status(500).json({ error: 'Error al obtener el promedio de edad' });
  }
});


// Ruta GET para listar todos los usuarios
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM usuario');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Ruta GET para obtener un solo usuario por su id_usuario
router.get('/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const { rows } = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id_usuario]);
    
    if (rows.length === 0) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Ruta POST para crear un nuevo usuario
router.post('/', async (req, res) => {
  const { cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento } = req.body;

  try {
    const query = 'INSERT INTO usuario (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento]);
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Ruta PUT para actualizar un usuario por su id_usuario
router.put('/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;
  const { nombre, primer_apellido, segundo_apellido, fecha_nacimiento } = req.body;

  try {
    const query = 'UPDATE usuario SET nombre = $1, primer_apellido = $2, segundo_apellido = $3, fecha_nacimiento = $4 WHERE id_usuario = $5';
    const result = await pool.query(query, [nombre, primer_apellido, segundo_apellido, fecha_nacimiento, id_usuario]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.json({ message: 'Usuario actualizado exitosamente' });
    }
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Ruta DELETE para eliminar un usuario por su id_usuario
router.delete('/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const query = 'DELETE FROM usuario WHERE id_usuario = $1';
    const result = await pool.query(query, [id_usuario]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.json({ message: 'Usuario eliminado exitosamente' });
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});


module.exports = router;
