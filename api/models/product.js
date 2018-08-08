const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  class: String,
  category: String,
  sub_category: String,
  gender: String,
  section: String,
  type: String,
  name: String,
  img: String,
  price: Number,
  description: String,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
