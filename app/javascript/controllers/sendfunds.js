"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('SendfundsController', function ($scope, $ionicModal, $ionicScrollDelegate, toastr, DappService,$ionicPopup,$timeout) {


    toastr.success('Hello world!', 'Toastr fun!');
    $scope.accounts = web3.eth.accounts;

    $scope.depositFunds = function (address, amount) {
        SimpleWallet.deployed().then(function (contract) {

            web3.eth.sendTransaction({ from: address, to: contract.address, value: web3.toWei(amount, "ether") }, function (error, result) {
                if (error) {
                    $scope.has_errors = "I did not work";
                } else {
                    $scope.transfer_success = true;
                }
                $scope.$apply();
            });
        });


    };


    $scope.withdrawFunds = function (address, amount) {
        SimpleWallet.deployed().then(function (contract) {
            contract.sendFunds(web3.toWei(amount, "ether"), address, { from: web3.eth.accounts[0], gas: 200000 }).then(function () {
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
        

        $scope.showPopup(50);
        //  $scope.modal.remove();

    };

    $scope.form = { 'cost': 0 };
    // $scope.imgUrl = "https://dbiers.me/wp-content/uploads/2012/08/package-21.png";
    $scope.imgUrl = "https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png";

    $scope.onRangeChange = function () {
        // console.log('Changed:',$scope.form.cost);

        if ($scope.form.cost > 80 && $scope.form.cost < 90)
            $scope.days = 1;
        if ($scope.form.cost > 60 && $scope.form.cost < 80)
            $scope.days = 3;

        if ($scope.form.cost > 40 && $scope.form.cost < 60)
            $scope.days = 6;
        if ($scope.form.cost > 30 && $scope.form.cost < 40)
            $scope.days = 7;
        if ($scope.form.cost > 20 && $scope.form.cost < 30)
            $scope.days = 10;
        if ($scope.form.cost > 10 && $scope.form.cost < 20)
            $scope.days = 15;
        if ($scope.form.cost > 0 && $scope.form.cost < 10)
            $scope.days = 20;



    }

    $scope.showPopup = function (cost) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Purchase',
            template: 'This will debit ' + cost + ' BlockEx gems from your account.'
        });
        confirmPopup.then(function (res) {
             if(res) {
                $scope.modal.hide();
                $ionicScrollDelegate.$getByHandle('packagesPage').scrollTop(true);
                console.log('You are sure');
                } else {
                console.log('You are not sure');
                }
        });
    };

    $scope.showSpinner = false;
    $scope.addPicture = function(bool) {
        if(bool) {
            console.log('Addng pic');
            // $scope.showSpinner = true;
            $scope.imgUrl ="https://sqeeqee.com/static/uploads/photos/2016/12/01/11/05/5f0aee85e4b4d5a8939352593c4d993a.gif" ;

        $timeout( function(){
                // $scope.showSpinner = false;
                  $scope.imgUrl = "http://www.elllo.org/Assets/images/P0351/374-Marion-Package.jpg";

        }, 1000 );
           

        }
    }
});


/// TODO: Externalize file

app.controller('SmartContractController', function ($scope, $ionicModal, $ionicScrollDelegate) {

    $scope.contractBalance = 100;
    $scope.date = new Date();
});