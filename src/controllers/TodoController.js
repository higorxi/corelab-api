const Todo = require('../models/TodoModel');

// Obtém todos os itens de to-do
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Error getting todos:', error);
    res.status(500).send('Server Error');
  }
};

// Obtém todos os itens de to-do não favoritados
exports.getNotFavorites = async (req, res) => {
  try {
    const notFavorites = await Todo.find({ favorite: false });
    res.json(notFavorites);
  } catch (error) {
    console.error('Error getting not favorites:', error);
    res.status(500).send('Server Error');
  }
};

// Cria um novo item de to-do
exports.createTodo = async (req, res) => {
  try {
    const { title, description, color, favorite } = req.body;
    const newTodo = new Todo({ title, description, favorite,color });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).send('Server Error');
  }
};

// Edita o conteúdo de um item de to-do
exports.editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    console.error('Error editing todo:', error);
    res.status(500).send('Server Error');
  }
};

// Altera a cor de um item de to-do
exports.changeColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { color } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { color }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    console.error('Error changing color:', error);
    res.status(500).send('Server Error');
  }
};

// Exclui um item de to-do
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).send('Server Error');
  }
};

// Obtém apenas os favoritos
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Todo.find({ favorite: true });
    res.json(favorites);
  } catch (error) {
    console.error('Error getting favorites:', error);
    res.status(500).send('Server Error');
  }
};

// Filtra por cor
exports.filterByColor = async (req, res) => {
  try {
    const { color } = req.params;
    const filteredTodos = await Todo.find({ color });
    res.json(filteredTodos);
  } catch (error) {
    console.error('Error filtering by color:', error);
    res.status(500).send('Server Error');
  }
};
