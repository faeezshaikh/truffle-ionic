"use strict";
var app = angular.module("blockchainExpressDapp");

app.controller("PackageDetailsController", function($scope,DappService,$stateParams,$ionicModal,$ionicPopup,$ionicScrollDelegate, toastr) {
    //   var policySelected = {};
    //   $scope.form = {'share' : 0};
    //   $scope.myCoverage = $scope.premiumRecvd = 0;

      $scope.packageId = $stateParams.id;
      $scope.package = DappService.getPackage($scope.packageId);
      console.log('Package..=>', $scope.package);
      var escrow = $scope.package.gems;
      var pkg = $scope.package;

      $scope.getBalance = function() {
          console.log('Balance is :',DappService.getBalance());
        return DappService.getBalance();
      }


      $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Pick up',
            template: 'This will debit ' + escrow + ' BlockEx gems from your account and deposit them to the Smart Contract (Escrow)'
        });
        confirmPopup.then(function (res) {
             if(res) {
                updateBalanceForPickup(escrow);
                pkg.status = 'InTransit';
                DappService.updatePackage(pkg);
                $ionicScrollDelegate.$getByHandle('pkgDetailspage').scrollTop(true);
                toastr.success('Pickup added to Blockchain!','Transation successfully mined.');
                console.log('You are sure');
                } else {
                console.log('You are not sure');
                }
        });
      }


       $scope.confirmDelivery = function() {
            var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Delivery',
            template: 'This will transfer ' + pkg.gems + ' BlockEx gems from the Smart Contract (Escrow) to the carrier.'
        });
        confirmPopup.then(function (res) {
             if(res) {
                updateBalanceOnDelivery(pkg.gems);
                pkg.status = 'Delivered';
                DappService.updatePackage(pkg);
                $ionicScrollDelegate.$getByHandle('pkgDetailspage').scrollTop(true);
                toastr.success('Delivery updated on Blockchain!','Transation successfully mined.');
                } else {
                // console.log('You are not sure');
                }
        });
      }


    function updateBalanceForPickup(escrow) {
        var newBalance = DappService.getBalance() - parseInt(escrow);
        DappService.setBalance(newBalance);
        console.log('Balance set to: ', newBalance);

        var newSmartContractBalance = DappService.getSmartContractBalance() + parseInt(escrow);
        DappService.setSmartContractBalance(newSmartContractBalance);
        console.log('Smart Contract Balance set to: ', newSmartContractBalance);


        transferFundsOnBlockchain(web3.eth.accounts[1],DappService.getSmartContractAddress(),escrow);
    }

    function updateBalanceOnDelivery(amt1) {

        var amt = amt1*2;

        var newBalance = DappService.getBalance() + parseInt(amt);
        DappService.setBalance(newBalance);
        console.log('Balance set to: ', newBalance);

        var newSmartContractBalance = DappService.getSmartContractBalance() - parseInt(amt);
        DappService.setSmartContractBalance(newSmartContractBalance);
        console.log('Smart Contract Balance set to: ', newSmartContractBalance);

        transferFundsOnBlockchain(DappService.getSmartContractAddress(),web3.eth.accounts[1],amt);
    }

      function transferFundsOnBlockchain(fromAddr, toAddr , amt) {
          web3.eth.sendTransaction({from: fromAddr, to: toAddr , value: web3.toWei(amt, "ether")});
    }
});
