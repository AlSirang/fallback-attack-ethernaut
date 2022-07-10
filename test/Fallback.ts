import { expect } from "chai";
import { ethers } from "hardhat";

describe("Fallback", function () {
  let contract;

  beforeEach(async () => {
    contract = await ethers.getContractFactory("Fallback");

    contract.deploy();
  });

  it("should");
});
