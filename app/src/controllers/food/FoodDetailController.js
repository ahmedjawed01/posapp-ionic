'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
 module.exports = [
 '$scope','$state','$ionicHistory','FoodService','$stateParams','$timeout','StorageService',

 function($scope,$state,$ionicHistory,FoodService,$stateParams,$timeout,StorageService){

  console.log($stateParams.menu);

  $scope.menu = $stateParams.menu;
  $scope.orderCount = StorageService.get('orderCount');
  if($scope.orderCount == null){
    $scope.orderCount = 0;
  }
  $scope.myorder = [];
  $scope.add = function(){
    $scope.orderCount += 1;
    // StorageService.save('orderCount',$scope.orderCount);
    
    if(StorageService.get('myorder') == null){
      $scope.myorder.push($scope.menu);
      StorageService.saveOrder('myorder',$scope.myorder);
    }else{
      $scope.myorder = StorageService.get('myorder');
      $scope.myorder.push($scope.menu);
      StorageService.saveOrder('myorder',$scope.myorder);
    }
    
  }

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.goMenu = function(){
   $ionicHistory.goBack(-2);
 }
}
];
