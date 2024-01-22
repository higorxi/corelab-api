const express = require('express')
const router = express.Router()
const {
  getAllTodos,
  getNotFavorites,
  createTodo,
  editTodo,
  changeColor,
  deleteTodo,
  getFavorites,
  filterByColor,
  updateTodoStatus,
  getDoneTodos,
} = require('../controllers/Todocontroller')

router.get('/', getAllTodos)
router.get('/not-favorites', getNotFavorites)
router.get('/to-dofeito', getDoneTodos)
router.post('/create', createTodo)
router.put('/edit/:id', editTodo)
router.put('/changeColor/:id', changeColor)
router.put('/to-dofeito', updateTodoStatus)
router.delete('/delete/:id', deleteTodo)
router.get('/favorites', getFavorites)
router.get('/filterByColor/:color', filterByColor)

module.exports = router
