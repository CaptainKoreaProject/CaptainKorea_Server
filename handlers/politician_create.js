var express = require('express');

var dbManager = require('./politician_db_manager');

var router = express.Router();

router.rend_page = function(req,res){
	res.send("politician_create page rendering");
};

router.register_politician = function(req,res){
	//To-do : 중복체크 필요
	dbManager.create_politician(req,res);
};

module.exports = router;