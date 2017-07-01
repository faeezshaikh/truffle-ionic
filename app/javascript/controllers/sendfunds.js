"use strict";
var app = angular.module("mySimpleWalletDapp");


app.controller('SendfundsController', function($scope){

    $scope.accounts = web3.eth.accounts;

    $scope.depositFunds = function(address, amount) {
        SimpleWallet.deployed().then(function(contract) {

            web3.eth.sendTransaction({from: address, to: contract.address, value: web3.toWei(amount, "ether")}, function(error, result) {
                if(error) {
                    $scope.has_errors = "I did not work";
                } else {
                    $scope.transfer_success = true;
                }
                $scope.$apply();
            });
        });


    };


    $scope.withdrawFunds = function(address, amount) {
        SimpleWallet.deployed().then(function(contract) {
            contract.sendFunds(web3.toWei(amount, "ether"), address, {from: web3.eth.accounts[0], gas: 200000}).then(function () {
                $scope.transfer_success = true;
                $scope.$apply();
            }).catch(function (error) {
                console.error(error);
                $scope.has_errors = error;
                $scope.$apply();
            });
        });

    }



    $scope.friends = [          {id:1, name:'John', phone:'555-1276'},
                         {id:2, name:'Mary', phone:'800-BIG-MARY'},
                         {id:3, name:'Mike', phone:'555-4321'},
                         {id:4, name:'Adam', phone:'555-5678'},
                         {id:5, name:'Julie', phone:'555-8765'},
                         {id:6, name:'Juliette', phone:'555-5678'}];


});
