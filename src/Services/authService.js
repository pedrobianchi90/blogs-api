require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const authService = {
  async validadeBodyLogin(unknown) {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    });
    const { error, value } = schema.validate(unknown);
    if (error) {
      return { code: 400, message: { message: 'Some required fields are missing' } };
    }
    return value;
  },
  async createToken(user) {
    const token = jwt.sign({ data: user }, secret);
    return token;
  },
  async verifyToken(token) {
    const { data } = jwt.decode(token, secret);
    return data;
  },
};

module.exports = authService;