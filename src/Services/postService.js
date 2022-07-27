const Joi = require('joi');
const models = require('../database/models');

const postService = {
  async validateUpdatePost(unknown) {
    const schema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
    });
    const { error, value } = schema.validate(unknown);
    if (error) {
      return { code: 400, message: { message: 'Some required fields are missing' } };
    }
    return value;
  },
  async getPosts() {
    const posts = await models.BlogPost.findAll({
      include: [{ 
      model: models.User,
        as: 'user',
        attributes: { exclude: 'password' },
      },
      {
        model: models.Category,
        as: 'categories',
        through: { attributes: { exclude: ['postId', 'categoryId'] } },
      }], 
    });
    return (posts);
},
};

module.exports = postService;