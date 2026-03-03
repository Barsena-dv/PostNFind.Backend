const router = require("express").Router();
const productController = require("../controllers/ProductController");

router.get("/products",productController.getProduct);
router.get("/product/:id",productController.getProductById);
router.post("/product",productController.createProduct);
router.delete("/product/:id",productController.deleteProduct);

module.exports = router