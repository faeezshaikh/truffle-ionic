
"use strict";
var app = angular.module("blockchainExpressDapp");


app.controller('MenuController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {
     BlockexGem.deployed().then(function(contract) {

        // For some reason contract.address for smart contract address is giving issues. Hence designating account 3 as escrow (smart contract) address
        // var contract_address = contract.address;
        var contract_address = web3.eth.accounts[3];
        console.log('Contract Address: ',  contract_address);

        DappService.setSmartContractAddress(contract_address);
        $scope.person1Addr = web3.eth.accounts[1];



        getBlockchainAddressBalance(contract_address,'Smart Contract');
        // contract.setBalance(contract_address,0);
        getBlockchainAddressBalance(contract_address,'Smart Contract');


        // Set Balance for Person1  (100 Eth)
        var thisAccountBalance = getBlockchainAddressBalance(web3.eth.accounts[1],'Person 1');
        DappService.setBalance(thisAccountBalance);


        // Printing Balance for Person2 (100 Eth)
        getBlockchainAddressBalance(web3.eth.accounts[2],'Person 2');


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

     function getBlockchainAddressBalance(address,nickname){
         var val = web3.eth.getBalance(address);
         var balance = web3.fromWei(val,'ether').toNumber()
         console.log('Blockchain Address :' + address + ' Nickname: ' + nickname +  ' ==>  Balance: ', balance );
         return balance;
    }

});
