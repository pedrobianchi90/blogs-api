const Joi = require('joi');
const models = require('../database/models');

const categoryService = {
  validateCategoryBody: async (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const result = await schema.validateAsync(data);
    return result;
  },
  async addCategory(name) {
    if (!name) {
      return { code: 400, message: { message: '"name" is required' } };
    }
    const category = await models.Category.create(
      { name },
      { raw: true },
    );
    return category;
  },
};

module.exports = categoryService;