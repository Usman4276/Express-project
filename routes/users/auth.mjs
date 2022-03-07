import express from "express";
var router = express.Router();

//Middlewares
import validator from "../../middlewares/auth/user.mjs";

//Controller
import auth from "../../controller/users/auth.mjs";

//Routes
router.post("/signup", auth.signup);
router.post("/login", validator.login, auth.login);

// module.exports = router;
export default router;
