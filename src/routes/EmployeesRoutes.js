const router = require("express").Router()
const employeesController = require("../controllers/EmployeesController");
router.get("/employees", employeesController.getAllemployess);
router.get("/employees/id/:id", employeesController.getEmployee);
router.get("/employees/salary/:salary", employeesController.getEmployeesBySalary);
router.put("/employees/update/:id", employeesController.updateEmployee);
router.patch("/employees/push/skill/:id", employeesController.pushSkillToEmployee);
module.exports = router