const StatusService = require("../services/status");

const getAllStatus = async () => {
  return await StatusService.getAllStatus();
};

const getStatus = async (id) => {
  return StatusService.getStatus(id);
};

module.exports = {
  getStatus,
  getAllStatus
};
