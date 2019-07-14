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
  let NewStatus = new StatusModel( name);

  return NewStatus.save()
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
  addStatus
};
