pragma solidity ^0.4.0;
contract BlockexGem {

    address minter;
    mapping (address => uint) balances;


    function BlockexGem() {
        minter = msg.sender;
    }

    function mint(address owner, uint amount) {
        if (msg.sender != minter) return;
        balances[owner] += amount;
    }

    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
    
    function queryBalance(address addr) constant returns (uint balance) {
        return balances[addr];
    }
}