const express = require('express');
const router = express.Router();
const cwuController = require('../controllers/cwuController');

// GET all Videos
router.get('/', async (req, res) => {
  try {
    const result = await cwuController.getAllcwu();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
