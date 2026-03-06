const productSchema = require("../models/ProductModel");

const getProduct = async (req, res) => {
    try {
        const AllProducts = await productSchema.find();
        res.json({
            message: "data fetched successfully",
            data: AllProducts
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching products"
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const getProductByIdObj = await productSchema.findById(req.params.id);
        if (getProductByIdObj) {
            res.json({
                message: "data fetched successfully",
                data: getProductByIdObj
            })
        } else {
            res.json({
                message: "data not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching product"
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const createProductObj = await productSchema.create(req.body);
        res.status(201).json({
            message: "data created successfully",
            data: createProductObj,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating product"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deleteProductObj = await productSchema.findByIdAndDelete(req.params.id);
        if (deleteProductObj) {
            res.status(200).json({
                message: "data deleted successfully",
                data: deleteProductObj
            })
        } else {
            res.json({
                message: "data not deleted"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product"
        })
    }
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    deleteProduct
}