const dotenv = require("dotenv");
const { ethers } = require("ethers");

dotenv.config();

const swisstronikRPC = "https://json-rpc.testnet.swisstronik.com/";
const mumbaiRPC = "https://polygon-mumbai-bor.publicnode.com";
const mumbaiContractAddr = "0xCd7d564e7a5BC540e1dbE9Fb55818da4D3580a59";
const swisstronikContractAddr = "0x3F042A7cd5f7dE394bc74a1310E3BcF2eBB9Ac3C"


const getMessageWithProvider = async (provider, providerName, contractAddr) => {
  try {
    const message = await provider.getStorageAt(contractAddr, '0x0');

    console.log(`Getting Storage slot from ${providerName}:`);
    console.log(message);
    console.log('Data type is: ', typeof (message));
    const decodedString = ethers.utils.toUtf8String(message)
    console.log('Decoded Data:', decodedString)
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const providerSwisstronik = ethers.getDefaultProvider(swisstronikRPC);
  const providerMumbai = ethers.getDefaultProvider(mumbaiRPC);

  await getMessageWithProvider(providerMumbai, "Mumbai", mumbaiContractAddr);
  await getMessageWithProvider(providerSwisstronik, "Swisstronik", swisstronikContractAddr);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});