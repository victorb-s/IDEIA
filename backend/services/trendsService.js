const googleTrends = require('google-trends-api');
const trendsRepository = require('../repositories/trendsRepository');

const fetchGoogleTrends = async () => {
  try {
    const brazilResults = await googleTrends.dailyTrends({
      geo: 'BR',
      hl: 'pt-BR',
      timezone: -180,
    });

    const parsedBrazilResults = JSON.parse(brazilResults);
    const brazilTrendingDays = parsedBrazilResults.default.trendingSearchesDays;

    const globalResults = await googleTrends.dailyTrends({ 
      geo: 'US',
      hl: 'pt-BR',
      timezone: -180,
    });

    const parsedGlobalResults = JSON.parse(globalResults);
    const globalTrendingDays = parsedGlobalResults.default.trendingSearchesDays;

    await trendsRepository.transaction(async (transactionClient) => {
      await trendsRepository.deleteOldTrends(transactionClient);

      for (const day of brazilTrendingDays) {
        await processTrendingTopics(day.trendingSearches, 'BR', transactionClient);
      }

      for (const day of globalTrendingDays) {
        await processTrendingTopics(day.trendingSearches, 'US', transactionClient);
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
    const formatted_traffic = topic.formattedTraffic || '0'; 
    const time_ago = topic.articles.length > 0 ? topic.articles[0].timeAgo : 'Desconhecido';

    if (title) {
      try {
        const parsedTraffic = parseVolume(formatted_traffic); 
        console.log("Parsed Traffic:", parsedTraffic); 

        await trendsRepository.create({
          title,
          category,
          formatted_traffic: formatted_traffic,  
          parsed_traffic: parsedTraffic,       
          time_ago
        }, transactionClient);
      } catch (insertError) {
        console.error('Erro ao inserir trend:', insertError);
      }
    } else {
      console.warn('Título não encontrado para tópico:', topic);
    }
  }
};

function parseVolume(volumeString) {
  let cleanString = volumeString.replace('+ de', '').trim().toLowerCase();
  cleanString = cleanString.replace(/\s+/g, ' ');

  const part = cleanString.split(" ");

  number = part[0];
  unit = part[1];

  const numericValue = parseInt(number);
  if (isNaN(numericValue)) {
    console.warn("Número inválido:", number);
    return 0;
  }

  switch (unit) {
    case 'mil':
      return numericValue * 1000;
    case 'mi':  
    case 'milhões':
      return numericValue * 1000000;
    default:
      console.warn("Unidade não reconhecida:", unit);
      return numericValue;
  }
}

function parseTimeAgo(timeAgoString) {
  const [value, unit] = timeAgoString.split(' ');
  const numericValue = parseInt(value);

  switch (unit) {
    case 'dias':
    case 'dia':
      return numericValue * 1440; // dia = 1440 minutos
    case 'horas':
    case 'hora':
      return numericValue * 60; // hora
    case 'minutos':
    case 'minuto':
      return numericValue; // minuto
    default:
      return 0; 
  }
}

const getTrendsGroupedByCategory = async ({ category, offset, limit, sortBy, order }) => {
  try {
    const { trends, totalCount, totalPages } = await trendsRepository.findAll({
      category, offset, limit, sortBy, order
    });

    const filteredTrends = (Array.isArray(trends) ? trends : [])
    .filter(trend => trend.category === category)
    .sort((a,b) => {
      let fieldA, fieldB;

      if (sortBy === 'formatted_traffic') {
        fieldA = parseVolume(a.formatted_traffic);
        fieldB = parseVolume(b.formatted_traffic);
      } else if (sortBy === 'time_ago') {
        fieldA = parseTimeAgo(a.time_ago);
        fieldB = parseTimeAgo(b.time_ago);
      } else {
        fieldA = a[sortBy];
        fieldB = b[sortBy];
      }

      if (order === 'asc') return fieldA - fieldB;
      else return fieldB - fieldA;
    });

    return {
      trends: filteredTrends.slice(offset, offset + limit),
      totalCount,
      totalPages
    };
  } catch (err) {
    console.error('Erro ao buscar trends:', err);
    throw err;
  }
};

module.exports = {
  fetchGoogleTrends,
  getTrendsGroupedByCategory
};
