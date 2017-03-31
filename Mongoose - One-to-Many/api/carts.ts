import express = require('express');
let router = express.Router();
import ShoppingCart from '../models/shoppingCart';
import CartItem from '../models/cartItem';


/* CREATE or UPDATE */
router.post('/', (req, res) => {
  if(req.body._id) {
    CartItem.findByIdAndUpdate(req.body._id, { "$set": { "productname": req.body.productname, "price": req.body.price }}, { "new": true, "upsert": true },
      function (err, updatedShoppingCart) {
        if (err) {
          res.send(err)
        } else {
          res.send(updatedShoppingCart);
        }
      }
    );
  } else {
    let cartitem:any = new CartItem();
    cartitem.productname = req.body.productname;
    cartitem.price = req.body.price;
    cartitem.save((err, newCartItem) => {
      ShoppingCart.findOne({name: req.body.shoppingcart}).exec((err, result:any) => {
        if (err) {
          res.send(err)
        } else {
          ShoppingCart.findByIdAndUpdate(result._id, { "$push": { "cartitems": newCartItem._id }}, { "new": true, "upsert": true },
            function (err, updatedShoppingCart) {
              if (err) {
                res.send(err)
              } else {
                res.send(updatedShoppingCart);
              }
            }
          );
        }
      });
    })
  }
})

/* READ */
router.get('/:tag', (req, res) => {
  ShoppingCart.findOne({name: req.params['tag']}).populate('cartitems').exec(function (err, results:any) {
    if (err) {
      res.send(err)
    } else {
      res.json(results.cartitems)
    }
  });
})

/* DELETE */
router.delete('/:tag', (req, res) => {
  CartItem.remove({_id: req.params['tag']}, (err) => {
    if(err) {
      res.send(err)
    } else {
      res.send('success');
    }
  })
})

export default router;
