const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  f_name: String,
  l_name: String,
  phone: String,
  town: String,
  mail: String,
  pwd: String
});

module.exports = mongoose.model('User', userSchema);
