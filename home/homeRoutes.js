angular.module('app').config(['$routeProvider',
	function Routes ($routeProvider) {
		$routeProvider
		.when('/', {
			controller: 'homeController',
			controllerAs: 'controller',
			templateUrl: '/watermark/home/home.html'
		});
	}
]);
