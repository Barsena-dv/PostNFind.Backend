const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {
        type: String,

    },
    productPrice: {
        type: Number
    },
    productColor: {
        type: [String],
        enum: ["Red", "Green", "Blue", "Yellow", "Black", "White"]
    },
    productSize: {
        type: String,
        enum: ["S", "M", "L", "XL", "XXL"]
    }
})

module.exports = mongoose.model("product", productSchema)