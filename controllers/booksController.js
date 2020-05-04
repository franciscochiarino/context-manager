const Book = require('../models/bookSchema');
const createError = require('http-errors');

exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json({ success: true, books: books});
    }
    catch(err) {
        next(err);
    }
    
};

exports.getBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw createError(404);
        res.json({ success: true, book: book}); 
    }
    catch(err) {
        next(err);
    }
    
}

exports.postBook = async (req, res, next) => {
    try {
        const book = new Book(req.body);
        book.save();
        res.json({ success: true, book: book}); 
    }
    catch(err) {
        next(err);
    }
};

exports.putBook = async (req, res, next) => {
    const id = req.params.id;
    const book = req.body;
    try {
        const updateBook = await Book.findByIdAndUpdate(id, book, {new: true});
        if (!updateBook) throw createError(404);
        res.json({ success: true, book: updateBook}); 
    }
    catch(err) {
        next(err);
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) throw createError(404);
        res.json({ success: true}); 
    }
    catch(err) {
        next(err);
    }
};

