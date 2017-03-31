"use strict";
var express = require("express");
var router = express.Router();
var shoppingCart_1 = require("../models/shoppingCart");
var cartItem_1 = require("../models/cartItem");
router.post('/', function (req, res) {
    if (req.body._id) {
        cartItem_1.default.findByIdAndUpdate(req.body._id, { "$set": { "productname": req.body.productname, "price": req.body.price } }, { "new": true, "upsert": true }, function (err, updatedShoppingCart) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updatedShoppingCart);
            }
        });
    }
    else {
        var cartitem = new cartItem_1.default();
        cartitem.productname = req.body.productname;
        cartitem.price = req.body.price;
        cartitem.save(function (err, newCartItem) {
            shoppingCart_1.default.findOne({ name: req.body.shoppingcart }).exec(function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {
                    shoppingCart_1.default.findByIdAndUpdate(result._id, { "$push": { "cartitems": newCartItem._id } }, { "new": true, "upsert": true }, function (err, updatedShoppingCart) {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send(updatedShoppingCart);
                        }
                    });
                }
            });
        });
    }
});
router.get('/:tag', function (req, res) {
    shoppingCart_1.default.findOne({ name: req.params['tag'] }).populate('cartitems').exec(function (err, results) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(results.cartitems);
        }
    });
});
router.delete('/:tag', function (req, res) {
    cartItem_1.default.remove({ _id: req.params['tag'] }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('success');
        }
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
