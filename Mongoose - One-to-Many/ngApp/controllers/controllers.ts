namespace myapp.Controllers {

    export class HomeController {
      public shoppingcart
      public cartitems

      public getCartItems() {
        this.cartitemService.getCartItems(this.shoppingcart).then((result) => {
          this.cartitems = result;
        })
      }

      public deleteCartItem(cartitemId) {
        this.cartitemService.removeCartItem(cartitemId);
      }

      public constructor(
        private cartitemService
      ) {
      }
    }

    export class AddCartItemController {
      public cartitem

      public addCartItem() {
        this.cartitemService.saveCartItem(this.cartitem);
      }

      public constructor(
        private cartitemService
      ) {
      }
    }

    export class EditCartItemController {
      public cartitem
      public cartitemId

      public editCartItem() {
        this.cartitem._id = this.cartitemId;
        this.cartitemService.saveCartItem(this.cartitem);
      }

      public constructor(
        public $stateParams,
        private cartitemService
      ) {
        this.cartitemId = $stateParams['id'];
      }
    }

}
