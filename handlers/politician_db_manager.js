var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var queryString = require('querystring');
var url = 'mongodb://localhost:27017/captainKorea';


/* insert politician data */
exports.create_politician = function(req,res){
	insertPolitician(req.body, function(err,result){
		res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(JSON.stringify(result));
        res.end();
	});
}

function insertPolitician(body, callback){
	body = typeof body === 'string'? JSON.parse(body) : body;
	
	var politician = {
			politicianName : body.politicianName,
			electionDistrict : body.electionDistrict,
			party : body.party,
			birth : body.birth
	};
	
	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		
		db.collection('politician').insert(politician, function(err, inserted){
			if(err) throw err;
			console.log("Successfully inserted : " + JSON.stringify(politician));
			db.close();
			callback(null, inserted);
 		}); 
		
	});
	
}

/* read politician data */
exports.read_politician = function(req,res){
	readPoliticians(req.body, function(err,result){
		res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(JSON.stringify(result));
        res.end();
	});
}
function readPoliticians(body, callback){
	body = typeof body === 'string'? JSON.parse(body) : body;
	
	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		
		db.collection('politician').find({}).toArray(function(err,docs){
			if(err) throw err;
			
			db.close();
			callback(null,docs);
		});
	});
}

/* update politician data */

exports.update_politician = function(req,res){
	updatePolitician(req.body, function(err,result){
		res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(JSON.stringify(result));
        res.end();
	});
	
}

function updatePolitician(body, callback){
	body = typeof body === 'string'? JSON.parse(body) : body;
	
	var willUpdateId = body._id;
	var willUpdateInfo = {
		"_id" : ObjectID.createFromHexString(body._id),
		"politicianName" : body.politicianName,
		"electionDistrict" : body.electionDistrict,
		"party" : body.party,
		"birth" : body.birth
	};
	
	MongoClient.connect(url, function(err,db){
		if(err) throw err;
		
		db.collection('politician').update({_id : ObjectID.createFromHexString(willUpdateId)}, willUpdateInfo,{strict:true}, function(err, result){
			 if(err) throw err;
			 callback(null, result);
		});
	});
	
}

/* delete politician data */ 

exports.delete_politician = function(req,res){
	deletePolitician(req.body,function(err, result){
		res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(JSON.stringify(result));
        res.end();
	});
}

function deletePolitician(body, callback){
	body = typeof body === 'string'? JSON.parse(body) : body;
	
	var willDeleteId = body._id;
	
	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		
		db.collection('politician').remove({_id : ObjectID.createFromHexString(willDeleteId)}, function(err, result){
			if(err) throw err;
			callback(null,result);
		});
	});
} 