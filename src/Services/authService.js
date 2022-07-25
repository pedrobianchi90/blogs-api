const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');

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
    const token = await jwt.sign({ data: user }, secret);
    return token;
  },
  async readToken(token) {
    const { data } = jwt.decode(token, secret);
    return data;
  },
  async getUserByEmail({ email, password }) {
    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (!user || user.password !== password) {
      return { code: 400, message: { message: 'Invalid fields' } };      
    }
    const { password: unknown, ...newData } = user;
    return newData;
   },
  
};

module.exports = authService;