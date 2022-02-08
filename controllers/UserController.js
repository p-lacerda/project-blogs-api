const jwt = require('jsonwebtoken');
const Users = require('../services/UserService');

const secret = 'seusecretdetoken';

const createUser = async (req, res) => {
  try {
    const { body } = req;

    const user = await Users.createUser(body);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(err.code).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  const users = await Users.getAll();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const users = await Users.getById(id);
  
  if (!users) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(users);
};

module.exports = {
  createUser,
  getAll,
  getById,
};