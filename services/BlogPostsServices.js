const { BlogPosts } = require('../models');
const BlogPostsSchema = require('../schemas/BlogPostsSchema');
const { validateWithJoi } = require('../utils/errors');

const createBlogPost = async (body) => {
  validateWithJoi(BlogPostsSchema, { ...body });
  const BlogPost = await BlogPosts.create({ ...body });
  
  return BlogPost.dataValues;
};

module.exports = {
  createBlogPost,
};