const express = require('express');
const router = express.Router();
const cwuController = require('../controllers/cwuController');

// GET all Videos
router.get('/', cwuController.getAllVideos);

module.exports = router;
