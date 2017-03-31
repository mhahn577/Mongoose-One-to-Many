"use strict";
var mongoose = require("mongoose");
var cartItemSchema = new mongoose.Schema({
    productName: String,
    price: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('CartItem', cartItemSchema);
