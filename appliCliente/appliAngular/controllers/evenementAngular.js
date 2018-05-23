(function (angular) {
    angular.module('miageIn')
            /**.controller('CtrlEvenement', ['$scope', '$resource', function ($scope, $resource) {
				$scope.consulter = function () {
					console.log("ok");
					var idCompte = $scope.numCompte;
					var somme = $scope.somme;
					var evenement = $resource("/api/evenements");
					var evenements = evenement.get({id:idCompte});
					console.log(evenements);
				};
            }]),**/
			.controller('evenementsCreaCtrl', ['$scope', '$resource', '$http', function ($scope, $resource,$http) {
				$scope.creerEvent = function () {
          $http.post('http://localhost:3000/api/evenement', $scope.Evenement);
				};
      }]);
})(window.angular);
