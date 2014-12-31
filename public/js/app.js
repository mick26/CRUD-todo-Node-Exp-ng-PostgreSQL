/**
 * Module - Main Module
 */

angular.module('postgreDbApp', ['ngRoute', 'postgreDbApp.controllers'])


.config(function ($routeProvider, $locationProvider) {
	$routeProvider
    
      .when('/', {
        templateUrl: 'views/main.tpl.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
    
      .otherwise({
        redirectTo: '/'
      });
      
    /*
    $locationProvider.html5Mode(true);
    Ref.
    https://docs.angularjs.org/api/ng/provider/$locationProvider
    */
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  });