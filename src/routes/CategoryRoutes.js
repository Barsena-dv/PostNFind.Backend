const router = require('express').Router();
const categoryController = require("../controllers/CategoryController");

router.get("/categories", categoryController.getAllCategories);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/category/create", categoryController.createCategory);
router.delete("/category/delete/:id", categoryController.deleteCategory);
router.put("/category/update/:id", categoryController.updateCategory);
router.patch("/category/push/tag/:id", categoryController.pushTagToCategory);

module.exports = router;