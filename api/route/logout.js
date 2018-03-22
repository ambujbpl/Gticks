var session = require("express-session");
var passport = require("passport");
var jwt = require('jsonwebtoken');

var dbs = require('./../dbs/mongoose.js');
var config = require('./../config/config.js');
var loginObj = require('./../models/loginModel.js');
var validate = require('./../token_validate/validator')

var logoutUs = function(req, res, next) {
  validate(req,res);
  res.set("Access-Control-Allow-Origin", "*");
  req.session.destroy();
  req.logOut();
  return res.send({
    "resCode": "OK",
    "msg": "logging out"
  })
};

module.exports = {
  logoutUs : logoutUs,
}
