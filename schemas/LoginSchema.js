const Joi = require('joi');

module.exports = Joi.object({
  password: Joi.string().length(6).required(),
  email: Joi.string().email().required(),
});