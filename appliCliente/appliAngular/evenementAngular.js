(function (angular) {
    angular.module('miageIn')
            .controller('CtrlEvenement', ['$scope', '$resource', function ($scope, $resource) {
				$resource("/api/evenements").query().$promise.then(function(result){
						$scope.events = result;
					});
				$scope.consulterEvenement = function (idE) {
					var evenement = $resource("/api/evenements/:id").query({id:idE}, function(event){
						console.log(event);
					});
				};
				$scope.supprimer = function (idE) {
					if (confirm("Confirmez-vous la suppression de l'évènement " + idE + "?")) {
						var evenement = $resource("/api/evenements/:id");
						var c1 = evenement.delete({id:idE});
						$resource("/api/evenements").query().$promise.then(function(result){
							$scope.events = result;
						});
					}
				};
            }]);

})(window.angular);