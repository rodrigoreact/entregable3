const { Router } = require("express");
const { createUser, getTodos } = require("../controllers/user.controllers");

const userRouter = Router();

userRouter.post('/api/v1/users', createUser);
userRouter.get('/api/v1/users/:userId/todo', getTodos)

module.exports = userRouter;
