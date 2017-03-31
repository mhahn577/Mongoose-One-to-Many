"use strict";
var mongoose = require("mongoose");
var shoppingCartSchema = new mongoose.Schema({
    username: String,
    cartitems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('ShoppingCart', shoppingCartSchema);
