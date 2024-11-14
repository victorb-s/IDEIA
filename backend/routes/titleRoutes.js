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
 *                type: array
 *                items:
 *                 type: object
 *                 properties:
 *                       title:
 *                         type: string
 *                         example: "Um Título Aleatório"
 *       500:
 *         description: Erro ao gerar o título
 */
router.get('/generate', titleController.generateTitle);


/**
 * @swagger
 * /api/v1/title/generate-summary:
 *   get:
 *     tags: [Titles]
 *     summary: Gera um resumo baseado no título selecionado
 *     description: Retorna um resumo informativo e breve com base no título fornecido.
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         description: O título para o qual o resumo será gerado.
 *         schema:
 *           type: string
 *           example: "Avanços na Tecnologia de IA"
 *     responses:
 *       200:
 *         description: Resumo gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 summary:
 *                   type: string
 *                   example: "Resumo informativo sobre os últimos avanços na tecnologia de IA e seu impacto na sociedade."
 *       400:
 *         description: Parâmetro "title" é obrigatório
 *       500:
 *         description: Erro ao gerar o resumo
 */
router.get('/generate-summary', titleController.generateSummary);

module.exports = router;
