const express = require('express');
const trendsController = require('../controllers/trendsController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Trends
 *   description: Operações relacionadas a tendências
 * 
 * /api/v1/trends:
 *   get:
 *     summary: Retorna tendências com suporte a paginação e ordenação
 *     tags: [Trends]
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         description: Categoria da tendência (BR ou US)
 *         schema:
 *           type: string
 *           example: "BR"
 *       - in: query
 *         name: page
 *         required: false
 *         description: Número da página para a paginação (default é 1)
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Número de resultados por página (default é 10)
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: sortBy
 *         required: false
 *         description: Campo pelo qual ordenar os resultados (default é 'formatted_traffic')
 *         schema:
 *           type: string
 *           example: "formatted_traffic"
 *       - in: query
 *         name: order
 *         required: false
 *         description: Direção da ordenação (asc ou desc; default é 'desc')
 *         schema:
 *           type: string
 *           example: "desc"
 *     responses:
 *       200:
 *         description: Uma lista de tendências retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 379
 *                   title:
 *                     type: string
 *                     example: "Bola de Ouro 2024"
 *                   formatted_traffic:
 *                     type: string
 *                     example: "2M+"
 *                   time_ago:
 *                     type: string
 *                     example: "1h ago"
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-29T02:26:06.577Z"
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', trendsController.getTrends);

module.exports = router;
