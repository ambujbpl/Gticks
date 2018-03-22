var config = require('./../config/config.js');
const examObj = require('./../models/examModel');
var validate = require('./../token_validate/validator')

var getExam = function(req, res, next) {
  console.log("getExam req>>>>>>>>>>>>", req.body);
  // invigilatorObj.insert(req.body);
  validate(req, res);
  examObj.find(function (err, exams) {
    if (err) {
      return next(err);
    } else {
      console.log("exams>>>>>>",exams);
      res.json({
        "resCode": "OK",
        "results": exams,
      });
    };
});
};

var newExam = function(req, res, next) {
  console.log("newExam req>>>>>>>>>>>>", req.body);
  // invigilatorObj.insert(req.body);
  validate(req, res);
  const char = new examObj({
    examTital: req.body.examTital,
    description: req.body.description,
    orgniser: req.body.orgniser,
    examDate: req.body.examDate,
    shift: req.body.shift,
    count: req.body.count,
    requirement: req.body.requirement,
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

module.exports = {
  newExam: newExam,
  getExam: getExam,
}
