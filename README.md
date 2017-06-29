

## Run the Project

On any OS you need Truffle

```
npm install -g truffle
```

and then **clone this repository**
```
git clone https://github.com/tomw1808/truffle_eth_class1.git
```
and run

```
bower install
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

## Known Issues

### Error when running truffle test/migrate

If something like this pops up:
```
dependency_path = source.resolve_dependency_path(import_path, dependency_path);
```

or

```
/usr/lib/node_modules/truffle/node_modules/truffle-compile/profiler.js:120
        if (ancestors.length > 0) {
                     ^

TypeError: Cannot read property 'length' of undefined
    at walk_from (/usr/lib/node_modules/truffle/node_modules/truffle-compile/profiler.js:120:22)

```

then try to install truffle 3.1.9:

```
npm install -g truffle@3.1.9
```

### Error when installing truffle

Something like

 `... receive errors including "MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe".`

or

`... node_modules\truffle\node_modules\sha3\build\sha3.vcxproj(20,3): error MSB4019: The imported project "C:\Microsoft.Cpp.Default.props" was not found. Confirm that the path in the <Import> declaration is correct, and that the file exists on disk.".  `

When you have installed Visual Studio, make sure you have opened a c++ project once.

Then try `npm config set msvs_version 2015 --global` and in addition you can try to install the ms-build tools:
```
npm install --global --production windows-build-tools
```

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

