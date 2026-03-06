const bookSchema = require("../models/BookModel");

const getAllBooks = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error fetching books"
        })
    }
}

const getBookById = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error fetching book"
        })
    }
}

const createBook = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error creating book"
        })
    }
}

const deleteBook = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            message: "Error deleting book"
        })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook
}