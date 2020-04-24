const Book = require('../models/bookSchema');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json({ success: true, books: books});
    }
    catch(err) {
        next(err);
    }
    
};

exports.getBook = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        res.json({ success: true, book: book}); 
    }
    catch(err) {
        next(err);
    }
    
}

exports.postBook = async (req, res) => {
    const book = req.body;
    try {
        await Book.insertMany(book);
        res.json({ success: true, book: book}); 
    }
    catch(err) {
        next(err);
    }
};

exports.putBook = async (req, res) => {
    const id = req.params.id;
    const book = req.body;
    try {
        await Book.findByIdAndUpdate(id, book);
        res.json({ success: true, book: book}); 
    }
    catch(err) {
        next(err);
    }
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        await Book.findByIdAndDelete(id);
        res.json({ success: true}); 
    }
    catch(err) {
        next(err);
    }
};

