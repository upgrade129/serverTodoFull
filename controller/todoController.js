const Todo = require("../model/todoModel");

getAllTodos = (req, res) => {
  Todo.find()
    .sort({ createdAt: -1 })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

createTodo = (req, res) => {
  todo = new Todo(req.body);
  todo
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

updateTodo = (req, res) => {
  Todo.updateOne({_id : req.params.id},req.body)
  .then(() => res.send("sucessfull updated"))
  .catch(err => console.log(err))
};

deleteTodo = async(req, res) => {
  Todo.deleteOne({_id : req.params.id})
  .then(() => res.send("sucessfull deleted"))
  .catch(err => console.log(err))
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
