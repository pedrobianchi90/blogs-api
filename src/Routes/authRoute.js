const { Router } = require('express');
const authControler = require('../Controllers/authController');

const authRoute = Router();

authRoute.post('/', authControler.login);

module.exports = authRoute; 