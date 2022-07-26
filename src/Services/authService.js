require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const throwUnauthorizedError = require('./utils');

const secret = process.env.JWT_SECRET || 'secret';

const authService = {
  async validateAuthorization(unknown) {
    const schema = Joi.string().required();
    try {
      const result = await schema.validateAsync(unknown);
      const [, token] = result.split(' ');
      return token;
    } catch (error) {
      throwUnauthorizedError();
    }
  },
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
  async readToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
      throwUnauthorizedError();
    }
  },
};

module.exports = authService;