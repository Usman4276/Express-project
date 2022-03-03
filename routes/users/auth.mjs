import express from "express";
var router = express.Router();

//Controller
import obj from "../../controller/users/auth.mjs";

//Auth
router.post("/signup", obj.signup);
router.post("/login", obj.login);


// module.exports = router;
export default router;
