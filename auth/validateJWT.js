const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const segredo = 'seusecretdetoken';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    const user = await Users.findOne({ where: { email: decoded.data.email } });

    req.user = user;
    next();
  } catch (err) {
    // Mudar para um Map
    if (err.message === 'invalid token' || err.message === 'jwt malformed') {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
  validateJWT,
};