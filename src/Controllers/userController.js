const userService = require('../Services/userService');
const authService = require('../Services/authService');

const userControler = {
  async addUser(req, res) {
    const data = await userService.validateUserBody(req.body);
    if (data.message) {
      return res.status(data.code).json(data.message);
    }
    const user = await userService.addUser(data);
    if (user.message) {
      return res.status(user.code).json(user.message);
    }
    const token = await authService.createToken(user);
    
    return res.status(201).json({ token });
  },
};

module.exports = userControler; 