var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(placeService) {
                this.placeService = placeService;
            }
            HomeController.prototype.getPlaces = function () {
                var _this = this;
                this.placeService.getPlaces(this.category).then(function (result) {
                    _this.places = result;
                });
            };
            HomeController.prototype.deletePlace = function (placeId) {
                this.placeService.removePlace(placeId);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddPlaceController = (function () {
            function AddPlaceController(placeService) {
                this.placeService = placeService;
            }
            AddPlaceController.prototype.addPlace = function () {
                this.placeService.savePlace(this.place);
            };
            return AddPlaceController;
        }());
        Controllers.AddPlaceController = AddPlaceController;
        var EditPlaceController = (function () {
            function EditPlaceController($stateParams, placeService) {
                this.$stateParams = $stateParams;
                this.placeService = placeService;
                this.placeId = $stateParams['id'];
            }
            EditPlaceController.prototype.editPlace = function () {
                this.place._id = this.placeId;
                this.placeService.savePlace(this.place);
            };
            return EditPlaceController;
        }());
        Controllers.EditPlaceController = EditPlaceController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
