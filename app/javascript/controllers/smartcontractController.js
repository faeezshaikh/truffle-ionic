
"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('SmartContractController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {


    
    //  $scope.contractBalance = DappService.getSmartContractBalance();
    $scope.contractBalance = getSmartContractBalance();
    $scope.date = new Date();


    $scope.refreshContractBalance = function() {
        // $scope.contractBalance = DappService.getSmartContractBalance();
        $scope.contractBalance = getSmartContractBalance();
        console.log('Refreshing Smart Contract Balance',$scope.contractBalance);
    }

    function getSmartContractBalance() {
        //var smartContractAddress = $scope.contract_address;
        //  var smartContractAddress = web3.eth.accounts[3];
        // var val = web3.eth.getBalance(smartContractAddress);
        // var contract_balance = web3.fromWei(val,'ether').toNumber();
        // console.log('Smart Contract Account :' + smartContractAddress + ' balance: ', contract_balance );
        // return contract_balance;
        return DappService.getSmartContractBalance();
    }

});
