var appMI = angular.module('miageIn', ['ui.router', 'ngResource', 'miageIn'])
        .constant('config', {
          dataPath: 'http://localhost:3000/'
        })
        .config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }])
        .config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
                $stateProvider
                        .state('renseignement', {
                            url: '/utilisateur',
                            templateUrl: 'vues/renseignement.html',
                            controller: 'renseignementCtrl'
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
                            controller: 'evenementsCreaCtrl'
                        })
						$urlServiceProvider.rules.otherwise({state: 'renseignement'});
            }]);
