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

  var vm = this;

  console.log($stateParams.menu);

  vm.menu = $stateParams.menu;
  
  if($scope.orderCount === null){
    $scope.orderCount = 0;
  }
  
  $scope.myorder = [];
  vm.total = 0;

  vm.jsonData = StorageService.get('myorder');
  vm.orderData = {
    menu: null,
    qty: null,
    subtotal: null
  };

  vm.add = function(){
    vm.jsonData.totalGross += vm.menu.price;
    vm.jsonData.tableNo = '7';
    vm.orderData.qty = 1;
    vm.orderData.menu = vm.menu;
    vm.orderData.subtotal = vm.menu.price;
    vm.jsonData.orders.push(vm.orderData);
    StorageService.saveOrder(vm.jsonData);
  };

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.goMenu = function(){
   $ionicHistory.goBack(-3);
 };
}];
