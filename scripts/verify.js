const Hre = require("hardhat");

async function main() {
  await Hre.run("verify:verify", {
    //address of the Root tunnel
    address: "0x85e57dF94952D4fc915Ed66d6c6189c4D3fA648e",

    //Pass arguments as string and comma seprated values
    constructorArguments: [],
    //Path of your main contract.
    contract: "contracts/MockRouter/BuyContract.sol:BuyContract",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
