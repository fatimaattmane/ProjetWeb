(function (angular) {
    angular.module('miageIn')
			.controller('renseignementCtrl', ['$scope', '$resource', '$http', function ($scope, $resource,$http) {
				$scope.creerUser = function () {
					console.log("ok");
          console.log($scope.utilisateur);
          console.log("ok");
          $http.post('http://localhost:3000/api/utilisateur', $scope.utilisateur);
					//var x = $resource("/utilisateur/");
					console.log("ok2");
				};
            }
			]);

})(window.angular);
