const newsIdService = require('../services/newsIdService');

async function getAllNewsId() {
  try {
    const newsId = await newsIdService.getAllNewsId();
    return newsId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllNewsId,
};