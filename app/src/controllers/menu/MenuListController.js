'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
 module.exports = [
 '$scope','$state','$ionicHistory','MenuService','$stateParams',

 function($scope,$state,$ionicHistory,MenuService,$stateParams){

   $scope.menus = [];

   $scope.category = $stateParams.parentName;

   console.log('params='+$stateParams.parentId);

   $scope.getChildMenu = function(){
    MenuService.getChildMenu($stateParams.parentId).then(function successCallback(response){
      console.log(response);
      $scope.menus = response.data;

    },
    function errorCallback(response){
      console.log(response);
    });
  }

  $scope.goDetail = function(menu){
    $state.go('app.menudetail',{'menu':menu});
  }

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

}
];
