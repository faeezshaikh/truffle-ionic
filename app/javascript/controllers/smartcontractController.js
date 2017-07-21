
"use strict";
var app = angular.module("blockchainExpressDapp");

app.controller('SmartContractController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {

    $scope.contractBalance = getSmartContractBalance();
    $scope.date = new Date();

    $scope.refreshContractBalance = function() {
        $scope.contractBalance = getSmartContractBalance();
        console.log('Refreshing Smart Contract Balance',$scope.contractBalance);
    }

    function getSmartContractBalance() {
        return DappService.getSmartContractBalance();
    }

});
