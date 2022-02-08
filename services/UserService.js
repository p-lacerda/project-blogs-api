const { Users } = require('../models');
const UserSchema = require('../schemas/UserSchema');
const { validateWithJoi } = require('../utils/errors');

const createUser = (body) => {
  validateWithJoi(UserSchema, { ...body });

  Users.create({ ...body });
};

const getAll = async () => {
  const users = await Users.findAll();
  return users;
};

const findUser = async (email) => {
  const emailExists = await Users.findOne({ where: { email } });
  if (emailExists !== null) return emailExists.dataValues;
};

module.exports = {
  createUser,
  findUser,
  getAll,
};