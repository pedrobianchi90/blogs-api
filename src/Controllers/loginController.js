const loginService = require('../Services/loginService');

const loginControler = {
  async login(req, res) {
    const { email, password } = req.body;
    const result = await loginService.validateLogin({ email, password });
    if (result.message) {
      return res.status(result.code).json(result.message);
    }
    const user = await loginService.getByEmail(result);
    if (user.message) {
      return res.status(user.code).json(user.message);
    }
    const token = await loginService.makeToken(user);
    return res.status(200).json({ token });
  },
};

module.exports = loginControler;