'use strict';

angular.module('darwinex_test', ['ngRoute', 'home', 'menu'])
.config(function ($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider
    .when('/', {
    	templateUrl: '/web/views/home.html',
      	controller: 'HomeController',
      	controllerAs: 'home'
    })
    .otherwise( {
    	redirectTo: '/'
    });
});