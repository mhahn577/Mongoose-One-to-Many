import * as express from 'express';
import ShoppingCart from '../models/shoppingCart';
import CartItem from '../models/shoppingCart';

let router = express.Router();

// GET all cartitems
router.get('/', (req, res) => {
  CartItem.find().populate('shoppingcarts').then((items)=> {
      res.json(items);
  }).catch((err) => {
      res.status(500);
      console.error(err);
  })
});

export default router;
