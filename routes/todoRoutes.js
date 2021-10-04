const express = require('express')
const router = express.Router()


const todoController = require('../controller/todoController')

router.get('/', todoController.getAllTodos);

router.post('/create', todoController.createTodo);

router.put('/update/:id', todoController.updateTodo);

router.delete('/delete/:id', todoController.deleteTodo);


module.exports = router