const models = require('../database/models');

const userService = {
  async addUser({ displayName, email, password, image }) {
    const userExist = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (userExist) return { code: 409, message: { message: 'User already registered' } };
    const user = await models.User.create({
      displayName, email, password, image }, 
      { raw: true, 
      });
    const { password: unknown, ...newUser } = user;
    return newUser;
  },
};

module.exports = userService;