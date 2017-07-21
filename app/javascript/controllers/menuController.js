
"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('MenuController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {
     BlockexGem.deployed().then(function(instance) {

        web3.eth.defaultAccount = web3.eth.accounts[0];

        var contract = instance;
        DappService.setSmartContractInstance(contract);
        console.log('Contract Address: ',  contract.address);

        // web3.eth.sendTransaction({from: web3.eth.accounts[4], to: web3.eth.accounts[3] , value: web3.toWei(99, "ether")});
        DappService.setSmartContractAddress(contract.address);

        // $scope.person1Addr = web3.eth.accounts[1];


        contract.queryBalance(contract.address).then(function(res){
            console.log('Contract Balance BEFORE Adding Package: ', res.c[0]);
            DappService.setSmartContractBalance(res.c[0]);
        });
        contract.queryBalance(web3.eth.accounts[0]).then(function(res){
            console.log('Account Balance BEFORE Adding Package: ', res.c[0]);
            DappService.setBalance(res.c[0]);
        });

        $scope.appEvents = [];
        var events;

        // events = contract.allEvents({fromBlock:0,toBlock:'latest'});
        // events.watch(function(err, result) {
        //     $scope.appEvents.push(result);
        //     console.log('Pushing Event: ', result);
        //     $scope.$apply();
        // }) ;

        // $scope.$on('destroy',function() {
        //     events.stopWatching();
        //     console.log('EVENTS:' ,$scope.appEvents);
        // });

        

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


 

});
