const productSchema = require("../models/ProductModel");

const getProduct = async (req,res)=>{
    const AllProducts = await productSchema.find();
    res.json({
        message:"data fetched successfully",
        data: AllProducts
    })
}

const getProductById = async (req,res)=>{
    const getProductByIdObj = await productSchema.findById(req.params.id);
    if(getProductByIdObj){
        res.json({
        message:"data fetched successfully",
        data: getProductByIdObj
    })
    }else{
        res.json({
            message:"data not found"
        })
    }
}

const createProduct = async(req,res)=>{
    const createProductObj = await productSchema.create(req.body);
    res.status(201).json({
        message:"data created successfully",
        data: createProductObj,
    })
}

const deleteProduct = async(req,res)=>{
    const deleteProductObj = await productSchema.findByIdAndDelete(req.params.id);
    if(deleteProductObj){
        res.status(200).json({
        message:"data deleted successfully",
        data: deleteProductObj
    })
    }else{
        res.json({
            message:"data not deleted"
        })
    }
}
module.exports = {
    getProduct,
    getProductById,
    createProduct,
    deleteProduct
}