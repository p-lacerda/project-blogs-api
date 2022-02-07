const { User } = require('../models');

const createUser = async (req, res) => {
  try {
  const { displayName,
  email,
  password,
  image } = req.body;
  
  const user = await User.create({ displayName,
    email,
    password,
    image });

  if (!user) throw Error;

  res.status(201).json({ message: 'Novo usuário criado com sucesso' });
  } catch (e) {
    res
    .status(500)
    .json({ message: 'Erro ao salvar o usuário no banco' });
  }
};

module.exports = {
  createUser,
};