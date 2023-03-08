const SubCategoryServices = require("../services/sub_categories.services");


const createSubCategory = async(req, res) => {
    try {
      const newSubCategory = req.body;
      const result = await SubCategoryServices.create(newSubCategory);
      
      res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports = {
    createSubCategory,
}