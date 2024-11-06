const trendsService = require('../services/trendsService');

const getTrends = async (req, res) => {
  try {
    const { category } = req.query;
    const trendsByCategory = await trendsService.getTrendsGroupedByCategory(category);
    res.json(trendsByCategory);
  } catch (error) {
    console.error('Erro ao obter as tendências:', error);
    res.status(500).json({ message: 'Erro ao obter as tendências.' });
  }
};

module.exports = {
  getTrends
};
