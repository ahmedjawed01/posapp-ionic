'use strict';

/**
 * @ngdoc service
 * @name IonicGulp.ApiService
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 * Uses settings from API_ENDPOINT defined in /config/apiEndpoint.js
 *
 * Usage example: $http({
 *                      url: ApiService.getEndPoint() + '/things',
 *                      method: 'GET'
 *                 })
 *
 */
 module.exports = [
  '$sessionStorage',

 function( $sessionStorage)
 {

  if(angular.isUndefined($sessionStorage.myorder)){                       
    $sessionStorage = $sessionStorage.$default({myorder: {totalGross: 0,tableNo: null,orders:[]}});
  }

  var get = function(key){
    return $sessionStorage[key];
  };

  var saveOrder = function(value){
    return $sessionStorage.myorder = value;
  };

  var reset = function(){
    $sessionStorage.$reset();
  };
      // public api
      return {
        get: get,
        saveOrder: saveOrder,
        reset: reset
      };
  }

];
