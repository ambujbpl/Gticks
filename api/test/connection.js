const mongoose = require('mongoose');
var config = require('./../config/config.js');
var uri = config.uri;
// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db before tests run
before(function(done){

    // Connect to mongodb
    mongoose.connect(uri);
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

});
