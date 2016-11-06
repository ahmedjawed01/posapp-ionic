'use strict';

/**
 * @ngdoc function
 * @description
 * # HomeController
 */
 module.exports = [
 '$scope','$state','FoodService','$stateParams','$ionicLoading',

 function($scope,$state,FoodService,$stateParams,$ionicLoading){

  $scope.parentId = 0;

  $scope.childMenu = [];

  $scope.parentMenu = [];

  $scope.getParentMenu = function() {
    $ionicLoading.show();
    FoodService.getParentMenu(1).then(function successCallback(response) {
      $ionicLoading.hide();
      console.log(response);
      $scope.parentMenu = response.data;
    }, 
    function errorCallback(response){
      $ionicLoading.hide();
      console.log(response);
    });
  };


}];
