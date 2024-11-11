const trendsService = require('../services/trendsService');

const getTrends = async (req, res) => {
  try {
    const { category, page = 1, limit = 10, sortBy = 'formatted_traffic', order = 'desc' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const offset = (pageNum - 1) * limitNum;

    const { trends, totalCount, totalPages } = await trendsService.getTrendsGroupedByCategory({
      category,
      offset,
      limit: limitNum,
      sortBy,
      order
    });

    res.json({
      trends,
      totalCount,
      totalPages,
      page: pageNum,
      limit: limitNum
    });
  } catch (error) {
    console.error('Erro ao obter as tendências:', error);
    res.status(500).json({ message: 'Erro ao obter as tendências.' });
  }
};

module.exports = {
  getTrends
};