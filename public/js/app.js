'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',
  'mobile-angular-ui',
  'LocalStorageModule',

  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',

  // 3rd party dependencies
  'btford.socket-io'
]).
  config(['localStorageServiceProvider',function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/checklist', {
      templateUrl: 'partials/checklist',
      controller: 'ChecklistCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    }).
    otherwise({
      redirectTo: '/checklist'
    });

  $locationProvider.html5Mode(true);
});
