const TodoService = require('../services/todo');

const getAll = async () => {
  return await TodoService.getAll();
};

const get = async (id) => {
  return TodoService.get(id);
};

const add = async (name) => {
  return TodoService.add(name);
};

const update = async (params) => {
  return TodoService.update(params);
};

const remove = async (id) => {
  return TodoService.remove(id);
};

module.exports = {
  get,
  getAll,
  add,
  update,
  remove
};
