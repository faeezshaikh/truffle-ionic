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



    $scope.friends = [          {id:1, name:'John', phone:'555-1276',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg'},
                         {id:2, name:'Mary', phone:'800-BIG-MARY',img:'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg'},
                         {id:3, name:'Mike', phone:'555-4321',img:'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png'},
                         {id:4, name:'Adam', phone:'555-5678',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg'},
                         {id:5, name:'Julie', phone:'555-8765',img:'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg'},
                         {id:6, name:'Juliette', phone:'555-5678',img:'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png'},
                          {id:7, name:'John', phone:'555-1276',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg'},
                         {id:8, name:'Mary', phone:'800-BIG-MARY',img:'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg'},
                         {id:9, name:'Mike', phone:'555-4321',img:'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png'},
                         {id:10, name:'Adam', phone:'555-5678',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg'},
                         {id:11, name:'Julie', phone:'555-8765',img:'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg'},
                         {id:12, name:'Juliette', phone:'555-5678',img:'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png'}];


});
