const jwt = require('jsonwebtoken');
const Joi = require('joi');

const SECRET = process.env.JWT_SECRET || 'secret';

const tokenMiddleware = () => async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      const schema = Joi.string().required();
      const validaToken = schema.validate(token);

      if (!token || validaToken.error) {
        return res.status(401).json({ message: 'Token not found' });
      } 
      jwt.verify(token, SECRET);
  } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = tokenMiddleware;
