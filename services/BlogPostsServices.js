const { BlogPosts, Users, Categories } = require('../models');
const BlogPostsSchema = require('../schemas/BlogPostsSchema');
const { validateWithJoi } = require('../utils/errors');

const createBlogPost = async (body) => {
  validateWithJoi(BlogPostsSchema, { ...body });
  const { title, content, userId } = body;
  const BlogPost = await BlogPosts.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
   });
  
  return BlogPost.dataValues;
};

const getAllBlogPost = async () => {
  const all = await BlogPosts.findAll({
    include: [{
      model: Users,
      as: 'user',
    },
    {
      model: Categories,
      as: 'categories',
    }],
  });

  return all;
};

module.exports = {
  createBlogPost,
  getAllBlogPost,
};