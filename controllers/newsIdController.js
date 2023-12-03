const newsIdModel = require('../services/newsIdService');

async function getAllNewsId(req, res) {
  try {
    const newsId = await newsIdService.getAllNewsId();
    res.json(newsId);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllNewsId,
};
