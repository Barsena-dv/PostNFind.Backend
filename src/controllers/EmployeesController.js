const employeeSchema = require("../models/EmployeesModel")

const getAllemployess = async (req, res) => {
    try {
        const getAllEmployees = await employeeSchema.find()
        res.json({
            message: "Employees data fetched successfully",
            data: getAllEmployees,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching employees"
        })
    }
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

const updateEmployee = async (req, res) => {
    try {
        const updateEmployeeObj = await employeeSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updateEmployeeObj) {
            res.status(200).json({
                message: "Employee updated successfully",
                data: updateEmployeeObj
            })
        } else {
            res.status(404).json({
                message: "Employee not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating employee"
        })
    }
}

const pushSkillToEmployee = async (req, res) => {
    try {
        const pushSkillObj = await employeeSchema.findByIdAndUpdate(
            req.params.id,
            { $push: { skills: req.body.skill } },
            { new: true }
        );
        if (pushSkillObj) {
            res.status(200).json({
                message: "Skill added successfully",
                data: pushSkillObj
            })
        } else {
            res.status(404).json({
                message: "Employee not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error adding skill"
        })
    }
}

module.exports = {
    getAllemployess,
    getEmployee,
    getEmployeesBySalary,
    updateEmployee,
    pushSkillToEmployee
}