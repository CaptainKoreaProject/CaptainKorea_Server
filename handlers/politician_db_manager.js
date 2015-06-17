var MongoClient = require('mongodb').MongoClient;
var queryString = require('querystring');
var url = 'mongodb://localhost:27017/politician';


/* insert politician data */
exports.create_politician = function(req,res){
	console.log(req);
	insertPolitician(req.body, function(){
		res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write('politician info inserted');
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

}

/* update politician data */

exports.update_politician = function(req,res){
	
}

/* delete politician data */ 

exports.delete_politician = function(req,res){
	
}