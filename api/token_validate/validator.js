var jwt = require('jsonwebtoken');
var config = require('./../config/config.js');

module.exports = function(req,res) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token,config.secret, function(err, decoded) {
        if (err) {
            return res.json({"error": err.name, "message": 'Failed to authenticate token.' });
        }
        else{
          console.log("Your Token is authenticated");
        }
      req.decoded = decoded;
      // next();
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        "error": true,
        "message": 'No token provided.'
    });
  }
}
