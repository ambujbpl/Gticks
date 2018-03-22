var jwt = require('jsonwebtoken');
var btoa = require('btoa');
var atob = require('atob');
var session = require("express-session");

var dbs = require('./../dbs/mongoose.js');
var config = require('./../config/config.js');
var loginObj = require('./../models/loginModel.js');

var loginUs = function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  var x = req.body.username;
  var y = req.body.password;
  var decodedString = atob(y);
  console.log(x, ".................", y,">>>>>>>",decodedString);
  loginObj.findOne({"user":req.body.username,"password":decodedString},function(err,record){
         if(record !== null){
           var token = jwt.sign({ foo: req.body.username },config.secret, {
                 expiresIn : 1500
             });
            console.log("token",token);
            req.session.store = record;
             res.json({
                 "resCode":"OK",
                 "msg": 'Validation successful!',
                 "token": token,
                 "role":record.role,
                 "name":record.name
             });
         }
          else{
           return res.send({"resCode":"ERROR","msg":"user not authenticated!"});
          }
  });
};

module.exports = {
  loginUs : loginUs,
}
