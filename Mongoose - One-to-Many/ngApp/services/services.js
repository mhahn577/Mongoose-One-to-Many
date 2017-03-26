var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var CartService = (function () {
            function CartService($resource) {
                this.CartResource = $resource('/api/carts');
            }
            CartService.prototype.get = function (id) {
                return this.CartResource.get({ id: id });
            };
            CartService.prototype.list = function () {
                return this.CartResource.query();
            };
            return CartService;
        }());
        Services.CartService = CartService;
        angular.module('myapp').service('cartService', CartService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
