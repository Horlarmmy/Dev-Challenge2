const { ethers } = require("hardhat");

async function main() {
  const Greeting = await ethers.deployContract("Greeting", []);
  console.log("Here")
  await Greeting.deployed();

  console.log(`Greeting Contract was deployed to ${Greeting.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// mumbai - const mumbaiContractAddr = "0xCd7d564e7a5BC540e1dbE9Fb55818da4D3580a59";
// swiss - 0x3F042A7cd5f7dE394bc74a1310E3BcF2eBB9Ac3C