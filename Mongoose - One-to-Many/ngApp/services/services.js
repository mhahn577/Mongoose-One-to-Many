var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var PlaceService = (function () {
            function PlaceService($resource) {
                this.$resource = $resource;
                this.PlaceResource = $resource('/api/places/:tag');
            }
            PlaceService.prototype.savePlace = function (place) {
                return this.PlaceResource.save(place);
            };
            PlaceService.prototype.getPlaces = function (category) {
                return this.PlaceResource.query({ tag: category }).$promise;
            };
            PlaceService.prototype.removePlace = function (placeId) {
                return this.PlaceResource.delete({ tag: placeId });
            };
            return PlaceService;
        }());
        Services.PlaceService = PlaceService;
        angular.module('myapp').service('placeService', PlaceService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
