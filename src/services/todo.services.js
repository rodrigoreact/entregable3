// const Category = require("../models/categories.model");
// const Subcategory = require("../models/sub_categories.model");
const Todo = require("../models/todo.model");
// const User = require("../models/users.model");

class TodoServices {

/*    static async todoAll() {
    try {
        const todo = await Todo.findAll();
        return todo;

    } catch (error) {
       throw error; 
    }
   } */

    static async create(newTodo){
        try {
            const result = await Todo.create(newTodo)
            return result;
        } catch (error) {
            throw error;
        }
    }
  
}

module.exports = TodoServices;