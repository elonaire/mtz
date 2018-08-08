const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  p_id: String,
  cus_id: String,
  name: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);
