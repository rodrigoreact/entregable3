const subCategory = require("../models/sub_categories.model");



class SubCategoryServices {

    static async create(newSubCategory){
        try {
            const result= await subCategory.create(newSubCategory)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SubCategoryServices;