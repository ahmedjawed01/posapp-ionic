'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.service:FoodService
 * @description
 * # FoodService
 */
 module.exports = [
 '$scope','$ionicLoading',
 function($ionicLoading){
 	
 	$scope.show = function() {
 		$ionicLoading.show();
 	};

 	$scope.hide = function(){
 		$ionicLoading.hide();
 	};

 }];