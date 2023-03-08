const Category = require("../models/categories.model");


class CategoryServices {

    static async create(newCategory){
        try {
            const result = await Category.create(newCategory)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryServices;