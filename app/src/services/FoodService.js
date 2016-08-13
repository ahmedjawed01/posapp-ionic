'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.service:FoodService
 * @description
 * # FoodService
 */
module.exports = [
    '$http',
    '$timeout',
    '$q',
    function( $http, $timeout, $q )
    {
      var kindOfPrivateVariable = 42;

      var doSomethingAsync = function() {
        var deferred = $q.defer();
        $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 2000);
        return deferred.promise;
      };

      var getParentMenu = function() {
        return $http({
            url: 'http://localhost:8888/menu/getParentMenu',
            method: 'GET'
          })
          .success(function(data) {
            console.log('response:', data);
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };

      var getByParent = function(id) {
        return $http({
            url: 'http://localhost:8888/menu/getByParent',
            method: 'GET',
            params: {
              parentId: id
            }
          })
          .success(function(data) {
            console.log('response service:', data);
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };

      // public api
      return {
        doSomethingAsync: doSomethingAsync,
        getParentMenu: getParentMenu,
        getByParent: getByParent
      };
    }
];
