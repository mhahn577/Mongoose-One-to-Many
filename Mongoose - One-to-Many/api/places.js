"use strict";
var express = require("express");
var router = express.Router();
var category_1 = require("../models/category");
var place_1 = require("../models/place");
router.post('/', function (req, res) {
    if (req.body._id) {
        place_1.default.findByIdAndUpdate(req.body._id, { "$set": { "name": req.body.name, "address": req.body.address } }, { "new": true, "upsert": true }, function (err, updatedCategory) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updatedCategory);
            }
        });
    }
    else {
        var place = new place_1.default();
        place.name = req.body.name;
        place.address = req.body.address;
        place.save(function (err, newPlace) {
            category_1.default.findOne({ name: req.body.category }).exec(function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {
                    category_1.default.findByIdAndUpdate(result._id, { "$push": { "places": newPlace._id } }, { "new": true, "upsert": true }, function (err, updatedCategory) {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.send(updatedCategory);
                        }
                    });
                }
            });
        });
    }
});
router.get('/:tag', function (req, res) {
    category_1.default.findOne({ name: req.params['tag'] }).populate('places').exec(function (err, results) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(results.places);
        }
    });
});
router.delete('/:tag', function (req, res) {
    place_1.default.remove({ _id: req.params['tag'] }, function (err) {
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
