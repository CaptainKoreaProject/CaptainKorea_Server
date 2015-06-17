var express = require('express');

var router = express.Router();

router.rend_page = function(req,res){
	res.send("politician update page rendering");
}

router.serach = function(req,res){
	res.send("searching politicians by name.");
}

router.update_politician = function(req,res){
	res.send("updating the politician you selected.");
}

module.exports = router;