var express      = require('express');
var router       = express.Router();
var contect = require('./../project_api/contactUs');
var invigilatorobj    = require('../project_api/invigilator.js');
var employeeobj    = require('../project_api/employee.js');
var examobj    = require('../project_api/examApi.js');
var attendanceobj    = require('../project_api/attendance.js');

router.post('/contactUs', contect.contactUs);
router.post('/newinvigilator', invigilatorobj.newinvigilator);
router.post('/getInvigilator', invigilatorobj.getInvigilator);
router.post('/newemployee', employeeobj.newemployee);
router.post('/getemployee', employeeobj.getemployee);
router.post('/getExployee', employeeobj.getemployee);
router.post('/getExployee', employeeobj.getemployee);
router.post('/getExam', examobj.getExam);
router.post('/newExam', examobj.newExam);
router.post('/addAttendance', attendanceobj.addAttendance);
router.post('/getAttendance', attendanceobj.getAttendance);

module.exports = router;
