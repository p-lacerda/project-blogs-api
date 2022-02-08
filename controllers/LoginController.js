const jwt = require('jsonwebtoken');
const Login = require('../services/LoginService');

const secret = 'seusecretdetoken';

const loginUser = async (req, res) => {
  try {
    const { body } = req;

    const user = await Login.loginUser(body);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(err.code).json({ message: err.message });
  }
};

module.exports = {
  loginUser,
};