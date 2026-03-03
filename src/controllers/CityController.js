const citySchema = require("../models/CityModel");

const getAllCities = async(req,res)=>{
    const allCitiesObj = await citySchema.find();
    if(allCitiesObj){
        res.status(200).json({
        message:"All cities data fetched successfully",
        data : allCitiesObj
    })
    }else{
        res.json({
            message:"No data found"
        })
    }
}

const getCityById = async (req, res) => {
    const getCityByIdObj = await citySchema.findById(req.params.id);
    if (getCityByIdObj) {
        res.status(200).json({
            message: "data fetched successfully",
            data: getCityByIdObj
        })
    } else {
        res.json({
            message: "Book not found"
        })
    }
}

const createCity = async (req, res) => {
    const createCityObj = await citySchema.create(req.body);
    if (createCityObj) {
        res.status(201).json({
            message: "Book created successfully",
            data: createCityObj
        })
    } else {
        res.json({
            message: "Book not created"
        })
    }
}

const deleteCity = async (req, res) => {
    const deleteCityByIdObj = await citySchema.findByIdAndDelete(req.params.id);
    if (deleteCityByIdObj) {
        res.status(200).json({
            message: "Book deleted successfully",
            data: deleteCityByIdObj
        })
    } else {
        res.json({
            message: "Book not found to be deleted"
        })
    }
}

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    deleteCity
}