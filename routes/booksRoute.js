const Router = require('express').Router();
const {getBooks, postBook, deleteBook} = require('../controllers/booksController');

// Books
Router.get('/', getBooks);
Router.post('/', postBook);
Router.delete('/:id', deleteBook);

module.exports = Router;