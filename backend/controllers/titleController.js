const titleService = require('../services/titleService');

const generateTitle = async (req, res) => {
  try {
    const { topics } = req.query;
    if (!topics) {
      return res.status(400).json({ error: 'Parâmetro "topics" é obrigatório' });
    }
    const generatedTitles = await titleService.generateTitles(topics);
    res.status(200).json(generatedTitles);
  } catch (error) {
    console.error('Erro ao gerar títulos:', error);
    res.status(500).json({ error: 'Falha ao gerar títulos' });
  }
};

const generateSummary = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ error: 'Parâmetro "title" é obrigatório' });
    }
    const summary = await titleService.generateSummary(title);
    res.status(200).json({ summary });
  } catch (error) {
    console.error('Erro ao gerar resumo:', error);
    res.status(500).json({ error: 'Falha ao gerar resumo' });
  }
};

const addContext = async (req, res) => {
  try {
    const { topic, category, audience, tone, additionalInfo } = req.query;
    console.log('Query recebida:', req.query);

    if (!topic) {
      return res.status(400).json({ error: 'Parâmetro "topic" é obrigatório' });
    }

    const formData = {
      topic,
      category,
      audience,
      tone,
      additionalInfo,
    };

    const detailedTopic = await titleService.addContextToTopic(topic, formData);
    res.status(200).json({ detailedTopic });
  } catch (error) {
    console.error('Erro ao adicionar contexto ao tópico:', error);
    res.status(500).json({ error: 'Falha ao adicionar contexto' });
  }
};

module.exports = {
  generateTitle,
  generateSummary,
  addContext,
};