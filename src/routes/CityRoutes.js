const router = require("express").Router()

const cityController = require("../controllers/CityController")

router.get("/cities", cityController.getAllCities);
router.get("/city/:id", cityController.getCityById);
router.post("/create", cityController.createCity);
router.delete("/city/:id", cityController.deleteCity);
router.put("/city/update/:id", cityController.updateCity);
router.patch("/city/push/landmark/:id", cityController.pushLandmarkToCity);

module.exports = router