var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var CartItemService = (function () {
            function CartItemService($resource) {
                this.$resource = $resource;
                this.CartItemResource = $resource('/api/cartitems/:tag');
            }
            CartItemService.prototype.saveCartItem = function (cartitem) {
                return this.CartItemResource.save(cartitem);
            };
            CartItemService.prototype.getCartItems = function (shoppingcart) {
                return this.CartItemResource.query({ tag: shoppingcart }).$promise;
            };
            CartItemService.prototype.removeCartItem = function (cartitemId) {
                return this.CartItemResource.delete({ tag: cartitemId });
            };
            return CartItemService;
        }());
        Services.CartItemService = CartItemService;
        angular.module('myapp').service('cartitemService', CartItemService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
