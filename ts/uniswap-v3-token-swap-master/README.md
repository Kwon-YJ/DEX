# Uniswap V3 Token Swap Example 

This repo does the following with hardhat's mainnet-forking:
- ETH -> WETH 
- WETH -> DAI (using Uniswap)

Note: Setup `.env` file with `ALCHEMY_API` variable set 

### Info

- run code with : `npx hardhat test`
- code file: `test/index.ts`
- contract from UniswapV3 examples: `contracts/Swap.sol`


- in env, ALCHEMY_API="https://eth-mainnet.g.alchemy.com/xxxxx" 
- in env, SEC_KEY = "xxxxx"
- run : npx hardhat test --network mainnet