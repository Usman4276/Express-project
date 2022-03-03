import express from "express";
var router = express.Router();

//Controller
import auth from "../../controller/users/auth.mjs";

//Auth
router.post("/signup", auth.signup);
router.post("/login", auth.login);


// module.exports = router;
export default router;
