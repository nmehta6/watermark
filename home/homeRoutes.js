angular.module('app').config(['$routeProvider',
	function Routes ($routeProvider) {
		$routeProvider
		.when('/watermark', {
			controller: 'homeController',
			controllerAs: 'controller',
			templateUrl: '/watermark/home/home.html'
		});
	}
]);
