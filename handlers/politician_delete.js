var express = require('express');

var router = express.Router();

router.rend_page = function(req,res,next){
	res.send("politician_delete page rendering");
}

router.search = function(req,res,next){
	res.send("searching politicians by name.");
}

router.delete_politician = function(req,res,next){
	res.send("deleting the politician you selected.");
}
module.exports = router;