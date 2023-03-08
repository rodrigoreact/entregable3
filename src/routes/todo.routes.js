const { Router } = require("express");
// const { createTodo, getTodo, getTodoAll } = require("../controllers/todo.controllers");
const { createTodo } = require("../controllers/todo.controllers");


const todoRouter = Router();
// todoRouter.get('/api/v1/todo', getTodoAll);

todoRouter.post('/api/v1/todo', createTodo);

module.exports = todoRouter;
