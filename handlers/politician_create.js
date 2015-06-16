var express = require('express');

var router = express.Router();

router.rend_page = function(req,res,next){
	res.send("politician_create page rendering");
}

router.register_politician = function(req,res,next){
	res.send("register politician");
}

module.exports = router;