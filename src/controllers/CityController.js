const citySchema = require("../models/CityModel");

const getAllCities = async (req, res) => {
    try {
        const allCitiesObj = await citySchema.find();
        if (allCitiesObj) {
            res.status(200).json({
                message: "All cities data fetched successfully",
                data: allCitiesObj
            })
        } else {
            res.json({
                message: "No data found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching cities"
        })
    }
}

const getCityById = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error fetching city"
        })
    }
}

const createCity = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error creating city"
        })
    }
}

const deleteCity = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error deleting city"
        })
    }
}

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    deleteCity
}