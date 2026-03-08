const router = require("express").Router();
const bookController = require("../controllers/BooksController");

router.get("/books", bookController.getAllBooks);
router.get("/book/:id", bookController.getBookById);
router.post("/book/create", bookController.createBook);
router.delete("/book/delete/:id", bookController.deleteBook);
router.put("/book/update/:id", bookController.updateBook);
router.patch("/book/push/tag/:id", bookController.pushTagToBook);

module.exports = router