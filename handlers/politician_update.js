var express = require('express');

var dbManager = require('./politician_db_manager');

var router = express.Router();

router.rend_page = function(req,res){
	res.send("politician update page rendering");
}

router.serach = function(req,res){
	res.send("searching politicians by name.");
}

router.update_politician = function(req,res){
	dbManager.update_politician(req,res);
}

module.exports = router;