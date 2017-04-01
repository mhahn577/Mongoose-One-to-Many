var myapp;
(function (myapp) {
    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('add', {
            url: '/add',
            templateUrl: '/ngApp/views/addPlace.html',
            controller: myapp.Controllers.AddPlaceController,
            controllerAs: 'vm'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/editPlace.html',
            controller: myapp.Controllers.EditPlaceController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(myapp || (myapp = {}));
