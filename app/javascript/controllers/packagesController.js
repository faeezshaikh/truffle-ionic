"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('PackagesController', function ($scope, $ionicModal, $ionicScrollDelegate, toastr, DappService, $ionicPopup, $timeout) {


    $scope.packages = DappService.getPackages();
    $scope.imageData = false;
    $scope.form = {
        'senderAddr': '',
        'senderPhone': '',
        'senderEmail': '',
        'receiverAddr': '',
        'recieverPhone': '',
        'recieverEmail': '',
        'gems': 1,
        'days': 20,
        'fragile': false,
        'confirm': false,
        'instructions': '',
        'img': 'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png'

    };
    // Initial Placeholder Image
    $scope.imgUrl = "https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png";



    /////// [ Get Balance ] ////////
    $scope.balanceClicked = function () {
        // $scope.getBalance();
        DappService.refreshBalanceFromBlockchain('account');
    }

    $scope.getBalance = function () {
        return DappService.getBalance();
    }
    /////// [ Get Balance ] ////////


    /////// [ New Package Modal ] ////////

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
        confirmPurchase();
        //  $scope.modal.remove();

    };
    $scope.cancel = function () {
        $scope.modal.hide();
    };
    /////// [ New Package Modal ] ////////

    function confirmPurchase() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Purchase',
            template: 'This will debit <i class="fa fa-diamond" aria-hidden="true"></i>&nbsp;' + $scope.form.gems + ' BlockEx gems from your account.'
        });
        confirmPopup.then(function (res) {
            if (res) {
                $scope.modal.hide();
                updateBalance();
                DappService.addPackage($scope.form);
                $ionicScrollDelegate.$getByHandle('packagesPage').scrollTop(true);
                toastr.success('Request added to Blockchain!', 'Transation successfully mined.');
                // $scope.apply(); // Bug --> Button not updating after Pick up.
                console.log('Package successfully added for pickup');
            } else {
                console.log('Package failed to be added for pickup');
            }
        });
    };

    function updateBalance() {
        DappService.addNewPackageOnBlockchain($scope.form.gems);
    }

    /////////// [ Popualate Form ] ///////////

    // Shows a spinner gif for a second and then populates with some package image. Simulates loading spinner
    $scope.addPicture = function (bool) {
        if (bool) {
            console.log('Addng pic');
            // $scope.imgUrl ="http://animadomus.com/integration/img/gform-spinner.gif" ;
            $scope.imgUrl = "http://animadomus.com/integration/img/gform-spinner.gif";

            $timeout(function () {
                $scope.imgUrl = "http://www.elllo.org/Assets/images/P0351/374-Marion-Package.jpg";
                populateForm();
            }, 1000);
        }
    }

    function populateForm() {
        $scope.form = {
            'senderAddr': '123 Pine St. St. Louis MO 63101',
            'senderPhone': '314-984-9845',
            'senderEmail': 'faeez.shaikh@gmail.com',
            'receiverAddr': '9445 Potter Rd. Chicago IL 94423',
            'recieverPhone': '205-345-9545',
            'recieverEmail': 'john@gmail.com',
            'gems': 1,
            'days': 20,
            'fragile': false,
            'confirm': false,
            'instructions': 'Please drop the package at the doorstep. Do not ring doorbell. Thanks!',
            'img': 'http://www.elllo.org/Assets/images/P0351/374-Marion-Package.jpg',
            'id': 0,
            'miles': 300,
            'status': 'ready'
            // 'cost': 0 
        };
    }

    /////////// [ Popualate Form ] ///////////

    $scope.delete = function (pkg) {
        console.log('Deleting pkg', pkg);
        pkg.hidden = true;
        DappService.updatePackage(pkg);
    }



    $scope.onRangeChange = function () {
        // if ($scope.form.gems >= 20)
        //     $scope.form.days = 1;
        if ($scope.form.gems > 18 && $scope.form.gems < 20)
            $scope.form.days = 1;

        if ($scope.form.gems > 15 && $scope.form.gems < 18)
            $scope.form.days = 6;
        if ($scope.form.gems > 12 && $scope.form.gems < 15)
            $scope.form.days = 7;
        if ($scope.form.gems > 8 && $scope.form.gems < 12)
            $scope.form.days = 10;
        if ($scope.form.gems > 5 && $scope.form.gems < 8)
            $scope.form.days = 15;
        if ($scope.form.gems > 0 && $scope.form.gems < 5)
            $scope.form.days = 20;
    }
});

