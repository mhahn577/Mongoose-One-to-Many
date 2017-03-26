var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(cartService) {
                this.cartService = cartService;
                this.cart = {};
                this.carts = this.cartService.list();
                console.log(this.carts);
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
