angular.module('miageIn', ['ui.router', 'ngResource'])
        .config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
                $stateProvider
<<<<<<< HEAD
                        .state('reseignement', {
                            url: '/reseignement-utilisateur',
                            templateUrl: 'vues/reseignement.html',
                            //controller: 'reseignementCtrl'
=======
                        .state('renseignement', {
                            url: '/renseignement-utilisateur',
                            templateUrl: 'vues/renseignement.html',
                            //controller: 'renseignementCtrl'
>>>>>>> 9223a41440bf2f8f5406103cef82d3588345b501
                        })
                        .state('evenements', {
                            url: '/evenements',
                            templateUrl: 'vues/evenements.html',
<<<<<<< HEAD
                            controller: 'CtrlEvenement'
=======
                            //controller: 'evenementsCtrl'
>>>>>>> 9223a41440bf2f8f5406103cef82d3588345b501
                        })
						.state('statistiques', {
                            url: '/statistiques',
                            templateUrl: 'vues/statistiques.html',
                            //controller: 'statistiquesCtrl'
                        })
						.state('evenementsCrea', {
                            url: '/creation-evenements',
                            templateUrl: 'vues/evenementsCrea.html',
                            //controller: 'evenementsCreaCtrl'
                        })
						$urlServiceProvider.rules.otherwise({state: 'renseignement'});
            }]);
			


