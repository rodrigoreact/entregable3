const { Sequelize } = require("sequelize");

const db = new Sequelize({

database : "todo_entregable",
port : 5432,
hots : "localhost",
username : "postgres",
password : "arerama1907*",
dialect : "postgres"

});

module.exports = db;
