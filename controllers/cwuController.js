const cwuService = require('../services/cwuService');

async function getAllcwu() {
  try {
    const cwu = await cwuService.getAllcwu();
    return cwu;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllcwu,
};
