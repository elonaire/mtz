const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  p_id: String,
  name: String,
  price: Number,
  quantity: Number,
  location: String,
  confirmed: Boolean
});

module.exports = mongoose.model('Order', orderSchema);
