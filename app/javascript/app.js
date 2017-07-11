"use strict";

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

 var app = angular.module("blockchainExpressDapp", ['ionic','toastr']);

 


app.config(function($stateProvider, $urlRouterProvider,toastrConfig) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'MainController'
  })

    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        }
      }
    })
 .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'views/events.html',
          controller: 'ShoweventsController'
        }
      }
    })
 .state('app.sendfunds', {
      url: '/sendfunds',
      views: {
        'menuContent': {
          templateUrl: 'views/sendfunds.html',
          controller: 'Packages'
        }
      }
    })
 .state('app.permissions', {
      url: '/permissions',
      views: {
        'menuContent': {
          templateUrl: 'views/permissions.html',
          controller: 'PermissionsController'
        }
      }
    })

    .state('app.senders', {
      url: '/senders',
      views: {
        'menuContent': {
          templateUrl: 'views/packages.html',
          controller: 'PackagesController'
        }
      }
    })
       .state('app.packageDetails', {
      url: '/packages/:id',
      views: {
        'menuContent': {
          templateUrl: 'views/packageDetails.html',
          controller: 'PackageDetailsController'
        }
      }
    })
     .state('app.contract', {
      url: '/contract',
      views: {
        'menuContent': {
          templateUrl: 'views/contract.html',
          controller: 'SmartContractController'
        }
      }
    })
  ;
  $urlRouterProvider.otherwise('/app/main');

    angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,    
    newestOnTop: true,
    positionClass: 'toast-bottom-full-width',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });
})