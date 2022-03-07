import models from "../../models/index.js";
import Joi from "joi";

const { User } = models;

//Signup function
async function signup(req, res, next) {
  const { firstName, lastName, username, password } = req.body;

  try {
    const data = await User.create({
      firstName,
      lastName,
      username,
      password,
    });

    res.status(200).jsend.success(data);
  } catch (error) {
    return res.status(400).jsend.error(error.message);
  }
}

//Login function
async function login(req, res, next) {
  const { username, password } = req.body;
  // console.log(username, password);
  try {
  
    const data = await User.findOne({
      where: { username, password },
    });

    if (!data) return res.status(404).jsend.error("User not found!!!");
    return res.status(200).jsend.success(data);
  } catch (error) {
    return res.status(400).jsend.error(error.message);
  }
  // next();
}

export default { signup, login };
