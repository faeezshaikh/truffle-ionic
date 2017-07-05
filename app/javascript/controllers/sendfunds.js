"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('SendfundsController', function($scope,$ionicModal,$ionicScrollDelegate,toastr,DappService){


 toastr.success('Hello world!', 'Toastr fun!');
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



    $scope.friends = DappService.getPackages();

    $scope.imageData = false;

    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openComposer = function () {
        console.log('Opening Modal');
        $scope.modal.show();
        $ionicScrollDelegate.$getByHandle('show-page').scrollTop(true);
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
        //  $scope.modal.remove();

    };
});


/// TODO: Externalize file

app.controller('SmartContractController', function($scope,$ionicModal,$ionicScrollDelegate){ 

    $scope.contractBalance = 100;
    $scope.date = new Date();
});