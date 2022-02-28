var express = require('express');
var router = express.Router();

//Controller
const home = require('../controller/home/home')

/* GET home page. */
router.get('/',home);

module.exports = router;
