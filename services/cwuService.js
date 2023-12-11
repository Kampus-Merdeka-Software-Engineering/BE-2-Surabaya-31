const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllcwu() {
  try {
    const cwu = await prisma.cwu.findMany();
    return cwu;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function createcwu(title, description, linkVideo) {
  if (!title || !description || !linkVideo) {
    throw new Error('Semua kolom harus diisi.');
  }
  try {
    const cwu = await prisma.cwu.create({
      data: {
        title,
        description,
        linkVideo
      },
    });

    return cwu;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllcwu,
  createcwu,
};