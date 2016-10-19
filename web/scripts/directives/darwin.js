'use strict';

angular.module('darwin', [])
.directive('darwin', function() {
	return {
        restrict: 'E',
        replace: 'true',
        scope: {
            value: '=value',
            onTradeClick: '&onTradeClick'
        },
        templateUrl: '/web/views/directives/darwin.html'
    };
});