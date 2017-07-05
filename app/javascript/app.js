"use strict";

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

 var app = angular.module("blockchainExpressDapp", ['ionic','toastr']);


app.config(function($stateProvider, $urlRouterProvider) {
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
          controller: 'SendfundsController'
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
          templateUrl: 'views/senders.html',
          controller: 'SendfundsController'
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
})