angular.module('sensomate.services', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('service_process', {
                url: '/services',
                templateUrl: 'app/modules/services/services.html',
                controller: 'ServicesCtrl'
            });
    }])
    .controller('ServicesCtrl', ['$scope', function($scope) {
        $scope.tabs = [{
            title: 'Areas of Expertise',
            url: 'one.tpl.html'
        }, {
            title: 'Engagement Phases',
            url: 'two.tpl.html'
        }, {
            title: 'Our Advantages',
            url: 'three.tpl.html'
    }];
         $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
    }])
