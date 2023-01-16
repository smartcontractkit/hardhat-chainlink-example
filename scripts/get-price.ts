import { chainlink } from "hardhat";

async function main() {
    // npx hardhat run ./scripts/get-price.ts --network goerli

    console.log("Denominations Library test");
    console.log("BTC:", chainlink.denominations.BTC);
    console.log("ETH:", chainlink.denominations.ETH);
    console.log("EUR:", chainlink.denominations.EUR);
    console.log("GBP:", chainlink.denominations.GBP);
    console.log("USD:", chainlink.denominations.USD);

    const ethUsdGoerliAggregator: string = `0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e`;
    const ethPrice = await chainlink.getLatestPrice(ethUsdGoerliAggregator);
    console.log("ETH/USD Price:", ethPrice);

    const description = await chainlink.getPriceFeedDescription(ethUsdGoerliAggregator);
    console.log("ETH/USD Price Feed Description:", description);

    const decimals = await chainlink.getPriceFeedDecimals(ethUsdGoerliAggregator);
    console.log("ETH/USD Price Feed Number of Decimals:", decimals);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
