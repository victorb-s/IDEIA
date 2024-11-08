const { Sequelize } = require("sequelize");
const { Pool } = require("pg");

const dbConfig = {
  user: "root",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5434,
};

const createDatabase = async (databaseName) => {
  const pool = new Pool(dbConfig);
  try {
    const result = await pool.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [databaseName]
    );
    if (result.rowCount === 0) {
      await pool.query(`CREATE DATABASE ${databaseName}`);
      console.log(`Banco de dados "${databaseName}" criado com sucesso.`);
    } else {
      console.log(`Banco de dados "${databaseName}" já existe.`);
    }
  } catch (error) {
    console.error("Erro ao verificar/criar o banco de dados:", error);
  } finally {
    await pool.end();
  }
};

const databaseName = "db_sjcc";

createDatabase(databaseName);

const sequelize = new Sequelize(databaseName, "root", "root", {
  host: "localhost",
  port: 5434,
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados Postgres."))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabelas sincronizadas com o banco de dados.");
  })
  .catch((error) => console.error("Erro ao sincronizar tabelas:", error));

module.exports = sequelize;
