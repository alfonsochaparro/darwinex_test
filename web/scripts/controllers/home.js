angular.module('home', ['darwin', 'ngScrollbars'])
.controller('HomeController', function($scope) {

	$scope.darwins = [
		{ name: 'BWE', invested: 1600, return: 7, drawdown: -37, score: 78.2, color: 'pink' },
		{ name: 'NTI', invested: 1800, return: 12, drawdown: -20, score: 80.5, color: 'orange' },
		{ name: 'BWE', invested: 780, return: 8, drawdown: -24, score: 91, color: 'red' },
		{ name: 'ERQ', invested: 2400, return: 14, drawdown: -32, score: 73.4, color: 'green' },
	];

	$scope.listMode = 'card';
	$scope.inPortfolio = false;

	$scope.scrollBarConfig = {
        autoHideScrollBar: false,
        theme: 'light-thick',
        advanced:{
            updateOnContentResize: true
        }
    };	
});