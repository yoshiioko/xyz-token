// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;


contract XYZ {
    string private _name;
    string private _symbol;

    constructor(string memory name_, string memory symbol_) {
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }
}