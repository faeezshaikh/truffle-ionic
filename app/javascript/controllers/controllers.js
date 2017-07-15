
/// TODO: Externalize file

app.controller('MenuController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {
     BlockexGem.deployed().then(function(contract) {

        // For some reason contract.address for smart contract address is giving issues. Hence designating account 3 as escrow (smart contract) address
        // $scope.contract_address = contract.address;
        $scope.contract_address = web3.eth.accounts[3];
        console.log('Contract Address: ',  $scope.contract_address);
        $scope.person1Addr = web3.eth.accounts[1];



        getBlockchainAddressBalance($scope.contract_address,'Smart Contract');
        // contract.setBalance($scope.contract_address,0);
        getBlockchainAddressBalance($scope.contract_address,'Smart Contract');


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

/// TODO: Externalize file

app.controller('SmartContractController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {


    
    //  $scope.contractBalance = DappService.getSmartContractBalance();
    $scope.contractBalance = getSmartContractBalance();
    $scope.date = new Date();


    $scope.refreshContractBalance = function() {
        // $scope.contractBalance = DappService.getSmartContractBalance();
        $scope.contractBalance = getSmartContractBalance();
        console.log('Refreshing Smart Contract Balance',$scope.contractBalance);
    }

    function getSmartContractBalance() {
        //var smartContractAddress = $scope.contract_address;
         var smartContractAddress = web3.eth.accounts[3];
        var val = web3.eth.getBalance(smartContractAddress);
        var contract_balance = web3.fromWei(val,'ether').toNumber();
        console.log('Smart Contract Account :' + smartContractAddress + ' balance: ', contract_balance );
        return contract_balance;
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

