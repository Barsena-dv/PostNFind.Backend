const router = require("express").Router()
const employeesController = require("../controllers/EmployeesController");
router.get("/employees", employeesController.getAllemployess);
router.get("/employees/id/:id", employeesController.getEmployee);
router.get("/employees/salary/:salary", employeesController.getEmployeesBySalary);
module.exports = router