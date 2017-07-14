pragma solidity ^0.4.0;
contract BlockexGem {

    address contract_addr;
    mapping (address => uint) balances;

    event Deposit(address _sender, uint amount);


    function BlockexGem() {
        contract_addr = msg.sender;
        // balances[contract_addr] = 10000;
        balances[tx.origin] = 10000;
    }

    // function mint(address owner, uint amount) {
    //     if (msg.sender != contract_addr) return;
    //     balances[owner] += amount;
    // }

    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Deposit(receiver, amount);
    }

    function setBalance(address receiver, uint amount) { 
        balances[receiver] = amount;
    }
    
    function queryBalance(address addr) constant returns (uint balance) {
        return balances[addr];
    }
}