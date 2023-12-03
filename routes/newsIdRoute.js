const express = require('express');
const router = express.Router();
const newsIdController = require('../controllers/newsIdController');

// GET all newsId
router.get('/', async (req, res) => {
  try {
    const result = await newsIdController.getAllNewsId();

    // Kirim respons berdasarkan hasil dari controller
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
