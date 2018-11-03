const Joi = require('joi');

const getTokenDetails = Joi.object({
  query: Joi.object({
    token: Joi.string().required()
  })
});

const register = Joi.object({
  body: Joi.object({
    name: Joi.string()
      .max(40)
      .required(),
    email: Joi.string()
      .email()
      .required()
  })
});

const login = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  })
});

const setPassword = Joi.object({
  body: Joi.object({
    token: Joi.string()
      .guid()
      .required(),
    password: Joi.string()
      .min(8)
      .max(30)
      .required()
  })
});

const searchUser = Joi.object({
  query: Joi.object({
    search: Joi.string().required()
  })
});

module.exports = {
  getTokenDetails,
  register,
  login,
  setPassword,
  searchUser
};
