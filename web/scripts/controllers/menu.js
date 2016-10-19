'use strict';

angular.module('menu', [])
.controller('MenuController', function($scope) {
	$scope.items = [
		{ icon: 'icon-explorar', label: 'Explorar'},
		{ icon: 'icon-owl', label: 'All darwins'},
		{ icon: 'icon-darwinia', label: 'Darwinia'}
	];
});