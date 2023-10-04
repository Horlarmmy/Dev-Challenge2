const { ethers } = require("hardhat");

async function main() {
  const Greeting = await ethers.deployContract("Greeting", ["Hello World!!!"]);
  await Greeting.deployed();

  console.log(`Greeting Contract was deployed to ${Greeting.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// mumbai - 0x2ee311f666e18fD03b9b524d81b3053B5b182043
// swiss - 0x46Ae818CC50F3c524D0c8aa5Aa2907590A5F7d0c