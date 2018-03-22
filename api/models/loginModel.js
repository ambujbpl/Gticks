const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const LoginSchema = new Schema({
  user: String,
  password: String,
  role: String,
  name: String
});

const LoginObj = mongoose.model('loginnew', LoginSchema);

module.exports = LoginObj;
