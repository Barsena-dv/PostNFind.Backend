// Remove the citySchema import - it's not needed in CategoryController
const categorySchema = require("../models/CategoryModel");

const getAllCategories = async (req, res) => {
    try {
        const allCategoriesObj = await categorySchema.find();
        if (allCategoriesObj) {
            res.status(200).json({
                message: "All categories data fetched successfully",
                data: allCategoriesObj
            })
        } else {
            res.status(404).json({
                message: "No data found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching categories"
        })
    }
}

const getCategoryById = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error fetching category"
        })
    }
}

const createCategory = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error creating category"
        })
    }
}

const deleteCategory = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error deleting category"
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        const updateCategoryObj = await categorySchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updateCategoryObj) {
            res.status(200).json({
                message: "Category updated successfully",
                data: updateCategoryObj
            })
        } else {
            res.status(404).json({
                message: "Category not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating category"
        })
    }
}

const pushTagToCategory = async (req, res) => {
    try {
        const pushTagObj = await categorySchema.findByIdAndUpdate(
            req.params.id,
            { $push: { tags: req.body.tag } },
            { new: true }
        );
        if (pushTagObj) {
            res.status(200).json({
                message: "Tag added successfully",
                data: pushTagObj
            })
        } else {
            res.status(404).json({
                message: "Category not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error adding tag"
        })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
    updateCategory,
    pushTagToCategory
}