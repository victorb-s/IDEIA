const express = require('express');
const resumeController = require('../controllers/resumeController');

const router = express.Router();

router.get('/generate', resumeController.getResume);

module.exports = router;