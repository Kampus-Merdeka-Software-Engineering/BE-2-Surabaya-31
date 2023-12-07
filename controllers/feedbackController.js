const feedbackService = require('../services/feedbackService');

async function createFeedback(req, res) {
  try {
    // Logika untuk membuat feedback
    const newFeedback = await feedbackService.createFeedback(req.body);
    res.json(newFeedback); // Mengirim respons
  } catch (error) {
    console.error(error); // Log error untuk debugging
    res.status(500).json({ error: 'Internal Server Error' }); // Mengirim error respons
  }
}

module.exports = {
  createFeedback,
};
