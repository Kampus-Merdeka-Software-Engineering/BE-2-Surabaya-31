const feedbackService = require('../services/feedbackService');

async function createFeedback(req, res) {
  const { email, message } = req.body;

  try {
    const newFeedback = await feedbackService.createFeedback({ email, message });
    res.json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createFeedback,
};
