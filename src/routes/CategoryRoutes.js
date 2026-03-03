const router = require('express').Router();
const stateController = require("../controllers/StateController")

router.get("/states",stateController.getAllStates);
router.get("/state/:id",stateController.getStateById);
router.post("/state/create",stateController.createState);
router.delete("/state/delete",stateController.deleteState);

module.exports = router;