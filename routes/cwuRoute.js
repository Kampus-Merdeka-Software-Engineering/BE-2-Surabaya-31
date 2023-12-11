const express = require('express');
const router = express.Router();
const cwuController = require('../controllers/cwuController');

// GET all Videos
router.get('/cwu', async (req, res) => {
  try {
    const result = await cwuController.getAllcwu();

    // Kirim respons berdasarkan hasil dari controller
    res.json(result);
  } catch (error) {
    console.error(error);
    res?.status(500).send('Internal Server Error');
  }
})

module.exports = router;
