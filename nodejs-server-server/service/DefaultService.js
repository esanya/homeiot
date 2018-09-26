'use strict';


/**
 * Returns the current time in the requested format
 *
 * format String The format in which the caller wants to have the current time (optional)
 * returns HelloWorldResponse
 **/
exports.currenttime = function(format) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the temperature and humidty values for all sensors
 *
 * returns TempHumResponse
 **/
exports.getAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entries" : [ {
    "recordedate" : 6.02745618307040320615897144307382404804229736328125,
    "humvalue" : 5.962133916683182377482808078639209270477294921875,
    "tempvalue" : 1.46581298050294517310021547018550336360931396484375,
    "id" : 0.80082819046101150206595775671303272247314453125,
    "sensorid" : "sensorid"
  }, {
    "recordedate" : 6.02745618307040320615897144307382404804229736328125,
    "humvalue" : 5.962133916683182377482808078639209270477294921875,
    "tempvalue" : 1.46581298050294517310021547018550336360931396484375,
    "id" : 0.80082819046101150206595775671303272247314453125,
    "sensorid" : "sensorid"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the temperature and humidty values from one sensor
 *
 * sensorid String The format in which the caller wants to have the current time
 * returns TempHumResponse
 **/
exports.getOne = function(sensorid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entries" : [ {
    "recordedate" : 6.02745618307040320615897144307382404804229736328125,
    "humvalue" : 5.962133916683182377482808078639209270477294921875,
    "tempvalue" : 1.46581298050294517310021547018550336360931396484375,
    "id" : 0.80082819046101150206595775671303272247314453125,
    "sensorid" : "sensorid"
  }, {
    "recordedate" : 6.02745618307040320615897144307382404804229736328125,
    "humvalue" : 5.962133916683182377482808078639209270477294921875,
    "tempvalue" : 1.46581298050294517310021547018550336360931396484375,
    "id" : 0.80082819046101150206595775671303272247314453125,
    "sensorid" : "sensorid"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns 'Hello' to the caller
 *
 * name String The name of the person to whom to say hello (optional)
 * day String The day of the week (optional)
 * returns HelloWorldResponse
 **/
exports.hello = function(name,day) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new temperature and humidty values for a sensors
 *
 * valuemap TempHum The format in which the caller wants to have the current time
 * returns GeneralResponse
 **/
exports.save = function(valuemap) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

