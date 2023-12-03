const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllNewsEn() {
  try {
    const newsEn = await prisma.newsEn.findMany();
    return newsEn;
  } catch (error) {
    throw error;
  }
}

async function createNewsEn(title, description, linkBerita, linkImage) {
  try {
    const newsEn = await prisma.newsEn.create({
      data: {
        title,
        description,
        linkBerita,
        linkImage
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
