const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// POST create feedback
router.post('/', feedbackController.createFeedback);

module.exports = router;
