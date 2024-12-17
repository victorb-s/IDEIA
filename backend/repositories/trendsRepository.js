const Trend = require('../models/Trends');

exports.findAll = async ({ category, offset, limit, sortBy = 'formatted_traffic', order = 'desc' }) => {
  try {
    const { count, rows: trends } = await Trend.findAndCountAll({
      where: category ? { category } : {},
      order: [[sortBy, order]],
      limit,
      offset,
      raw: true
    });

    const totalPages = Math.ceil(count / limit);

    return { trends, totalCount: count, totalPages };
  } catch (err) {
    console.error('Erro ao buscar todos os trends:', err);
    throw err;
  }
};

exports.create = async (trendData, transaction) => {
  try {
    const { title, category, formatted_traffic, time_ago } = trendData;
    const newTrend = await Trend.create(
      {
        title,
        category,
        formatted_traffic,
        time_ago,
      },
      { transaction }
    );
    return newTrend;
  } catch (err) {
    console.error('Erro ao criar trend:', err);
    throw err;
  }
};

exports.deleteOldTrends = async (transaction) => {
  try {
    await Trend.destroy({
      where: {},
      transaction,
    });
    console.log('Todos os dados antigos foram excluídos com sucesso.');
  } catch (err) {
    console.error('Erro ao excluir trends antigos:', err);
    throw err;
  }
};

exports.transaction = async (callback) => {
  const sequelize = require('../db/db'); 
  const transaction = await sequelize.transaction();
  try {
    const result = await callback(transaction);
    await transaction.commit();
    return result;
  } catch (error) {
    await transaction.rollback();
    console.error('Erro na transação:', error);
    throw error;
  }
};
