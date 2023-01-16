# Hardhat Chainlink Demo Project

This project demonstrates a basic Hardhat Chainlink plugin use case. It comes with a sample contract and a script that deploys that contract.

Copy the `.env.example` file to a file named `.env`, and put your Private Key and [Alchemy key](https://www.alchemy.com/) like this:

```shell
GOERLI_RPC_URL="https://eth-goerli.g.alchemy.com/v2/YOUR_ALCHEMY_KEY_GOES_HERE"
PRIVATE_KEY="YOUR_PRIVATE_KEY_GOES_HERE"
```

Try running some of the following tasks:

```shell
npx hardhat run ./scripts/get-price.ts --network goerli
npx hardhat run ./scripts/deploy.ts --network goerli
```

To install the plugin in your project type:

```shell
npm install @chainlink/hardhat-chainlink

# or

yarn add @chainlink/hardhat-chainlink
```

Then import the plugin in your hardhat.config.js:

```js
require("@chainlink/hardhat-chainlink");
```

Or, if you are using TypeScript, in your hardhat.config.ts:

```ts
import "@chainlink/hardhat-chainlink";
```
