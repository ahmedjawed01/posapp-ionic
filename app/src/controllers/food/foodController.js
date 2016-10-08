'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
 module.exports = [
 '$scope','$state','FoodService','$stateParams',

 function($scope,$state,FoodService,$stateParams,getData){

  $scope.parentId = 0;


  $scope.childMenu = [];

  $scope.parentMenu = [];

  $scope.getParentMenu = function() {
    FoodService.doSomethingAsync().then(FoodService.getParentMenu).then(function successCallback(response) {
      console.log(response);
      $scope.parentMenu = response.data;
    }, 
    function errorCallback(response){
      console.log(response);
    });
  };


}];
