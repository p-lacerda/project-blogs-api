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

const getAllCategories = async (_req, res) => {
  const allCategories = await CategoriesServices.getAllCategories();
  console.log('getall', allCategories);

  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};