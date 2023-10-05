# Basic Storage Contract

This project demonstrates a contract with the following features:
- A single private state variable (you can choose between a number or a string)
- A function to set this variable with a new value that differs from the default value
- A public function to return the current value of the state variable

It was deployed to the Mumbai testnet and the Swisstronik testnet

Write a script that performs the following tasks for both networks:

Retrieves the value of the state variable (slot#0) from the deployed smart contract using the eth_getStorageAt() RPC method

### Deployed Contract Address
**Mumbai :** [0xCd7d564e7a5BC540e1dbE9Fb55818da4D3580a59](https://mumbai.polygonscan.com/address/0xcd7d564e7a5bc540e1dbe9fb55818da4d3580a59) 

**Swisstronik :** [0x3F042A7cd5f7dE394bc74a1310E3BcF2eBB9Ac3C](https://explorer-evm.testnet.swisstronik.com/address/0x3F042A7cd5f7dE394bc74a1310E3BcF2eBB9Ac3C) 


### Build

To compile contracts, use following command:
```sh 
npm run compile
```

### Testing & Deployment

<b>NOTE</b>: tests are not compatible with hardhat network / ganache, so you have to start Swisstronik local node or use public testnet

Create `.env` file from example
```sh
cp example.env .env
```
Add `PRIVATE_KEY` in `.env` with actual private key to interact with network. If you're using other network than local testnet you also should replace `url` in `hardhat.config.ts`

To run tests, use following command:

```sh
npm run test
```

To deploy contract to **Swisstronik**, use check `scripts/deploy.js` script and use following command:
```sh
npm run deploy
```

To deploy contract to **Mumbai**, use check `scripts/deploy.js` script and use following command:
```sh
npx hardhat run scripts/deploy.js
```


To run the `getMessge.js` script, replace the both networks contract address and
```sh
npx hardhat run scripts/getMessage.js
```
You should get a similar response:

```
Getting Storage slot from Mumbai:
0x48656c6c6f20576f726c6421212100000000000000000000000000000000001c
Data type is:  string
Hello World!!!
Getting Storage slot from Swisstronik:
0x1ac0a946c50b5a6cbdaef7d0a457a3a6c8ab0b5ac89407eccee3f83d2d50aaa8
Data type is:  string
```