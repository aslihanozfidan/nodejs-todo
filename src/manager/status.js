const StatusService = require("../services/status");

const getAllStatus = async () => {
  return await StatusService.getAllStatus();
};

const getStatus = async (id) => {
  return StatusService.getStatus(id);
};

const addStatus = async (name) => {
  return StatusService.addStatus(name);
};

const updateStatus = async (params) => {
  return StatusService.updateStatus(params);
};

const deleteStatus = async (id) => {
  return StatusService.deleteStatus(id);
};

module.exports = {
  getStatus,
  getAllStatus,
  addStatus,
  updateStatus,
  deleteStatus
};
