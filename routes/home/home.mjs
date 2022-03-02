import express from "express";
var router = express.Router();

//Controller
import home  from "../../controller/home/home.mjs";



/* GET home page. */
router.get("/", home);

// module.exports = router;
export default router;
