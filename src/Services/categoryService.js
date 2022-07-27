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
  async getCategories() {
    const categories = await models.Category.findAll({ raw: true });
    return categories;
  },
  async getCategoryId(id) {
    const categoryId = await models.Category.findByPk(id);
    return categoryId;
  },
};

module.exports = categoryService;