import models from "../../models/index.js";
import Joi from "joi";

const { User } = models;

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
    console.log("😠", error.message);
    return;
  }

  const { firstName, lastName, username, password } = req.body;

  const data = await User.create({
    firstName,
    lastName,
    username,
    password,
  });

  res.json({
    data,
  });
}

//Login function
async function login(req, res, next) {
  const { username, password } = req.body;
  let data;

  try {
    data = await User.findOne({
      where: { username: username },
    });

    if(!data) console.log("😞",'User not found!!!')
    res.send(data);

  } catch (error) {
    console.log(error.message);
  }
  

}

export default { signup, login };
