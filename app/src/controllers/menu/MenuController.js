'use strict';

/**
 * @ngdoc function
 * @description
 * # HomeController
 */
 module.exports = [
 '$scope','$state','MenuService','$stateParams','$ionicLoading',

 function($scope,$state,MenuService,$stateParams,$ionicLoading){

  $scope.parentId = 0;

  $scope.childMenu = [];

  $scope.parentMenu = [];

  $scope.getParentMenu = function() {
    $ionicLoading.show();
    MenuService.getParentMenu($stateParams.categoryId).then(function successCallback(response) {
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
