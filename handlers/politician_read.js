var express = require('express');

var dbManager = require('./politician_db_manager');

var router = express.Router();

router.rend_page = function(req,res){
	dbManager.read_politician(req,res);
}

module.exports = router;