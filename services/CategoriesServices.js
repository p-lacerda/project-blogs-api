const { Categories } = require('../models');
const CategorySchema = require('../schemas/CategorySchema');
const { validateWithJoi } = require('../utils/errors');

const createCategory = (name) => {
  validateWithJoi(CategorySchema, { name });
  const category = Categories.create(name);

  return {
    id: category.insertId,
    name,
  };
};

module.exports = {
  createCategory,
};