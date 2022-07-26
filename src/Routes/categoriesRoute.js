const { Router } = require('express');
const categoriesControler = require('../Controllers/categoriesController');

const categoriesRoute = Router();

categoriesRoute.post('/', categoriesControler.login);

module.exports = categoriesRoute;