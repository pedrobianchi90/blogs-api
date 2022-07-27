const categoryService = require('../Services/categoryService');

const categoryController = {
  async addCategory(req, res) {
    const { name } = (req.body);
    const category = await categoryService.addCategory(name);
    if (category.message) return res.status(category.code).json(category.message);
    return res.status(201).json(category);
  },
  async getCategories(_req, res) {
    const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
  },
};

module.exports = categoryController;
