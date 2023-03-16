const { Router } = require("express");
const { createSubCategory } = require("../controllers/sub_categories.controllers");


const subCategoryRouter = Router();

subCategoryRouter.post('/api/v1/subcategory', createSubCategory);


module.exports = subCategoryRouter;