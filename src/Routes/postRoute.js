const { Router } = require('express');
const postController = require('../Controllers/postController');
const tokenMiddleware = require('../Middlewares/tokenMiddleware');

const postRoute = Router();

postRoute.get('/', tokenMiddleware, postController.getPost);
postRoute.post('/', tokenMiddleware, postController.addPost);

module.exports = postRoute;