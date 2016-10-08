'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    'StorageService','$timeout',
    function($scope,StorageService,$timeout){

    	$scope.showDelete = false;
    	$scope.orders = StorageService.get('myorder');

    	
    }
];
