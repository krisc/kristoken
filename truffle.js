var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'noodle tomato frost spawn rather clarify three mask tomato ecology gas click';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
    	provider: function () {
    		return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/d5fb2c833a1541de993f89dc8cb5ad3f");
    	},
    	network_id: 3,
    	gas: 4000000
    }
  }
};
