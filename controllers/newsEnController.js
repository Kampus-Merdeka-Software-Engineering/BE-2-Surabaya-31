const newsEnModel = require('../services/newsEnService');

async function getAllNewsEn() {
  try {
    const newsEn = await newsEnModel.getAllNewsEn();
		return newsEn
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllNewsEn,
};