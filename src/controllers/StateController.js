const stateSchema = require("../models/StateModel");

const getAllStates = async (req, res) => {
    const allStatesObj = await stateSchema.find();
    if (allStatesObj) {
        res.status(200).json({
            message: "All states data fetched successfully",
            data: allStatesObj
        });
    } else {
        res.json({
            message: "No data found"
        });
    }
};

const getStateById = async (req, res) => {
    const getStateByIdObj = await stateSchema.findById(req.params.id);
    if (getStateByIdObj) {
        res.status(200).json({
            message: "data fetched successfully",
            data: getStateByIdObj
        });
    } else {
        res.json({
            message: "State not found"
        });
    }
};

const createState = async (req, res) => {
    const createStateObj = await stateSchema.create(req.body);
    if (createStateObj) {
        res.status(201).json({
            message: "State created successfully",
            data: createStateObj
        });
    } else {
        res.json({
            message: "State not created"
        });
    }
};

const deleteState = async (req, res) => {
    const deleteStateByIdObj = await stateSchema.findByIdAndDelete(req.params.id);
    if (deleteStateByIdObj) {
        res.status(200).json({
            message: "State deleted successfully",
            data: deleteStateByIdObj
        });
    } else {
        res.json({
            message: "State not found to be deleted"
        });
    }
};

module.exports = {
    getAllStates,
    getStateById,
    createState,
    deleteState
};
