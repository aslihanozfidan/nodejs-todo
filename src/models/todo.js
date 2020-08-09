const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  text: String,
  category: String,
  date: String
});

module.exports = mongoose.model('todo', ToDoSchema);
