const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'dbadmin',
  host: 'dpg-chle1lbhp8uej74j47fg-a',
  database: 'proyecto_api',
  password: '783sJp3IUdMzQ3QTg9zdFb8FIzj80cif',
  port: 5432,
});

module.exports = pool;
