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

      var save = function(data){
        return $http.post($BASE_URL+'/salesOrder/save',data);
      }

      var requestBill = function(table){
        return $http.post($BASE_URL+'salesOrder/requestBill',table)
      }

      // public api
      return {
        doSomethingAsync: doSomethingAsync,
        save: save,
        requestBill: requestBill
      };
    }
];
