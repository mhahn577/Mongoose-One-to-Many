"use strict";
var mongoose = require("mongoose");
var PlaceSchema = new mongoose.Schema({
    name: String,
    address: String
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Place', PlaceSchema);
