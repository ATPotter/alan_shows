'use strict';

/* Controllers */

var alanShowsControllers = angular.module('alanShowsControllers', []);

alanShowsControllers.controller('alanShowListCtrl', ['$scope', '$http',
  
	function($scope, $http) {
		$http.get('data/allShows.json').success(function(data) {
		$scope.shows = data;
	});

	$scope.orderTable = function( column) {
	    $scope.reverse = !($scope.reverse);
		$scope.orderProp = column.orderBy; 
	};
	
	
	/*
	 * This method converts a date from, for example, 201407 
	 * to Jul 2014.  The first four digitis are the year, the
	 * remaining two digits the month
	 */
	$scope.convertToDateString = function( dateAsInt ) {
	    var yearPart = Math.floor( dateAsInt / 100 );
        var monthPart = dateAsInt % 100;

		var monthArray = new Array (
		    "Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec" );
		var monthPartAsString = monthArray[ monthPart-1];
		
		return monthPartAsString  + " " + yearPart;
	};
	
	
	
	$scope.showsTableColumns = [
	  {
	      name:    "Date",
		  orderBy: "dateComputer",
		  width:   "15%"
	  },
	  {    name:    "Show",
	       orderBy: "showTitle",
		   width:   "35%"
	  },
	  {
	      name:     "Club",
		  orderBy:  "club",
		  width:    "25%"
	  },
	  {
	      name:     "Role",
		  orderBy:  "role",
		  width:    "25%"
	  }
	];
	
	
    $scope.orderProp = 'dateComputer';
	$scope.reverse = false;
	$scope.variable = 0;
  }]);

  
	
  
  
  
alanShowsControllers.controller
(
    'alanShowDetailCtrl', 
	[    '$scope', 
	     '$routeParams',
		 '$http',
		 
		function($scope, $routeParams, $http) 
		{
			var calculateInfoFile = function( dateAsInt, showTitle ) {
				showTitle = showTitle.replace( /\s+/g, '' );
			    return "json/" + 
			    		dateAsInt + "-" + 
			    		showTitle.toLowerCase() +
				        ".json";
			};

			
			
			$scope.showDate     = $routeParams.showDate;
			$scope.showName     = $routeParams.showName;
			$scope.showInfoFile = calculateInfoFile( $scope.showDate, $scope.showName );

			var topHtmlFile = "";
			var bottomHtmlFile = "";



			// Try to get the show information table file
			$http.get($scope.showInfoFile).success(function(data) 
			{
		        $scope.showInfo = data;

		        // Are there any HTML files specified?
		        topHtmlFile = data.topHtmlFile;
		        bottomHtmlFile = data.bottomHtmlFile;

		        $scope.topHtmlFile = topHtmlFile;
<!--

		        if( "" != topHtmlFile ) {
		        	$http.get( topHtmlFile ).success(function(topHtmlData )
		        	{
		        		$scope.topHtml = topHtmlData;
		        	});
		        }
-->
			});
		}
		
		

	]
);
  
