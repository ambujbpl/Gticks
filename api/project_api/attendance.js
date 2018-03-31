var config = require('./../config/config.js');
// const examObj = require('./../models/examModel');
// var validate = require('./../token_validate/validator');
//var bodyParser = require('body-parser');
var multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
//var path = require('path'); // Its not used yet in place of fs we can use path as well!!!
var fs = require('fs');
//var xls = require('excel');

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    cb(null, file.fieldname + '-' + token + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
});

var upload = multer({ //multer settings
                storage: storage,
                fileFilter : function(req, file, callback) { //file filter
                    if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                        return callback(new Error('Wrong extension type'));
                    }
                    callback(null, true);
                }
            }).single('Attendance');

var addAttendance = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    console.log("token>>>>>", token);
    var myTestFileName1 = 'uploads/Attendance-' + token + ".xlsx";
    var myTestFileName2 = 'uploads/Attendance-' + token + ".xls";
  };
  fs.exists(myTestFileName1, function(exists) {
    if (exists) {
      // do something
      console.log("File already exists");
      res.json({
        "resCode": "Error",
        "msg": "Attendance File for this date already exists in server!"
      });
      return;
    } else {
      fs.exists(myTestFileName2, function(exists2) {
        if (exists2) {
          console.log("File already exists");
          res.json({
            "resCode": "Error",
            "msg": "Attendance File for this date already exists in server!"
          });
          return;
        } else {
          var exceltojson;
          upload(req, res, function(err) {
            if (err) {
              res.json({
                "resCode": "Error",
                "msg": err
              });
              return;
            }
            /** Multer gives us file info in req.file object */
            if (!req.file) {
              res.json({
                "resCode": "Error",
                "msg": "No file passed"
              });
              return;
            }
            /** Check the extension of the incoming file and
             *  use the appropriate module
             */
            if (req.file.originalname.split('.')[req.file.originalname.split('.').length - 1] === 'xlsx') {
              exceltojson = xlsxtojson;
            } else {
              exceltojson = xlstojson;
            }
            console.log(req.file.path);
            try {
              exceltojson({
                input: req.file.path,
                output: null, //since we don't need output.json
                lowerCaseHeaders: true
              }, function(err, result) {
                if (err) {
                  return res.json({
                    "resCode": "Error",
                    "msg": err,
                    data: null
                  });
                }
                res.json({
                  "resCode": "Ok",
                  "msg": result
                });
              });
            } catch (e) {
              res.json({
                "resCode": "Error",
                "msg": "Corupted excel file"
              });
            }
          });
        }
      });
    }
  });
};

var getAttendance = function(req, res, next) {
  console.log("newExam req>>>>>>>>>>>>", req.body);
  // Check Attendance
  if (req.body.Date) {
    console.log("req.body.Date>>>>>", req.body.Date);
    var date = req.body.Date;
  }

  var myTestFileName1 = 'uploads/Attendance-' + date + ".xlsx";
  var myTestFileName2 = 'uploads/Attendance-' + date + ".xls";
  // console.log("myTestFileName>>>>>",myTestFileName);
  fs.exists(myTestFileName1, function(exists) {
	  console.log("exists ====",exists,"  myTestFileName1=====",myTestFileName1);
    if (exists) {
      console.log("File exists/Found ----myTestFileName1");
      excellToJson(myTestFileName1,res);
    }else {
    fs.exists(myTestFileName2, function(exists) {
			  console.log("exists ====",exists,"  myTestFileName2=====",myTestFileName2);

    if (exists) {
      console.log("File exists/Found  >>>myTestFileName2");
       excellToJson(myTestFileName2,res);
    }
    else {
            res.json({
        "resCode": "Error",
        "msg": 'No Attendance Record Available for this date in database!',
      });
    } 
    });
  }
  });
  // char.save(function(error) {
  //   if (error) {
  //     console.log("error>>>>>>>>  ",error);
  //     res.json({
  //       "resCode": "Error",
  //       "msg": 'Error to Add in database!',
  //     });
  //   } else {
  //     res.json({
  //       "resCode": "OK",
  //       "msg": 'Invigilator Add successfully!',
  //     });
  //   }
  // });
};
function excellToJson(x,res){
  console.log("excellToJson() file is---",x);
             /** Check the extension of the incoming file and
             *  use the appropriate module
             */
            if (x.split('.')[x.split('.').length - 1] === 'xlsx') {
              exceltojson = xlsxtojson;
            } else {
              exceltojson = xlstojson;
            }
            // console.log(req.file.path);
            try {
              exceltojson({
                input: x,
                output: null, //since we don't need output.json
                lowerCaseHeaders: true
              }, function(err, result) {
                if (err) {
                  return res.json({
                    "resCode": "Error",
                    "msg": err,
                    data: null
                  });
                }
                res.json({
                  "resCode": "Ok",
                  "msg": result
                });
              });
            } catch (e) {
              res.json({
                "resCode": "Error",
                "msg": "Corupted excel file"
              });
            }
          };
module.exports = {
  addAttendance: addAttendance,
  getAttendance: getAttendance,
}
