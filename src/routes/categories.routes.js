const { Router } = require("express");
const { createCategory } = require("../controllers/category.controllers");



const categoryRouter = Router();

categoryRouter.post('/api/v1/category', createCategory);


module.exports = categoryRouter;