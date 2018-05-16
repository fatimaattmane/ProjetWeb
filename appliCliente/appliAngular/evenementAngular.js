(function (angular) {
    angular.module('miageIn')
            .controller('CtrlEvenement', ['$scope', '$resource', function ($scope, $resource) {
				$scope.consulter = function () {
					console.log("ok");
					var idCompte = $scope.numCompte;
					var somme = $scope.somme;
					var evenement = $resource("/api/evenements");
					var evenements = evenement.get({id:idCompte});
					console.log(evenements);
					//$scope.resultat = "id : " + idCompte + " -> solde : " + somme;
				};
            }]);

})(window.angular);