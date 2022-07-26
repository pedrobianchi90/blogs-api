const { Router } = require('express');
const userControler = require('../Controllers/userController');

const userRoute = Router();

userRoute.post('/', userControler.addUser);

module.exports = userRoute; 