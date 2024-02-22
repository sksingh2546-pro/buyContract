// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DummyToken is ERC20 {
    constructor() ERC20("Trade", "T") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
