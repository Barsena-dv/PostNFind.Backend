const mongoose = require("mongoose")

const Schema = mongoose.Schema

const stateSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    districts: {
        type: [String]
    }
})

module.exports = mongoose.model("states", stateSchema)