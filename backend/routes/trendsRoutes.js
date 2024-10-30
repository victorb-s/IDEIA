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
 *     summary: Retorna tendências
 *     tags: [Trends]
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         description: Categoria da tendência (Brasil ou Mundo)
 *         schema:
 *           type: string
 *           example: "Brasil"
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
