'use strict';

/**
 * @ngdoc overview
 * @name IonicGulp
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

// Example to require lodash
// This is resolved and bundled by browserify
//
// var _ = require( 'lodash' );

angular.module( 'IonicGulp', [
  'ionic',
  'ngCordova',
  'ngResource',
  'ngCookies',
  'ngStorage'
] )
.run( [
  '$ionicPlatform','$rootScope', '$ionicLoading',

  function( $ionicPlatform ,$rootScope, $ionicLoading)
  {



  $ionicPlatform.ready(function() {
    // save to use plugins here
    // regular stuff here
    StatusBar.backgroundColorByHexString("#FFA726");

  });

  // add possible global event handlers here

} ] )

.directive('backImg', function(){
  return function(scope, element, attrs){
    var url = attrs.backImg;
    var content = element.find('div');
    content.css({
      'background': 'url(' + url +') no-repeat',
      'background-size' : 'cover',
      'position' : 'relative',
      'min-height': '100%'
    });
  };
})

.constant('BASE_URL','http://192.168.23.1:8080')
// .constant('BASE_URL','http://localhost:8080')

.config( [
  '$httpProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ionicConfigProvider',

  function( $httpProvider, $stateProvider, $urlRouterProvider,$ionicConfigProvider)
  {
    $ionicConfigProvider.navBar.alignTitle('center')
    // $ionicConfigProvider.backButton.text('');
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
        
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      })

      //---- FOOD ----
      .state('app.food',{
        url: '/foods',
        cache: true,
        parent: 'app',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/food/food.html',
            controller: 'FoodController'
          }
        },
        test: function($q,  $timeout) {
          var defer = $q.defer(); 
          $timeout(function(){
            defer.reject();
          },50);
          return defer.promise; 
        }
      })

      .state('app.foodlist',{
        url: '/foods/',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/food/food-list.html',
            controller: 'FoodListController'
          }
        },
        params: {
          parentId: null
        }
      })

      .state('app.fooddetail',{
        url: '/foods/detail',
        cache: true,
        parent: 'app',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/food/food-detail.html',
            controller: 'FoodDetailController'
          }
        },
        params: {
          menu: null
        }
      })

      //---- DRINK ----
      .state('app.drink',{
        url: '/drinks',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/drink/drink.html',
            controller: 'DrinkController as vm'
          }
        },
        test: function($q,  $timeout) {
          var defer = $q.defer(); 
          $timeout(function(){
            defer.reject();
          },50);
          return defer.promise; 
        }
      })

      //---- DRINK ----
      .state('app.myorder',{
        url: '/myorder',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/myorder/myorder.html',
            controller: 'MyOrderController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  }
] )

// Angular module controllers
//
.controller( 'MainController',     require( './controllers/mainController'     ) )
.controller( 'HomeController',     require( './controllers/homeController'     ) )
.controller( 'SettingsController', require( './controllers/settingsController' ) )
.controller( 'FoodController',      require( './controllers/food/foodController'      ) )
.controller( 'FoodListController',      require( './controllers/food/foodListController'      ) )
.controller( 'FoodDetailController', require( './controllers/food/foodDetailController' ))
.controller( 'DrinkController',      require( './controllers/drink/drinkController'    ) )
.controller( 'MyOrderController',      require( './controllers/myorder/myOrderController'    ) )

// Angular module services
//
.factory( 'ExampleService',        require( './services/ExampleService' ) )
.factory( 'ApiService',            require( './services/ApiService'     ) )
.factory( 'FoodService',  require('./services/FoodService'))
.factory( 'StorageService',  require('./services/StorageService'))
;
