'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    'ExampleService',

    function( $scope, ExampleService )
    {
      $scope.category1 = "I'm hungry, give me some big eat !";
    }
];
