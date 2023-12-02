const express = require('express');
const router = express.Router();
const newsRoutes = require('./newsRoutes');

router.use('/news', newsRoutes);

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
