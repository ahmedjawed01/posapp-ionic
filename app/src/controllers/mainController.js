'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:MainController
 * @description
 * # MainController
 */
module.exports = [
    '$scope','StorageService',

    function( $scope,StorageService)
    {
        $scope.orderCount = null;

        $scope.getOrderCount = function(){
            console.log('order='+StorageService.get('myorder'));
        	if(StorageService.get('myorder') == null){
        		return 0;
        	}
        	return StorageService.get('myorder').length;
        }
    }
];
