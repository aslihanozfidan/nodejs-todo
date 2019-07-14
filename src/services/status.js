const StatusModel = require("../models/status");

const getAllStatus = () => {
  return StatusModel.find({})
    .exec()
    .then((docs) => {
      console.log(docs, "DOCS");
      return docs;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getStatus = (id) => {
  return StatusModel.find({ id: id })
    .exec()
    .then((docs) => {
      console.log(docs, "DOCS NAME");
      return docs;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addStatus = (name) => {
  let NewStatus = new StatusModel(name);

  return NewStatus.save()
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateStatus = (params) => {
  console.log(params, "ON SERVICES");

  return StatusModel.findOneAndUpdate({ _id: params.id }, { name: params.name }, { new: true })
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteStatus = (id) => {
  return StatusModel.findOneAndDelete({ _id: id.id })
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllStatus,
  getStatus,
  addStatus,
  updateStatus,
  deleteStatus
};
