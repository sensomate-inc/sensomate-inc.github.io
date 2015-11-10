angular.module('sensomate.home', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    	$stateProvider
    		.state('home', {
    			url : '/',
    			templateUrl : 'app/modules/home/home.html'
    		});
    }])