const authService = require('../Services/authService');

const authController = {
    /** @type {import('express').Request.Handler} */
    async login(req, res) {
      const data = await authService.validateBodyLogin(req.body);
      const user = await authService.getByEmail(data.email);
      const token = await authService.createToken(user);

      return res.status(200).json({ token });
    },
};

module.exports = authController;