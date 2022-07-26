const { Router } = require('express');
const userController = require('../Controllers/userController');

const userRoute = Router();

userRoute.post('/', userController.addUser);

module.exports = userRoute; 