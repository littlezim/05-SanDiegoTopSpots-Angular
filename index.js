
	//ANGULAR
	angular.module('app', []);

	angular.module('app').controller("mainCtrl", function($scope, $http){
		$http.get("topspots.json").then(function(response){
			$scope.bestSpots = response.data;
		})
		
	});
		angular.module('myApplicationModule', ['uiGmapgoogle-maps']).config(function(uiGmapGoogleMapApiProvider) {uiGmapGoogleMapApiProvider.configure({
          	
       			 v: '3.20', //defaults to latest 3.X anyhow
        		libraries: 'weather,geometry,visualization'

    		});
		});


		

