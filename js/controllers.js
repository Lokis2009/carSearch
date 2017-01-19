'use strict'

var leafSearch = angular.module("leafSearch", ['ngRoute', 'ui.filters']);


leafSearch.config(['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvider) {

	/*$locationProvider.html5Mode(true)*/


	$routeProvide
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'searchTableCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'ContactCtrl'
		})

	.when('/cars/:CarId', {
			templateUrl: 'templates/car-detail.html',
			controller: 'CarDetailCtr'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

//Filter
leafSearch.filter("yesFilter", function () {
	return function (input) {

		if (input === "есть") return '\u2713'
		else return '\u2718';

		/*return input ? '\u2713' : '\u2718';*/
	}
});



leafSearch.controller("searchTableCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {


	$http.get('Cars/jsonCars.json').success(function (data, status, headers, config) {
		$scope.cars = data;
	});

}]);

// About Controller
leafSearch.controller('AboutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);

// Contact Controller
leafSearch.controller('ContactCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);


//Car Detail Controller
leafSearch.controller('CarDetailCtr', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	$scope.CarId = $routeParams.CarId;

  }]);