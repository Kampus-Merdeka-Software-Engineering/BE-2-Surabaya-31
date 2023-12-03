const express = require('express');
const router = express.Router();
const newsEnController = require('../controllers/newsEnController');

// GET all newsEn
router.get('/', async (req, res) => {
  try {
    const result = await newsEnController.getAllNewsEn();

    // Kirim respons berdasarkan hasil dari controller
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
