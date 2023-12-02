const newsService = require('../services/newsService');

async function getAllNews(req, res) {
  const { type } = req.params;

  try {
    const allNews = await newsService.getAllNewsByType(type);
    res.render(`${type}`, { news: allNews });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

async function addNews(req, res) {
  const { title, description, linkBerita, linkVideo, linkImage, type } = req.body;

  try {
    const newNews = await newsService.createNews(title, description, linkBerita, linkVideo, linkImage, type);
    res.json(newNews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllNews,
  addNews,
};
