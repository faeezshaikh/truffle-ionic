"use strict";

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// var app = angular.module("mySimpleWalletDapp", ['ngRoute']);

// app.config(function($routeProvider) {
//   $routeProvider.when('/', {
//     templateUrl: 'views/main.html',
//     controller: 'MainController'
//   }).when('/events', {
//     templateUrl: 'views/events.html',
//     controller: 'ShoweventsController'
//   }).when('/sendfunds', {
//     templateUrl: 'views/sendfunds.html',
//     controller: 'SendfundsController'
//   }).when('/permissions', {
//     templateUrl: 'views/permissions.html',
//     controller: 'PermissionsController'
//   }).when('/senders', {
//     templateUrl: 'views/senders.html',
//     controller: 'SendfundsController'
//   }).when('/senders/:senderId', {
//     templateUrl: 'views/sender.html',
//     controller: 'SendfundsController'
//   }).otherwise({redirectTo: '/'});
// });


 var app = angular.module('mySimpleWalletDapp', ['ionic']);


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

    .state('app.senders', {
      url: '/senders',
      views: {
        'menuContent': {
          templateUrl: 'views/senders.html',
          controller: 'SendfundsController'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
})