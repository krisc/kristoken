var KrisToken = artifacts.require("KrisToken");
var KrisFaucet = artifacts.require("KrisFaucet");
// const web3 = new Web3(new Web3.providers.HttpProvider(urlOrEngine))
// var accounts = web3.eth_accounts;
// var accounts = web3.eth.getAccounts(console.log);

module.exports = function(deployer, network, accounts) {

	let owner = accounts[0];

	// deploy KrisToken first
	deployer.deploy(KrisToken, {from: owner}).then(function() {
		// then deploy KrisFaucet and pass the address of METoken
		// and the address of the owner of all the KT who will approve KrisFaucet
		return deployer.deploy(KrisFaucet, KrisToken.address, owner);
  	});
};