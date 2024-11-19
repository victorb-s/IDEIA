const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const trendsRoutes = require('./routes/trendsRoutes');
const titleRoutes = require('./routes/titleRoutes');
const { fetchGoogleTrends } = require('./services/trendsService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost") || origin.startsWith(process.env.BASE_URL)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));

app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Tendências',
      version: '1.0.0',
      description: 'Documentação da API de tendências',
    },
    servers: [
      {
        url: process.env.BASE_URL || `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1/trends', trendsRoutes);
app.use('/api/v1/title', titleRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await fetchGoogleTrends();
  setInterval(fetchGoogleTrends, 600000);
});
