var jwt = require('jsonwebtoken');
var session = require("express-session");
var atob = require('atob');
var config = require('../config/config.js');
module.exports = function(app, dbs) {

app.post("/login", function(req, res, next){
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  var x = req.body.username;
  var y = req.body.password;
  var decodedString = atob(y);
  console.log(x, ".................", y,">>>>>>>",decodedString);
  // app.set("dbs",db);
  // db= req.db = app.get("db1");
  // var db = app.get("dbs");
  var collection_name = dbs.marketing.collection("login");
  collection_name.findOne({"user":req.body.username,"password":decodedString},function(err,record){
         if(record !== null){
           console.log("record",record);
           console.log("config.secret",config.secret);
           var token = jwt.sign(record,config.secret, {
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
});
  app.post("/logout", function(req, res){
    res.set("Access-Control-Allow-Origin", "*");
    req.session.destroy();
    req.logout();
    return res.json({"resCode":"OK","msg":"logging out"})
  });

  return app;
};
