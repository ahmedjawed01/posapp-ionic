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

   $scope.getChildMenu = function(){
    FoodService.getChildMenu($stateParams.parentId).then(function successCallback(response){
      console.log(response);
      $scope.menus = response.data;
    },
    function errorCallback(response){
      console.log(response);
    });
  }

  $scope.goDetail = function(menu){
    $state.go('app.fooddetail',{'menu':menu});
  }

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

}
];
