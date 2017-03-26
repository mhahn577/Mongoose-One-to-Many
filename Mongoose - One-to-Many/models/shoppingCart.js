"use strict";
var mongoose = require("mongoose");
var cartItemSchema = new mongoose.Schema({
    productName: String,
    price: Number
});
var shoppingCartSchema = new mongoose.Schema({
    username: String,
    items: [cartItemSchema]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('ShoppingCart', shoppingCartSchema);
