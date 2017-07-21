pragma solidity ^0.4.0;
contract BlockexGem {

    address public owner;
    mapping (address => uint) public balances;

    event Deposit(address _sender, uint amount);
    event NewPackageAdded(address _sender, uint amount);
    event PackagePicked(address _sender, uint amount);
    event PackageDelivered(address _sender, uint amount);


    function BlockexGem() {
        owner = msg.sender;
        balances[owner] = 10000;
        // balances[tx.origin] = 10000;
    }

    function addNewPackage(uint amount)  payable public returns (bool success) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[this] += amount;
        NewPackageAdded(msg.sender, amount);
        return true;
    }

    function pickupPackage(uint pkgAmt) payable public returns (bool success) {
            if (balances[msg.sender] < pkgAmt) return;
            balances[msg.sender] -= pkgAmt;
            balances[this] += pkgAmt;
            PackagePicked(msg.sender, pkgAmt);
            return true;
    }

    function deliverPackage(uint pkgAmt) payable public returns (bool success){
            uint payout = pkgAmt*2;
            balances[this] -= payout;
            balances[msg.sender] += payout;
            PackageDelivered(msg.sender,payout);
            return true;
    }

    function destroy() { // so funds not locked in contract forever
        if (msg.sender == owner) {
        suicide(owner); // send funds to owner
        }
    }

    function send(address receiver, uint amount) public returns (bool success) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Deposit(receiver, amount);
         return true;
    }

    function setBalance(address receiver, uint amount) public { 
        balances[receiver] = amount;
    }
    
    function queryBalance(address addr) public constant returns (uint balance) {
        return balances[addr];
    }

    function() payable {}
}