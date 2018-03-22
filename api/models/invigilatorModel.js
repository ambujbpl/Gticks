const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const InvigilatorSchema = new Schema({
  name: String,
  father: String,
  address: String,
  dob: Date,
  mobile: String,
  email: String,
  experience: String
});

const InvigilatorObj = mongoose.model('invigilator', InvigilatorSchema);

module.exports = InvigilatorObj;
