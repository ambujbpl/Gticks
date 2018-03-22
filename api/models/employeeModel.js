const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const EmployeeSchema = new Schema({
  name: String,
  city: String,
  center: String,
  address: String,
  dob: Date,
  mobile: String,
  email: String,
  experience: String
});

const EmployeeObj = mongoose.model('employee', EmployeeSchema);

module.exports = EmployeeObj;
