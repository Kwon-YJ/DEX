# Uniswap-Arbitrage-Simulation

Uniswap V3 and V2 example arbitrage calculation.


The Uniswap V3 simulation can be found in src/main.rs. The Uniswap V2 simulation can be found in src/bin/v2.rs.

We create structs to represent pools and a trader. We define and test functions to add, remove, and swap between pools and update both structs.\

For V2, The arbitrage logic is derived from the formula to calculate the amount received by swapping an asset into a pool.

For uniswap v2, with reserves X, Y, fee F, and amount in x, the formula to calculate the amount of asset y you recieve is

y = (F*Y*x) / (X + F \* x).

We calculate the amount of profit from a two-pool arbitrage by applying this formula through both pools and calculating it's difference from the amount initially sent.

For Uniswap V3, the formula is based off of the same principles but is made significantly more complex with the addition of banded liquidity.

To benchmark the non-blocking capabilities of the software, in main() we create two threads. In one thread, we update the pools by randomly adding and removing assets. In a simultaneous thread, we calculate the arbitrage opportunities through the two pools.

Running cargo test -- --nocapture or cargo run will demonstrate the ability to calculate arbitrage opportunities while updating the pool entries in a separate thread.

We see the usefulness and potential implications of this in a larger arbitrage-searching scenario, a pool can be updated by incoming mempool transactions without requiring the restart of an expensive optimal-arbitrage search function call. The only caveat is that if such a function call utilized a pool value that was updated before the arbitrage could be executed, the function call would be discarded. Good system design will likely terminate the search function call if previously calculated values are updated.
