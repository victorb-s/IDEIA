const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'root',
  password: 'root',
  database: 'db_sjcc'
});

pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados Postgres.');
  }
});

module.exports = pool;