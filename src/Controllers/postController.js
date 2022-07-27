const postService = require('../Services/postService');

const postController = {
  async getPosts(_req, res) {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
  },
};

module.exports = postController;