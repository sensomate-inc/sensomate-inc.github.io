angular.module('sensomate', ['ui.router', 'sensomate.home', 'sensomate.services'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
    }]);
