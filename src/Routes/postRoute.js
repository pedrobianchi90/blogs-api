const { Router } = require('express');
const postController = require('../Controllers/postController');
const tokenMiddleware = require('../Middlewares/tokenMiddleware');

const postRoute = Router();

// postRoute.put('/:id', tokenMiddleware, postController.updatePost);
postRoute.get('/', tokenMiddleware, postController.getPosts);
postRoute.get('/:id', tokenMiddleware, postController.getPostById);

module.exports = postRoute;