const { Router } = require('express');
const categoryController = require('../Controllers/categoryController');

const categoryRoute = Router();

categoryRoute.post('/', categoryController.addCategory);

module.exports = categoryRoute;