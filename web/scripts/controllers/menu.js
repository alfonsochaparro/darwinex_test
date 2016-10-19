'use strict';

angular.module('menu', [])
.controller('MenuController', function($scope) {
	$scope.items = [
		{ icon: 'icon-explorar', label: 'Explorar'},
		{ icon: 'icon-owl', label: 'All darwins'},
		{ icon: 'icon-darwinia', label: 'Darwinia'}
	];

	$scope.landingDropdownOptions = [
		{ icon: 'icon-darwinia', label: 'Darwinia'},
		{ icon: 'icon-hall-of-fame', label: 'Hall of fame'},
		{ icon: 'icon-performance', label: 'Performance Fees'},
		{ icon: 'icon-rebates', label: 'Rebates'},
		{ icon: 'icon-widgets', label: 'Widgets'},
	];
});