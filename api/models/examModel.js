const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const NewsSchema = new Schema({
  examTital: String,
  description: String,
  orgniser: String,
  examDate: Date,
  shift: Number,
  count: Number,
  requirement: String
});

const ExamObj = mongoose.model('exam', NewsSchema);

module.exports = ExamObj;
