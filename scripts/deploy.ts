import { ethers, chainlink } from "hardhat";

async function main() {
  // npx hardhat run ./scripts/deploy.ts --network goerli

  // NOTE: If you already have an active VRF Subscription, proceed to step 3

  // Step 1: Create a new VRF Subscription
  const vrfCoordinatorAddress = `0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D`;
  const { subscriptionId } = await chainlink.createVrfSubscription(
    vrfCoordinatorAddress
  );

  // Step 2: Fund VRF Subscription
  const linkTokenAddress = `0x326C977E6efc84E512bB9C30f76E30c160eD06FB`;
  const amountInJuels = ethers.BigNumber.from(`1000000000000000000`); // 1 LINK
  await chainlink.fundVrfSubscription(
    vrfCoordinatorAddress,
    linkTokenAddress,
    amountInJuels,
    subscriptionId
  );

  // Step 3: Deploy your smart contract
  const VRFv2ConsumerFactory = await ethers.getContractFactory("VRFv2Consumer");
  const VRFv2Consumer = await VRFv2ConsumerFactory.deploy(subscriptionId);
  await VRFv2Consumer.deployed();
  console.log("VRFv2Consumer deployed to:", VRFv2Consumer.address);

  // Step 4: Add VRF Consumer contract to your VRF Subscription
  await chainlink.addVrfConsumer(
    vrfCoordinatorAddress,
    VRFv2Consumer.address,
    subscriptionId
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
