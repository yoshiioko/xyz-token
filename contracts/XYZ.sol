// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;


contract XYZ {
    string private _name;
    string private _symbol;
    uint8 private _decimals;

    uint private _tokenSupply;

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
        _decimals = 18;
        _tokenSupply = 1_000_000;
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint) {
        return _tokenSupply;
    }
}