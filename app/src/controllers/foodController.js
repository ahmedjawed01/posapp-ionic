'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope','$state','$ionicHistory',

    function($scope,$state,$ionicHistory){
    	
    	
    	$scope.foods = [{"menuName":"Kambing","imageName":"kambing.jpeg"},{"menuName":"Sate","imageName":"satay.jpeg"},
    	{"menuName":"Nasi & Mie Goreng","imageName":"nasi-goreng.jpg"},{"menuName":"Rice Included","imageName":"rice.jpeg"}];

    	$scope.goFoodlist = function(){
    		$state.go("app.foodlist");
    	}

    	$scope.goBack = function() {
	    	$ionicHistory.goBack();
	  	};

    }
];
