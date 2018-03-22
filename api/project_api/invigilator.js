var config = require('./../config/config.js');
const invigilatorObj = require('./../models/invigilatorModel');
var validate = require('./../token_validate/validator');
var moment = require('moment');

var newinvigilator = function(req, res, next) {
  console.log("newinvigilator req>>>>>>>>>>>>", req.body);
  var dob = moment(req.body.Date, 'DD-MM-YYYY');
  console.log("Date>>>>>>>  ",dob);
  console.log();
  // invigilatorObj.insert(req.body);
  validate(req, res);
  const char = new invigilatorObj({
    name: req.body.Name,
    father: req.body.Father,
    address: req.body.Address,
    dob: dob,
    mobile: req.body.Mobile,
    email: req.body.Email,
    experience: req.body.Experience,
  });

  char.save(function(error) {
    if (error) {
      console.log("error>>>>>>>>  ",error);
      res.json({
        "resCode": "Error",
        "msg": 'Error to Add in database!',
      });
    } else {
      res.json({
        "resCode": "OK",
        "msg": 'Invigilator Add successfully!',
      });
    }
  });
};

var getInvigilator = function(req, res, next) {
  console.log("getInvigilator req>>>>>>>>>>>>", req.body);
  // invigilatorObj.insert(req.body);
  validate(req, res);
  invigilatorObj.find(function (err, invigilators) {
    if (err) {
      return next(err);
    } else {
      res.json({
        "resCode": "OK",
        "results": invigilators,
      });
    };
});
};

module.exports = {
  newinvigilator: newinvigilator,
  getInvigilator: getInvigilator,
}
