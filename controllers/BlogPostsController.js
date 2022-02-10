const BlogsPost = require('../services/BlogPostsServices');
const Categories = require('../services/CategoriesServices');

const createBlogPost = async (req, res) => {
  try {
    const { body } = req;
    const allCategories = await Categories.getAllCategories();

    const blogPost = await BlogsPost.createBlogPost(body);
    const existingIds = body.categoryIds
    .filter((reqId) => allCategories.some((categorie) => categorie.id === reqId));
    console.log('existingIds', existingIds);
  if (
    existingIds.length !== body.categoryIds.length
    ) return res.status(400).json({ message: '"categoryIds" not found' });

    res.status(201).json(blogPost);
  } catch (err) {
    console.log(err);
    return res.status(err.code).json({ message: err.message });
  }
};

module.exports = {
  createBlogPost,
};