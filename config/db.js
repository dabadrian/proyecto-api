const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'dbadmin',
  host: '192.168.1.110',
  database: 'proyecto_api',
  password: 'dbadmin',
  port: 5432,
});

module.exports = pool;