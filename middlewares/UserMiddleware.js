const Users = require('../services/UserService');

const UserVerify = async (req, res, next) => {
  const { body } = req;
  let email;

  if (body.email) {
    email = await Users.findUser(body.email);
  }

  if (email !== undefined) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = {
  UserVerify,
};