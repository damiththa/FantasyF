(function () {
    "use strict";
    var appFantasyF = angular.module('appFantasyF', ['ngRoute']);

    appFantasyF.config(['$routeProvider', function($routeProvider){
		$routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'Views/home.html'
            })
            .when('/rounds', {
                templateUrl: 'Views/rounds.html'
            }) 
            .when('/courses', {
                templateUrl: 'Views/courses.html'
            }) 
            .when('/about', {
                templateUrl: 'Views/about.html'
            })            
            .otherwise({redirectTo: '/'});
	}]);
    
}());