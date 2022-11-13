const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = require("hardhat");

describe("XYZ", function () {
  let xyz, signer;

  before("Deploy an instance of the contract first", async function () {
    const XYZ = await hre.ethers.getContractFactory("XYZ");
    xyz = await XYZ.deploy("XYZ Token", "XYZ");
    await xyz.deployed();

    [signer] = await ethers.provider.listAccounts();
  });

  it("Validate token name", async function () {
    expect(await xyz.name()).to.equal("XYZ Token");
  });

  it("Validate token symbol", async function () {
    expect(await xyz.symbol()).to.equal("XYZ");
  });
});
