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

/**
 * @swagger
 * /api/v1/title/add-context:
 *   get:
 *     tags: [Titles]
 *     summary: Adiciona contexto ao tópico
 *     description: Retorna um tópico mais detalhado com base no contexto adicional fornecido pelo usuário.
 *     parameters:
 *       - in: query
 *         name: topic
 *         required: true
 *         description: O tópico base para o qual o contexto será adicionado.
 *         schema:
 *           type: string
 *           example: "Barcelona"
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 description: Categoria do tópico.
 *                 example: "Esportes"
 *               audience:
 *                 type: string
 *                 description: Público-alvo para o tópico.
 *                 example: "Fãs de esportes"
 *               tone:
 *                 type: string
 *                 description: Tom desejado para o tópico.
 *                 example: "Informal"
 *               additionalInfo:
 *                 type: string
 *                 description: Informações adicionais sobre o tópico.
 *                 example: "O time de futebol da Espanha"
 *     responses:
 *       200:
 *         description: Contexto adicionado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 detailedTopic:
 *                   type: string
 *                   example: "Um tópico detalhado"
 *       400:
 *         description: Parâmetro "topic" é obrigatório
 *       500:
 *         description: Erro ao adicionar o contexto
 */
router.get('/add-context', titleController.addContext);

module.exports = router;
