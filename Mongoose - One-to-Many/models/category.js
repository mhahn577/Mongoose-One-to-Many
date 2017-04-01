"use strict";
var mongoose = require("mongoose");
var CategorySchema = new mongoose.Schema({
    name: String,
    places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Category', CategorySchema);
