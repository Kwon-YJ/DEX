import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const alchemyApiKey: string | undefined = process.env.ALCHEMY_API;
if (!alchemyApiKey) {
  throw new Error("Please set your ALCHEMY_API in a .env file");
}

const sec_key: string | undefined = process.env.SEC_KEY;
if (!sec_key) {
  throw new Error("Please set your sec_key in a .env file");
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.7.6" },
      { version: "0.8.4" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: alchemyApiKey,
        blockNumber: 13909440,
      }
    },
    mainnet:{
      url: alchemyApiKey,
      accounts: [sec_key],
    },
  },
};

export default config;
