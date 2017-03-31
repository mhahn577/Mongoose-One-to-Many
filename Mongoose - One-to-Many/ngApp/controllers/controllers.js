var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(cartitemService) {
                this.cartitemService = cartitemService;
            }
            HomeController.prototype.getCartItems = function () {
                var _this = this;
                this.cartitemService.getCartItems(this.shoppingcart).then(function (result) {
                    _this.cartitems = result;
                });
            };
            HomeController.prototype.deleteCartItem = function (cartitemId) {
                this.cartitemService.removeCartItem(cartitemId);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddCartItemController = (function () {
            function AddCartItemController(cartitemService) {
                this.cartitemService = cartitemService;
            }
            AddCartItemController.prototype.addCartItem = function () {
                this.cartitemService.saveCartItem(this.cartitem);
            };
            return AddCartItemController;
        }());
        Controllers.AddCartItemController = AddCartItemController;
        var EditCartItemController = (function () {
            function EditCartItemController($stateParams, cartitemService) {
                this.$stateParams = $stateParams;
                this.cartitemService = cartitemService;
                this.cartitemId = $stateParams['id'];
            }
            EditCartItemController.prototype.editCartItem = function () {
                this.cartitem._id = this.cartitemId;
                this.cartitemService.saveCartItem(this.cartitem);
            };
            return EditCartItemController;
        }());
        Controllers.EditCartItemController = EditCartItemController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
