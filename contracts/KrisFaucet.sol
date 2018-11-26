pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract KrisFaucet {

	ERC20 public KrisToken;
	address public KrisOwner;

	// KrisFaucet constructor, provide the address of KrisToken contract and
	// the owner address we will be approved to transferFrom
	constructor(address _KrisToken, address _KrisOwner) public {

		// Initialize the KrisToken from the address provided
		KrisToken = ERC20(_KrisToken);
		KrisOwner = _KrisOwner;
	}

	function withdraw(uint withdraw_amount) public {

    	// Limit withdrawal amount to 10 MET
    	require(withdraw_amount <= 1000);

		// Use the transferFrom function of KrisToken
		KrisToken.transferFrom(KrisOwner, msg.sender, withdraw_amount);
    }

	// REJECT any incoming ether
	function () public payable { revert(); }

}
