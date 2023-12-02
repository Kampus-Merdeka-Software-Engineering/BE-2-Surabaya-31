const prisma = require('../config/prisma');

async function getAllNewsByType(type) {
  try {
    const news = await prisma.news.findMany({
      where: { type },
    });
    return news;
  } catch (error) {
    throw error;
  }
}

async function createNews(title, description, linkBerita, linkVideo,linkImage, type) {
  try {
    const newNews = await prisma.news.create({
      data: {
        title,
        description,
        linkBerita,
        linkVideo,
        linkImage,
        type,
      },
    });
    return newNews;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllNewsByType,
  createNews,
};
