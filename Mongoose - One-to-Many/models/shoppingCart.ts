import mongoose = require('mongoose');

let shoppingCartSchema = new mongoose.Schema({
  username: String,
  cartitems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }]
});

export default mongoose.model('ShoppingCart', shoppingCartSchema);
