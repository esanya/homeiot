'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.currenttime = function currenttime (req, res, next) {
  var format = req.swagger.params['format'].value;
  Default.currenttime(format)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAll = function getAll (req, res, next) {
  Default.getAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOne = function getOne (req, res, next) {
  var sensorid = req.swagger.params['sensorid'].value;
  Default.getOne(sensorid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hello = function hello (req, res, next) {
  var name = req.swagger.params['name'].value;
  var day = req.swagger.params['day'].value;
  Default.hello(name,day)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.save = function save (req, res, next) {
  var valuemap = req.swagger.params['valuemap'].value;
  Default.save(valuemap)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
