const mongoose = require("mongoose");
const Schema = mongoose.Schema

const employeeSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    skills: {
        type: [String]
    }


})

module.exports = mongoose.model("employees", employeeSchema)