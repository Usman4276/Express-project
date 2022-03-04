import Joi from "joi";

//Signup function
async function signup(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res.status(400).jsend.error(error.message);
  }
  next();
}

//Login function
async function login(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res.status(400).jsend.error(error.message);
  }
  next();
}

export default {
  signup,
  login,
};
