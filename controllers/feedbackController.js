const feedbackService = require('../services/feedbackService');

async function createFeedback(feedbackData) {
  try {
    const newFeedback = await feedbackService.createFeedback(feedbackData);
    return newFeedback;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createFeedback,
};
