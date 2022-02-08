const { Users } = require('../models');
const LoginSchema = require('../schemas/LoginSchema');
const { validateWithJoi } = require('../utils/errors');

const loginUser = async (body) => {
  const { email } = body;
  validateWithJoi(LoginSchema, { ...body });

  const user = await Users.findOne({ where: { email } });
  return user;
};

module.exports = {
  loginUser,
};