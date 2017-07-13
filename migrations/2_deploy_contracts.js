// var SimpleWallet = artifacts.require("./SimpleWallet.sol");
// module.exports = function(deployer) {
//   deployer.deploy(SimpleWallet);
// };
var BlockexGem = artifacts.require("./BlockexGem.sol");
module.exports = function(deployer) {
  deployer.deploy(BlockexGem);
};
