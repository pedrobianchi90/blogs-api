const { Router } = require('express');
const userController = require('../Controllers/userController');
const tokenMiddleware = require('../Middlewares/tokenMiddleware');

const userRoute = Router();

userRoute.get('/', tokenMiddleware, userController.getUsers);
userRoute.get('/:id', tokenMiddleware, userController.getUserById);
userRoute.post('/', userController.addUser);
// app.delete('/user/me', validateToken, usersController.deleteUser);

module.exports = userRoute; 