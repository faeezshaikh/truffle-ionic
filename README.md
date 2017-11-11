

## Run the Project

On any OS you need Truffle

```
npm install -g truffle
```

and then **clone this repository**
```
git clone https://github.com/faeezshaikh/truffle-angular-dapp.git
```
and run

```
bower install
```

or

```
sudo bower install --allow-root
```

which installs the angular components.

and then run

```
npm install
```

which installs the node components.

Additionally you need to have a geth node running (or the ethereumjs-testrpc), then you can simply:

```
truffle migrate
```

and

```
truffle build
```

or

```
truffle serve
```

which opens an HTTP Server on http://localhost:8080


### Geth Attach

https://www.udemy.com/ethereum-developer/learn/v4/questions/1846724

On Windows its simply possible to do a `geth attach`, but on MacOS it seems that you need to provide the actual ipc file. `geth --datadir /media/user/sdcard/chaindata --ipcpath $HOME/.ethereum/geth.ipc console` which is a problem posed here: http://ethereum.stackexchange.com/questions/4472/port-30303-error-in-mist-when-i-run-geth-with-a-different-datadir


### Private Network
The way the private network is initialized changed in the past months and seems to keep changing. For better information on it, it is advised to directly see the correct instructions on:
https://github.com/ethereum/go-ethereum

_Usually_ it should work with:
```
geth init path/to/genesis.json --datadir=/path/to/some/folder
```


### Solidity Compilation Errors/Warnings
Solidity is in active maintenance and things change _all the time_! The code throughout the course was written for SolC 3.5, the current version (at the time this Readme was written) is 0.4.8.

Any Solidity Program can be "forced" to use another compiler version (older one) by using as _first line in your program_
`pragma solidity ^0.4.0;` for version 0.4.0, change it to whatever version you might need.

The code here is updated to work with solidity 0.4.8.




===

```
bower install --save driftyco/ionic-bower#v1.1.1 --allow-root
```

```
sudo bower install --save fontawesome --allow-root
```

For Font-awesome, include the fa.js script. Thats it.. No need for .css or .wof or any of font files


Spinners: https://codepen.io/ionic/pen/GgwVON

   <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>

Angular 1 / Ionic 1 Toast Msgs: https://github.com/Foxandxss/angular-toastr
   

   bower install angular-toastr



1. Alice adds New Pkg for Pickup
    $20 get deposited in the smart conract
    
    

2. Bob picksup a package for delivery
    $20 get deposited in the smart contract


3. Bob delivers the Package
    Bob gets back $40 from the smart contract


```
npm config set prefix /usr/local
npm install -g bower

```
