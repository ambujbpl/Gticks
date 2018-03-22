var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var btoa = require('btoa');
var atob = require('atob');
var session = require("express-session");
// var initializeDatabases = require('./dbs/mongoose.js');
var config = require('./config/config.js');
var pathroute = require('./route/path.js')
// var loginObj = require('./models/loginModel.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, './../web/public_html')));

app.use(session({secret:config.secret,saveUninitialized: true,
  resave: true,cookie:{maxAge:2000*3000*30000,httpOnly: false}}));

var login = require('./route/loginNew');
var logout = require('./route/logout');

app.post('/login', login.loginUs);
app.post('/logout', logout.logoutUs);

// error handling for all Restfull Api's
app.use(function(err,req,res,next){
  console.log("error hendling");
  res.status(422).send({"resCode":"Error","msg":err.message});
});

app.use('/route',pathroute);

module.exports = app;
