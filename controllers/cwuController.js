const cwuService = require('../services/cwuService');

async function getAllcwu(req, res) {
  try {
    const cwu = await cwuService.getAllcwu();
    res.json(cwu);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllcwu,
};