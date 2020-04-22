const db = require('../models/dataBase');

exports.getBooks = (req, res) => {
    const books = db.get('books').value();
    res.json({ success: true, books: books});
};

exports.getBook = (req, res) => {
    const id = parseInt(req.params.id);
    const book = db.get('books').find({id}).value();
    res.json({ success: true, book: book});
}

exports.postBook = (req, res) => {
    req.body.id = db.get('books').value().length;
    db.get('books').push(req.body).write();
    res.json({ success: true, book: db.get('books').last().value()});
};

exports.putBook = (req, res) => {
    const id = parseInt(req.params.id);
    const book = req.body;
    db.get('books').find({id}).assign(book).write();
    res.json({ success: true, book: book });
}

exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    const book = db.get('books').remove({id}).write();
    res.json({ success: true, book: book });
};

