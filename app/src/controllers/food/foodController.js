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
      console.log('STATE PARAM='+$stateParams.parentId);
    	
        $scope.parentId = 0;
    	
    	// $scope.foods = [{"menuName":"Kambing","imageName":"kambing.jpeg"},{"menuName":"Sate","imageName":"satay.jpeg"},
    	// {"menuName":"Nasi & Mie Goreng","imageName":"nasi-goreng.jpg"},{"menuName":"Rice Included","imageName":"rice.jpeg"}];
      // $scope.goFoodlist = function(parentId){
      //       FoodService.doSomethingAsync()
      //       .then(FoodService.getByParent(parentId))
      //       .then(function(response) {
      //         console.log('response end='+response);
      //         $scope.childMenu = response;
              
      //       });
      //     }
        
        $scope.childMenu = [];

        if($stateParams.parentId != undefined){
          $scope.childMenu = [];

        }else if($stateParams.parentId == undefined){
          $scope.parentMenu = [];

          $scope.getParentMenu = function() {
            FoodService.doSomethingAsync()
            .then(FoodService.getParentMenu)
            .then(function(response) {
              console.log(response);
              $scope.parentMenu = response.data[0];
            });
          };
        }


    	

    	$scope.goBack = function() {
	    	$ionicHistory.goBack();
	  	};

      

      $scope.getByParent = function(parentId) {
        console.log('parent id='+parentId);
        FoodService.doSomethingAsync()
        .then(FoodService.getByParent(parentId))
        .then(function(response) {
          $scope.childMenu = [].concat(response);
          console.log('length menus='+$scope.childMenu.length);
        });
      };

    }
];
