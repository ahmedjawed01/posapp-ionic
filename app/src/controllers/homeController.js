'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    'ExampleService','$ionicSlideBoxDelegate',

    function( $scope, ExampleService,$ionicSlideBoxDelegate )
    {
      // Called each time the slide changes
      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };

      // just an example...
      $scope.fetchRandomText = function() {
        ExampleService.doSomethingAsync()
          .then(ExampleService.fetchSomethingFromServer)
          .then(function(response) {
              $scope.myHTML = response.data.text;
              // close pull to refresh loader
              $scope.$broadcast('scroll.refreshComplete');
          });
      };

      $scope.fetchRandomText();
    }
];
