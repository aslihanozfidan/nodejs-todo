const todoManager = require('../manager/todo');

exports.getAll = async (req, res) => {
  data = await todoManager.getAll();

  res.send(data);
};

exports.get = function(req, res) {
  todoManager.get(req.params.id).then((data) => res.send(data)).catch((err) => res.send(err));
};

exports.add = function(req, res) {
  todoManager.add(req.body).then((data) => res.send(data)).catch((err) => res.send(err));
};

exports.update = function(req, res) {
  console.log(req.body);
  todoManager.update(req.body).then((data) => res.send(data)).catch((err) => res.send(err));
};

exports.delete = function(req, res) {
  todoManager.remove(req.body).then((data) => res.send(data)).catch((err) => res.send(err));
};
