const express = require('express');
const titleController = require('../controllers/titleController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Titles
 *   description: Operações relacionadas a títulos
 */

/**
 * @swagger
 * /api/v1/title/generate:
 *   get:
 *     tags: [Titles]
 *     summary: Gera um novo título
 *     description: Retorna um título gerado aleatoriamente com base nos tópicos fornecidos.
 *     parameters:
 *       - in: query
 *         name: topics
 *         required: true
 *         description: Tópicos para os quais os títulos serão gerados, separados por vírgula.
 *         schema:
 *           type: string
 *           example: "tecnologia, esportes, saúde"
 *     responses:
 *       200:
 *         description: Título gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 titles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: "Um Título Aleatório"
 *       500:
 *         description: Erro ao gerar o título
 */
router.get('/generate', titleController.generateTitle);

module.exports = router;
