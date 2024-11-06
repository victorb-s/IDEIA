const titleService = require('../services/titleService');

const generateTitle = async (req, res) => {
  try {
    const { topics } = req.query;
    if (!topics) {
      return res.status(400).json({ error: 'Parâmetro "topics" é obrigatório' });
    }
    const generatedTitles = await titleService.generateTitles(topics);
    res.status(200).json({ titles: generatedTitles });
  } catch (error) {
    console.error('Erro ao gerar títulos:', error);
    res.status(500).json({ error: 'Falha ao gerar títulos' });
  }
};

module.exports = {
  generateTitle
};