const CategoryServices = require("../services/category.services");

const createCategory = async(req, res) => {
    try {
      const newCategory = req.body;
      const result = await CategoryServices.create(newCategory);
      
      res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports = {
    createCategory,
}