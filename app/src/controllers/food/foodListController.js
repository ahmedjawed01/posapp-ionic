'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope','$state','$ionicHistory','FoodService','$stateParams',

    function($scope,$state,$ionicHistory,FoodService,$stateParams){
    	
    	$scope.menus = [];
      console.log('params='+$stateParams.parentId);

      $scope.getMenu = function(){
        FoodService.getByParent($stateParams.parentId)
        .then(function(response){
          console.log(response);
          $scope.menus = response.data;
        })
      }
        

    	$scope.goBack = function() {
	    	$ionicHistory.goBack();
	  	};

    }
];
