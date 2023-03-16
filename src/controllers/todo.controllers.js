const TodoServices = require("../services/todo.services");
/* const getTodoAll = async (req, res) => {
    try {
        const todo = await TodoServices.todoAll()
        res.json(todo);

    } catch (error) {
        res.status(400).json(error);
    }
}
 */
const createTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodoServices.create(newTodo);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createTodo  
}