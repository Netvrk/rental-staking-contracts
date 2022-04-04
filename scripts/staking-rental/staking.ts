// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const nft = "0xC88E18F8bc3f6F4CbA55e14439780563039ED4d5";

  const NFTStaking = await ethers.getContractFactory("NFTStaking");
  const escrow = await NFTStaking.deploy(nft);

  await escrow.deployed();

  console.log("NFTStaking deployed to:", escrow.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
