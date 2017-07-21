"use strict";
var app = angular.module("blockchainExpressDapp");

app.controller("PackageDetailsController", function ($scope, DappService, $stateParams, $ionicModal, $ionicPopup, $ionicScrollDelegate, toastr) {

    $scope.packageId = $stateParams.id;
    $scope.package = DappService.getPackage($scope.packageId);
    console.log('Package..=>', $scope.package);
    var escrow = $scope.package.gems;
    var pkg = $scope.package;


    $scope.getBalance = function () {
        console.log('Balance is :', DappService.getBalance());
        return DappService.getBalance();
    }

    /////// [ Pick up ] /////////

    $scope.confirmPickup = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Pick up',
            template: 'This will debit <i class="fa fa-diamond" aria-hidden="true"></i>&nbsp; ' + escrow + ' BlockEx gems from your account and deposit them to the Smart Contract (Escrow)'
        });
        confirmPopup.then(function (res) {
            if (res) {
                updateBalanceForPickup(escrow);
                pkg.status = 'In Transit';
                DappService.updatePackage(pkg);
                $ionicScrollDelegate.$getByHandle('pkgDetailspage').scrollTop(true);
                toastr.success('Pickup added to Blockchain!', 'Transation successfully mined.');
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    }

    function updateBalanceForPickup(escrow) {
        DappService.pickupPackageOnBlockchain(escrow);
    }
    /////// [ Pick up ] /////////


    /////// [ Delivery ] /////////

    $scope.confirmDelivery = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Delivery',
            template: 'This will transfer <i class="fa fa-diamond" aria-hidden="true"></i>&nbsp;' + pkg.gems + ' BlockEx gems from the Smart Contract (Escrow) to the Carrier.'
        });
        confirmPopup.then(function (res) {
            if (res) {
                updateBalanceOnDelivery(pkg.gems);
                pkg.status = 'Delivered';
                DappService.updatePackage(pkg);
                $ionicScrollDelegate.$getByHandle('pkgDetailspage').scrollTop(true);
                toastr.success('Delivery updated on Blockchain!', 'Transation successfully mined.');
            } else {
                // console.log('You are not sure');
            }
        });
    }

    function updateBalanceOnDelivery(amt) {
        DappService.deliverPackageOnBlockchain(parseInt(amt));
    }

    /////// [ Delivery ] /////////

});
