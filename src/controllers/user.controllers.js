const UserServices = require("../services/user.services");

const createUser = async(req, res) => {
    try {
      const newUser = req.body;
      const result = await UserServices.create(newUser);
      
      res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error);
    }
}
const getTodos = async (req, res) => {
    try {
        const { userId } = req.params;
        const getTodos = await UserServices.getTodo(userId);
  
        res.json(getTodos);


    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports = {
    createUser,
    getTodos
}