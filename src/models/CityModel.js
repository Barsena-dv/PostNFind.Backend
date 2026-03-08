const mongoose = require("mongoose");
const Schema = mongoose.Schema

const citySchema = new Schema({
    cityId: {
        type: String,
        required: true,
        unique: true
    },
    cityName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    landmarks: {
        type: [String]
    }
})

module.exports = mongoose.model("city", citySchema);