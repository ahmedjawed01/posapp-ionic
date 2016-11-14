'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.service:FoodService
 * @description
 * # FoodService
 */
module.exports = [
    'BASE_URL',
    '$http',
    '$timeout',
    '$q',
    function( $BASE_URL,$http, $timeout, $q )
    {
     
      var kindOfPrivateVariable = 42;

      var doSomethingAsync = function() {
        var deferred = $q.defer();
        $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
        return deferred.promise;
      };

      var getParentMenu = function(categoryId) {
        return $http.get($BASE_URL+"/menu/getParentMenu?categoryId="+categoryId).success(function(response){
          return response;
        });
      };

      var getChildMenu = function(id) {
        return $http.get($BASE_URL+"/menu/getChildMenu?parentId="+id);
      };

      // public api
      return {
        doSomethingAsync: doSomethingAsync,
        getParentMenu: getParentMenu,
        getChildMenu: getChildMenu
      };
    }
];
