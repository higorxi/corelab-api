const Todo = require('../models/TodoModel');

// Obtém todos os To-do
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Erro ao obter to-dos', error);
    res.status(500).send('Erro no servidor');
  }
};

// Obtém todos os To-dos não favoritados
exports.getNotFavorites = async (req, res) => {
  try {
    const notFavorites = await Todo.find({ favorite: false });
    res.json(notFavorites);
  } catch (error) {
    console.error('Erro ao obter to-do não favoritados:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Obtém todos os to-dos que estão feitos
exports.getDoneTodos = async (req, res) => {
    try {
      const doneTodos = await Todo.find({ done: true });
      res.json(doneTodos);
    } catch (error) {
      console.error('Erro ao obter to-dos feitos:', error);
      res.status(500).send('Erro no servidor');
    }
  };

// Cria um novo To-do
exports.createTodo = async (req, res) => {
  try {
    const { title, description, color, favorite } = req.body;
    const newTodo = new Todo({ title, description, favorite,color });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    console.error('Erro ao criar to-do:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Edita o conteúdo do To-do
exports.editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    console.error('Erro ao editar to-do:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Altera a cor do To-do
exports.changeColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { color } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { color }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    console.error('Erro ao mudar cor do to-do:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Exclui um To-do
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deletado com successo' });
  } catch (error) {
    console.error('Erro ao deletar to-do:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Obtém apenas os favoritos
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Todo.find({ favorite: true });
    res.json(favorites);
  } catch (error) {
    console.error('Erro ao obter to-do favoritos:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Filtra por cor
exports.filterByColor = async (req, res) => {
  try {
    const { color } = req.params;
    const filteredTodos = await Todo.find({ color });
    res.json(filteredTodos);
  } catch (error) {
    console.error('Erro ao filtrar por cor:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Atualiza status de feito do to-do 
exports.updateTodoStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { done } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID do to-do inválido' });
      }
  
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { $set: { done } },
        { new: true }
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ error: 'To-do não encontrado' });
      }
  
      res.json(updatedTodo);
    } catch (error) {
      console.error('Erro ao atualizar status do To-do:', error);
      res.status(500).send('Erro no servidor');
    }
  };
