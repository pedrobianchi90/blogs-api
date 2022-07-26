const Joi = require('joi');
const models = require('../database/models');

const userService = {
  async validateUserBody(unknown) {
    const schema = Joi.object({
      displayName: Joi.string().required().min(8),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
      image: Joi.string().required(),
    });
    const { error, value } = schema.validate(unknown);
    if (error) {
      return { code: 400, message: { message: error.message } }; 
    }
    return value;
  },
  async addUser({ displayName, email, password, image }) {
    const registeredUsert = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (registeredUsert) return { code: 409, message: { message: 'User already registered' } };
    const user = await models.User.create({ displayName, email, password, image }, { raw: true });
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },
};

module.exports = userService;