const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  favorite: {
    type: Boolean,
    default: true,
  },
  color: String,
  feito: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
