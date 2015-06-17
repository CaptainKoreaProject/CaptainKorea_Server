var express = require('express');
var router = express.Router();

/* politician data CRUD */
var politician_create = require('../handlers/politician_create');
var politician_read = require('../handlers/politician_read');
var politician_update = require('../handlers/politician_update');
var politician_delete = require('../handlers/politician_delete');

/* Routing */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* politician create */
router.get('/politician_create', function(req,res){
	politician_create.rend_page(req,res);
});
router.post('/politician_create', function(req,res){
	politician_create.register_politician(req,res);
});

/* politician read */
router.get('/politician_read', function(req,res){
	politician_read.rend_page(req,res);
});

/* politician update */
router.get('/politician_update', function(req,res){
	politician_update.rend_page(req,res);
});
router.post('/politician_update/search', function(req,res){
	politician_update.search(req,res);
});
router.post('/politician_update', function(req,res){
	politician_update.update_politician(req,res);
});

/* politician delete */
router.get('/politician_delete', function(req,res){
	politician_delete.rend_page(req,res);
});
router.post('/politician_delete/search', function(req,res){
	politician_delete.search(req,res);
});
router.post('/politician_delete', function(req,res){
	politician_delete.delete_politician(req,res);
});


module.exports = router;
