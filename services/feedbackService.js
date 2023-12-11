const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createFeedback({ email, message }) {
  try {
    const feedback = await prisma.feedback.create({
      data: {
        email,
        message,
      },
    });
    return feedback;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createFeedback,
};