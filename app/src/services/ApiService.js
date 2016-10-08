'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.service:FoodService
 * @description
 * # FoodService
 */
module.exports = [
    '$localStorage',
    '$timeout',
    '$q',
    function( $localStorage, $timeout, $q )
    {
     
      var kindOfPrivateVariable = 42;

      var doSomethingAsync = function() {
        var deferred = $q.defer();
        $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
        return deferred.promise;
      };

      var getParentMenu = function() {
        return $http.get($BASE_URL+"/menu/getParentMenu");
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
