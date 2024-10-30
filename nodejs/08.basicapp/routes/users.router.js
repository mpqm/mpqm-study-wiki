const express = require('express')
const usersController = require('../controllers/users.controller')
const usersRouter = express.Router();

usersRouter.get('/', usersController.getUsers)

usersRouter.get('/:userId', usersController.getUserById)

usersRouter.post('/', usersController.postUser)

module.exports = usersRouter;