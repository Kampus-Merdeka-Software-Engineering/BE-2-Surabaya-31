const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// POST create feedback
router.post('/', async (req, res) => {
  try {
    const result = await feedbackController.createFeedback(req, res); // Pastikan req dan res diteruskan
    // Tidak perlu mengirim respons di sini jika sudah dikirim di controller
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
