angular.module('app').config(['$routeProvider',
	function Routes ($routeProvider) {
		$routeProvider
		.when('/original', {
			templateUrl: 'original/original.html'
		});
	}
]);
