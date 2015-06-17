var express = require('express');

var router = express.Router();

router.rend_page = function(req,res){
	res.send("politician_read page rendering");
}

module.exports = router;