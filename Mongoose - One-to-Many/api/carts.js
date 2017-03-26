"use strict";
var express = require("express");
var shoppingCart_1 = require("../models/shoppingCart");
var router = express.Router();
router.get('/', function (req, res) {
    shoppingCart_1.default.find().populate('shoppingcarts').then(function (items) {
        res.json(items);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
