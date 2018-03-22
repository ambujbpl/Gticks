// Recommended driver settings for the Mongoose
var mongoose = require('mongoose');
var config = require('./../config/config.js');

var options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000,
  poolSize: 5,
}

mongoose.connect(config.uri, options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.once('open', function(){
    console.log('MongoDB Connection has been made...');
}).on('error', function(error){
    console.log('Connection error:', error);
});
