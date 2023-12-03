const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// POST create feedback
router.post('/', async (req, res) => {
  try {
    const result = await feedbackController.createFeedback(req.body);

    // Kirim respons berdasarkan hasil dari controller
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
