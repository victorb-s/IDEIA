const googleTrends = require('google-trends-api');
const trendsRepository = require('../repositories/trendsRepository');

const fetchGoogleTrends = async () => {
  try {
    const brazilResults = await googleTrends.dailyTrends({ geo: 'BR' });
    const parsedBrazilResults = JSON.parse(brazilResults);
    const brazilTrendingDays = parsedBrazilResults.default.trendingSearchesDays;

    const globalResults = await googleTrends.dailyTrends({ geo: 'US' });
    const parsedGlobalResults = JSON.parse(globalResults);
    const globalTrendingDays = parsedGlobalResults.default.trendingSearchesDays;

    await trendsRepository.transaction(async (transactionClient) => {
      await trendsRepository.deleteOldTrends(transactionClient);

      for (const day of brazilTrendingDays) {
        await processTrendingTopics(day.trendingSearches, 'Brasil', transactionClient);
      }

      for (const day of globalTrendingDays) {
        await processTrendingTopics(day.trendingSearches, 'Mundo', transactionClient);
      }
    });

    console.log('Novos dados de Brasil e Mundo inseridos com sucesso.');
  } catch (err) {
    console.error('Erro ao buscar dados do Google Trends:', err);
  }
};
const processTrendingTopics = async (trendingTopics, category, transactionClient) => {
  for (const topic of trendingTopics) {
    const title = topic.title.query;
    const formatted_traffic = topic.formattedTraffic || 0;
    const time_ago = topic.articles.length > 0 ? topic.articles[0].timeAgo : 'Desconhecido';

    if (title) {
      try {
        await trendsRepository.create({ title, category, formatted_traffic, time_ago }, transactionClient);
      } catch (insertError) {
        console.error('Erro ao inserir trend:', insertError);
      }
    } else {
      console.warn('Título não encontrado para tópico:', topic);
    }
  }
};


const getTrendsGroupedByCategory = async (category) => {
  try {
    const trends = await trendsRepository.findAll();
    const response = {
      Brasil: [],
      Mundo: []
    };

    for (const trend of trends) {
      const { title, category: trendCategory, ...otherData } = trend;

      if (trendCategory === 'Brasil') {
        response.Brasil.push({ id: trend.id, title, ...otherData });
      } else if (trendCategory === 'Mundo') {
        response.Mundo.push({ id: trend.id, title, ...otherData });
      }
    }

    if (category) {
      return response[category] || [];
    }

    return response;
  } catch (err) {
    console.error('Erro ao buscar trends:', err);
    throw err;
  }
};

module.exports = {
  fetchGoogleTrends,
  getTrendsGroupedByCategory
};
