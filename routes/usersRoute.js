const Router = require('express').Router();
const {getUsers, getUser, postUser, putUser, deleteUser} = require('../controllers/usersController');
const {validateUser} = require('../middlewares/validator');

Router.get('/', getUsers);
Router.get('/:id', getUser);
Router.post('/', validateUser(), postUser);
Router.put('/:id', putUser);
Router.delete('/:id', deleteUser);

module.exports = Router;