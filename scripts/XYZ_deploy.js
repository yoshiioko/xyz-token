const hre = require("hardhat");

async function main() {
  const XYZ = await hre.ethers.getContractFactory("XYZ");
  const xyz = await XYZ.deploy("XYZ Token", "XYZ");

  await xyz.deployed();

  console.log(`XYZ Token contract deployed to ${xyz.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitcode = 1;
});
