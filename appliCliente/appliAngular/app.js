angular.module('miageIn', ['ui.router', 'ngResource'])
        .config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
                $stateProvider
<<<<<<< HEAD
                        .state('reseignement', {
                            url: '/reseignement-utilisateur',
                            templateUrl: 'vues/reseignement.html',
                            //controller: 'reseignementCtrl'
                        .state('renseignement', {
                            url: '/renseignement-utilisateur',
                            templateUrl: 'vues/renseignement.html',
                            //controller: 'renseignementCtrl'
                        })
                        .state('evenements', {
                            url: '/evenements',
                            templateUrl: 'vues/evenements.html',
                            controller: 'CtrlEvenement'
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
						$urlServiceProvider.rules.otherwise({state: 'reseignement'});
						$urlServiceProvider.rules.otherwise({state: 'renseignement'});
            }]);
			


