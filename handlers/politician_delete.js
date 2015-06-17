var express = require('express');

var dbManager = require('./politician_db_manager');

var router = express.Router();

router.rend_page = function(req,res){
	res.send("politician_delete page rendering");
}

router.search = function(req,res){
	res.send("searching politicians by name.");
}

router.delete_politician = function(req,res){
	dbManager.delete_politician(req,res);
}
module.exports = router;