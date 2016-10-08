'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:MainController
 * @description
 * # MainController
 */
module.exports = [
    '$scope',

    function( $scope,getData)
    {
        console.log('data='+getData);
        this.myData = getData;
    }
];
