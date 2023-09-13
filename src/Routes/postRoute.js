const { Router } = require('express');
const postController = require('../Controllers/postController');
const tokenMiddleware = require('../Middlewares/tokenMiddleware');

const postRoute = Router();


postRoute.get('/', tokenMiddleware, postController.getPosts);
postRoute.get('/:id', tokenMiddleware, postController.getPostById);
// app.post('/', validateToken, postsController.createPost);
// app.get('/search', validateToken, postsController.searchItem);
// app.put('/:id', validateToken, auth, postsController.updatePost);
// app.delete('/:id', validateToken, auth, postsController.deletePost);

module.exports = postRoute;