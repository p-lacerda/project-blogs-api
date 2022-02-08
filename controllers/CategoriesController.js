const CategoriesServices = require('../services/CategoriesServices');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await CategoriesServices.createCategory(name);
  
    res.status(201).json(category);
  } catch (err) {
    return res.status(err.code).json({ message: err.message });
  }
};

module.exports = {
  createCategory,
};