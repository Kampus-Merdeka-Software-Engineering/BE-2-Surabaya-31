const newsIdService = require('../services/newsIdService');

async function getAllNewsId(req, res) {
  try {
    const newsId = await newsIdService.getAllNewsId();
    return newsId
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllNewsId,
};
