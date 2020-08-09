const TodoModel = require('../models/todo');

const getAll = () => {
  return TodoModel.find({})
    .exec()
    .then((docs) => {
      return docs;
    })
    .catch((err) => {
      console.log(err);
    });
};

const get = (id) => {
  return TodoModel.find({ _id: id })
    .exec()
    .then((docs) => {
      return docs;
    })
    .catch((err) => {
      console.log(err);
    });
};

const add = (name) => {
  let NewTodo = new TodoModel(name);

  return NewTodo.save()
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const update = (params) => {
  console.log(params, 'ON SERVICES');

  return TodoModel.findOneAndUpdate({ _id: params.id }, { name: params.name }, { new: true })
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const remove = (id) => {
  return TodoModel.findOneAndDelete({ _id: id.id })
    .exec()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAll,
  get,
  add,
  update,
  remove
};
