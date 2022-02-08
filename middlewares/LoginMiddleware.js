const Users = require('../services/UserService');

const LoginVerify = async (req, res, next) => {
  const { email } = req.body;

  if (email !== undefined && email.length !== 0) {
  const user = await Users.findUser(email);
  if (user === undefined) return res.status(400).json({ message: 'Invalid fields' }); 
  }

  next();
};

module.exports = {
  LoginVerify,
};