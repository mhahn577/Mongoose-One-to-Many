namespace myapp.Services {
  export class CartItemService {
    public CartItemResource

    public saveCartItem(cartitem) {
      return this.CartItemResource.save(cartitem);
    }

    public getCartItems(shoppingcart) {
      return this.CartItemResource.query({tag: shoppingcart}).$promise;
    }

    public removeCartItem(cartitemId) {
      return this.CartItemResource.delete({tag: cartitemId})
    }

    public constructor(
      public $resource
    ) {
      this.CartItemResource = $resource('/api/cartitems/:tag');
    }
  }

  angular.module('myapp').service('cartitemService', CartItemService);
}
