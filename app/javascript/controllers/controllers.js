"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('PackagesController', function ($scope, $ionicModal, $ionicScrollDelegate, toastr, DappService,$ionicPopup,$timeout) {



    BlockexGem.deployed().then(function(contract) {
        // $scope.contractBalanceInEther = web3.fromWei(web3.eth.getBalance(contract.address).toNumber(), "ether");
        // console.log('Raw Contract Balance: ', $scope.contractBalanceInEther);
        $scope.contract_address = contract.address;
        console.log('Contract Address: ', contract.address);

        $scope.person1Addr = web3.eth.accounts[1];
        $scope.person2Addr = web3.eth.accounts[2];


        // Set Balance for Smart Contract (0 Eth)
        var val = web3.eth.getBalance($scope.contract_address);
        var contract_balance = web3.fromWei(val,'ether').toNumber()
        console.log('Smart Contract Account :' + $scope.contract_address + ' balance: ', contract_balance );
        DappService.setSmartContractBalance(contract_balance);

        // Set Balance for Person1  (100 Eth)
        var val1 = web3.eth.getBalance(web3.eth.accounts[1]);
        var balance1 = web3.fromWei(val1,'ether').toNumber()
        console.log('Person 1 Account :' + web3.eth.accounts[1] + ' balance: ', balance1 );
        DappService.setBalance(balance1);


        // Set Balance for Person2 (100 Eth)
        var val2 = web3.eth.getBalance(web3.eth.accounts[2]);
        var balance2 = web3.fromWei(val2,'ether').toNumber()
        console.log('Person 2 Account :' + web3.eth.accounts[2] + ' balance: ', balance2 );

       // getAccountBalances();

            // contract.setBalance(web3.toWei(100000, "ether"), web3.eth.accounts[1], { from: web3.eth.accounts[0], gas: 200000 }).then(function () {
            //     console.log('Balance of 1st Person set to 10,000');
            //     $scope.transfer_success = true;
            //     $scope.$apply();
            // }).catch(function (error) {
            //     console.error(error);
            //     $scope.has_errors = error;
            //     $scope.$apply();
            // });
           
    });

    $scope.doSomething = function() {
        console.log('Sending Txn on Blockchain')
         web3.eth.sendTransaction({from: web3.eth.accounts[3], to: web3.eth.accounts[2], value: web3.toWei(9, "ether")});
    }

    function getAccountBalances() {


             var val = web3.eth.getBalance($scope.contract_address);
            var contract_balance = web3.fromWei(val,'ether').toNumber()
            console.log('Account :' + $scope.contract_address + ' balance: ', contract_balance );


             var val = web3.eth.getBalance(web3.eth.accounts[0]);
            var balance = web3.fromWei(val,'ether').toNumber()
            console.log('Account :' + web3.eth.accounts[0] + ' balance: ', balance );


            var val1 = web3.eth.getBalance(web3.eth.accounts[1]);
            var balance1 = web3.fromWei(val1,'ether').toNumber()
            console.log('Account :' + web3.eth.accounts[1] + ' balance: ', balance1 );


            var val2 = web3.eth.getBalance(web3.eth.accounts[2]);
            var balance2 = web3.fromWei(val2,'ether').toNumber()
            console.log('Account :' + web3.eth.accounts[2] + ' balance: ', balance2 );



            var val3 = web3.eth.getBalance(web3.eth.accounts[3]);
            var balance3 = web3.fromWei(val3,'ether').toNumber()
            console.log('Account :' + web3.eth.accounts[3] + ' balance: ', balance3 );

    }
   
    $scope.getBalance = function() {
       
        return DappService.getBalance();
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

    $scope.cancel = function() {
         $scope.modal.hide();
    }

    $scope.delete = function(pkg) {
        console.log('Deleting pkg',pkg);
        pkg.hidden = true;
        DappService.updatePackage(pkg);
    }
    $scope.form = { 
        'senderAddr':'',
        'senderPhone': '',
        'senderEmail': '',
        'receiverAddr':'',
        'recieverPhone': '',
        'recieverEmail': '',
        'gems':1,
        'days':20,
        'fragile':false,
        'confirm':false,
        'instructions':'',
        'img': 'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png'

    };


    // $scope.imgUrl = "https://dbiers.me/wp-content/uploads/2012/08/package-21.png";
    $scope.imgUrl = "https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png";

    $scope.onRangeChange = function () {
        // console.log('Changed:',$scope.form.gems);

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

    function updateBalance() {
        var newBalance = DappService.getBalance() - parseInt($scope.form.gems);
        DappService.setBalance(newBalance);
        console.log('Balance set to: ', newBalance);

        var newSmartContractBalance = DappService.getSmartContractBalance() + parseInt($scope.form.gems);
        DappService.setSmartContractBalance(newSmartContractBalance);
        console.log('Smart Contract Balance set to: ', newSmartContractBalance);
    }

    $scope.showPopup = function (cost) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Purchase',
            template: 'This will debit ' + $scope.form.gems + ' BlockEx gems from your account.'
        });
        confirmPopup.then(function (res) {
             if(res) {
                $scope.modal.hide();
                updateBalance();
                DappService.addPackage($scope.form);
                $ionicScrollDelegate.$getByHandle('packagesPage').scrollTop(true);
                toastr.success('Request added to Blockchain!','Transation successfully mined.');
                // $scope.apply(); // Bug --> Button not updating after Pick up.
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
            $scope.imgUrl ="http://animadomus.com/integration/img/gform-spinner.gif" ;

        $timeout( function(){
                // $scope.showSpinner = false;
                  $scope.imgUrl = "http://www.elllo.org/Assets/images/P0351/374-Marion-Package.jpg";
                  populateForm();

        }, 1000 );
           

        }
    }

    function populateForm() {


    $scope.form = { 
        'senderAddr':'123 Pine St. St. Louis MO 63101',
        'senderPhone': '314-984-9845',
        'senderEmail': 'faeez.shaikh@gmail.com',
        'receiverAddr': '9445 Potter Rd. Chicago IL 94423',
        'recieverPhone': '205-345-9545',
        'recieverEmail': 'john@gmail.com',
        'gems':1,
        'days':20,
        'fragile':false,
        'confirm':false,
        'instructions':'Please drop the package at the doorstep. Do not ring doorbell. Thanks!',
        'img': 'http://www.elllo.org/Assets/images/P0351/374-Marion-Package.jpg',
        'id': 0,
        'miles': 300,
        'status':'ready'
        // 'cost': 0 
    };

    

    }
});


/// TODO: Externalize file

app.controller('SmartContractController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {

    $scope.contractBalance = DappService.getSmartContractBalance();
    $scope.date = new Date();


    $scope.refreshContractBalance = function() {
        $scope.contractBalance = DappService.getSmartContractBalance();
        console.log('Refreshing Smart Contract Balance',$scope.contractBalance);
    }

});

app.controller("PackageDetailsController", function($scope,DappService,$stateParams,$ionicModal,$ionicPopup,$ionicScrollDelegate, toastr) {
    //   var policySelected = {};
    //   $scope.form = {'share' : 0};
    //   $scope.myCoverage = $scope.premiumRecvd = 0;

      $scope.packageId = $stateParams.id;
      $scope.package = DappService.getPackage($scope.packageId);
      console.log('Package..=>', $scope.package);
      var escrow = $scope.package.gems * 2;
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
                updateBalance(escrow);
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


    function updateBalance(escrow) {
        var newBalance = DappService.getBalance() - parseInt(escrow);
        DappService.setBalance(newBalance);
        console.log('Balance set to: ', newBalance);

        var newSmartContractBalance = DappService.getSmartContractBalance() + parseInt(escrow);
        DappService.setSmartContractBalance(newSmartContractBalance);
        console.log('Smart Contract Balance set to: ', newSmartContractBalance);
    }

    function updateBalanceOnDelivery(amt) {
        var newBalance = DappService.getBalance() + parseInt(amt);
        DappService.setBalance(newBalance);
        console.log('Balance set to: ', newBalance);

        var newSmartContractBalance = DappService.getSmartContractBalance() - parseInt(amt);
        DappService.setSmartContractBalance(newSmartContractBalance);
        console.log('Smart Contract Balance set to: ', newSmartContractBalance);
    }
});


app.controller('TransitController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {

    $scope.transitPackages = [];
    var allPackages = DappService.getPackages();
    for(i=0;i<allPackages.length;i++) {
        if(allPackages[i].status == 'InTransit') {
            $scope.transitPackages.push(allPackages[i]);
        }
    }
    console.log('Packages in Transit:', $scope.transitPackages);
 

});

