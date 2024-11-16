const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const trendsRoutes = require('./routes/trendsRoutes');
const titleRoutes = require('./routes/titleRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const { fetchGoogleTrends } = require('./services/trendsService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost")) {
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
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de tendências!');
});

app.use('/api/v1/trends', trendsRoutes);
app.use('/api/v1/title', titleRoutes);
app.use('/api/v1/resume', resumeRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await fetchGoogleTrends();
  setInterval(fetchGoogleTrends, 600000);
});
