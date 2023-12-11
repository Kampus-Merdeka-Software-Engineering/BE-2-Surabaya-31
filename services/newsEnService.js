const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllNewsEn() {
  try {
    const newsEn = await prisma.newsEn.findMany();
    return newsEn;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function createNewsEn(title, description, linkImage, linkBerita) {
  if (!title || !description || !linkImage || !linkBerita) {
    throw new Error('Semua kolom harus diisi.');
  }
  try {
    const newsEn = await prisma.newsEn.create({
      data: {
        title,
        description,
        linkImage,
        linkBerita
      },
    });

    return newsEn;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllNewsEn,
  createNewsEn,
};