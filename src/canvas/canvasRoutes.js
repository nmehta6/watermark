angular.module('app').config(['$routeProvider',
	function Routes ($routeProvider) {
		$routeProvider
		.when('/canvas', {
			controller: 'canvasController',
			controllerAs: 'controller',
			templateUrl: 'canvas/canvas.html'
		});
	}
]);
