const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllcwu() {
  try {
    const cwu = await prisma.cwu.findMany();
    return cwu;
  } catch (error) {
    throw error;
  }
}

async function createcwu(title, description, linkVideo) {
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
