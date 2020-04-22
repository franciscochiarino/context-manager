const Router = require('express').Router();
const {getUsers, getUser, postUser, putUser, deleteUser} = require('../controllers/usersController');

Router.get('/', getUsers);
Router.get('/:id', getUser);
Router.post('/', postUser);
Router.put('/:id', putUser);
Router.delete('/:id', deleteUser);

module.exports = Router;