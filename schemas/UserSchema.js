const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).required(),
  password: Joi.string().length(6).required(),
  email: Joi.string().email().required(),
  image: Joi.string(),
});