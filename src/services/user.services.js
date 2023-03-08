const Category = require("../models/categories.model");
const subCategory = require("../models/sub_categories.model");
const Todo = require("../models/todo.model");
const User = require("../models/users.model");

class UserServices {

    static async create(newUser){
        try {
            const createUser = await User.create(newUser)
            return createUser;
        } catch (error) {
            throw error;
        }
    }
    static async getTodo(userId){
        try {
            const result = await User.findByPk(userId, {
                attributes:  ['username', 'email', 'updatedAt'], 
                //attributes: { exclude: ["password", "email", "id", "updatedAt"]}, 
                include: [{
                    model: Todo, 
                    attributes:['title', 'description', 'status'],

                include: [
                    {
                        model: Category, 
                        attributes:['name']
                    },
                    {
                        model: subCategory,   
                        attributes: ['name']
                    }],
                }]
            })
         return result;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;