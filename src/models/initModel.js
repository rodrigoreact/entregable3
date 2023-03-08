const Category = require("./categories.model");
const subCategory = require("./sub_categories.model");
const Todo = require("./todo.model");
const User = require("./users.model");

const initModel = () => {
    //Relación Tabla User - Tabla Todo(tareas)
    User.hasMany(Todo, {foreignKey:'user_id'})
    Todo.belongsTo(User, {foreignKey:'user_id'})
    //Relación Tabla Category - Tabla Todo
    Category.hasMany(Todo, {foreignKey:'category_id'})
    Todo.belongsTo(Category, {foreignKey:'category_id'})  
    //Relación Tabla subCategory - Tabla Todo
    subCategory.hasMany(Todo,{foreignKey:"subcategory_id"})
    Todo.belongsTo(subCategory,{foreignKey:"subcategory_id"})
    //Relación Tabla Category - Tabla subCategory
    Category.hasMany(subCategory,{foreignKey:"category_id"})
    subCategory.belongsTo(Category,{foreignKey:"category_id"})  
} 
module.exports = initModel;
