const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const segredo = 'seusecret';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado ' });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    const user = await Users.findOne({ where: { username: decoded.data.email } });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};