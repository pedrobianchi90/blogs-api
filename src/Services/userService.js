// const Joi = require('joi');
const models = require('../database/models');

const userService = {
  async getByEmail(email) {
    const user = await models.user.findOne({ 
      where: { email },
      raw: true,
    });
    return user;
  },
};

module.exports = userService;