const pool = require('../db/db');

exports.findAll = async () => {
  try {
    const result = await pool.query('SELECT * FROM trends');
    return result.rows;
  } catch (err) {
    console.error('Erro ao buscar todos os trends:', err);
    throw err;
  }
};

exports.create = async(trendData, transactionClient) => {
  try {
    const { title, category, formatted_traffic, time_ago } = trendData;
    const result = await (transactionClient || pool).query(
      'INSERT INTO trends (title, category, formatted_traffic, time_ago, created_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *',
      [title, category, formatted_traffic, time_ago]
    );
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao criar trend:', err);
    throw err;
  }
};

exports.deleteOldTrends = async (transactionClient) => {
  try {
    await (transactionClient || pool).query(`DELETE FROM trends;`);
    console.log('Todos os dados antigos foram excluídos com sucesso.');
  } catch (err) {
    console.error('Erro ao excluir trends antigos:', err);
    throw err;
  }
};

exports.transaction = async (callback) => {
  const transactionClient = await pool.connect();
  try {
    await transactionClient.query('BEGIN');
    const result = await callback(transactionClient);
    await transactionClient.query('COMMIT');
    return result;
  } catch (error) {
    await transactionClient.query('ROLLBACK');
    console.error('Erro na transação:', error);
    throw error;
  } finally {
    transactionClient.release();
  }
};
