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

.constant('BASE_URL','http://192.168.88.34:8080')
// .constant('BASE_URL','http://localhost:8080')

.config( [
  '$httpProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ionicConfigProvider',

  function( $httpProvider, $stateProvider, $urlRouterProvider,$ionicConfigProvider)
  {
    $ionicConfigProvider.navBar.alignTitle('center');


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
        cache: false,
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

      //---- MENU ----
      .state('app.menu',{
        url: '/menus',
        cache: true,
        parent: 'app',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/menu/menu.html',
            controller: 'MenuController'
          }
        },
        params:{
          categoryId: null
        }
      })

      .state('app.menulist',{
        url: '/menus/',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/menu/menu-list.html',
            controller: 'MenuListController'
          }
        },
        params: {
          parentId: null,
          parentName: null
        }
      })

      .state('app.menudetail',{
        url: '/menus/detail',
        cache: true,
        parent: 'app',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/menu/menu-detail.html',
            controller: 'MenuDetailController as vm'
          }
        },
        params: {
          menu: null
        }
      })

      //---- MYORDER ----
      .state('app.myorder',{
        url: '/myorder',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/myorder/myorder.html',
            controller: 'MyOrderController as vm'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  }
] )

.run([
  '$ionicPlatform','$rootScope',

  function( $ionicPlatform ,$rootScope)
  {

    $ionicPlatform.ready(function() {
      // save to use plugins here
      // regular stuff here
      StatusBar.backgroundColorByHexString("#FFA726");
    });

  } ] )

// Angular module controllers
//
.controller( 'MainController',     require( './controllers/mainController'     ) )
.controller( 'HomeController',     require( './controllers/homeController'     ) )
.controller( 'SettingsController', require( './controllers/settingsController' ) )
.controller( 'MenuController',      require( './controllers/menu/menuController'      ) )
.controller( 'MenuListController',      require( './controllers/menu/menuListController'      ) )
.controller( 'MenuDetailController', require( './controllers/menu/menuDetailController' ))
.controller( 'MyOrderController',      require( './controllers/myorder/myOrderController'    ) )

// Angular module services

.factory( 'MenuService',  require('./services/menuService'))
.factory( 'StorageService',  require('./services/StorageService'))
.factory( 'SalesOrderService', require('./services/SalesOrderService'))
;
