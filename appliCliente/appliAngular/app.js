angular.module('miageIn', ['ui.router', 'ngResource'])
        .config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
                $stateProvider
                        .state('reseignement', {
                            url: '/reseignement-utilisateur',
                            templateUrl: 'vues/reseignement.html',
                            controller: 'reseignementCtrl'
                        })
                        .state('evenements', {
                            url: '/evenements',
                            templateUrl: 'vues/evenements.html',
                            controller: 'evenementsCtrl'
                        })
						.state('statistiques', {
                            url: '/statistiques',
                            templateUrl: 'vues/statistiques.html',
                            controller: 'statistiquesCtrl'
                        })
						.state('evenementsCrea', {
                            url: '/creation-evenements',
                            templateUrl: 'vues/evenementsCrea.html',
                            controller: 'evenementsCreaCtrl'
                        })
						$urlServiceProvider.rules.otherwise({state: 'reseignement'});
            }]);


