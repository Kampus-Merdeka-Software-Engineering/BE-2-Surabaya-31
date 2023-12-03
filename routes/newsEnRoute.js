const express = require('express');
const router = express.Router();
const newsEnController = require('../controllers/newsEnController');

// GET all news
router.get('/', newsEnController.getAllNewsEn);

module.exports = router;