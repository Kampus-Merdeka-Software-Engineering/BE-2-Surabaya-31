const newsEnModel = require('../services/newsEnService');

async function getAllNewsEn(req, res) {
  try {
    const newsEn = await newsEnModel.getAllNewsEn();
    res.json(newsEn);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllNewsEn,
};
