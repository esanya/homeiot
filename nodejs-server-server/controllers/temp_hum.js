'use strict';
var util = require('util');
var db = require('../service/sqlite3')();

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by sensorid.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/gettemperature' path has an operationId sensoridd 'gettemperature'.  Here,
  we specify that in the exports of this module that 'gettemperature' maps to the function sensoridd 'gettemperature'
 */
module.exports = {
  gettemphum: gettemphum,
  getAll, save, getOne, update, delTemphum
};
    // Exports all the functions to perform on the db

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function gettemphum(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_sensorid}
  var sensorid = req.swagger.params.sensorid.value || 'stranger';
  var daysinpast= req.swagger.params.daysinpast.value || '5';
  var gettemphum = []; 
  // util.format('Temphum values from sensor: %s and daysinpast %s!', sensorid, daysinpast);
  for(var i=0; i< daysinpast; i++) {
    gettemphum.push({sensorid: sensorid, tempval: 12+i, humvalue: 90-i});
  }


  // this sends back a JSON response which is a single string
  res.json(gettemphum);
}


//GET /temphum operationId
function getAll(req, res, next) {
	db.find(null, (retentries) => {
	  console.log('retentries: ' + JSON.stringify(retentries));
	  res.json({ entries: retentries});
	});
}
//POST /temphum operationId
function save(req, res, next) {
	res.json({success: db.save(req.body), message: "Temphum added to the list!"});
}
//GET /temphum/{id} operationId
function getOne(req, res, next) {
  	var sensorid = req.swagger.params.sensorid.value || 'stranger';
//	var temphum = db.find(sensorid);
	db.find(sensorid, (retentries) => {
	  console.log('retentries: ' + JSON.stringify(retentries));
	  res.json({ entries: retentries});
	});
//	if(temphum) {
//		res.json(temphum);
//	}else {
//		res.status(204).send();
//	}        
}
//PUT /temphum/{id} operationId
function update(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	var temphum = req.body;
	if(db.update(id, temphum)){
		res.json({success: 1, message: "Temphum updated!"});
	}else{
		res.status(204).send();
	}

}
//DELETE /temphum/{id} operationId
function delTemphum(req, res, next) {
	var id = req.swagger.params.id.value; //req.swagger contains the path parameters
	if(db.remove(id)){
		res.json({success: 1, description: "Temphum deleted!"});
	}else{
		res.status(204).send();
	}

}
