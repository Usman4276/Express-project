import models from "../../models/index.js";
import Joi from "joi";

const { User } = models;

//Signup function
async function signup(req, res, next) {

  const { firstName, lastName, username, password } = req.body;

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
    const data = await User.create({
      firstName,
      lastName,
      username,
      password,
    });

    res.json({
      data,
    });

  } catch (error) {
    res.status(404).jsend.error(error.message );
  }
  
}

//Login function
async function login(req, res, next) {
  const { username, password } = req.body;
  let data;

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);

    data = await User.findOne({
      where: { username, password },
    });

    if (!data) throw new Error("User not found!!!");
    res.send(data);
  } catch (error) {
    res.status(404).jsend.error(error.message);
  }
}

export default { signup, login };
