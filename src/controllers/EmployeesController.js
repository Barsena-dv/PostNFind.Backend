const employeeSchema = require("../models/EmployeesModel")

const getAllemployess = async (req, res) => {
    const getAllEmployees = await employeeSchema.find()
    res.json({
        message: "Employees data fetched successfully",
        data: getAllEmployees,
    })
}

const getEmployee = async (req, res) => {
    try {
        const found = await employeeSchema.findById(req.params.id)

        if (found) {
            res.json({
                message: "User found",
                data: found
            })
        } else {
            res.status(404).json({
                message: "User not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Invalid ID"
        })
    }
}

const getEmployeesBySalary = async (req, res) => {
    try {
        const foundEmployees = await employeeSchema.find({
            salary: { $gte: parseInt(req.params.salary) }
        })

        if (foundEmployees.length > 0) {
            res.json({
                message: "Users found",
                data: foundEmployees
            })
        } else {
            res.status(404).json({
                message: "Users not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching users"
        })
    }
}

module.exports = {
    getAllemployess,
    getEmployee,
    getEmployeesBySalary
}