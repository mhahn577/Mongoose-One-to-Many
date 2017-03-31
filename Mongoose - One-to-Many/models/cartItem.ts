import mongoose = require('mongoose');

let cartItemSchema = new mongoose.Schema({
    productName:String,
    price:Number
});

export default mongoose.model('CartItem', cartItemSchema);
