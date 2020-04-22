const Router = require('express').Router();
const {getBooks, getBook, postBook, putBook, deleteBook} = require('../controllers/booksController');

Router.get('/', getBooks);
Router.get('/:id', getBook);
Router.post('/', postBook);
Router.put('/:id', putBook);
Router.delete('/:id', deleteBook);

module.exports = Router;