const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsIdController');

// GET all newsId
router.get('/', newsIdController.getAllNewsId);

module.exports = router;