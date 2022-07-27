const { Router } = require('express');
const categoryController = require('../Controllers/categoryController');
const tokenMiddleware = require('../Middlewares/tokenMiddleware');

const categoryRoute = Router();

categoryRoute.post('/', tokenMiddleware, categoryController.addCategory);
categoryRoute.get('/', tokenMiddleware, categoryController.getCategories);

module.exports = categoryRoute;