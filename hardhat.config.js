require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-web3");
require("dotenv").config();

// dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // defaultNetwork: "matic",
  networks: {
    mumbai: {
      // url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_PVT_KEY}`,
      url: `${process.env.RPC}`,
      accounts: [`0x${process.env.PVTKEY}`],
    },
    ethereum: {
      // url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_PVT_KEY}`,
      url: `${process.env.ETHRPC}`,
      accounts: [`0x${process.env.PVTKEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY_POLYGON,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
