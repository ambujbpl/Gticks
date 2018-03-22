var config = require('./../config/config.js');
const employeeObj = require('./../models/employeeModel');
var validate = require('./../token_validate/validator');
var moment = require('moment');

var newemployee = function(req, res, next) {
  console.log("newemployee req>>>>>>>>>>>>", req.body);
  var dob = moment(req.body.Date, 'DD-MM-YYYY');
  console.log("Date>>>>>>>  ",dob);
  console.log();
  // employeeObj.insert(req.body);
  validate(req, res);
  const char = new employeeObj({
    name: req.body.Name,
    city: req.body.City,
    center: req.body.Center,
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
        "msg": 'Employee Add successfully!',
      });
    }
  });
};

var getemployee = function(req, res, next) {
  console.log("getemployee req>>>>>>>>>>>>", req.body);
  // employeeObj.insert(req.body);
  validate(req, res);
  if((req.body.City)||(req.body.Center)){
      console.log("getemployee where req.body.city>>>>>>>>>>>>", req.body);
    employeeObj.find({city:req.body.City,center:req.body.Center},function (err, employees) {
      if (err) {
        return next(err);
      } else {
        res.json({
          "resCode": "OK",
          "results": employees,
        });
      };
  });
  }
  else{
  employeeObj.find(function (err, employees) {
    if (err) {
      return next(err);
    } else {
      res.json({
        "resCode": "OK",
        "results": employees,
      });
    };
});
}
};

module.exports = {
  newemployee: newemployee,
  getemployee: getemployee,
}
