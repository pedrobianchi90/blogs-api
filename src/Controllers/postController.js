const postService = require('../Services/postService');

const postController = {
  async getPosts(_req, res) {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
  },
  async getPostById(req, res) {
    const postById = await postService.getPostById(req.params.id);
    return res.status(200).json(postById);
  },
};

module.exports = postController;