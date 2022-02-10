const { BlogPosts } = require('../models');
const BlogPostsSchema = require('../schemas/BlogPostsSchema');
const { validateWithJoi } = require('../utils/errors');

const createBlogPost = async (body) => {
  validateWithJoi(BlogPostsSchema, { ...body });
  const BlogPost = await BlogPosts.create({ ...body });
  
  return BlogPost.dataValues;
};

const getAllBlogPost = async () => {
  const allBlogPost = await BlogPosts.findAll();

  return allBlogPost;
};

module.exports = {
  createBlogPost,
  getAllBlogPost,
};