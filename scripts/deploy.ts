import { ethers } from "hardhat";

async function main() {
  const initialBalance = ethers.utils.parseEther("1");

  const Fallback = await ethers.getContractFactory("Fallback");
  const fallback = await Fallback.deploy({ value: initialBalance });

  await fallback.deployed();

  console.log("Fallback with 1 ETH deployed to:", fallback.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
