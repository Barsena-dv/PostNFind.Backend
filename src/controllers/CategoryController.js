// Remove the citySchema import - it's not needed in CategoryController
const categorySchema = require("../models/CategoryModel");

const getAllCategories = async(req,res)=>{
    const allCategoriesObj = await categorySchema.find();
    if(allCategoriesObj){
        res.status(200).json({
        message:"All categories data fetched successfully",
        data : allCategoriesObj
    })
    }else{
        res.status(404).json({
            message:"No data found"
        })
    }
}

const getCategoryById = async (req, res) => {
    const getCategoryByIdObj = await categorySchema.findById(req.params.id);
    if (getCategoryByIdObj) {
        res.status(200).json({
            message: "data fetched successfully",
            data: getCategoryByIdObj
        })
    } else {
        res.status(404).json({
            message: "Category not found"
        })
    }
}

const createCategory = async (req, res) => {
    const createCategoryObj = await categorySchema.create(req.body);
    if (createCategoryObj) {
        res.status(201).json({
            message: "Category created successfully",
            data: createCategoryObj
        })
    } else {
        res.status(400).json({
            message: "Category not created"
        })
    }
}

const deleteCategory = async (req, res) => {
    const deleteCategoryByIdObj = await categorySchema.findByIdAndDelete(req.params.id);
    if (deleteCategoryByIdObj) {
        res.status(200).json({
            message: "Category deleted successfully",
            data: deleteCategoryByIdObj
        })
    } else {
        res.status(404).json({
            message: "Category not found to be deleted"
        })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}