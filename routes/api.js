var express = require('express');
var router = express.Router();

/* politician data CRUD */
var politician_create = require('../handlers/politician_create');
var politician_read = require('../handlers/politician_read');
var politician_update = require('../handlers/politician_update');
var politician_delete = require('../handlers/politician_delete');

/* Routing */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* politician create */
router.get('/politician_create', function(req,res,next){
	politician_create.rend_page(req,res,next);
});
router.post('/politician_create', function(req,res,next){
	politician_craete.register_politician(req,res,next);
});

/* politician read */
router.get('/politician_read', function(req,res,next){
	politician_read.rend_page(req,res,next);
});

/* politician update */
router.get('/politician_update', function(req,res,next){
	politician_update.rend_page(req,res,next);
});
router.post('/politician_update/search', function(req,res,next){
	politician_update.search(req,res,next);
});
router.post('/politician_update', function(req,res,next){
	politician_update.update_politician(req,res,next);
})

/* politician delete */
router.get('/politician_delete', function(req,res,next){
	politician_delete.rend_page(req,res,next);
});
router.post('/politician_delete/search', function(req,res,next){
	politician_delete.search(req,res,next);
});
router.post('/politician_delete', function(req,res,next){
	politician_delete.delete_politician(req,res,next);
});


module.exports = router;
