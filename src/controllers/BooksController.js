const bookSchema = require("../models/BookModel");

const getAllBooks = async (req, res) => {
    const allBooks = await bookSchema.find();
    if (allBooks) {
        res.status(200).json({
            message: "data fetched successfully",
            data: allBooks
        })
    } else {
        res.json({
            message: "Books not found"
        })
    }
}

const getBookById = async (req, res) => {
    const getBookByIdObj = await bookSchema.findById(req.params.id);
    if (getBookByIdObj) {
        res.status(200).json({
            message: "data fetched successfully",
            data: getBookByIdObj
        })
    } else {
        res.json({
            message: "Book not found"
        })
    }
}

const createBook = async (req, res) => {
    const createBookObj = await bookSchema.create(req.body);
    if (createBookObj) {
        res.status(201).json({
            message: "Book created successfully",
            data: createBookObj
        })
    } else {
        res.json({
            message: "Book not created"
        })
    }
}

const deleteBook = async (req, res) => {
    const deleteBookByIdObj = await bookSchema.findByIdAndDelete(req.params.id);
    if (deleteBookByIdObj) {
        res.status(200).json({
            message: "Book deleted successfully",
            data: deleteBookByIdObj
        })
    } else {
        res.json({
            message: "Book not found to be deleted"
        })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook
}