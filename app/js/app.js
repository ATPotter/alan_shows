'use strict';

/* App Module */

var alanShowsApp = angular.module(
	  'alanShowsApp', 
	  [
	      'ngRoute',
		  'ngSanitize',
	      'alanShowsControllers',
	      'alanShowsFilters'
        ]);

alanShowsApp.config(['$routeProvider',
  function($routeProvider) 
  {
    $routeProvider.
      when('/showList', 
	  {
        templateUrl: 'app/partials/showList.html',
        controller: 'alanShowListCtrl'
      }).
	  
      when('/oneShow/:showDate/:showName', {
        templateUrl: 'app/partials/oneShow.html',
        controller:  'alanShowDetailCtrl'
      }).
	  
      otherwise({
        redirectTo: '/showList'
      });
  }]);
