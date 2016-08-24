
	//ANGULAR
	angular.module('app', []);

	angular.module('app').controller("mainCtrl", function($scope, $http){
		$http.get("http://localhost:61184/api/TopSpots").then(function(response){
			$scope.bestSpots = response.data;
		})
	});