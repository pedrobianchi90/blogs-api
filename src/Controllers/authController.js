const authService = require('../Services/authService');
const models = require('../database/models');

const authController = {
  async login(req, res) {
    const { email, password } = req.body;
    const data = await authService.validadeBodyLogin({ email, password });
    if (data.message) {
      return res.status(data.code).json(data.message);
    }
    const user = await models.User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = await authService.createToken(user);

    return res.status(200).json({ token });
  },
};

module.exports = authController;