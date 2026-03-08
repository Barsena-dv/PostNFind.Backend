const stateSchema = require("../models/StateModel");

const getAllStates = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error fetching states"
        });
    }
};

const getStateById = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error fetching state"
        });
    }
};

const createState = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error creating state"
        });
    }
};

const deleteState = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error deleting state"
        });
    }
};

const updateState = async (req, res) => {
    try {
        const updateStateObj = await stateSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updateStateObj) {
            res.status(200).json({
                message: "State updated successfully",
                data: updateStateObj
            });
        } else {
            res.status(404).json({
                message: "State not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating state"
        });
    }
};

const pushDistrictToState = async (req, res) => {
    try {
        const pushDistrictObj = await stateSchema.findByIdAndUpdate(
            req.params.id,
            { $push: { districts: req.body.district } },
            { new: true }
        );
        if (pushDistrictObj) {
            res.status(200).json({
                message: "District added successfully",
                data: pushDistrictObj
            });
        } else {
            res.status(404).json({
                message: "State not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error adding district"
        });
    }
};

module.exports = {
    getAllStates,
    getStateById,
    createState,
    deleteState,
    updateState,
    pushDistrictToState
};
