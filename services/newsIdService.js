const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllNewsId() {
  try {
    const newsId = await prisma.newsId.findMany();
    return newsId;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function createNewsId(title, description, linkImage, linkBerita) {
  if (!title || !description || !linkImage || !linkBerita) {
    throw new Error('Semua kolom harus diisi.');
  }
  try {
    const newsId = await prisma.newsId.create({
      data: {
        title,
        description,
        linkImage,
        linkBerita
      },
    });

    return newsId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllNewsId,
  createNewsId,
};
